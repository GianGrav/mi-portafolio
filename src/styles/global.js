export default function getStyles(c, dark) {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{font-family:'DM Sans',sans-serif;background:${c.bg};color:${c.text};transition:background .4s,color .4s;overflow-x:hidden;}
    ::selection{background:${c.accentGlow};color:${c.accent}}

    body::after{
      content:'';position:fixed;inset:0;pointer-events:none;z-index:9000;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.045'/%3E%3C/svg%3E");
      opacity:${dark ? 0.7 : 0.35};
    }

    /* NAV */
    .nav{position:fixed;top:0;width:100%;z-index:200;height:60px;background:${c.navBg};backdrop-filter:blur(22px);border-bottom:1px solid ${c.border};display:flex;align-items:center;justify-content:space-between;padding:0 8%;transition:background .4s;}
    .logo{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:500;color:${c.accent};letter-spacing:.06em;cursor:pointer;}
    .nav-links{display:flex;gap:2.2rem;list-style:none}
    .nav-links a{font-size:.73rem;letter-spacing:.14em;text-transform:uppercase;color:${c.muted};cursor:pointer;text-decoration:none;transition:color .2s;}
    .nav-links a:hover{color:${c.accent}}
    .nav-right{display:flex;gap:1.2rem;align-items:center}

    /* CONTROLS */
    .controls{position:fixed;bottom:2rem;right:2rem;display:flex;flex-direction:column;gap:.5rem;z-index:300;}
    .ctrl-btn{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:1px solid ${c.accent}55;background:${c.surface};color:${c.accent};cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.68rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;transition:all .18s;user-select:none;box-shadow:0 4px 8px rgba(0,0,0,.35),0 1px 3px rgba(0,0,0,.2),inset 0 1px 0 ${c.accent}22;}
    .ctrl-btn.pressed{background:${c.accent}22;border-color:${c.accent}99;box-shadow:inset 0 3px 7px rgba(0,0,0,.4),inset 0 1px 3px rgba(0,0,0,.25);transform:translateY(1px);}
    .ctrl-btn:hover:not(.pressed){background:${c.surfaceH};box-shadow:0 6px 14px rgba(0,0,0,.38),0 2px 5px rgba(0,0,0,.22),inset 0 1px 0 ${c.accent}33;transform:translateY(-1px);}
    .ctrl-btn:active{box-shadow:inset 0 4px 8px rgba(0,0,0,.45);transform:translateY(1px);}
    .mobile-controls{display:flex;align-items:center;gap:.8rem;padding:1rem 8%;border-bottom:1px solid ${c.border}66;}
    .mobile-ctrl-btn{display:flex;align-items:center;justify-content:center;gap:.4rem;padding:.45rem .9rem;border:1px solid ${c.border};background:${c.surface};color:${c.muted};font-family:'DM Sans',sans-serif;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:all .18s;user-select:none;box-shadow:0 2px 5px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.04);}
    .mobile-ctrl-btn.pressed{background:${c.accent}20;border-color:${c.accent}88;color:${c.accent};box-shadow:inset 0 2px 5px rgba(0,0,0,.35);transform:translateY(1px);}

    /* HAMBURGER */
    .hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;cursor:pointer;padding:4px;background:none;border:none;}
    .hamburger span{display:block;width:22px;height:1px;background:${c.muted};transition:all .28s;}
    .hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);background:${c.accent}}
    .hamburger.open span:nth-child(2){opacity:0}
    .hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);background:${c.accent}}

    /* MOBILE MENU */
    .mobile-menu{position:fixed;top:60px;left:0;width:100%;background:${c.navBg};backdrop-filter:blur(22px);border-bottom:1px solid ${c.border};z-index:199;display:flex;flex-direction:column;max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1);}
    .mobile-menu.open{max-height:320px}
    .mobile-menu a{padding:1rem 8%;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:${c.muted};border-bottom:1px solid ${c.border}66;cursor:pointer;text-decoration:none;transition:color .2s;}
    .mobile-menu a:hover{color:${c.accent}}

    /* HERO */
    .hero{min-height:100vh;display:flex;align-items:center;padding:0 8%;position:relative;overflow:hidden;}
    .hero-glow{position:absolute;top:-15%;right:-8%;width:55vw;height:55vw;border-radius:50%;background:radial-gradient(circle,${c.accentGlow} 0%,transparent 65%);pointer-events:none;}
    .hero-line{position:absolute;bottom:0;left:0;width:100%;height:1px;background:linear-gradient(to right,transparent,${c.accent}55,transparent);}
    .hero-inner{position:relative;z-index:1}
    .hero-tag{font-size:.75rem;letter-spacing:.25em;text-transform:uppercase;color:${c.accent};margin-bottom:1.1rem;animation:up .9s ease both;}
    .hero-name{font-family:'Cormorant Garamond',serif;font-size:clamp(3.8rem,9vw,7.5rem);font-weight:300;line-height:.95;letter-spacing:-.02em;color:${c.text};animation:up .9s .1s ease both;}
    .hero-name em{color:${c.accent};font-style:italic}
    .hero-sub{font-size:1.05rem;color:${c.muted};font-weight:300;margin-top:1.75rem;letter-spacing:.04em;animation:up .9s .2s ease both;}
    .hero-btn{display:inline-flex;align-items:center;gap:.8rem;margin-top:3rem;padding:.82rem 2rem;background:transparent;border:1px solid ${c.accent};color:${c.accent};font-family:'DM Sans',sans-serif;font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .3s;animation:up .9s .3s ease both;}
    .hero-btn:hover{background:${c.accent};color:${c.invert}}

    /* SECTIONS */
    .sec{padding:7rem 8%;position:relative}
    .sec-alt{background:${c.bg2}}
    .sec-label{font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:${c.accent};margin-bottom:.7rem}
    .sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:400;color:${c.text};margin-bottom:2.8rem;line-height:1.05;}
    .sec-rule{width:44px;height:1px;background:${c.accent};margin-bottom:2.8rem}

    /* ABOUT */
    .about-p{font-size:1.05rem;line-height:1.95;color:${c.muted};max-width:580px;font-weight:300;}

    /* SKILLS */
    .skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.4rem}
    .skill-card{background:${c.surface};border:1px solid ${c.border};padding:2rem;transition:all .35s;position:relative;overflow:hidden;}
    .skill-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(to right,${c.accent},transparent);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
    .skill-card:hover::before{transform:scaleX(1)}
    .skill-card:hover{border-color:${c.accent}55;background:${c.surfaceH}}
    .sk-icon{font-size:1.4rem;color:${c.accent};margin-bottom:1rem}
    .sk-name{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:500;color:${c.text};margin-bottom:1.2rem;}
    .sk-tags{display:flex;flex-wrap:wrap;gap:.45rem}
    .sk-tag{font-size:.71rem;letter-spacing:.04em;padding:.28rem .65rem;border:1px solid ${c.border};color:${c.muted};transition:all .2s;}
    .skill-card:hover .sk-tag{border-color:${c.accent}44;color:${c.text}}

    /* PROJECTS */
    .proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.4rem}
    .proj-card{background:${c.surface};border:1px solid ${c.border};padding:2.2rem;transition:all .35s;position:relative;overflow:hidden;display:flex;flex-direction:column;}
    .proj-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(to right,${c.accent},transparent);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
    .proj-card:hover::before{transform:scaleX(1)}
    .proj-card:hover{border-color:${c.accent}55;background:${c.surfaceH}}
    .proj-cat{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:${c.accent};margin-bottom:.8rem}
    .proj-name{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:500;color:${c.text};margin-bottom:1rem;line-height:1;}
    .proj-desc{font-size:.88rem;line-height:1.85;color:${c.muted};font-weight:300;flex:1;margin-bottom:1.4rem}
    .proj-stack{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.4rem}
    .proj-tag{font-size:.68rem;letter-spacing:.04em;padding:.22rem .6rem;border:1px solid ${c.border};color:${c.muted};}
    .proj-card:hover .proj-tag{border-color:${c.accent}44;color:${c.text}}
    .proj-footer{display:flex;gap:.8rem;align-items:center;margin-top:auto}
    .proj-link{display:inline-flex;align-items:center;gap:.5rem;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:${c.accent};text-decoration:none;border:1px solid ${c.accent}66;padding:.38rem .9rem;transition:all .25s;}
    .proj-link:hover{background:${c.accent};color:${c.invert}}
    .proj-private{font-size:.7rem;letter-spacing:.1em;color:${c.muted};display:flex;align-items:center;gap:.4rem;}

    /* EXPERIENCE */
    .exp-wrap{position:relative;padding-left:1.8rem}
    .exp-wrap::before{content:'';position:absolute;left:0;top:8px;bottom:0;width:1px;background:linear-gradient(to bottom,${c.accent},transparent);}
    .exp-item{position:relative;padding:0 0 3rem 2rem}
    .exp-item::before{content:'';position:absolute;left:-4.5px;top:7px;width:9px;height:9px;background:${c.accent};border-radius:50%;box-shadow:0 0 14px ${c.accent}88;}
    .exp-period{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:${c.accent};margin-bottom:.45rem}
    .exp-role{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:500;color:${c.text};margin-bottom:.2rem}
    .exp-co{font-size:.83rem;color:${c.muted};margin-bottom:.7rem;letter-spacing:.02em}
    .exp-desc{font-size:.88rem;line-height:1.85;color:${c.muted};font-weight:300;max-width:540px}

    /* CONTACT */
    .contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:5rem;align-items:start}
    .contact-sub{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:300;font-style:italic;color:${c.muted};margin-bottom:2.5rem;line-height:1.45;}
    .socials{display:flex;flex-direction:column;gap:1rem}
    .soc{display:flex;align-items:center;gap:1rem;padding:.95rem 1.2rem;border:1px solid ${c.border};background:${c.surface};color:${c.muted};text-decoration:none;font-size:.84rem;letter-spacing:.05em;transition:all .3s;cursor:pointer;}
    .soc:hover{border-color:${c.accent};color:${c.accent}}
    .soc-ic{font-size:1rem;color:${c.accent}}
    .cform{display:flex;flex-direction:column;gap:1.2rem}
    .fg{display:flex;flex-direction:column;gap:.35rem}
    .flabel{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:${c.muted}}
    .finput,.ftextarea{background:${c.surface};border:1px solid ${c.border};color:${c.text};padding:.82rem 1rem;outline:none;font-family:'DM Sans',sans-serif;font-size:.88rem;transition:border-color .2s;resize:none;}
    .finput:focus,.ftextarea:focus{border-color:${c.accent}}
    .finput::placeholder,.ftextarea::placeholder{color:${c.muted}55}
    .fsend{background:${c.accent};border:none;color:${c.invert};padding:.88rem 2rem;font-family:'DM Sans',sans-serif;font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:opacity .25s;width:fit-content;}
    .fsend:hover{opacity:.82}
    .fsend:disabled{opacity:.5;cursor:default}
    .sent-ok{color:${c.accent};font-size:.83rem;letter-spacing:.1em;animation:up .4s ease}

    /* FOOTER */
    .footer{padding:1.8rem 8%;border-top:1px solid ${c.border};display:flex;justify-content:space-between;align-items:center;}
    .ft{font-size:.73rem;color:${c.muted};letter-spacing:.04em}
    .ft-brand{font-family:'Cormorant Garamond',serif;font-style:italic;color:${c.accent};font-size:.85rem;}

    @keyframes up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}

    @media(max-width:780px){
      .nav-links{display:none}
      .hamburger{display:flex}
      .controls{display:none}
      .hero,.sec{padding-left:6%;padding-right:6%}
      .contact-grid{grid-template-columns:1fr;gap:3rem}
      .footer{flex-direction:column;gap:.8rem;text-align:center}
      .proj-grid{grid-template-columns:1fr}
    }
  `
}
