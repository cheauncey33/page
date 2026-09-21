import { profile } from '../content.js'
import { useI18n } from '../i18n.jsx'
import { Arrow } from './icons.jsx'

export default function Footer() {
  const { lang, t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="brand-mark" aria-hidden="true" />
          <p>
            <strong>{lang === 'zh' ? profile.nameZh : profile.nameEn}</strong>
            <span>{t.hero.role}</span>
          </p>
        </div>

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.source} target="_blank" rel="noreferrer">
            {t.footer.source}
          </a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>

        <div className="footer-right">
          <span>{t.footer.rights}</span>
          <span>{profile.updated}</span>
          <a className="back-to-top" href="#top">
            {t.footer.backToTop} <Arrow direction="up" className="icon small" />
          </a>
        </div>
      </div>
    </footer>
  )
}
