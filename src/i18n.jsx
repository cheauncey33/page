import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { locales, profile } from './content.js'

const STORAGE_KEY = 'portfolio.lang'
const I18nContext = createContext(null)

function readInitialLang() {
  if (typeof window === 'undefined') return 'zh'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh' || saved === 'en') return saved
  return (window.navigator.language || 'zh').toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

function applyDocumentMeta(lang) {
  if (typeof document === 'undefined') return
  const meta = locales[lang].meta
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  document.title = meta.title
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', meta.description)
  const keywords = document.querySelector('meta[name="keywords"]')
  if (keywords) keywords.setAttribute('content', meta.keywords)
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', meta.title)
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', meta.description)
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    applyDocumentMeta(lang)
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(next === 'en' ? 'en' : 'zh')
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'zh' ? 'en' : 'zh'))
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: locales[lang],
      name: lang === 'zh' ? profile.nameZh : profile.nameEn,
    }),
    [lang, setLang, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
