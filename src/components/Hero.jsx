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
                <h3>{item.label}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
