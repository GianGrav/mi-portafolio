import Panel from '../Panel'

export default function Skills({ t }) {
  return (
    <Panel id="skills" title={t.skills.title} lead={t.skills.intro}>
      <div className="skills-grid">
        {t.skills.categories.map((cat, i) => (
          <div className="skill" key={cat.name}>
            <p className="skill-n">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="skill-name">{cat.name}</h3>
            <ul className="skill-list">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  )
}
