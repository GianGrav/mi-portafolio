/**
 * Paleta AUREUM adaptada al registro de las referencias: fondo casi negro, panel
 * apenas por encima, y el dorado usado con cuentagotas — como acento, nunca como
 * superficie. La luz viene de arriba, así que los paneles llevan un degradado
 * sutil de claro a oscuro que insinúa una fuente puntual.
 */
export default function getColors(dark) {
  return dark
    ? {
        bg:        '#08080A',
        bgDeep:    '#030304',
        panel:     '#111116',
        panelTop:  '#17171E',
        surface:   '#1A1A21',
        surfaceH:  '#20202A',
        border:    '#24242D',
        borderS:   '#2E2E39',
        text:      '#EAE5DB',
        muted:     '#847E8D',
        faint:     '#4A4653',
        accent:    '#C8BAA2',
        accentS:   '#DDD0BC',
        glow:      'rgba(200,186,162,0.10)',
        invert:    '#0A0A0D',
        shadow:    'rgba(0,0,0,0.85)',
        mark:      'rgba(234,229,219,0.035)',
        // Filo superior del panel: la luz que le pega arriba y lo despega del fondo.
        edge:      'rgba(255,255,255,0.055)',
        grain:     0.05,
      }
    : {
        bg:        '#D6D2CA',
        bgDeep:    '#BDB8AE',
        panel:     '#FBFAF7',
        panelTop:  '#FFFFFF',
        surface:   '#F4F1EB',
        surfaceH:  '#EDE9E1',
        border:    '#D8D2C6',
        borderS:   '#C6BFB0',
        text:      '#191714',
        muted:     '#5C554A',
        faint:     '#9A9287',
        accent:    '#7E6E52',
        accentS:   '#6B5C43',
        glow:      'rgba(126,110,82,0.12)',
        invert:    '#FBFAF7',
        shadow:    'rgba(60,50,38,0.35)',
        mark:      'rgba(25,23,20,0.045)',
        edge:      'rgba(255,255,255,0.9)',
        grain:     0.03,
      }
}
