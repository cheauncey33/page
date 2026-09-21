/**
 * 复制文本到剪贴板。
 * 优先用异步 Clipboard API；在无焦点、权限被拒或非安全上下文时，
 * 退回 textarea + execCommand 的同步方案，最后才返回失败。
 * @returns {Promise<boolean>} 是否复制成功
 */
export async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      /* 继续尝试兜底方案 */
    }
  }

  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.top = '-1000px'
    area.style.left = '-1000px'
    area.style.opacity = '0'
    document.body.appendChild(area)

    const selection = document.getSelection()
    const previousRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

    area.select()
    area.setSelectionRange(0, text.length)
    const ok = document.execCommand('copy')

    document.body.removeChild(area)
    if (selection && previousRange) {
      selection.removeAllRanges()
      selection.addRange(previousRange)
    }
    return ok
  } catch {
    return false
  }
}
