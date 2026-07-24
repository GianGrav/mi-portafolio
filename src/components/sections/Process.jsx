import Panel, { StripItem } from '../Panel'

export default function Process({ t }) {
  return (
    <Panel
      id="process"
      title={t.process.title}
      lead={t.process.intro}
      strip={t.process.steps.map((s, i) => (
        <StripItem
          key={s.n}
          n={String(i + 1).padStart(2, '0')}
          label={s.name}
          text={s.text}
        />
      ))}
    />
  )
}
