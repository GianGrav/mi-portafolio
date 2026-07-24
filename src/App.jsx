import { useEffect, useMemo } from 'react'

import content   from './data/content'
import getColors from './theme'
import getStyles from './styles/global'
import usePersistedState, { prefersDark } from './hooks/usePersistedState'
import useReveal from './hooks/useReveal'

import Nav        from './components/Nav'
import Hero       from './components/sections/Hero'
import Statement  from './components/sections/Statement'
import About      from './components/sections/About'
import Process    from './components/sections/Process'
import Skills     from './components/sections/Skills'
import Projects   from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact    from './components/sections/Contact'
import Footer     from './components/sections/Footer'

export default function App() {
  const [lang, setLang] = usePersistedState('gg:lang', 'es')
  const [dark, setDark] = usePersistedState('gg:dark', prefersDark)

  const t = content[lang]
  useReveal()

  // Memoizadas por su dependencia real: sin esto, cada render regenera y
  // reinyecta la hoja de estilos entera.
  const colors = useMemo(() => getColors(dark), [dark])
  const css = useMemo(() => getStyles(colors, dark), [colors, dark])

  // El idioma del documento y los metadatos siguen al idioma elegido, en vez de
  // quedarse con el que vino escrito en el HTML.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [t])

  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <>
      <style>{css}</style>

      <Nav t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />

      <main>
        <Hero       t={t} />
        <Statement  t={t} />
        <About      t={t} />
        <Process    t={t} />
        <Skills     t={t} />
        <Projects   t={t} />
        <Experience t={t} />
        <Contact    t={t} />
      </main>

      <Footer t={t} />
    </>
  )
}
