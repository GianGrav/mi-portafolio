import Panel, { StripItem } from '../Panel'

export default function About({ t }) {
  return (
    <Panel
      id="about"
      title={t.about.title}
      lead={t.about.text}
      strip={t.about.facts.map((f, i) => (
        <StripItem
          key={f.label}
          n={String(i + 1).padStart(2, '0')}
          label={f.label}
          text={f.value}
        />
      ))}
    />
  )
}
