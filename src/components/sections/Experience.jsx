import Panel from '../Panel'

export default function Experience({ t }) {
  return (
    <Panel id="experience" title={t.experience.title}>
      <div className="exp">
        {t.experience.jobs.map((job) => (
          <article className="exp-item" key={`${job.company}-${job.period}`}>
            <div className="exp-meta">
              <p className="exp-period">{job.period}</p>
              <h3 className="exp-role">{job.role}</h3>
              <p className="exp-co">{job.company}</p>
            </div>
            <p className="exp-desc">{job.desc}</p>
          </article>
        ))}

        <article className="exp-item exp-edu">
          <div className="exp-meta">
            <p className="exp-period">{t.experience.education.period}</p>
            <h3 className="exp-role">{t.experience.education.label}</h3>
            <p className="exp-co">{t.experience.education.school}</p>
          </div>
          <p className="exp-desc">{t.experience.education.degree}</p>
        </article>
      </div>
    </Panel>
  )
}
