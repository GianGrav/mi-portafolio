export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p>{t.colophon.rights}</p>
      <p className="footer-built">{t.colophon.built}</p>
    </footer>
  )
}
