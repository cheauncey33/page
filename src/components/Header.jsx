import { useEffect, useRef, useState } from 'react'
import { profile, resumePath } from '../content.js'
import { useI18n } from '../i18n.jsx'
import { copyText } from '../lib/copy.js'
import { Check, GithubMark, Mail, Phone } from './icons.jsx'

const navIds = ['intro', 'internship', 'work']
const TOAST_DURATION = 1900

export default function Header() {
  const { lang, toggleLang, name, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const links = [
    ['intro', t.nav.intro],
    ['internship', t.nav.internship],
    ['work', t.nav.work],
  ]

  const handleNavClick = () => setMenuOpen(false)

  const flashToast = () => {
    window.clearTimeout(toastTimer.current)
    setToast(true)
    toastTimer.current = window.setTimeout(() => setToast(false), TOAST_DURATION)
  }

  const copyValue = async (value, fallbackHref) => {
    const ok = await copyText(value)
    if (!ok) {
      window.location.href = fallbackHref
      return
    }
    flashToast()
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={handleNavClick} aria-label={name}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="visually-hidden">{name}</span>
        </a>

        <nav className="header-nav" aria-label="primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={handleNavClick}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="lang-switch" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'zh' ? 'is-active' : ''}>中</span>
            <span className="lang-divider" aria-hidden="true">/</span>
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
          </button>
          <a className="ghost-button header-resume" href={resumePath} download>
            {t.head.resumeBtn}
          </a>

          <a
            className="icon-button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            title={`${t.head.githubActionLabel} · ${profile.githubLabel}`}
            aria-label={`${t.head.githubActionLabel} · ${profile.githubLabel}`}
          >
            <GithubMark className="icon fill-icon" />
          </a>

          <button
            type="button"
            className="icon-button"
            onClick={() => copyValue(profile.phone, `tel:${profile.phone}`)}
            title={`${t.head.phoneActionLabel} · ${profile.phone}`}
            aria-label={`${t.head.phoneActionLabel} · ${profile.phone}`}
          >
            <Phone />
          </button>

          <button
            type="button"
            className="icon-button"
            onClick={() => copyValue(profile.email, `mailto:${profile.email}`)}
            title={`${t.head.emailActionLabel} · ${profile.email}`}
            aria-label={`${t.head.emailActionLabel} · ${profile.email}`}
          >
            <Mail />
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={handleNavClick}>
            {label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={handleNavClick}>
          {profile.email}
        </a>
      </div>

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <Check className="icon small toast-icon" />
          <span>{t.head.copied}</span>
        </div>
      )}
    </header>
  )
}
