// Stacks compartidos entre idiomas: son nombres propios, no se traducen.
const STACK = {
  theclub: [
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS 4',
    'Prisma 7',
    'PostgreSQL',
    'MercadoPago',
    'Supabase',
    'Zod',
  ],
  kashboard: [
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Dexie.js',
    'Zustand',
    'Recharts',
    'React Router',
  ],
  atrialife: [
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Vite 6',
    'PWA',
    'React Router 7',
  ],
}

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/GianGrav' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giancarlo-gravagna',
  },
]

const content = {
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Giancarlo Gravagna — Desarrollador Full Stack',
      description:
        'Portafolio de Giancarlo Gravagna, desarrollador Full Stack en La Plata, Buenos Aires. Aplicaciones web y sistemas a medida.',
    },
    nav: {
      about: 'Sobre Mí',
      process: 'Cómo Trabajo',
      skills: 'Herramientas',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      dark: 'Oscuro',
      light: 'Claro',
    },
    cover: {
      kicker: 'Desarrollador Full Stack',
      name: 'Giancarlo Gravagna',
      title: 'Portafolio.',
      role: 'Desarrollo web y software a medida',
      years: '2022 — 2026',
    },
    quote: {
      text: 'El buen software no se nota. Simplemente hace que algo difícil parezca fácil.',
      body: 'Trabajo sobre sistemas que tienen que funcionar todos los días, con personas y dinero real de por medio. Gran parte del trabajo pasa por decidir qué no hacer.',
    },
    about: {
      title: 'Sobre Mí',
      text: 'Programo desde 2022. Empecé con trabajos sueltos y encargos chicos, y este último año me metí de lleno a construir productos web completos: modelo de datos, backend, interfaz y el despliegue que los mantiene en pie. Me tocó armar una tienda que cobra de verdad y una app de finanzas que uso todos los días. Me importa más dejar decisiones que pueda defender y código que el próximo pueda tocar sin miedo —yo mismo dentro de seis meses— que sumar la tecnología de moda.',
      facts: [
        { label: 'Base', value: 'La Plata, Buenos Aires' },
        { label: 'Modalidad', value: 'Freelance · Remoto' },
        { label: 'Idiomas', value: 'Español nativo · Inglés C1' },
        { label: 'Programando', value: 'Desde 2022' },
      ],
      cv: 'Descargar CV',
      cvFile: '/Giancarlo_Gravagna_CV_ES.pdf',
    },
    process: {
      title: 'Cómo Trabajo',
      intro:
        'Tres cosas que hago siempre, sin importar el tamaño del proyecto.',
      steps: [
        {
          n: 'I',
          name: 'Entender antes de escribir',
          text: 'Arranco por para qué y para quién. Los problemas más caros casi nunca son técnicos: son cosas que nadie necesitaba. Prefiero una charla de más que una pantalla de más.',
        },
        {
          n: 'II',
          name: 'Entregar de a poco',
          text: 'Algo que funcione de punta a punta lo antes posible, y crecer desde ahí. Mostrar seguido y temprano es lo que evita las sorpresas al final.',
        },
        {
          n: 'III',
          name: 'Que quede en pie sin mí',
          text: 'Nombres claros, las decisiones difíciles anotadas donde se toman y nada de magia. Si el proyecto depende de que yo esté, algo hice mal.',
        },
      ],
    },
    skills: {
      title: 'Herramientas',
      intro:
        'Lo que uso todos los días, y están funcionando ahora en los proyectos.',
      categories: [
        {
          name: 'Frontend',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Zustand',
            'Recharts',
          ],
          icon: '◈',
        },
        {
          name: 'Backend',
          items: [
            'Node.js',
            'Express',
            'Server Actions',
            'REST APIs',
            'Zod',
            'Python',
          ],
          icon: '◉',
        },
        {
          name: 'Datos',
          items: [
            'PostgreSQL',
            'Prisma',
            'Supabase',
            'Dexie.js',
            'MongoDB',
            'MySQL',
          ],
          icon: '◎',
        },
        {
          name: 'Plataforma',
          items: ['Git', 'Vite', 'Vercel', 'MercadoPago', 'PWA', 'SCRUM'],
          icon: '◐',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      intro:
        'Estos son míos, de punta a punta, y son los que puedo mostrar enteros. Tres problemas distintos: una tienda que cobra de verdad, una app que uso todos los días y un sistema que todavía estoy armando.',
      note: 'De cada uno prefiero contar cuál fue la decisión difícil antes que repetir la lista de tecnologías.',
      privateRepo: 'Repositorio privado',
      demo: 'Ver en vivo',
      status: { live: 'En producción', wip: 'En desarrollo' },
      items: [
        {
          id: 'theclub',
          name: 'TheCLUB-Indumentaria',
          category: 'E-commerce',
          year: '2026',
          role: 'Diseño y desarrollo',
          status: 'live',
          cover: '/projects/theclub.jpg',
          desc: 'Tienda online de ropa urbana que hice de punta a punta para la marca TheCLUB-Indumentaria. Catálogo por categorías con variantes de talle y color, carrito, checkout con MercadoPago y transferencia, cupones y seguimiento de pedidos. Aparte armé el panel de administración: métricas de venta, control de stock y exportación a Excel.',
          note: 'Lo difícil no fue cobrar. Fue que el stock por variante no mintiera nunca, con dos personas comprando el último talle al mismo tiempo.',
          stack: STACK.theclub,
          repo: null,
          demo: 'https://www.theclubindumentaria.store/',
        },
        {
          id: 'kashboard',
          name: 'KASHBOARD',
          category: 'Finanzas personales',
          year: '2025',
          role: 'Proyecto propio',
          status: 'live',
          cover: '/projects/kashboard.jpg',
          desc: 'App de finanzas personales que corre entera en el navegador, sin backend. Maneja varias monedas con cotización en tiempo real, plan de gastos con notas en Markdown, gráficos de evolución y backup local.',
          note: 'Sin servidor no hay cuentas que mantener ni datos míos en la nube de nadie. A cambio, el backup tiene que ser imposible de arruinar.',
          stack: STACK.kashboard,
          repo: null,
          demo: 'https://kash-app-jet.vercel.app',
        },
        {
          id: 'atrialife',
          name: 'ATRIALIFE OS',
          category: 'Sistema personal',
          year: '2026',
          role: 'En construcción',
          status: 'wip',
          cover: '/projects/atrialife.jpg',
          desc: 'PWA que junta el día a día en un solo lugar: agenda, entrenamiento, finanzas y facultad. Por ahora es un prototipo navegable de once pantallas sobre un sistema de componentes propio, con heatmap y gráficos dibujados a mano en SVG. La capa de datos y la sincronización todavía las estoy armando.',
          note: 'Lo muestro a medio hacer a propósito. El diseño y la arquitectura ya están cerrados, y esa fue la parte que más me costó.',
          stack: STACK.atrialife,
          repo: null,
          demo: null,
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          role: 'Desarrollador Full Stack',
          company: 'Freelance · Clientes y proyectos propios',
          period: '2022 – Presente',
          desc: 'Productos web completos, del relevamiento a la puesta en producción: modelo de datos, backend, interfaz y despliegue. Trabajo con React y Next.js sobre TypeScript, APIs y Server Actions en Node, PostgreSQL con Prisma, pagos con MercadoPago y deploy en Vercel. También la parte que no se ve: que el stock no falle con varias compras a la vez, el manejo de errores, las métricas de venta y el mantenimiento de lo que ya está andando.',
        },
      ],
      education: {
        label: 'Formación',
        school: 'Universidad Nacional de La Plata',
        degree: 'Licenciatura en Ciencia de Datos en Organizaciones',
        period: 'En curso',
      },
    },
    contact: {
      title: 'Contacto',
      subtitle:
        '¿Tenés algo en mente? Contame de qué se trata y te digo derecho si te puedo dar una mano.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Contame sobre tu proyecto...',
      sent: '¡Listo! Te respondo a la brevedad.',
      sending: 'Enviando...',
      error: 'No se pudo enviar. Probá de nuevo.',
    },
    colophon: {
      built: 'Diseñado y programado por mí, con React y Vite.',
      rights: '© 2026 Giancarlo Gravagna',
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Giancarlo Gravagna — Full Stack Developer',
      description:
        'Portfolio of Giancarlo Gravagna, Full Stack Developer based in La Plata, Buenos Aires. Web applications and custom systems.',
    },
    nav: {
      about: 'About',
      process: 'How I Work',
      skills: 'Toolkit',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      dark: 'Dark',
      light: 'Light',
    },
    cover: {
      kicker: 'Full Stack Developer',
      name: 'Giancarlo Gravagna',
      title: 'Portfolio.',
      role: 'Custom web and software development',
      years: '2022 — 2026',
    },
    quote: {
      text: 'Good software goes unnoticed. It simply makes something hard feel easy.',
      body: 'I work on systems that have to hold up every day, with real people and real money on the line. A good part of the work is deciding what not to build.',
    },
    about: {
      title: 'About Me',
      text: 'I have been coding since 2022. I started with odd jobs and small commissions, and this past year I went all in on building complete web products: data model, backend, interface and the deployment that keeps them running. Along the way I built a store that actually takes payments and a finance app I use every day. I care more about leaving decisions I can defend and code the next person can touch without fear — myself included six months from now — than about adding whatever framework is in fashion.',
      facts: [
        { label: 'Based in', value: 'La Plata, Buenos Aires' },
        { label: 'Working', value: 'Freelance · Remote' },
        { label: 'Languages', value: 'Spanish native · English C1' },
        { label: 'Coding', value: 'Since 2022' },
      ],
      cv: 'Download CV',
      cvFile: '/Giancarlo_Gravagna_CV_EN.pdf',
    },
    process: {
      title: 'How I Work',
      intro:
        'Three things I always do, whatever the size of the project.',
      steps: [
        {
          n: 'I',
          name: 'Understand before writing',
          text: 'I start with what for and who for. The most expensive problems are almost never technical — they are things nobody needed. I would rather have one more conversation than build one more screen.',
        },
        {
          n: 'II',
          name: 'Ship in small pieces',
          text: 'Something working end to end as early as possible, then grow from there. Showing early and often is what avoids surprises at the end.',
        },
        {
          n: 'III',
          name: 'Leave it standing without me',
          text: 'Clear names, hard decisions written down where they are made, and no magic. If the project depends on me being there, I did something wrong.',
        },
      ],
    },
    skills: {
      title: 'Toolkit',
      intro:
        'What I use day to day, and it is running right now in the projects.',
      categories: [
        {
          name: 'Frontend',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Zustand',
            'Recharts',
          ],
          icon: '◈',
        },
        {
          name: 'Backend',
          items: [
            'Node.js',
            'Express',
            'Server Actions',
            'REST APIs',
            'Zod',
            'Python',
          ],
          icon: '◉',
        },
        {
          name: 'Data',
          items: [
            'PostgreSQL',
            'Prisma',
            'Supabase',
            'Dexie.js',
            'MongoDB',
            'MySQL',
          ],
          icon: '◎',
        },
        {
          name: 'Platform',
          items: ['Git', 'Vite', 'Vercel', 'MercadoPago', 'PWA', 'SCRUM'],
          icon: '◐',
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro:
        'These are mine, end to end, and the ones I can show in full. Three different problems: a store that really takes payments, an app I use every day, and a system I am still building.',
      note: 'For each one I would rather tell you which decision was the hard one than repeat the list of technologies.',
      privateRepo: 'Private repository',
      demo: 'View live',
      status: { live: 'In production', wip: 'In development' },
      items: [
        {
          id: 'theclub',
          name: 'TheCLUB-Indumentaria',
          category: 'E-commerce',
          year: '2026',
          role: 'Design & development',
          status: 'live',
          cover: '/projects/theclub.jpg',
          desc: 'Online streetwear store I built end to end for the brand TheCLUB-Indumentaria. Category catalogue with size and colour variants, cart, checkout via MercadoPago and bank transfer, coupons and order tracking. On top of that I built the admin dashboard: sales metrics, stock control and Excel exports.',
          note: 'Taking payments was not the hard part. Keeping per-variant stock honest when two people buy the last of a size at the same moment — that was.',
          stack: STACK.theclub,
          repo: null,
          demo: 'https://www.theclubindumentaria.store/',
        },
        {
          id: 'kashboard',
          name: 'KASHBOARD',
          category: 'Personal finance',
          year: '2025',
          role: 'Personal project',
          status: 'live',
          cover: '/projects/kashboard.jpg',
          desc: 'Personal finance management running entirely in the browser, with no backend. Multi-currency with real-time rates, spending plans with Markdown notes, wealth evolution charts and local backup.',
          note: 'No server means no accounts to maintain and none of my data in anyone else’s cloud. The trade-off is that backup has to be impossible to get wrong.',
          stack: STACK.kashboard,
          repo: null,
          demo: 'https://kash-app-jet.vercel.app',
        },
        {
          id: 'atrialife',
          name: 'ATRIALIFE OS',
          category: 'Personal system',
          year: '2026',
          role: 'In progress',
          status: 'wip',
          cover: '/projects/atrialife.jpg',
          desc: 'Local-first PWA that pulls everyday life into one place: schedule, training, finances and university. Today it is a navigable eleven-screen prototype on a custom component system, with a heatmap and progression charts hand-drawn in SVG. The data layer and sync are still being built.',
          note: 'I am showing it half-built on purpose: the design and the architecture are settled, and that was the part that took the most out of me.',
          stack: STACK.atrialife,
          repo: null,
          demo: null,
        },
      ],
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'Freelance · Client and personal projects',
          period: '2022 – Present',
          desc: 'Complete web products, from discovery to production: data model, backend, interface and deployment. React and Next.js on TypeScript, APIs and Server Actions in Node, PostgreSQL with Prisma, payments through MercadoPago and continuous deployment on Vercel. Also the part nobody sees: stock consistency under concurrency, error handling, sales metrics and maintaining what is already out there.',
        },
      ],
      education: {
        label: 'Education',
        school: 'Universidad Nacional de La Plata',
        degree: 'BSc in Data Science for Organisations',
        period: 'In progress',
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Got something in mind? Tell me what it is about and I will be straight with you about whether I can help.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me about your project...',
      sent: 'Got it! I will get back to you shortly.',
      sending: 'Sending...',
      error: 'Could not send. Please try again.',
    },
    colophon: {
      built: 'Designed and coded by me, with React and Vite.',
      rights: '© 2026 Giancarlo Gravagna',
    },
  },
}

export default content
