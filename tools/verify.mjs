import { mkdirSync, writeFileSync } from 'node:fs'

const ENDPOINT = `http://127.0.0.1:${process.env.CDP_PORT || 9222}`
const [, , url = 'http://localhost:5173/', outDir = '.preview/verify', width = '1440', lang = 'zh'] = process.argv

const list = await fetch(`${ENDPOINT}/json/list`).then((r) => r.json())
const page = list.find((item) => item.type === 'page')
const socket = new WebSocket(page.webSocketDebuggerUrl)
const pending = new Map()
const logs = []
let nextId = 1

await new Promise((res, rej) => {
  socket.addEventListener('open', res)
  socket.addEventListener('error', rej)
})

socket.addEventListener('message', (event) => {
  const msg = JSON.parse(event.data)
  if (msg.id && pending.has(msg.id)) {
    const { res } = pending.get(msg.id)
    pending.delete(msg.id)
    res(msg.result)
  } else if (msg.method === 'Runtime.exceptionThrown') {
    logs.push('[exception] ' + (msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text))
  }
})

const send = (method, params = {}) => {
  const id = nextId++
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((res) => pending.set(id, { res }))
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const evaluate = async (expression, awaitPromise = false) => {
  const { result } = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise })
  return result.value
}

mkdirSync(outDir, { recursive: true })

await send('Page.enable')
await send('Runtime.enable')
// 无头模式下窗口没有焦点，剪贴板 API 会直接失败；开启焦点模拟才能验证复制行为
await send('Emulation.setFocusEmulationEnabled', { enabled: true })
await send('Browser.grantPermissions', {
  origin: new URL(url).origin,
  permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
})
await send('Emulation.setDeviceMetricsOverride', {
  width: Number(width),
  height: 1000,
  deviceScaleFactor: 1,
  mobile: Number(width) < 700,
})

const loaded = new Promise((res) => socket.addEventListener('message', function onMsg(e) {
  const m = JSON.parse(e.data)
  if (m.method === 'Page.loadEventFired') res()
}))
await send('Page.navigate', { url })
await loaded
await sleep(1500)

if (lang === 'en' || lang === 'zh') {
  await evaluate(`localStorage.setItem('portfolio.lang', '${lang}')`)
  const reloaded = new Promise((res) => socket.addEventListener('message', function onMsg(e) {
    const m = JSON.parse(e.data)
    if (m.method === 'Page.loadEventFired') res()
  }))
  await send('Page.reload')
  await reloaded
  await sleep(1500)
}

await evaluate(`document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-visible')); true`)
await sleep(700)

async function shoot(name, clip) {
  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, scale: 1, ...clip },
  })
  writeFileSync(`${outDir}/${name}.png`, Buffer.from(shot.data, 'base64'))
  console.log('wrote', name, clip.width, 'x', clip.height)
}

// 1) header (sticky, scrolled)
await evaluate(`window.scrollTo(0, 900); true`)
await sleep(600)
await shoot('header', { x: 0, y: 0, width: Number(width), height: 120 })

// 2) switch to the second project
await evaluate(`window.scrollTo(0, 0); true`)
await sleep(400)
const chipInfo = await evaluate(`(() => {
  const chips = [...document.querySelectorAll('.filter-chip')]
  chips[1]?.click()
  return JSON.stringify(chips.map((c) => c.textContent.trim()))
})()`)
await sleep(800)
const workRect = await evaluate(`JSON.stringify((() => {
  const s = document.getElementById('work')
  const b = s.getBoundingClientRect()
  return { top: Math.round(b.top + window.scrollY), height: Math.round(b.height) }
})())`)
const wr = JSON.parse(workRect)
await shoot('work-2', { x: 0, y: wr.top, width: Number(width), height: wr.height })
console.log('chips:', chipInfo)

// 3) phone icon -> toast
const toastInfo = await evaluate(`(async () => {
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 400))
  const buttons = [...document.querySelectorAll('.header-actions .icon-button')]
  const labels = buttons.map((b) => b.getAttribute('aria-label'))
  buttons[1].click()
  await new Promise((r) => setTimeout(r, 600))
  const toast = document.querySelector('.toast')
  const report = {
    labels,
    toastText: toast ? toast.textContent.trim() : null,
    toastRect: toast ? JSON.stringify(toast.getBoundingClientRect()) : null,
    headerRight: Math.round(document.querySelector('.header-inner').getBoundingClientRect().right),
  }
  return JSON.stringify(report)
})()`, true)
console.log('toast:', toastInfo)
const viewportShot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
writeFileSync(`${outDir}/toast-viewport.png`, Buffer.from(viewportShot.data, 'base64'))
console.log('wrote toast-viewport')
await sleep(2200)
const gone = await evaluate(`!!document.querySelector('.toast')`)
console.log('toast still present after 2.5s:', gone)

console.log('exceptions:', logs.length ? logs.join('\n') : '(none)')
socket.close()
