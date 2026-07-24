import { useState } from 'react'
import sections from '../data/sections'
import useScrollSpy from '../hooks/useScrollSpy'
import { MoonIcon, SunIcon } from './icons'

// Fuera del componente: si el array se recreara en cada render, el efecto del
// scrollspy se volvería a montar constantemente.
const IDS = sections.map((s) => s.id)

export default function Nav({ t, lang, setLang, dark, setDark }) {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(IDS)

  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="nav">
      <a className="brand" href="#top" onClick={(e) => go(e, 'top')}>G.G.</a>

      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label={t.nav.about}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => go(e, s.id)}
            className={active === s.id ? 'is-active' : undefined}
            aria-current={active === s.id ? 'true' : undefined}
          >
            {t.nav[s.nav]}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="chip"
          onClick={() => setLang((l) => (l === 'es' ? 'en' : 'es'))}
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          {lang.toUpperCase()}
        </button>
        <button
          className="chip chip-icon"
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? t.nav.light : t.nav.dark}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </button>
        <button
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Cuánto se leyó. La escala la maneja CSS con la variable --read. */}
      <div className="nav-progress" aria-hidden="true" />
    </header>
  )
}
