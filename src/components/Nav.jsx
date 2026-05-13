const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Nav({ t, scrollTo, menuOpen, setMenuOpen }) {
  return (
    <nav className="nav">
      <div className="logo" onClick={() => scrollTo('hero')}>G.G.</div>
      <ul className="nav-links">
        {NAV_SECTIONS.map((s) => (
          <li key={s}>
            <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s) }}>
              {t.nav[s]}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
