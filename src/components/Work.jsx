import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { useI18n } from '../i18n.jsx'
import { Arrow, External } from './icons.jsx'

const METRIC_TOKEN = /(\d+(?:\.\d+)?\+?%?)/

function emphasizeMetrics(text) {
  return text.split(METRIC_TOKEN).map((part, index) => (
    index % 2 === 1 ? <strong className="detail-metric" key={`${part}-${index}`}>{part}</strong> : part
  ))
}

export default function Work() {
  const { t } = useI18n()

  return (
    <>
      <Section id="internship" label={t.work.internshipTitle} title={t.work.internshipTitle}>
        <ProjectCard project={t.work.items.find((item) => item.type === 'internship')} t={t} />
      </Section>
      <Section id="work" label={t.work.projectTitle} title={t.work.projectTitle}>
        <ProjectCard project={t.work.items.find((item) => item.type === 'project')} t={t} />
      </Section>
    </>
  )
}

function ProjectCard({ project, t }) {
  const [detailOpen, setDetailOpen] = useState(false)

  return (
    <Reveal>
      <article className="project-card">
        <header className="project-head">
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
                <p>{emphasizeMetrics(detail.body)}</p>
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
            {project.demoHref && (
              <a className="text-button project-demo-link" href={project.demoHref} target="_blank" rel="noreferrer">
                {project.type === 'internship' ? t.work.live : t.work.demo} <External className="icon small" />
              </a>
            )}
          </footer>
      </article>
    </Reveal>
  )
}
