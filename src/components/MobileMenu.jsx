const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact']

const MoonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
  </svg>
)

const SunIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

export default function MobileMenu({ t, scrollTo, menuOpen, setMenuOpen, lang, setLang, dark, setDark }) {
  const handleNav = (e, s) => {
    e.preventDefault()
    scrollTo(s)
    setMenuOpen(false)
  }

  return (
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
      <div className="mobile-controls">
        <button
          className={`mobile-ctrl-btn ${lang === 'es' ? 'pressed' : ''}`}
          onClick={() => setLang((l) => (l === 'es' ? 'en' : 'es'))}
        >
          {lang === 'es' ? 'ES' : 'EN'}
        </button>
        <button
          className={`mobile-ctrl-btn ${dark ? 'pressed' : ''}`}
          onClick={() => setDark((d) => !d)}
        >
          {dark ? <><MoonIcon /> Oscuro</> : <><SunIcon /> Claro</>}
        </button>
      </div>
      {NAV_SECTIONS.map((s) => (
        <a key={s} href={`#${s}`} onClick={(e) => handleNav(e, s)}>
          {t.nav[s]}
        </a>
      ))}
    </div>
  )
}
