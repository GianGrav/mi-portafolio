/**
 * Orden y numeración de las secciones. Fuente de verdad única: de acá salen el
 * menú, los números impresos en cada panel y los anclajes de scroll.
 */
const sections = [
  { id: 'about',      nav: 'about' },
  { id: 'process',    nav: 'process' },
  { id: 'skills',     nav: 'skills' },
  { id: 'projects',   nav: 'projects' },
  { id: 'experience', nav: 'experience' },
  { id: 'contact',    nav: 'contact' },
]

export const numberOf = (id) => {
  const i = sections.findIndex((s) => s.id === id)
  return i < 0 ? null : String(i + 1).padStart(2, '0')
}

export default sections
