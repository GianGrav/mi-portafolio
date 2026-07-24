import Panel from '../Panel'
import useContact, { isValidEmail } from '../../hooks/useContact'
import { socials } from '../../data/content'
import { GitHubIcon, LinkedInIcon } from '../icons'

const ICONS = { github: GitHubIcon, linkedin: LinkedInIcon }

/** El estado del formulario vive acá para que tipear no re-renderice la página. */
export default function Contact({ t }) {
  const { form, setForm, sent, sending, sendError, handleSend } = useContact()
  const canSend = !sending && form.name && isValidEmail(form.email) && form.message

  const onSubmit = (e) => {
    e.preventDefault()
    if (canSend) handleSend()
  }

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
  })

  return (
    <Panel id="contact" title={t.contact.title} lead={t.contact.subtitle} wide>
      <div className="contact">
        <div className="contact-aside">
          <div className="socials">
            {socials.map((s) => {
              const Icon = ICONS[s.id]
              return (
                <a className="soc" key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                  <span className="soc-ic"><Icon /></span> {s.label}
                </a>
              )
            })}
          </div>
        </div>

        <form className="cform" onSubmit={onSubmit} noValidate>
          <div className="fg">
            <label className="flabel" htmlFor="cf-name">{t.contact.name}</label>
            <input id="cf-name" className="finput" autoComplete="name"
              placeholder={t.contact.namePlaceholder} {...field('name')} />
          </div>

          <div className="fg">
            <label className="flabel" htmlFor="cf-email">{t.contact.email}</label>
            <input id="cf-email" className="finput" type="email" autoComplete="email"
              placeholder={t.contact.emailPlaceholder} {...field('email')} />
          </div>

          <div className="fg fg-full">
            <label className="flabel" htmlFor="cf-message">{t.contact.message}</label>
            <textarea id="cf-message" className="ftextarea" rows={4}
              placeholder={t.contact.messagePlaceholder} {...field('message')} />
          </div>

          <p className="form-status" role="status" aria-live="polite">
            {sent ? `✓ ${t.contact.sent}` : sendError ? `✕ ${t.contact.error}` : ''}
          </p>

          <button className="btn btn-solid" type="submit" disabled={!canSend}>
            {sending ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </Panel>
  )
}
