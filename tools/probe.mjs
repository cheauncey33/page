const ENDPOINT = `http://127.0.0.1:${process.env.CDP_PORT || 9222}`
const url = process.argv[2] || 'http://localhost:5173/'

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
  } else if (msg.method === 'Runtime.consoleAPICalled') {
    logs.push('[' + msg.params.type + '] ' + msg.params.args.map((a) => a.value ?? a.description ?? a.type).join(' '))
  } else if (msg.method === 'Runtime.exceptionThrown') {
    logs.push('[exception] ' + (msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text))
  }
})

const send = (method, params = {}) => {
  const id = nextId++
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((res) => pending.set(id, { res }))
}

await send('Runtime.enable')
await send('Page.enable')
await send('Page.navigate', { url })
await new Promise((r) => setTimeout(r, 2500))

const { result } = await send('Runtime.evaluate', {
  expression: `JSON.stringify({
    title: document.title,
    rootChildren: document.getElementById('root')?.children.length ?? -1,
    sections: [...document.querySelectorAll('section, footer')].map(n => n.id || n.className),
    docH: document.documentElement.scrollHeight,
    iconButtons: document.querySelectorAll('.header-actions .icon-button').length,
    chips: [...document.querySelectorAll('.filter-chip')].map(b => b.textContent.trim()),
    cards: document.querySelectorAll('.project-card').length,
  })`,
  returnByValue: true,
})
console.log(result.value)
console.log('--- logs ---')
console.log(logs.slice(0, 20).join('\n') || '(none)')
socket.close()
