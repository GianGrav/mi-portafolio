import { DownloadIcon } from '../icons'

export default function Hero({ t }) {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="panel hero" id="top" data-reveal>
      {/* El foco de luz que da el clima de la pieza. */}
      <div className="hero-light" aria-hidden="true" />

      <span className="hero-mark" aria-hidden="true">{t.cover.title.replace('.', '')}</span>

      <div className="hero-inner">
        <p className="hero-kicker">{t.cover.kicker}</p>
        <h1 className="hero-name">{t.cover.name}</h1>
        <p className="hero-role">{t.cover.role}</p>

        <div className="hero-actions">
          <a className="btn" href="#projects" onClick={(e) => go(e, 'projects')}>
            {t.nav.projects}
          </a>
          <a className="btn btn-ghost" href={t.about.cvFile} download>
            <DownloadIcon /> {t.about.cv}
          </a>
        </div>
      </div>

      <p className="hero-years" aria-hidden="true">{t.cover.years}</p>
      <div className="hero-cue" aria-hidden="true" />
    </section>
  )
}
