import { useEffect, useState } from 'react'

/**
 * useState que sobrevive al reload. `fallback` puede ser un valor o una función,
 * y solo se evalúa la primera vez (cuando todavía no hay nada guardado).
 */
export default function usePersistedState(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored !== null) return JSON.parse(stored)
    } catch {
      // localStorage bloqueado (modo privado, permisos): seguimos en memoria.
    }
    return typeof fallback === 'function' ? fallback() : fallback
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ídem: no poder persistir no debería romper la página.
    }
  }, [key, value])

  return [value, setValue]
}

/** Preferencia de tema del sistema, usada solo en la primera visita. */
export function prefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
}
