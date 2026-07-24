import { useEffect } from 'react'

/**
 * Revela los elementos con `data-reveal` cuando entran en pantalla, agregándoles
 * la clase `is-in`. Un solo observador para toda la página en vez de uno por
 * componente, y se deja de observar cada elemento apenas aparece: la animación
 * es de entrada, no algo que deba repetirse al volver a subir.
 */
export default function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')

    // Si el usuario pidió menos movimiento, se muestra todo sin animar.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
