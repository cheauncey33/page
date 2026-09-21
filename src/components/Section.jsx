import Reveal from './Reveal.jsx'

export default function Section({ id, label, title, intro, children, actions }) {
  return (
    <section className="section" id={id} aria-label={label}>
      <Reveal className="section-head">
        <h2 className="section-title">{title}</h2>
        {actions && <div className="section-actions">{actions}</div>}
      </Reveal>
      {children}
    </section>
  )
}
