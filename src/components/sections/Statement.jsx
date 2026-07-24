/** Declaración a pantalla ancha entre el hero y las secciones con datos. */
export default function Statement({ t }) {
  return (
    <section className="statement" data-reveal>
      <blockquote className="statement-text">{t.quote.text}</blockquote>
      <p className="statement-body">{t.quote.body}</p>
    </section>
  )
}
