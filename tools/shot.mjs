import { mkdirSync, writeFileSync } from 'node:fs'

const [, , url = 'http://localhost:5173/', outDir = '.preview', width = '1440', height = '1000', mode = 'full', lang = '', clickSel = ''] =
  process.argv

const ENDPOINT = `http://127.0.0.1:${process.env.CDP_PORT || 9222}`

async function pickTarget() {
  const list = await fetch(`${ENDPOINT}/json/list`).then((r) => r.json())
  const page = list.find((item) => item.type === 'page')
  if (!page) throw new Error('no page target found')
  return page.webSocketDebuggerUrl
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(wsUrl)
    const pending = new Map()
    let nextId = 1
    const listeners = new Map()

    socket.addEventListener('open', () =>
      resolve({
        send(method, params = {}) {
          const id = nextId++
          socket.send(JSON.stringify({ id, method, params }))
          return new Promise((res, rej) => pending.set(id, { res, rej }))
        },
        once(event) {
          return new Promise((res) => listeners.set(event, res))
        },
        close: () => socket.close(),
      }),
    )

    socket.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id)
        pending.delete(msg.id)
        msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result)
      } else if (msg.method && listeners.has(msg.method)) {
        listeners.get(msg.method)(msg.params)
        listeners.delete(msg.method)
      }
    })

    socket.addEventListener('error', reject)
  })
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const client = await connect(await pickTarget())
await client.send('Page.enable')
await client.send('Runtime.enable')
await client.send('Emulation.setDeviceMetricsOverride', {
  width: Number(width),
  height: Number(height),
  deviceScaleFactor: 1,
  mobile: Number(width) < 700,
})

const loaded = client.once('Page.loadEventFired')
await client.send('Page.navigate', { url })
await loaded
await sleep(1400)

if (lang === 'en' || lang === 'zh') {
  await client.send('Runtime.evaluate', { expression: `localStorage.setItem('portfolio.lang', '${lang}')` })
  const reloaded = client.once('Page.loadEventFired')
  await client.send('Page.reload')
  await reloaded
  await sleep(1400)
}

await client.send('Runtime.evaluate', {
  expression: `document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-visible')); true`,
})
await sleep(900)

if (clickSel) {
  await client.send('Runtime.evaluate', {
    expression: `(() => { const el = document.querySelector(${JSON.stringify(clickSel)}); if (el) el.click(); return !!el })()`,
  })
  await sleep(800)
}

const { result } = await client.send('Runtime.evaluate', {
  expression: `JSON.stringify((() => {
    const rect = (selector) => {
      const node = document.querySelector(selector)
      if (!node) return null
      const box = node.getBoundingClientRect()
      return { left: Math.round(box.left), width: Math.round(box.width), scrollWidth: node.scrollWidth }
    }
    let worst = null
    document.querySelectorAll('body *').forEach((node) => {
      const box = node.getBoundingClientRect()
      if (box.width > 0 && box.right > document.documentElement.clientWidth + 1) {
        if (!worst || box.right > worst.right) {
          worst = { right: Math.round(box.right), tag: node.tagName, cls: String(node.className).slice(0, 60), width: Math.round(box.width) }
        }
      }
    })
    return {
      viewport: window.innerWidth,
      docClientWidth: document.documentElement.clientWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      heroInner: rect('.hero-inner'),
      heroFirstBlock: rect('.hero-inner > .hero-block:first-child'),
      stats: rect('.hero-stats'),
      aboutParagraph: rect('.about-copy p'),
      section: rect('.section'),
      headerInner: rect('.header-inner'),
      overflowingElement: worst,
      sections: [...document.querySelectorAll('section, footer')].map((node) => ({
        id: node.id || node.className,
        top: Math.round(node.getBoundingClientRect().top + window.scrollY),
        height: Math.round(node.getBoundingClientRect().height),
      })),
    }
  })())`,
  returnByValue: true,
})

const report = JSON.parse(result.value)
console.log(JSON.stringify(report, null, 2))

mkdirSync(outDir, { recursive: true })
writeFileSync(`${outDir}/report-${width}.json`, JSON.stringify(report, null, 2))

async function shoot(name, clip) {
  const shot = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, scale: 1, ...clip },
  })
  writeFileSync(`${outDir}/${name}.png`, Buffer.from(shot.data, 'base64'))
  console.log('wrote', `${outDir}/${name}.png`, clip.width, 'x', clip.height)
}

if (mode === 'full') {
  await shoot(`full-${width}`, { x: 0, y: 0, width: Number(width), height: report.scrollHeight })
} else {
  for (const section of report.sections) {
    const safe = String(section.id).replace(/[^a-zA-Z0-9_-]/g, '_')
    await shoot(`${width}-${safe}`, { x: 0, y: section.top, width: Number(width), height: section.height })
  }
}

client.close()
