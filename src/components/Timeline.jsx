import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { useI18n } from '../i18n.jsx'

export default function Timeline() {
  const { t } = useI18n()

  return (
    <Section id="timeline" label={t.timeline.label} title={t.timeline.title} intro={t.timeline.intro}>
      <div className="timeline-layout">
        <Reveal className="timeline-track">
          <article className="timeline-item">
            <span className="timeline-date">{t.timeline.work.date}</span>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-body">
              <p className="timeline-tag">{t.timeline.work.role}</p>
              <h3>{t.timeline.work.company}</h3>
              <p>{t.timeline.work.body}</p>
            </div>
          </article>

          {t.timeline.education.map((item) => (
            <article className="timeline-item" key={item.school}>
              <span className="timeline-date">{item.date}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-body">
                <h3>{item.school}</h3>
                <p className="timeline-tag">{item.major}</p>
                {item.note && <p className="timeline-note">{item.note}</p>}
              </div>
            </article>
          ))}
        </Reveal>

        <div className="timeline-side">
          <Reveal className="award-card" delay={90}>
            <h3>{t.timeline.awardsTitle}</h3>
            <ul>
              {t.timeline.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="award-card research-card" delay={140}>
            <h3>{t.timeline.researchTitle}</h3>
            <h4>{t.timeline.research.title}</h4>
            <p>{t.timeline.research.body}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
