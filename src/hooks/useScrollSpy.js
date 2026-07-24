import { useEffect, useState } from 'react'

/**
 * Un solo listener de scroll para las tres cosas que dependen de la posición:
 * qué sección resalta la nav, cuánto se leyó (la barra de progreso) y cuál es la
 * sección en foco (las demás se atenúan). Van juntas a propósito: es la misma
 * lectura del layout, y separarlas obligaba a medir el scroll tres veces por
 * cuadro.
 *
 * El progreso y el foco no pasan por estado de React —son cambios que ocurren en
 * cada píxel de scroll—: el progreso se escribe como variable CSS y el foco como
 * una clase en cada sección. Solo la sección activa de la nav, que cambia de a
 * saltos, justifica un re-render.
 */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    let frame = 0
    // Las secciones de primer nivel son estables tras el montaje: se listan una
    // vez y no en cada cuadro.
    const sections = Array.from(document.querySelectorAll('main > section'))

    const measure = () => {
      frame = 0

      const doc = document.documentElement
      const viewport = window.innerHeight
      const scrollable = doc.scrollHeight - viewport
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      doc.style.setProperty('--read', String(Math.min(1, Math.max(0, progress))))

      // Nav: la última sección cuyo comienzo ya pasó la línea de lectura, fijada
      // a un tercio de la ventana. Usar el borde superior la haría cambiar tarde.
      const line = viewport / 3
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)

      // Foco: la sección encendida es la que contiene la línea central de la
      // pantalla. Así una sección más alta que el viewport —Proyectos— sigue a
      // plena luz mientras la recorrés entera, en vez de apagarse al leer el
      // final porque su centro geométrico quedó lejos. En los huecos entre
      // secciones no hay ninguna que la contenga: ahí se cae a la más cercana
      // para que siempre haya una encendida y el traspaso sea suave.
      const mid = viewport / 2
      let focus = null
      let best = Infinity
      for (const el of sections) {
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom >= mid) {
          focus = el
          break
        }
        const distance = Math.abs(r.top + r.height / 2 - mid)
        if (distance < best) {
          best = distance
          focus = el
        }
      }
      for (const el of sections) el.classList.toggle('is-away', el !== focus)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
