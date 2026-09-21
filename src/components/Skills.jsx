import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { useI18n } from '../i18n.jsx'

function Stars({ level }) {
  return (
    <span className="stars" aria-label={`${level}/5`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <i key={step} className={step <= level ? 'is-on' : ''} aria-hidden="true" />
      ))}
    </span>
  )
}

export default function Skills() {
  const { t } = useI18n()

  return (
    <Section id="skills" label={t.skills.label} title={t.skills.title} intro={t.skills.intro}>
      <div className="skills-grid">
        {t.skills.groups.map((group, index) => (
          <Reveal
            key={group.title}
            className={group.kind === 'concept' ? 'skill-group is-concept' : 'skill-group'}
            delay={index * 50}
          >
            <p className="skill-group-title">{group.title}</p>
            {group.desc && <p className="skill-group-desc">{group.desc}</p>}
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="skill-name">{item.name}</span>
                  {item.level ? <Stars level={item.level} /> : null}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
