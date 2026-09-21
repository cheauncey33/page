import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { useI18n } from '../i18n.jsx'
import { Arrow, External } from './icons.jsx'

export default function Work() {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)

  const items = t.work.items
  const index = Math.min(activeIndex, items.length - 1)
  const project = items[index]

  const selectProject = (next) => {
    setActiveIndex(next)
    setDetailOpen(false)
  }

  return (
    <Section
      id="work"
      label={t.work.label}
      title={t.work.title}
      intro={t.work.intro}
      actions={
        <div className="filter-row" role="tablist" aria-label={t.work.selectLabel}>
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`filter-chip ${i === index ? 'is-active' : ''}`}
              onClick={() => selectProject(i)}
            >
              <span className="chip-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              {item.title}
            </button>
          ))}
        </div>
      }
    >
      <Reveal>
        <article className="project-card" key={project.id}>
          <header className="project-head">
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </header>

          <div className="project-cols">
            <div className="project-main">
              <div className="project-block">
                <p className="block-label">{t.work.whyLabel}</p>
                <p className="project-block-body">{project.background}</p>
              </div>

              <div className="project-block">
                <p className="block-label">{t.work.stackWhyLabel}</p>
                <p className="project-block-body">{project.stackWhy}</p>
              </div>
            </div>

            <aside className="project-aside">
              <div className="project-block">
                <p className="block-label">{t.work.outcomeLabel}</p>
                <ul className="outcome-row">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome.value}>
                      <strong>{outcome.value}</strong>
                      <span>{outcome.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-stack">
                <span className="stack-label">{t.work.stackLabel}</span>
                <ul>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className={`project-detail ${detailOpen ? 'is-open' : ''}`} hidden={!detailOpen}>
            {project.details.map((detail) => (
              <div className="detail-line" key={detail.title}>
                <strong>{detail.title}</strong>
                <p>{detail.body}</p>
              </div>
            ))}
          </div>

          <footer className="project-foot">
            <button
              type="button"
              className="text-button"
              onClick={() => setDetailOpen((prev) => !prev)}
              aria-expanded={detailOpen}
            >
              {detailOpen ? t.work.less : t.work.more}
              <Arrow direction={detailOpen ? 'up' : 'down'} className="icon small" />
            </button>
            {project.href && (
              <a className="text-button" href={project.href} target="_blank" rel="noreferrer">
                GitHub <External className="icon small" />
              </a>
            )}
          </footer>
        </article>
      </Reveal>
    </Section>
  )
}
