import { useState } from 'react'
import content    from './data/content'
import getColors  from './theme'
import getStyles  from './styles/global'
import useContact from './hooks/useContact'

import Nav        from './components/Nav'
import MobileMenu from './components/MobileMenu'
import Controls   from './components/Controls'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const [lang, setLang]           = useState('es')
  const [dark, setDark]           = useState(true)
  const [menuOpen, setMenuOpen]   = useState(false)

  const t = content[lang]
  const c = getColors(dark)
  const { form, setForm, sent, sending, sendError, handleSend } = useContact()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{getStyles(c, dark)}</style>

      <Nav        t={t} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Controls   lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <MobileMenu t={t} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />

      <Hero       t={t} scrollTo={scrollTo} />
      <About      t={t} />
      <Skills     t={t} />
      <Projects   t={t} />
      <Experience t={t} />
      <Contact    t={t} form={form} setForm={setForm} sent={sent} sending={sending} sendError={sendError} handleSend={handleSend} />
      <Footer />
    </>
  )
}
