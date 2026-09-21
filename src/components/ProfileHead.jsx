import { profile, resumePath } from '../content.js'
import { useI18n } from '../i18n.jsx'
import { Arrow, Document, GithubMark, Layers } from './icons.jsx'

export default function ProfileHead() {
  const { lang, t } = useI18n()

  const links = [
    { key: 'github', href: profile.github, label: t.head.githubLabel, Icon: GithubMark, external: true },
    { key: 'portfolio', href: '#work', label: t.head.portfolioLabel, Icon: Layers, external: false },
    { key: 'resume', href: resumePath, label: t.head.resumeLabel, Icon: Document, external: false, download: true },
  ]

  return (
    <section className="profile-head" id="top" aria-label={lang === 'zh' ? '基本信息' : 'Profile'}>
      <div className="profile-head-inner">
        <div className="profile-primary">
          <p className="profile-eyebrow">{t.head.eyebrow}</p>
          <h1 className="profile-name">
            {lang === 'zh' ? profile.nameZh : profile.nameEn}
            <span className="profile-name-alt">{lang === 'zh' ? profile.nameEn : profile.nameZh}</span>
          </h1>

          <dl className="profile-facts">
            <div>
              <dt>{t.head.eduLabel}</dt>
              <dd>
                {t.head.eduValue}
                <span className="fact-note">{t.head.eduNote}</span>
              </dd>
            </div>
            <div className="fact-compact">
              <dt>{t.head.ageLabel}</dt>
              <dd>{t.head.ageValue}</dd>
            </div>
            <div>
              <dt>{t.head.bachelorLabel}</dt>
              <dd>
                {t.head.bachelorValue}
                <span className="fact-note">{t.head.bachelorNote}</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="profile-side">
          <div className="profile-target">
            <p className="profile-target-label">{t.head.targetLabel}</p>
            <p className="profile-target-value">{t.head.targetValue}</p>
            <p className="profile-target-note">{t.head.targetNote}</p>
          </div>

          <div className="profile-aside">
            <p className="profile-aside-label">{t.head.campusLabel}</p>
            <ul className="profile-aside-list">
              {t.head.campus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="profile-aside">
            <p className="profile-aside-label">{t.head.interestLabel}</p>
            <ul className="profile-aside-tags">
              {t.head.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="profile-aside-note">{t.head.interestNote}</p>
          </div>
        </div>

        <ul className="profile-links">
          {links.map(({ key, href, label, Icon, external, download }) => (
            <li key={key}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                download={download ? '' : undefined}
              >
                <Icon className={`icon small ${Icon === GithubMark ? 'fill-icon' : ''}`.trim()} />
                <span>{label}</span>
                {download ? (
                  <Arrow className="icon small link-arrow" direction="down" />
                ) : (
                  <Arrow className="icon small link-arrow" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
