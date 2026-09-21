/**
 * 生成 1200x630 的社交分享图（public/og-image.png）。
 *
 * 用无头 Chrome 渲染一张 HTML 卡片再截图——比 Pillow 手绘更接近站点真实排版，
 * 而且系统里没装 Pillow 也能跑。需要先有一个开了调试端口的 Chrome（见 _snap.py）。
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ENDPOINT = `http://127.0.0.1:${process.env.CDP_PORT || 9222}`
const W = 1200
const H = 630

const stats = [
  ['366+', 'tx/s'],
  ['2.1k', 'QPS'],
  ['87%', 'TOP 10'],
  ['100%', 'completion'],
]

const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8" /><style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  body {
    font-family: -apple-system, 'Segoe UI Variable Text', 'Segoe UI', 'PingFang SC',
      'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
    background:
      radial-gradient(760px 520px at 78% -14%, rgba(0, 102, 204, 0.1), transparent 68%),
      #ffffff;
    color: #1d1d1f;
    padding: 76px 80px 58px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
  }
  .eyebrow { display: flex; align-items: center; gap: 12px; font-size: 21px; color: #6e6e73; letter-spacing: .02em; }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: #0066cc; }
  h1 { margin-top: 22px; font-size: 84px; font-weight: 600; letter-spacing: -0.03em; line-height: 1; }
  .role { margin-top: 26px; font-size: 28px; font-weight: 600; color: #0066cc; letter-spacing: .02em; }
  .divider { height: 1px; background: rgba(0, 0, 0, 0.1); }
  .stats { display: flex; gap: 60px; padding: 30px 0 28px; }
  .stat b { display: block; font: 600 44px/1 ui-monospace, 'SF Mono', Consolas, monospace; color: #0066cc; letter-spacing: -0.02em; }
  .stat span { display: block; margin-top: 8px; font: 20px ui-monospace, 'SF Mono', Consolas, monospace; color: #6e6e73; }
  .foot { display: flex; gap: 16px; font: 20px ui-monospace, 'SF Mono', Consolas, monospace; color: #6e6e73; }
  .foot i { font-style: normal; opacity: .5; }
</style></head>
<body>
  <header>
    <div class="eyebrow"><span class="dot"></span>WUHAN UNIVERSITY · MSC CANDIDATE</div>
    <h1>张雨豪</h1>
    <div class="role">BACKEND &amp; AI APPLICATION ENGINEER</div>
  </header>
  <footer>
    <div class="divider"></div>
    <div class="stats">
      ${stats.map(([v, u]) => `<div class="stat"><b>${v}</b><span>${u}</span></div>`).join('\n      ')}
    </div>
    <div class="foot"><span>cheauncey@163.com</span><i>·</i><span>github.com/cheauncey33</span><i>·</i><span>cheauncey.me</span></div>
  </footer>
</body></html>`

const tmpFile = resolve(ROOT, '.preview', 'og.html')
mkdirSync(dirname(tmpFile), { recursive: true })
writeFileSync(tmpFile, html)

async function pickTarget() {
  const list = await fetch(`${ENDPOINT}/json/list`).then((r) => r.json())
  const page = list.find((item) => item.type === 'page')
  if (!page) throw new Error('no page target')
  return page.webSocketDebuggerUrl
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(wsUrl)
    const pending = new Map()
    let nextId = 1
    socket.addEventListener('open', () =>
      resolve({
        send(method, params = {}) {
          const id = nextId++
          socket.send(JSON.stringify({ id, method, params }))
          return new Promise((res, rej) => pending.set(id, { res, rej }))
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
      }
    })
    socket.addEventListener('error', reject)
  })
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const client = await connect(await pickTarget())
await client.send('Page.enable')
await client.send('Emulation.setDeviceMetricsOverride', {
  width: W,
  height: H,
  deviceScaleFactor: 1,
  mobile: false,
})
await client.send('Page.navigate', { url: `file:///${tmpFile.replace(/\\/g, '/')}` })
await sleep(1500)
await client.send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true })
await sleep(300)

const shot = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
const out = resolve(ROOT, 'public', 'og-image.png')
writeFileSync(out, Buffer.from(shot.data, 'base64'))
console.log('wrote', out, W, 'x', H)
client.close()
