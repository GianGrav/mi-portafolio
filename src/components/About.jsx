export default function About({ t }) {
  return (
    <section className="sec" id="about">
      <p className="sec-label">01</p>
      <h2 className="sec-title">{t.about.title}</h2>
      <div className="sec-rule" />
      <p className="about-p">{t.about.text}</p>
    </section>
  )
}
