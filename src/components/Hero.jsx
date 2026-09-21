import { useI18n } from '../i18n.jsx'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="intro" aria-label={t.hero.ariaLabel}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-block">
          <p className="block-label">{t.hero.focusTitle}</p>
          <div className="focus-grid">
            {t.hero.focus.map((item) => (
              <article className="focus-card" key={item.label}>
                <p className="focus-label">{item.label}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <dl className="hero-stats">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className={stat.group === 'ai' ? 'stat-item is-ai' : 'stat-item'}>
              <p className="stat-source">{stat.source}</p>
              <dt>
                <span className="stat-value">{stat.value}</span>
                {stat.unit && <span className="stat-unit">{stat.unit}</span>}
              </dt>
              <dd>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-note">{stat.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
