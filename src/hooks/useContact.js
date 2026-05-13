import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const TO_EMAIL    = import.meta.env.VITE_CONTACT_EMAIL

export function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function useContact() {
  const [form, setForm]         = useState({ name: '', email: '', message: '' })
  const [sent, setSent]         = useState(false)
  const [sending, setSending]   = useState(false)
  const [sendError, setSendError] = useState(false)

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message || !isValidEmail(form.email)) return
    setSending(true)
    setSendError(false)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: TO_EMAIL },
        { publicKey: PUBLIC_KEY },
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3500)
    } catch {
      setSendError(true)
      setTimeout(() => setSendError(false), 4000)
    } finally {
      setSending(false)
    }
  }

  return { form, setForm, sent, sending, sendError, handleSend }
}
