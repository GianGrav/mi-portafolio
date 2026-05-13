export default function Experience({ t }) {
  return (
    <section className="sec" id="experience">
      <p className="sec-label">04</p>
      <h2 className="sec-title">{t.experience.title}</h2>
      <div className="sec-rule" />
      <div className="exp-wrap">
        {t.experience.jobs.map((job, i) => (
          <div className="exp-item" key={i}>
            <p className="exp-period">{job.period}</p>
            <p className="exp-role">{job.role}</p>
            <p className="exp-co">{job.company}</p>
            <p className="exp-desc">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
