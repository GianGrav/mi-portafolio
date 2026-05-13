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
        { name: 'Frontend',        items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'], icon: '◈' },
        { name: 'Backend',         items: ['Node.js', 'Python', 'Express', 'REST APIs'],          icon: '◉' },
        { name: 'Bases de Datos',  items: ['PostgreSQL', 'MySQL', 'MongoDB'],                     icon: '◎' },
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
        { name: 'Frontend',  items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'], icon: '◈' },
        { name: 'Backend',   items: ['Node.js', 'Python', 'Express', 'REST APIs'],          icon: '◉' },
        { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'],                     icon: '◎' },
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

export default content
