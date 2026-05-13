export default function Hero({ t, scrollTo }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-line" />
      <div className="hero-inner">
        <p className="hero-tag">{t.hero.greeting}</p>
        <h1 className="hero-name">
          Giancarlo<br /><em>Gravagna</em>
        </h1>
        <p className="hero-sub">{t.hero.role}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="hero-btn" onClick={() => scrollTo('about')}>
            {t.hero.cta} <span style={{ fontSize: '1.1rem' }}>↓</span>
          </button>
          <a className="hero-btn" href={t.hero.cvFile} download style={{ textDecoration: 'none' }}>
            {t.hero.cv} <span style={{ fontSize: '1rem' }}>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
