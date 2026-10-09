export const es = {
  meta: {
    title: "Santiago Tapia Bazán — Desarrollador Backend & Full-Stack",
    description:
      "Portfolio de Santiago Tapia Bazán: estudiante de Ingeniería Informática, desarrollador backend y full-stack. Proyectos, experiencia y contacto.",
    ogLocale: "es_AR",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    sectionNav: "Navegación por secciones",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    langToEnglish: "Switch language to English",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    profilePhoto: "Foto de perfil de Santiago Tapia Bazán",
    externalLink: "abre en una pestaña nueva",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Estudiante de Ingeniería Informática | Desarrollador Backend & Full-Stack",
    tagline:
      "Construyo software que resuelve problemas reales: backends robustos, automatizaciones y productos web de punta a punta.",
    ctaProjects: "Ver Proyectos",
    ctaContact: "Contactarme",
    ctaCv: "Descargar CV",
    cvEs: "Versión en español (PDF)",
    cvEn: "Versión en inglés (PDF)",
    scrollHint: "Deslizá para explorar",
  },
  about: {
    heading: "Sobre mí",
    description:
      "Estudiante de 3.º año de Ingeniería Informática enfocado en Desarrollo Backend y Automatización de Procesos. Experiencia práctica en desarrollo de aplicaciones web con C#/.NET, diseño e integración de APIs REST, flujos con n8n y gestión de infraestructura/despliegue (DevOps/Render). Apasionado por resolver problemas reales mediante código y optimización de software.",
    educationHeading: "Educación",
    languagesHeading: "Idiomas",
    education: [
      {
        degree: "Ingeniería Informática",
        institution: "Facultad de Ingeniería del Ejército (FIE)",
        period: "2024 – Actualidad",
      },
      {
        degree: "Bachillerato en Ciencias Sociales",
        institution: "Escuela Hans Christian Andersen",
        period: "2019 – 2023",
      },
    ],
    languages: [
      {
        name: "Inglés",
        level: "B2 Upper-Intermediate · First Certificate Cambridge",
      },
      { name: "Español", level: "Nativo" },
    ],
  },
  experience: {
    heading: "Capacitación y experiencia",
    items: [
      {
        org: "Balance Group",
        period: "Febrero 2026",
        role: "Formación virtual orientada a perfil junior en Desarrollo de Software",
        bullets: [
          "Desarrollo Backend avanzado con C# y .NET Framework",
          "Diseño, documentación y consumo de APIs REST con Swagger / OpenAPI",
          "Automatización de flujos e integración de sistemas con n8n",
          "Desarrollo Frontend y maquetación web con HTML, CSS y JavaScript",
        ],
      },
    ],
  },
  projects: {
    heading: "Proyectos",
    featuredHeading: "Logros destacados",
    demosHeading: "Demos en vivo",
    viewDemo: "Ver demo",
    viewRepo: "Ver código",
    repoLabel: "Repositorio en GitHub",
    demoLabel: "Demo en vivo",
  },
  contact: {
    heading: "Contacto",
    intro:
      "¿Tenés un proyecto en mente o querés charlar sobre tecnología? Escribime por el canal que prefieras.",
    whatsapp: "Escribime por WhatsApp",
    whatsappMessage:
      "Hola Santiago, vi tu portfolio y me gustaría ponerme en contacto.",
    email: "Enviame un email",
    emailSubject: "Contacto desde tu portfolio",
    instagram: "Seguime en Instagram",
    github: "Mirá mi código en GitHub",
    linkedin: "Conectá en LinkedIn",
    footerNote: "Próximamente disponible en dominio propio",
    footerMade: "Hecho con Next.js, Tailwind CSS y Framer Motion.",
  },
};

export type Dictionary = typeof es;
