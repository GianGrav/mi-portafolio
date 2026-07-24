import { numberOf } from '../data/sections'

/**
 * El panel flotante: la pieza que define la estética. Un rectángulo elevado
 * sobre el fondo oscuro, con la marca de agua del título detrás y, opcional, una
 * tira de bloques numerados al pie.
 *
 * `watermark` es el título repetido en grande y muy tenue por detrás. Va como
 * `aria-hidden` porque para un lector de pantalla sería el título dicho dos veces.
 */
export default function Panel({ id, title, watermark, lead, children, strip, wide }) {
  const n = numberOf(id)

  return (
    <section className={`panel ${wide ? 'panel-wide' : ''}`} id={id} data-reveal>
      <header className="panel-head">
        {watermark !== false && (
          <span className="panel-mark" aria-hidden="true">{watermark || title}</span>
        )}
        <div className="panel-titles">
          {n && <span className="panel-num">{n}</span>}
          <h2 className="panel-title">{title}</h2>
          {lead && <p className="panel-lead">{lead}</p>}
        </div>
      </header>

      {children && <div className="panel-body">{children}</div>}

      {strip && <div className="strip">{strip}</div>}
    </section>
  )
}

/** Un bloque de la tira inferior: número grande, rótulo y texto corto. */
export function StripItem({ n, label, text }) {
  return (
    <div className="strip-item">
      <span className="strip-n">{n}<i>.</i></span>
      <div>
        <p className="strip-label">{label}</p>
        {text && <p className="strip-text">{text}</p>}
      </div>
    </div>
  )
}
