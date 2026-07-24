/**
 * Hoja de estilos. Se genera a partir de la paleta y se inyecta una sola vez por
 * tema (App la memoiza). Las fuentes se cargan desde index.html, no con @import:
 * acá bloquearían el render.
 *
 * OJO: esto vive dentro de un template literal de JavaScript. **Nunca escribir
 * backticks en los comentarios**, cortan la cadena y el build falla.
 */
export default function getStyles(c, dark) {
  return `
    *{margin:0;padding:0;box-sizing:border-box}
    html{
      scroll-behavior:smooth;
      /* El nav fijo mide 64px: sin este colchón, al saltar a una sección su
         título queda tapado por la barra. Vale para los saltos del menú y para
         el encuadre del snap. */
      scroll-padding-top:88px;
      /* Encuadre al soltar el scroll. proximity, no mandatory: solo acomoda
         cuando la rueda ya se detuvo cerca de un borde, nunca pelea el arrastre. */
      scroll-snap-type:y proximity;
    }
    body{
      font-family:'DM Sans',sans-serif;
      background:${c.bg};
      color:${c.text};
      -webkit-font-smoothing:antialiased;
      transition:background .5s ease,color .5s ease;
    }
    ::selection{background:${c.glow};color:${c.accent}}
    button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
    a{color:inherit}

    /* Foco visible en todo lo navegable con teclado. Los inputs apagan el
       outline nativo, así que sin esto no queda ninguna señal. */
    :focus-visible{
      outline:2px solid ${c.accent};outline-offset:3px;border-radius:1px;
    }

    /* Viñeta: hunde las esquinas para que los paneles floten. */
    body::before{
      content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
      background:radial-gradient(ellipse 90% 70% at 50% 0%,transparent 30%,${c.bgDeep} 100%);
      opacity:${dark ? 0.95 : 0.5};
    }
    /* Grano: rompe las superficies planas del degradado. Es ruido SVG generado
       en el navegador, no una imagen, así que no cuesta ninguna descarga. */
    body::after{
      content:'';position:fixed;inset:0;pointer-events:none;z-index:2;
      opacity:${c.grain};mix-blend-mode:${dark ? 'overlay' : 'multiply'};
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    main{position:relative;z-index:1}

    /* ══ PROGRESO DE LECTURA ══
       La escala la escribe el hook en --read; acá solo se dibuja. */
    .nav-progress{
      position:absolute;left:0;bottom:-1px;width:100%;height:1px;
      background:${c.accent};transform:scaleX(var(--read,0));transform-origin:0 50%;
      opacity:.65;
    }

    /* ══ NAVEGACIÓN ══ */
    .nav{
      position:fixed;top:0;left:0;width:100%;z-index:100;height:64px;
      display:flex;align-items:center;justify-content:space-between;
      padding:0 clamp(1.1rem,4vw,3rem);
      background:${dark ? 'rgba(8,8,10,.72)' : 'rgba(214,210,202,.72)'};
      backdrop-filter:blur(18px);
      border-bottom:1px solid ${c.border};
    }
    .brand{
      font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:500;
      color:${c.accent};letter-spacing:.1em;text-decoration:none;
    }
    .nav-links{display:flex;gap:clamp(1rem,2.4vw,2.2rem)}
    .nav-links a{
      position:relative;
      font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;
      color:${c.muted};text-decoration:none;transition:color .22s;
    }
    /* Subrayado que crece desde la izquierda: sirve para el hover y, fijo, para
       marcar en qué sección está parado el lector. */
    .nav-links a::after{
      content:'';position:absolute;left:0;right:0;bottom:-6px;height:1px;
      background:${c.accent};transform:scaleX(0);transform-origin:0 50%;
      transition:transform .3s cubic-bezier(.22,.61,.36,1);
    }
    .nav-links a:hover{color:${c.accent}}
    .nav-links a:hover::after{transform:scaleX(1)}
    .nav-links a.is-active{color:${c.text}}
    .nav-links a.is-active::after{transform:scaleX(1)}
    .nav-actions{display:flex;gap:.45rem;align-items:center}
    .chip{
      display:inline-flex;align-items:center;justify-content:center;
      min-height:32px;padding:0 .75rem;
      border:1px solid ${c.border};background:${c.surface};color:${c.muted};
      font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;
      transition:color .22s,border-color .22s,background .22s;
    }
    .chip:hover{color:${c.accent};border-color:${c.accent}77;background:${c.surfaceH}}
    .chip-icon{padding:0;width:32px}

    .burger{display:none;flex-direction:column;gap:5px;padding:6px 2px}
    .burger span{display:block;width:20px;height:1px;background:${c.muted};transition:all .28s}
    .burger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);background:${c.accent}}
    .burger.open span:nth-child(2){opacity:0}
    .burger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);background:${c.accent}}

    /* ══ PANEL ══
       La pieza que define la estética: un plano elevado sobre el fondo, con luz
       cayendo desde arriba y una sombra larga que lo despega. */
    .panel{
      position:relative;overflow:hidden;
      max-width:1180px;
      /* Ritmo vertical único, compartido con .projects y .statement: gaps
         parejos entre todas las secciones. */
      margin:clamp(3.5rem,8vw,6.5rem) auto;
      padding:clamp(2.2rem,4.5vw,4rem);
      background:linear-gradient(170deg,${c.panelTop} 0%,${c.panel} 55%);
      border:1px solid ${c.border};
      box-shadow:
        0 1px 0 ${dark ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.8)'} inset,
        0 30px 70px -25px ${c.shadow},
        0 60px 120px -60px ${c.shadow};
    }
    .panel-wide{max-width:1180px}

    /* Filo iluminado arriba: se apaga hacia los costados, así el panel parece
       cortado en un material con canto y no pegado sobre el fondo. */
    .panel::before,.projects-head::before,.proj::before{
      content:'';position:absolute;top:0;left:0;right:0;height:1px;z-index:3;
      background:linear-gradient(90deg,transparent 0%,${c.edge} 20%,${c.edge} 80%,transparent 100%);
      pointer-events:none;
    }
    .hero::before{display:none}

    /* Marca de agua: el título en enorme, casi invisible, detrás de todo. */
    .panel-mark{
      position:absolute;top:-.18em;left:-.04em;z-index:0;
      font-family:'Cormorant Garamond',serif;font-weight:300;
      font-size:clamp(5rem,15vw,13rem);line-height:1;letter-spacing:.02em;
      color:${c.mark};white-space:nowrap;pointer-events:none;user-select:none;
    }
    .panel-head{position:relative;z-index:1}
    .panel-titles{position:relative}
    .panel-num{
      display:flex;align-items:center;gap:.9rem;
      font-size:.68rem;letter-spacing:.3em;color:${c.accent};
      margin-bottom:.9rem;font-variant-numeric:tabular-nums;
    }
    /* Filete que sale del número: ancla el bloque de título a la izquierda. */
    .panel-num::after{
      content:'';height:1px;width:clamp(2rem,5vw,4.5rem);
      background:currentColor;opacity:.4;
    }
    .panel-title{
      font-family:'Cormorant Garamond',serif;font-weight:400;
      font-size:clamp(2rem,4.6vw,3.4rem);line-height:1.04;color:${c.text};
      letter-spacing:-.01em;
    }
    .panel-lead{
      margin-top:1.4rem;max-width:62ch;
      font-size:clamp(.88rem,1.2vw,1rem);line-height:1.85;
      color:${c.muted};font-weight:300;
    }
    .panel-body{position:relative;z-index:1;margin-top:clamp(2rem,3.5vw,3rem)}

    /* ══ TIRA NUMERADA ══ */
    .strip{
      position:relative;z-index:1;
      margin:clamp(2.4rem,4vw,3.4rem) calc(clamp(2.2rem,4.5vw,4rem) * -1) calc(clamp(2.2rem,4.5vw,4rem) * -1);
      border-top:1px solid ${c.border};
      /* auto-fit en vez de un número fijo: la tira sirve igual para los tres
         pasos del proceso que para los cuatro datos del perfil. */
      display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    }
    .strip-item{
      position:relative;
      display:flex;gap:1.1rem;align-items:flex-start;
      padding:clamp(1.5rem,2.6vw,2.2rem) clamp(1.4rem,2.4vw,2rem);
      border-left:1px solid ${c.border};
      opacity:0;transform:translateY(16px);
      transition:
        opacity .65s ease var(--d,0s),
        transform .65s cubic-bezier(.22,.61,.36,1) var(--d,0s),
        background .35s ease;
    }
    .panel.is-in .strip-item{opacity:1;transform:none}
    .strip-item:nth-child(2){--d:.09s}
    .strip-item:nth-child(3){--d:.18s}
    .strip-item:nth-child(4){--d:.27s}
    .strip-item:first-child{border-left:none}
    .strip-item:hover{background:${c.surfaceH}}
    /* Se enciende una barra de acento arriba del bloque apuntado. */
    .strip-item::after{
      content:'';position:absolute;top:-1px;left:0;right:0;height:1px;
      background:${c.accent};transform:scaleX(0);transform-origin:0 50%;
      transition:transform .4s cubic-bezier(.22,.61,.36,1);
    }
    .strip-item:hover::after{transform:scaleX(1)}
    .strip-n{
      font-family:'Cormorant Garamond',serif;font-weight:300;
      font-size:clamp(1.7rem,3vw,2.4rem);line-height:.9;color:${c.text};
      font-variant-numeric:tabular-nums;
      transition:color .35s ease;
    }
    .strip-item:hover .strip-n{color:${c.accent}}
    .strip-n i{color:${c.accent};font-style:normal}
    .strip-label{
      font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;
      color:${c.text};margin-bottom:.5rem;
    }
    .strip-text{font-size:.8rem;line-height:1.75;color:${c.muted};font-weight:300}

    /* ══ HERO ══ */
    .hero{
      min-height:100vh;display:flex;flex-direction:column;justify-content:center;
      margin:0;max-width:none;border:none;border-bottom:1px solid ${c.border};
      padding:clamp(6rem,12vw,9rem) clamp(1.4rem,7vw,6rem) clamp(4rem,8vw,6rem);
      box-shadow:none;background:transparent;
    }
    /* El foco: una sola fuente de luz arriba al centro, como la referencia. */
    .hero-light{
      position:absolute;top:-30%;left:50%;
      width:min(120vw,1400px);height:min(120vw,1400px);
      background:radial-gradient(circle,${c.glow} 0%,transparent 58%);
      pointer-events:none;
      animation:breathe 11s ease-in-out infinite;
    }
    /* La luz respira apenas. Es casi imperceptible cuadro a cuadro, pero es lo
       que hace que el hero no se lea como una captura de pantalla. */
    @keyframes breathe{
      0%,100%{transform:translateX(-50%) scale(1);opacity:.85}
      50%    {transform:translateX(-50%) scale(1.07);opacity:1}
    }
    .hero-mark{
      position:absolute;top:50%;left:50%;transform:translate(-50%,-58%);
      font-family:'Cormorant Garamond',serif;font-weight:300;
      font-size:clamp(4rem,17vw,15rem);line-height:1;letter-spacing:.06em;
      color:${c.mark};white-space:nowrap;pointer-events:none;user-select:none;
    }
    .hero-inner{position:relative;z-index:1;max-width:44ch}
    .hero-kicker{
      font-size:.66rem;letter-spacing:.3em;text-transform:uppercase;
      color:${c.accent};margin-bottom:1.2rem;
    }
    .hero-name{
      font-family:'Cormorant Garamond',serif;font-weight:300;
      font-size:clamp(2.8rem,8vw,6rem);line-height:.98;letter-spacing:-.025em;
      color:${c.text};
    }
    .hero-role{
      margin-top:1.4rem;font-size:.72rem;letter-spacing:.26em;
      text-transform:uppercase;color:${c.muted};
    }
    .hero-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:2.6rem}
    .hero-years{
      position:absolute;right:clamp(1.4rem,7vw,6rem);bottom:clamp(2rem,5vw,3.5rem);
      font-size:.66rem;letter-spacing:.24em;color:${c.faint};
      font-variant-numeric:tabular-nums;
    }
    /* Indicio de scroll: un destello que baja por un riel. Dice que hay más
       abajo sin ocupar lugar ni pedir una flecha. */
    .hero-cue{
      position:absolute;left:50%;bottom:clamp(2rem,5vw,3.2rem);
      width:1px;height:58px;background:${c.border};overflow:hidden;
    }
    .hero-cue::after{
      content:'';position:absolute;left:0;width:1px;height:20px;
      background:linear-gradient(transparent,${c.accent});
      animation:cue 2.6s cubic-bezier(.5,0,.5,1) infinite;
    }
    @keyframes cue{
      0%     {top:-20px}
      65%,100%{top:58px}
    }

    /* ══ DECLARACIÓN ══ */
    .statement{
      position:relative;z-index:1;max-width:900px;
      margin:clamp(3.5rem,8vw,6.5rem) auto;
      padding:0 clamp(1.4rem,5vw,2rem);text-align:center;
    }
    /* Filete corto antes de la cita: separa el bloque del hero sin una línea
       de borde a borde, que partiría la página en dos. */
    .statement::before{
      content:'';display:block;width:34px;height:1px;
      background:${c.accent};opacity:.55;margin:0 auto clamp(1.8rem,4vw,2.6rem);
    }
    .statement-text{
      font-family:'Cormorant Garamond',serif;font-weight:300;font-style:italic;
      font-size:clamp(1.5rem,4vw,2.8rem);line-height:1.28;color:${c.text};
      letter-spacing:-.01em;
    }
    .statement-body{
      margin:2rem auto 0;max-width:56ch;
      font-size:.86rem;line-height:1.95;color:${c.muted};font-weight:300;
    }

    /* ══ BOTONES ══ */
    .btn{
      display:inline-flex;align-items:center;gap:.6rem;
      padding:.8rem 1.6rem;border:1px solid ${c.accent}66;color:${c.accent};
      font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;
      text-decoration:none;transition:all .26s cubic-bezier(.22,.61,.36,1);
    }
    .btn:hover{
      background:${c.accent};color:${c.invert};border-color:${c.accent};
      transform:translateY(-2px);box-shadow:0 10px 22px -12px ${c.shadow};
    }
    /* El botón vuelve al piso al apretarlo: sin esto el clic no se siente. */
    .btn:active{transform:translateY(0);box-shadow:none}
    .btn-ghost{border-color:${c.border};color:${c.muted}}
    .btn-ghost:hover{background:transparent;color:${c.accent};border-color:${c.accent}66}
    .btn-solid{background:${c.accent};color:${c.invert};border-color:${c.accent}}
    .btn-solid:hover{opacity:.86;background:${c.accent};color:${c.invert}}
    .btn-solid:disabled{opacity:.35;cursor:default}

    /* ══ HABILIDADES ══ */
    .skills-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:${c.border}}
    .skill{
      position:relative;background:${c.panel};padding:clamp(1.3rem,2.2vw,1.9rem);
      opacity:0;transform:translateY(16px);
      transition:
        opacity .6s ease var(--d,0s),
        transform .6s cubic-bezier(.22,.61,.36,1) var(--d,0s),
        background .3s ease;
    }
    .panel.is-in .skill{opacity:1;transform:none}
    .skill:nth-child(2){--d:.07s}
    .skill:nth-child(3){--d:.14s}
    .skill:nth-child(4){--d:.21s}
    .skill:hover{background:${c.surfaceH}}
    /* Barra de acento a la izquierda de la tarjeta apuntada. */
    .skill::before{
      content:'';position:absolute;top:0;bottom:0;left:0;width:2px;
      background:${c.accent};transform:scaleY(0);transform-origin:50% 0;
      transition:transform .4s cubic-bezier(.22,.61,.36,1);
    }
    .skill:hover::before{transform:scaleY(1)}
    .skill-n{font-size:.64rem;letter-spacing:.22em;color:${c.accent};margin-bottom:.9rem}
    .skill-name{
      font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:500;
      color:${c.text};margin-bottom:1.1rem;
    }
    .skill-list{list-style:none;display:flex;flex-direction:column;gap:.5rem}
    .skill-list li{
      font-size:.78rem;color:${c.muted};font-weight:300;
      padding-left:.9rem;position:relative;
    }
    .skill-list li::before{
      content:'';position:absolute;left:0;top:.55em;width:4px;height:1px;background:${c.accent};
    }

    /* ══ PROYECTOS ══ */
    .projects{max-width:1180px;margin:clamp(3.5rem,8vw,6.5rem) auto;padding:0 clamp(1.1rem,4vw,0rem)}
    .projects-head{
      position:relative;overflow:hidden;
      padding:clamp(2.2rem,4.5vw,4rem);
      background:linear-gradient(170deg,${c.panelTop} 0%,${c.panel} 55%);
      border:1px solid ${c.border};
      box-shadow:0 30px 70px -25px ${c.shadow};
    }
    .proj{
      position:relative;
      display:grid;grid-template-columns:.85fr 1.15fr;
      margin-top:clamp(1.2rem,2.4vw,2rem);
      border:1px solid ${c.border};
      box-shadow:0 30px 70px -30px ${c.shadow};
      overflow:hidden;
    }
    /* Una vez que entró, la tarjeta reacciona al puntero: sube un poco, la
       sombra se abre y el borde toma el acento. Va sobre .is-in para ganarle a
       la regla de entrada, que fija transform:none. */
    .proj.is-in{
      transition:transform .45s cubic-bezier(.22,.61,.36,1),
                 box-shadow .45s ease,border-color .45s ease;
    }
    .proj.is-in:hover{
      transform:translateY(-5px);
      border-color:${c.borderS};
      box-shadow:0 44px 90px -34px ${c.shadow},0 0 0 1px ${c.accent}22;
    }
    .proj.is-in:hover .proj-index{color:${c.glow}}
    .proj-index{transition:color .5s ease}
    /* Mitad izquierda: superficie con la cifra grande, sin datos. */
    .proj-visual{
      position:relative;overflow:hidden;
      padding:clamp(2rem,3.6vw,3.2rem);
      display:flex;flex-direction:column;justify-content:flex-end;
      min-height:clamp(16rem,26vw,22rem);
      background:
        radial-gradient(circle at 30% 20%,${c.glow} 0%,transparent 55%),
        linear-gradient(160deg,${c.surfaceH} 0%,${c.panel} 70%);
      border-right:1px solid ${c.border};
    }
    /* Con portada: la captura del proyecto de fondo, oscurecida para que el
       nombre y la cifra sigan legibles. La imagen va en un ::before propio para
       poder darle su propio zoom en hover sin tocar el texto. */
    .proj-visual.has-cover{background:${c.panel}}
    .proj-visual.has-cover::before{
      content:'';position:absolute;inset:0;z-index:0;
      background:var(--cover) center/cover no-repeat;
      transform:scale(1.02);
      transition:transform .6s cubic-bezier(.22,.61,.36,1),filter .6s ease;
      filter:saturate(.92);
    }
    /* Velo: degradado desde abajo (donde está el texto) hacia arriba, más un
       tinte del panel para que la portada no compita con la ficha de al lado. */
    .proj-visual.has-cover::after{
      content:'';position:absolute;inset:0;z-index:1;pointer-events:none;
      background:linear-gradient(
        to top,
        ${dark ? 'rgba(8,8,10,.92)' : 'rgba(8,8,10,.82)'} 0%,
        ${dark ? 'rgba(8,8,10,.55)' : 'rgba(8,8,10,.4)'} 45%,
        ${dark ? 'rgba(8,8,10,.35)' : 'rgba(8,8,10,.2)'} 100%);
    }
    .proj.is-in:hover .proj-visual.has-cover::before{transform:scale(1.06);filter:saturate(1)}
    /* Sobre portada, la cifra gigante en blanco tenue rinde mejor que en color-marca. */
    .proj-visual.has-cover .proj-index{color:rgba(255,255,255,.14)}
    .proj-visual.has-cover .proj-name{color:#F4F1EB}
    .proj.is-in:hover .proj-visual.has-cover .proj-index{color:rgba(255,255,255,.22)}
    .proj-index{
      position:absolute;z-index:2;top:clamp(.5rem,2vw,1.2rem);right:clamp(1rem,3vw,2rem);
      font-family:'Cormorant Garamond',serif;font-weight:300;
      font-size:clamp(5rem,11vw,9rem);line-height:1;color:${c.mark};
      pointer-events:none;user-select:none;
    }
    .proj-cat{
      position:relative;z-index:2;font-size:.64rem;letter-spacing:.22em;text-transform:uppercase;
      color:${c.accent};margin-bottom:.8rem;
    }
    .proj-name{
      position:relative;z-index:2;font-family:'Cormorant Garamond',serif;font-weight:500;
      font-size:clamp(1.9rem,3.6vw,2.9rem);line-height:1;color:${c.text};
      letter-spacing:-.01em;
    }
    .proj-role{position:relative;z-index:2;margin-top:.7rem;font-size:.7rem;letter-spacing:.14em;color:${c.faint}}

    /* Mitad derecha: la ficha técnica. */
    .proj-detail{
      padding:clamp(2rem,3.6vw,3.2rem);
      background:${c.panel};
      display:flex;flex-direction:column;align-items:flex-start;
    }
    .badge{
      font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;
      padding:.3rem .7rem;border:1px solid currentColor;margin-bottom:1.4rem;
    }
    .badge-live{color:${c.accent}}
    .badge-wip{color:${c.faint};border-style:dashed}
    .proj-desc{font-size:.85rem;line-height:1.85;color:${c.muted};font-weight:300}
    .proj-note{
      margin-top:1.3rem;padding-left:1.1rem;border-left:2px solid ${c.accent};
      font-family:'Cormorant Garamond',serif;font-style:italic;
      font-size:1.05rem;line-height:1.55;color:${c.text};
    }
    .proj-stack{
      list-style:none;display:flex;flex-wrap:wrap;gap:.4rem;margin:1.6rem 0;
    }
    .proj-stack li{
      font-size:.65rem;letter-spacing:.05em;padding:.28rem .65rem;
      border:1px solid ${c.border};color:${c.muted};
      transition:border-color .3s ease,color .3s ease;
    }
    .proj.is-in:hover .proj-stack li{border-color:${c.borderS};color:${c.text}}
    .proj-links{display:flex;gap:.7rem;align-items:center;flex-wrap:wrap;margin-top:auto}
    .proj-private{display:flex;align-items:center;gap:.45rem;font-size:.66rem;letter-spacing:.1em;color:${c.faint}}
    .projects-note{
      margin-top:clamp(1.4rem,2.6vw,2.2rem);max-width:60ch;
      font-family:'Cormorant Garamond',serif;font-style:italic;
      font-size:1.05rem;line-height:1.6;color:${c.muted};
    }

    /* ══ EXPERIENCIA ══ */
    .exp{display:flex;flex-direction:column;gap:clamp(1.8rem,3.5vw,2.8rem)}
    .exp-item{display:grid;grid-template-columns:.7fr 1.3fr;gap:clamp(1.5rem,3vw,3rem)}
    /* La formación va separada del trabajo por una línea, no por un título más. */
    .exp-edu{padding-top:clamp(1.8rem,3.5vw,2.8rem);border-top:1px solid ${c.border}}
    .exp-period{font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:${c.accent};margin-bottom:.7rem}
    .exp-role{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:500;color:${c.text};line-height:1.1}
    .exp-co{font-size:.76rem;color:${c.faint};margin-top:.3rem}
    .exp-desc{font-size:.85rem;line-height:1.9;color:${c.muted};font-weight:300}

    /* ══ CONTACTO ══ */
    .contact{display:grid;grid-template-columns:.6fr 1.4fr;gap:clamp(1.8rem,4vw,3.5rem)}
    .socials{display:flex;flex-direction:column;gap:.7rem}
    .soc{
      display:flex;align-items:center;gap:.8rem;padding:.85rem 1.1rem;
      border:1px solid ${c.border};background:${c.surface};color:${c.muted};
      text-decoration:none;font-size:.78rem;
      transition:all .28s cubic-bezier(.22,.61,.36,1);
    }
    .soc:hover{
      border-color:${c.accent};color:${c.accent};
      background:${c.surfaceH};transform:translateX(4px);
    }
    .soc-ic{display:flex;color:${c.accent}}
    .cform{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .fg{display:flex;flex-direction:column;gap:.4rem}
    .fg-full{grid-column:1 / -1}
    .flabel{font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:${c.muted}}
    .finput,.ftextarea{
      background:${c.surface};border:1px solid ${c.border};color:${c.text};
      padding:.8rem .95rem;outline:none;font-family:'DM Sans',sans-serif;
      font-size:.85rem;transition:border-color .22s;resize:none;
    }
    .finput:focus,.ftextarea:focus{border-color:${c.accent}}
    .finput::placeholder,.ftextarea::placeholder{color:${c.faint}}
    .form-status{grid-column:1 / -1;font-size:.75rem;color:${c.accent};min-height:1.2em}

    /* ══ PIE ══ */
    .footer{
      position:relative;z-index:1;
      max-width:1180px;margin:0 auto;padding:2.5rem clamp(1.1rem,4vw,3rem) 3.5rem;
      border-top:1px solid ${c.border};
      display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;
      font-size:.7rem;letter-spacing:.06em;color:${c.faint};
    }
    .footer-built{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.85rem;color:${c.muted}}

    /* ══ ENTRADA AL SCROLL ══
       La transición incluye filter porque el atenuado de foco (más abajo) lo usa
       y todas las secciones de primer nivel llevan data-reveal. */
    [data-reveal]{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s cubic-bezier(.22,.61,.36,1),filter .6s ease}
    [data-reveal].is-in{opacity:1;transform:none}

    /* ══ GUÍA DE SCROLL: ENCUADRE Y FOCO ══
       Cada sección de primer nivel es un punto de anclaje: al soltar el scroll
       cerca de su borde, se acomoda bajo el nav. El hero queda fuera para no dar
       un tirón raro contra el tope de la página. */
    main>section{scroll-snap-align:start}
    /* El hero y la cita quedan fuera del snap: el hero para no dar un tirón
       contra el tope, la cita porque es un puente entre el hero y el contenido,
       no un destino donde valga la pena frenar. */
    .hero,.statement{scroll-snap-align:none}

    /* El hook marca is-away en todas las secciones menos la que tiene el centro
       más cerca del centro de la pantalla. Se atenúan con filter:opacity —no con
       la propiedad opacity— para no pisar la animación de entrada. Toda la
       atención queda en la sección que estás mirando. */
    main>section.is-away{filter:opacity(.5)}

    /* ══ RESPONSIVE ══ */
    @media(max-width:1000px){
      .skills-grid{grid-template-columns:repeat(2,1fr)}
      .proj{grid-template-columns:1fr}
      .proj-visual{border-right:none;border-bottom:1px solid ${c.border};min-height:14rem}
      .exp-item{grid-template-columns:1fr;gap:1.2rem}
      .contact{grid-template-columns:1fr}
    }
    @media(max-width:760px){
      .burger{display:flex}
      .nav-links{
        position:absolute;top:64px;left:0;width:100%;
        flex-direction:column;gap:0;
        background:${dark ? 'rgba(8,8,10,.96)' : 'rgba(214,210,202,.97)'};
        backdrop-filter:blur(18px);
        border-bottom:1px solid ${c.border};
        max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1);
      }
      .nav-links.open{max-height:60vh}
      .nav-links a{padding:1rem clamp(1.1rem,4vw,3rem);border-bottom:1px solid ${c.border}}
      .strip{grid-template-columns:1fr}
      .strip-item{border-left:none;border-top:1px solid ${c.border}}
      .strip-item:first-child{border-top:none}
      .skills-grid{grid-template-columns:1fr}
      .cform{grid-template-columns:1fr}
      .panel{margin-left:clamp(.8rem,4vw,1.5rem);margin-right:clamp(.8rem,4vw,1.5rem)}
    }

    @media(prefers-reduced-motion:reduce){
      html{scroll-behavior:auto;scroll-snap-type:none}
      /* Sin la corrección de iteraciones, las animaciones en bucle (la luz que
         respira, el indicio de scroll) quedarían girando a .01ms para siempre. */
      *{
        transition-duration:.01ms !important;
        animation-duration:.01ms !important;
        animation-iteration-count:1 !important;
      }
      .hero-cue{display:none}
      /* Sin transición, el atenuado sería un parpadeo brusco al scrollear: mejor
         dejar todas las secciones a plena luz. */
      main>section.is-away{filter:none}
    }
  `
}
