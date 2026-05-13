export default function getColors(dark) {
  return dark
    ? {
        bg:        '#0D0D11',
        bg2:       '#111116',
        surface:   '#18181E',
        surfaceH:  '#1E1E26',
        border:    '#27272F',
        text:      '#EAE4D8',
        muted:     '#78737E',
        accent:    '#C8BAA2',
        accentGlow:'rgba(200,186,162,0.11)',
        accentS:   '#DDD0BC',
        navBg:     'rgba(13,13,17,0.92)',
        invert:    '#0D0D11',
      }
    : {
        bg:        '#F4F2EE',
        bg2:       '#ECEAE5',
        surface:   '#FAFAF8',
        surfaceH:  '#F4F1EC',
        border:    '#D8D4CC',
        text:      '#1C1A18',
        muted:     '#80796E',
        accent:    '#9A8C7A',
        accentGlow:'rgba(154,140,122,0.13)',
        accentS:   '#B0A492',
        navBg:     'rgba(244,242,238,0.93)',
        invert:    '#F4F2EE',
      }
}
