import { numberOf } from '../../data/sections'
import { LockIcon } from '../icons'

/**
 * Los proyectos usan el layout dividido: a la izquierda una superficie con la
 * cifra grande y el nombre, a la derecha la ficha técnica sobre un plano
 * translúcido. Cada proyecto es su propio panel.
 */
export default function Projects({ t }) {
  return (
    <section className="projects" id="projects" data-reveal>
      <header className="panel-head projects-head">
        <span className="panel-mark" aria-hidden="true">{t.projects.title}</span>
        <div className="panel-titles">
          <span className="panel-num">{numberOf('projects')}</span>
          <h2 className="panel-title">{t.projects.title}</h2>
          <p className="panel-lead">{t.projects.intro}</p>
        </div>
      </header>

      {t.projects.items.map((proj, i) => (
        <article className={`proj proj-${proj.id}`} key={proj.id} data-reveal>
          <div
            className={`proj-visual ${proj.cover ? 'has-cover' : ''}`}
            style={proj.cover ? { '--cover': `url(${proj.cover})` } : undefined}
          >
            <span className="proj-index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="proj-cat">{proj.category}</p>
            <h3 className="proj-name">{proj.name}</h3>
            <p className="proj-role">{proj.role} · {proj.year}</p>
          </div>

          <div className="proj-detail">
            <span className={`badge badge-${proj.status}`}>
              {t.projects.status[proj.status]}
            </span>

            <p className="proj-desc">{proj.desc}</p>
            {proj.note && <p className="proj-note">{proj.note}</p>}

            <ul className="proj-stack">
              {proj.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="proj-links">
              {proj.demo && (
                <a className="btn" href={proj.demo} target="_blank" rel="noopener noreferrer">
                  {t.projects.demo} ↗
                </a>
              )}
              {proj.repo ? (
                <a className="btn btn-ghost" href={proj.repo} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              ) : (
                <span className="proj-private">
                  <LockIcon /> {t.projects.privateRepo}
                </span>
              )}
            </div>
          </div>
        </article>
      ))}

      <p className="projects-note">{t.projects.note}</p>
    </section>
  )
}
