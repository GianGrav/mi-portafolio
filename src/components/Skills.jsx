export default function Skills({ t }) {
  return (
    <section className="sec sec-alt" id="skills">
      <p className="sec-label">02</p>
      <h2 className="sec-title">{t.skills.title}</h2>
      <div className="sec-rule" />
      <div className="skills-grid">
        {t.skills.categories.map((cat) => (
          <div className="skill-card" key={cat.name}>
            <div className="sk-icon">{cat.icon}</div>
            <div className="sk-name">{cat.name}</div>
            <div className="sk-tags">
              {cat.items.map((item) => (
                <span className="sk-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
