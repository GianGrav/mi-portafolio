const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export default function Projects({ t }) {
  return (
    <section className="sec sec-alt" id="projects">
      <p className="sec-label">03</p>
      <h2 className="sec-title">{t.projects.title}</h2>
      <div className="sec-rule" />
      <div className="proj-grid">
        {t.projects.items.map((proj) => (
          <div className="proj-card" key={proj.name}>
            <p className="proj-cat">{proj.category}</p>
            <p className="proj-name">{proj.name}</p>
            <p className="proj-desc">{proj.desc}</p>
            <div className="proj-stack">
              {proj.stack.map((tech) => (
                <span className="proj-tag" key={tech}>{tech}</span>
              ))}
            </div>
            <div className="proj-footer">
              {proj.demo && (
                <a className="proj-link" href={proj.demo} target="_blank" rel="noopener noreferrer">
                  Live demo ↗
                </a>
              )}
              {proj.repo ? (
                <a className="proj-link" href={proj.repo} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              ) : (
                <span className="proj-private">
                  <LockIcon /> {t.projects.privateRepo}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
