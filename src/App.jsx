import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_EMAIL       = import.meta.env.VITE_CONTACT_EMAIL

const content = {
  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      cta: 'Ver mi trabajo',
      cv: 'Descargar CV',
      cvFile: '/Giancarlo_Gravagna_CV_ES.pdf',
    },
    about: {
      title: 'Sobre Mí',
      text: 'Soy un desarrollador Full Stack apasionado por construir soluciones digitales elegantes y eficientes. Con experiencia en tecnologías modernas tanto del lado del cliente como del servidor, disfruto transformar ideas complejas en experiencias web fluidas y de alto rendimiento. Me enfoco en escribir código limpio, escalable y mantenible.',
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
          icon: '◈',
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Python', 'Express', 'REST APIs'],
          icon: '◉',
        },
        {
          name: 'Bases de Datos',
          items: ['PostgreSQL', 'MySQL', 'MongoDB'],
          icon: '◎',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      privateRepo: 'Repositorio privado',
      items: [
        {
          name: 'KASH',
          category: 'Finanzas personales',
          desc: 'App web de gestión financiera personal que corre completamente en el navegador sin backend. Multi-moneda con cotizaciones en tiempo real, plan de gastos con notas Markdown, gráficos de evolución patrimonial y backup local.',
          stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Dexie.js', 'Zustand', 'Recharts', 'React Router'],
          repo: null,
          demo: 'https://kash-app-jet.vercel.app',
        },
      ],
    },
    experience: {
      title: 'Experiencia Laboral',
      jobs: [
        {
          role: 'Desarrollador Full Stack',
          company: 'Freelance',
          period: '2022 – Presente',
          desc: 'Desarrollo de aplicaciones web completas abarcando frontend y backend, utilizando JavaScript, React, Node.js y bases de datos SQL. Implementación de APIs REST para la gestión eficiente de datos y lógica de negocio, asegurando escalabilidad y buen rendimiento. Diseño de interfaces responsivas centradas en la experiencia de usuario (UX) y la usabilidad en distintos dispositivos. Trabajo bajo metodologías ágiles (SCRUM) y uso de control de versiones con Git en entornos colaborativos. Resolución de problemas técnicos, mantenimiento y optimización de rendimiento en aplicaciones existentes.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tenés un proyecto en mente? Hablemos.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Contame sobre tu proyecto...',
      sent: '¡Mensaje enviado con éxito!',
      sending: 'Enviando...',
      error: 'Error al enviar. Intentá de nuevo.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      cta: 'See my work',
      cv: 'Download CV',
      cvFile: '/Giancarlo_Gravagna_CV_EN.pdf',
    },
    about: {
      title: 'About Me',
      text: "I'm a Full Stack Developer passionate about building elegant and efficient digital solutions. With experience in modern technologies on both client and server sides, I enjoy transforming complex ideas into smooth, high-performance web experiences. I focus on writing clean, scalable, and maintainable code.",
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
          icon: '◈',
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Python', 'Express', 'REST APIs'],
          icon: '◉',
        },
        {
          name: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'MongoDB'],
          icon: '◎',
        },
      ],
    },
    projects: {
      title: 'Projects',
      privateRepo: 'Private repository',
      items: [
        {
          name: 'KASH',
          category: 'Personal Finance',
          desc: 'Personal finance web app that runs entirely in the browser with no backend. Multi-currency with real-time exchange rates, spending plans with Markdown notes, wealth evolution charts and local backup.',
          stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Dexie.js', 'Zustand', 'Recharts', 'React Router'],
          repo: null,
          demo: 'https://kash-app-jet.vercel.app',
        },
      ],
    },
    experience: {
      title: 'Work Experience',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'Freelance',
          period: '2022 – Present',
          desc: 'Development of end-to-end web applications covering both frontend and backend, using JavaScript, React, Node.js, and SQL databases. Implementation of REST APIs for efficient data management and business logic, ensuring scalability and strong performance. Design of responsive user interfaces focused on user experience (UX) and usability across different devices. Experience working with agile methodologies (SCRUM) and version control using Git in collaborative environments. Troubleshooting, maintenance, and performance optimization of existing applications.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Have a project in mind? Let's talk.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me about your project...',
      sent: 'Message sent successfully!',
      sending: 'Sending...',
      error: 'Failed to send. Please try again.',
    },
  },
}

export default function Portfolio() {
  const [lang, setLang] = useState('es')
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const t = content[lang]

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message || !isValidEmail(form.email)) return
    setSending(true)
    setSendError(false)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: CONTACT_EMAIL },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3500)
    } catch {
      setSendError(true)
      setTimeout(() => setSendError(false), 4000)
    } finally {
      setSending(false)
    }
  }

  const c = dark
    ? {
        bg: '#0D0D11',
        bg2: '#111116',
        surface: '#18181E',
        surfaceH: '#1E1E26',
        border: '#27272F',
        text: '#EAE4D8',
        muted: '#78737E',
        accent: '#C8BAA2',
        accentGlow: 'rgba(200,186,162,0.11)',
        accentS: '#DDD0BC',
        navBg: 'rgba(13,13,17,0.92)',
        invert: '#0D0D11',
      }
    : {
        bg: '#F4F2EE',
        bg2: '#ECEAE5',
        surface: '#FAFAF8',
        surfaceH: '#F4F1EC',
        border: '#D8D4CC',
        text: '#1C1A18',
        muted: '#80796E',
        accent: '#9A8C7A',
        accentGlow: 'rgba(154,140,122,0.13)',
        accentS: '#B0A492',
        navBg: 'rgba(244,242,238,0.93)',
        invert: '#F4F2EE',
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          font-family:'DM Sans',sans-serif;
          background:${c.bg};color:${c.text};
          transition:background .4s,color .4s;
          overflow-x:hidden;
        }
        ::selection{background:${c.accentGlow};color:${c.accent}}

        /* film grain */
        body::after{
          content:'';position:fixed;inset:0;pointer-events:none;z-index:9000;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.045'/%3E%3C/svg%3E");
          opacity:${dark ? 0.7 : 0.35};
        }

        /* NAV */
        .nav{
          position:fixed;top:0;width:100%;z-index:200;height:60px;
          background:${c.navBg};backdrop-filter:blur(22px);
          border-bottom:1px solid ${c.border};
          display:flex;align-items:center;justify-content:space-between;
          padding:0 8%;transition:background .4s;
        }
        .logo{
          font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:500;
          color:${c.accent};letter-spacing:.06em;cursor:pointer;
        }
        .nav-links{display:flex;gap:2.2rem;list-style:none}
        .nav-links a{
          font-size:.73rem;letter-spacing:.14em;text-transform:uppercase;
          color:${c.muted};cursor:pointer;text-decoration:none;
          transition:color .2s;
        }
        .nav-links a:hover{color:${c.accent}}
        .nav-right{display:flex;gap:1.2rem;align-items:center}

        /* TOGGLE SWITCHES */
        .sw-wrap{display:flex;align-items:center;gap:.45rem;cursor:pointer;user-select:none}
        .sw-label{
          font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;
          color:${c.muted};transition:color .25s;line-height:1;
        }
        .sw-label.active{color:${c.accent}}
        .sw-track{
          width:36px;height:18px;border-radius:9px;
          background:${c.border};border:1px solid ${c.border};
          position:relative;cursor:pointer;
          transition:background .3s,border-color .3s;
          flex-shrink:0;
        }
        .sw-track.on{
          background:${c.accent}33;border-color:${c.accent}88;
        }
        .sw-knob{
          position:absolute;top:2px;left:2px;
          width:12px;height:12px;border-radius:50%;
          background:${c.muted};
          transition:transform .28s cubic-bezier(.4,0,.2,1),background .28s;
          box-shadow:0 1px 4px rgba(0,0,0,.35);
        }
        .sw-track.on .sw-knob{
          transform:translateX(18px);background:${c.accent};
        }

        /* HERO */
        .hero{
          min-height:100vh;display:flex;align-items:center;
          padding:0 8%;position:relative;overflow:hidden;
        }
        .hero-glow{
          position:absolute;top:-15%;right:-8%;
          width:55vw;height:55vw;border-radius:50%;
          background:radial-gradient(circle,${c.accentGlow} 0%,transparent 65%);
          pointer-events:none;
        }
        .hero-line{
          position:absolute;bottom:0;left:0;width:100%;height:1px;
          background:linear-gradient(to right,transparent,${c.accent}55,transparent);
        }
        .hero-inner{position:relative;z-index:1}
        .hero-tag{
          font-size:.75rem;letter-spacing:.25em;text-transform:uppercase;
          color:${c.accent};margin-bottom:1.1rem;
          animation:up .9s ease both;
        }
        .hero-name{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(3.8rem,9vw,7.5rem);font-weight:300;
          line-height:.95;letter-spacing:-.02em;color:${c.text};
          animation:up .9s .1s ease both;
        }
        .hero-name em{color:${c.accent};font-style:italic}
        .hero-sub{
          font-size:1.05rem;color:${c.muted};font-weight:300;
          margin-top:1.75rem;letter-spacing:.04em;
          animation:up .9s .2s ease both;
        }
        .hero-btn{
          display:inline-flex;align-items:center;gap:.8rem;
          margin-top:3rem;padding:.82rem 2rem;
          background:transparent;border:1px solid ${c.accent};
          color:${c.accent};font-family:'DM Sans',sans-serif;
          font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;
          cursor:pointer;transition:all .3s;
          animation:up .9s .3s ease both;
        }
        .hero-btn:hover{background:${c.accent};color:${c.invert}}

        /* SECTIONS */
        .sec{padding:7rem 8%;position:relative}
        .sec-alt{background:${c.bg2}}
        .sec-label{font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:${c.accent};margin-bottom:.7rem}
        .sec-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:400;
          color:${c.text};margin-bottom:2.8rem;line-height:1.05;
        }
        .sec-rule{width:44px;height:1px;background:${c.accent};margin-bottom:2.8rem}

        /* ABOUT */
        .about-p{
          font-size:1.05rem;line-height:1.95;color:${c.muted};
          max-width:580px;font-weight:300;
        }

        /* SKILLS */
        .skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.4rem}
        .skill-card{
          background:${c.surface};border:1px solid ${c.border};
          padding:2rem;transition:all .35s;position:relative;overflow:hidden;
        }
        .skill-card::before{
          content:'';position:absolute;top:0;left:0;
          width:100%;height:2px;
          background:linear-gradient(to right,${c.accent},transparent);
          transform:scaleX(0);transform-origin:left;transition:transform .35s;
        }
        .skill-card:hover::before{transform:scaleX(1)}
        .skill-card:hover{border-color:${c.accent}55;background:${c.surfaceH}}
        .sk-icon{font-size:1.4rem;color:${c.accent};margin-bottom:1rem}
        .sk-name{
          font-family:'Cormorant Garamond',serif;font-size:1.5rem;
          font-weight:500;color:${c.text};margin-bottom:1.2rem;
        }
        .sk-tags{display:flex;flex-wrap:wrap;gap:.45rem}
        .sk-tag{
          font-size:.71rem;letter-spacing:.04em;padding:.28rem .65rem;
          border:1px solid ${c.border};color:${c.muted};transition:all .2s;
        }
        .skill-card:hover .sk-tag{border-color:${c.accent}44;color:${c.text}}

        /* EXPERIENCE */
        .exp-wrap{position:relative;padding-left:1.8rem}
        .exp-wrap::before{
          content:'';position:absolute;left:0;top:8px;bottom:0;width:1px;
          background:linear-gradient(to bottom,${c.accent},transparent);
        }
        .exp-item{position:relative;padding:0 0 3rem 2rem}
        .exp-item::before{
          content:'';position:absolute;left:-4.5px;top:7px;
          width:9px;height:9px;background:${c.accent};border-radius:50%;
          box-shadow:0 0 14px ${c.accent}88;
        }
        .exp-period{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:${c.accent};margin-bottom:.45rem}
        .exp-role{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:500;color:${c.text};margin-bottom:.2rem}
        .exp-co{font-size:.83rem;color:${c.muted};margin-bottom:.7rem;letter-spacing:.02em}
        .exp-desc{font-size:.88rem;line-height:1.85;color:${c.muted};font-weight:300;max-width:540px}

        /* CONTACT */
        .contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:5rem;align-items:start}
        .contact-sub{
          font-family:'Cormorant Garamond',serif;font-size:1.7rem;
          font-weight:300;font-style:italic;color:${c.muted};
          margin-bottom:2.5rem;line-height:1.45;
        }
        .socials{display:flex;flex-direction:column;gap:1rem}
        .soc{
          display:flex;align-items:center;gap:1rem;
          padding:.95rem 1.2rem;border:1px solid ${c.border};
          background:${c.surface};color:${c.muted};
          text-decoration:none;font-size:.84rem;letter-spacing:.05em;
          transition:all .3s;cursor:pointer;
        }
        .soc:hover{border-color:${c.accent};color:${c.accent}}
        .soc-ic{font-size:1rem;color:${c.accent}}

        /* FORM */
        .cform{display:flex;flex-direction:column;gap:1.2rem}
        .fg{display:flex;flex-direction:column;gap:.35rem}
        .flabel{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:${c.muted}}
        .finput,.ftextarea{
          background:${c.surface};border:1px solid ${c.border};
          color:${c.text};padding:.82rem 1rem;outline:none;
          font-family:'DM Sans',sans-serif;font-size:.88rem;
          transition:border-color .2s;resize:none;
        }
        .finput:focus,.ftextarea:focus{border-color:${c.accent}}
        .finput::placeholder,.ftextarea::placeholder{color:${c.muted}55}
        .fsend{
          background:${c.accent};border:none;color:${c.invert};
          padding:.88rem 2rem;font-family:'DM Sans',sans-serif;
          font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;
          cursor:pointer;transition:opacity .25s;width:fit-content;
        }
        .fsend:hover{opacity:.82}
        .fsend:disabled{opacity:.5;cursor:default}
        .sent-ok{color:${c.accent};font-size:.83rem;letter-spacing:.1em;animation:up .4s ease}

        /* PROJECTS */
        .proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.4rem}
        .proj-card{
          background:${c.surface};border:1px solid ${c.border};
          padding:2.2rem;transition:all .35s;position:relative;overflow:hidden;
          display:flex;flex-direction:column;
        }
        .proj-card::before{
          content:'';position:absolute;top:0;left:0;
          width:100%;height:2px;
          background:linear-gradient(to right,${c.accent},transparent);
          transform:scaleX(0);transform-origin:left;transition:transform .35s;
        }
        .proj-card:hover::before{transform:scaleX(1)}
        .proj-card:hover{border-color:${c.accent}55;background:${c.surfaceH}}
        .proj-cat{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:${c.accent};margin-bottom:.8rem}
        .proj-name{
          font-family:'Cormorant Garamond',serif;font-size:2rem;
          font-weight:500;color:${c.text};margin-bottom:1rem;line-height:1;
        }
        .proj-desc{font-size:.88rem;line-height:1.85;color:${c.muted};font-weight:300;flex:1;margin-bottom:1.4rem}
        .proj-stack{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.4rem}
        .proj-tag{
          font-size:.68rem;letter-spacing:.04em;padding:.22rem .6rem;
          border:1px solid ${c.border};color:${c.muted};
        }
        .proj-card:hover .proj-tag{border-color:${c.accent}44;color:${c.text}}
        .proj-footer{display:flex;gap:.8rem;align-items:center;margin-top:auto}
        .proj-link{
          display:inline-flex;align-items:center;gap:.5rem;
          font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;
          color:${c.accent};text-decoration:none;border:1px solid ${c.accent}66;
          padding:.38rem .9rem;transition:all .25s;
        }
        .proj-link:hover{background:${c.accent};color:${c.invert}}
        .proj-private{
          font-size:.7rem;letter-spacing:.1em;color:${c.muted};
          display:flex;align-items:center;gap:.4rem;
        }

        /* HAMBURGER */
        .hamburger{
          display:none;flex-direction:column;justify-content:center;gap:5px;
          cursor:pointer;padding:4px;background:none;border:none;
        }
        .hamburger span{
          display:block;width:22px;height:1px;
          background:${c.muted};transition:all .28s;
        }
        .hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg);background:${c.accent}}
        .hamburger.open span:nth-child(2){opacity:0}
        .hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);background:${c.accent}}

        /* MOBILE MENU */
        .mobile-menu{
          position:fixed;top:60px;left:0;width:100%;
          background:${c.navBg};backdrop-filter:blur(22px);
          border-bottom:1px solid ${c.border};
          z-index:199;
          display:flex;flex-direction:column;
          max-height:0;overflow:hidden;
          transition:max-height .35s cubic-bezier(.4,0,.2,1);
        }
        .mobile-menu.open{max-height:320px}
        .mobile-menu a{
          padding:1rem 8%;font-size:.78rem;letter-spacing:.14em;
          text-transform:uppercase;color:${c.muted};
          border-bottom:1px solid ${c.border}66;cursor:pointer;
          text-decoration:none;transition:color .2s;
        }
        .mobile-menu a:hover{color:${c.accent}}

        /* FOOTER */
        .footer{
          padding:1.8rem 8%;border-top:1px solid ${c.border};
          display:flex;justify-content:space-between;align-items:center;
        }
        .ft{font-size:.73rem;color:${c.muted};letter-spacing:.04em}
        .ft-brand{
          font-family:'Cormorant Garamond',serif;font-style:italic;
          color:${c.accent};font-size:.85rem;
        }

        @keyframes up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}

        @media(max-width:780px){
          .nav-links{display:none}
          .hamburger{display:flex}
          .hero,.sec{padding-left:6%;padding-right:6%}
          .contact-grid{grid-template-columns:1fr;gap:3rem}
          .footer{flex-direction:column;gap:.8rem;text-align:center}
          .proj-grid{grid-template-columns:1fr}
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="logo" onClick={() => scrollTo('hero')}>
          G.G.
        </div>
        <ul className="nav-links">
          {['about', 'skills', 'projects', 'experience', 'contact'].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s) }}>{t.nav[s]}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
          {/* Lang toggle: ES ←→ EN */}
          <div
            className="sw-wrap"
            onClick={() => setLang((l) => (l === 'es' ? 'en' : 'es'))}
          >
            <span className={`sw-label ${lang === 'es' ? 'active' : ''}`}>
              ES
            </span>
            <div className={`sw-track ${lang === 'en' ? 'on' : ''}`}>
              <div className="sw-knob" />
            </div>
            <span className={`sw-label ${lang === 'en' ? 'active' : ''}`}>
              EN
            </span>
          </div>
          {/* Theme toggle: moon ←→ sun */}
          <div className="sw-wrap" onClick={() => setDark((d) => !d)}>
            <span className={`sw-label ${dark ? 'active' : ''}`}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            </span>
            <div className={`sw-track ${!dark ? 'on' : ''}`}>
              <div className="sw-knob" />
            </div>
            <span className={`sw-label ${!dark ? 'active' : ''}`}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['about', 'skills', 'projects', 'experience', 'contact'].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            onClick={(e) => { e.preventDefault(); scrollTo(s); setMenuOpen(false) }}
          >
            {t.nav[s]}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-glow" />
        <div className="hero-line" />
        <div className="hero-inner">
          <p className="hero-tag">{t.hero.greeting}</p>
          <h1 className="hero-name">
            Giancarlo
            <br />
            <em>Gravagna</em>
          </h1>
          <p className="hero-sub">{t.hero.role}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="hero-btn" onClick={() => scrollTo('about')}>
              {t.hero.cta} <span style={{ fontSize: '1.1rem' }}>↓</span>
            </button>
            <a
              className="hero-btn"
              href={t.hero.cvFile}
              download
              style={{ textDecoration: 'none' }}
            >
              {t.hero.cv} <span style={{ fontSize: '1rem' }}>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec" id="about">
        <p className="sec-label">01</p>
        <h2 className="sec-title">{t.about.title}</h2>
        <div className="sec-rule" />
        <p className="about-p">{t.about.text}</p>
      </section>

      {/* SKILLS */}
      <section className="sec sec-alt" id="skills">
        <p className="sec-label">02</p>
        <h2 className="sec-title">{t.skills.title}</h2>
        <div className="sec-rule" />
        <div className="skills-grid">
          {t.skills.categories.map((cat) => (
            <div className="skill-card" key={cat.name}>
              <div className="sk-icon">{cat.icon}</div>
              <div className="sk-name">{cat.name}</div>
              <div className="sk-tags">
                {cat.items.map((item) => (
                  <span className="sk-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="sec sec-alt" id="projects">
        <p className="sec-label">03</p>
        <h2 className="sec-title">{t.projects.title}</h2>
        <div className="sec-rule" />
        <div className="proj-grid">
          {t.projects.items.map((proj) => (
            <div className="proj-card" key={proj.name}>
              <p className="proj-cat">{proj.category}</p>
              <p className="proj-name">{proj.name}</p>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-stack">
                {proj.stack.map((tech) => (
                  <span className="proj-tag" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="proj-footer">
                {proj.demo && (
                  <a className="proj-link" href={proj.demo} target="_blank" rel="noopener noreferrer">
                    Live demo ↗
                  </a>
                )}
                {proj.repo ? (
                  <a className="proj-link" href={proj.repo} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                ) : (
                  <span className="proj-private">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    {t.projects.privateRepo}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sec" id="experience">
        <p className="sec-label">04</p>
        <h2 className="sec-title">{t.experience.title}</h2>
        <div className="sec-rule" />
        <div className="exp-wrap">
          {t.experience.jobs.map((job, i) => (
            <div className="exp-item" key={i}>
              <p className="exp-period">{job.period}</p>
              <p className="exp-role">{job.role}</p>
              <p className="exp-co">{job.company}</p>
              <p className="exp-desc">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec sec-alt" id="contact">
        <p className="sec-label">05</p>
        <h2 className="sec-title">{t.contact.title}</h2>
        <div className="sec-rule" />
        <div className="contact-grid">
          <div>
            <p className="contact-sub">{t.contact.subtitle}</p>
            <div className="socials">
              <a
                className="soc"
                href="https://github.com/GianGrav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="soc-ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                GitHub
              </a>
              <a
                className="soc"
                href="https://www.linkedin.com/in/giancarlo-gravagna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="soc-ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="cform">
            <div className="fg">
              <label className="flabel" htmlFor="cf-name">{t.contact.name}</label>
              <input
                id="cf-name"
                className="finput"
                placeholder={t.contact.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="cf-email">{t.contact.email}</label>
              <input
                id="cf-email"
                className="finput"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="cf-message">{t.contact.message}</label>
              <textarea
                id="cf-message"
                className="ftextarea"
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            {sent ? (
              <p className="sent-ok">✓ {t.contact.sent}</p>
            ) : sendError ? (
              <p className="sent-ok" style={{ color: '#c27b7b' }}>✕ {t.contact.error}</p>
            ) : (
              <button
                className="fsend"
                onClick={handleSend}
                disabled={sending || !form.name || !isValidEmail(form.email) || !form.message}
              >
                {sending ? t.contact.sending : t.contact.send}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="ft">© 2026 Giancarlo Gravagna</p>
        <p className="ft-brand">Crafted with precision</p>
      </footer>
    </>
  )
}
