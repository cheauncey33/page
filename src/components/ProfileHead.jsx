import { profile, resumePath } from '../content.js'
import { useI18n } from '../i18n.jsx'
import { Arrow, Document, GithubMark, Layers } from './icons.jsx'

function SkillTags({ items }) {
  return (
    <span className="profile-skill-tags">
      {items.map((item) => <span key={item}>{item}</span>)}
    </span>
  )
}

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
          <div className="profile-identity">
            <div className="profile-title-row">
              <h1 className="profile-name">
                {lang === 'zh' ? profile.nameZh : profile.nameEn}
                <span className="profile-name-alt">{lang === 'zh' ? profile.nameEn : profile.nameZh}</span>
              </h1>
              <p className="profile-age">
                <span className="profile-age-label">{t.head.ageLabel}</span>
                <span className="profile-age-value">{t.head.ageValue}</span>
              </p>
            </div>
          </div>

          <ol className="education-list">
            {t.head.education.map((item) => (
              <li key={item.school}>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-school">{item.school}</p>
                <p className="edu-major">{item.major}</p>
                <p className="edu-date">{item.date}</p>
              </li>
            ))}
          </ol>

          <div className="profile-meta-grid">
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
            </div>
          </div>
        </div>

        <div className="profile-side">
          <div className="profile-target">
            <p className="profile-target-label">{t.head.targetLabel}</p>
            <p className="profile-target-value">{t.head.targetValue}</p>
            <p className="profile-target-note">{t.head.targetNote}</p>
          </div>

          <div className="profile-aside profile-skills">
            <p className="profile-aside-label">{t.skills.title}</p>
            <ul className="profile-skill-groups">
              {t.skills.groups.map((group) => (
                <li key={group.title}>
                  <span className="profile-skill-group-title">{group.title}</span>
                  {group.familiar ? (
                    <div className="profile-skill-levels">
                      <p><strong>{t.skills.proficientLabel}</strong><SkillTags items={group.items} /></p>
                      <p className="is-familiar"><strong>{t.skills.familiarLabel}</strong><SkillTags items={group.familiar} /></p>
                    </div>
                  ) : (
                    <SkillTags items={group.items} />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="profile-brief-grid">
            <div className="profile-aside profile-brief">
              <p className="profile-aside-label">{t.head.internshipLabel}</p>
              <dl className="profile-brief-list">
                <div>
                  <dt>{t.head.internship.date}</dt>
                  <dd>
                    <strong>{t.head.internship.company}</strong>
                    <span>{t.head.internship.role}</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="profile-aside profile-brief">
              <p className="profile-aside-label">{t.head.projectsLabel}</p>
              <ul className="profile-brief-list">
                {t.head.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
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
