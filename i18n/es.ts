export const es = {
  meta: {
    title: "Santiago Tapia Bazán — Desarrollador Full Stack",
    description:
      "Portfolio de Santiago Tapia Bazán: estudiante de Ingeniería Informática, desarrollador full stack y automatización de procesos. Proyectos, experiencia y contacto.",
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
    profilePhoto: "Retrato de Santiago Tapia Bazán",
    externalLink: "abre en una pestaña nueva",
  },
  nav: {
    home: "Inicio",
    about: "Perfil",
    experience: "Trayectoria",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    status: "Disponible para proyectos y posiciones Full Stack",
    location: "Buenos Aires, AR",
    greeting: "Ingeniería Informática · Full Stack & Automatización",
    role: "Desarrollo de software de punta a punta, arquitectura backend y seguridad aplicada.",
    tagline:
      "Construyo sistemas web confiables, APIs bien estructuradas y flujos automatizados que resuelven problemas reales en producción.",
    ctaProjects: "Explorar obras",
    ctaContact: "Iniciar conversación",
    ctaCv: "Descargar CV",
    cvEs: "Currículum en Español (PDF)",
    cvEn: "Resume in English (PDF)",
    scrollHint: "Explorar índice",
    highlights: [
      { label: "Reconocimiento", value: "1.º Puesto Nacional CYBER.AR 2026" },
      { label: "Formación", value: "Ing. Informática · 3.º Año (FIE)" },
      { label: "Especialidad", value: ".NET, Next.js, APIs & SecOps" },
    ],
  },
  about: {
    index: "01 // PERFIL & STACK",
    heading: "Sobre mí",
    lead: "Estudiante de 3.º año de Ingeniería Informática enfocado en construir productos web sólidos, automatizar procesos complejos y aplicar buenas prácticas de ciberseguridad desde el diseño.",
    description:
      "Trabajo tanto en el backend con C#/.NET y Node.js como en interfaces modernas con Next.js, React y TypeScript. En 2026 obtuve el 1.º puesto en el Hackathon Nacional de Ciberdefensa CYBER.AR desarrollando una plataforma de auditoría para agentes de IA. Disfruto transformar requerimientos desordenados en sistemas limpios, mantenibles y rápidos.",
    stackHeading: "Arsenal técnico",
    stackGroups: [
      {
        category: "Backend & Datos",
        items: ["C# / .NET", "Node.js", "Express", "PostgreSQL", "Prisma", "SQLite", "REST / OpenAPI"],
      },
      {
        category: "Frontend & Producto",
        items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Zustand", "Vite"],
      },
      {
        category: "Automatización & Seguridad",
        items: ["n8n Workflows", "MCP Servers", "Ollama / RAG", "Gitleaks", "Auditoría de código"],
      },
    ],
    educationHeading: "Formación académica",
    languagesHeading: "Idiomas",
    education: [
      {
        degree: "Ingeniería Informática",
        institution: "Facultad de Ingeniería del Ejército (FIE)",
        period: "2024 – Actualidad",
        detail: "Cursando 3.º año de la carrera de grado",
      },
      {
        degree: "Bachillerato en Ciencias Sociales",
        institution: "Escuela Hans Christian Andersen",
        period: "2019 – 2023",
        detail: "Educación secundaria bilingüe",
      },
    ],
    languages: [
      {
        name: "Español",
        code: "ES",
        level: "Nativo",
      },
      {
        name: "Inglés",
        code: "EN",
        level: "B2 Upper-Intermediate · First Certificate (FCE)",
      },
    ],
  },
  experience: {
    index: "02 // TRAYECTORIA",
    heading: "Experiencia y capacitación intensiva",
    items: [
      {
        org: "Balance Group",
        period: "Febrero 2026",
        location: "Remoto · Argentina",
        role: "Formación intensiva en Desarrollo de Software (Perfil Junior)",
        stack: ["C#", ".NET Framework", "Swagger / OpenAPI", "n8n", "JavaScript"],
        bullets: [
          "Arquitectura y desarrollo backend con C# y .NET Framework aplicando principios de separación de responsabilidades.",
          "Diseño, documentación interactiva e integración de APIs RESTful mediante el estándar Swagger / OpenAPI.",
          "Orquestación de flujos de trabajo automatizados e integración entre servicios externos utilizando n8n.",
          "Construcción de interfaces web semánticas y responsivas con HTML5, CSS moderno y JavaScript.",
        ],
      },
    ],
  },
  projects: {
    index: "03 // OBRAS SELECCIONADAS",
    heading: "Proyectos y logros técnicos",
    featuredHeading: "Casos de estudio y desarrollos destacados",
    demosHeading: "Implementaciones web en producción",
    viewDemo: "Sitio en vivo",
    viewRepo: "Repositorio",
    repoLabel: "Repositorio en GitHub",
    demoLabel: "Demo en vivo",
    featuredLabel: "PROYECTO DESTACADO",
  },
  contact: {
    index: "04 // CONTACTO",
    heading: "Hablemos de tu próximo proyecto",
    intro:
      "Disponible para sumarme a equipos de ingeniería, colaborar en desarrollos freelance o conversar sobre arquitectura de software y automatización.",
    directLabel: "Canales directos",
    socialsLabel: "Perfiles y repositorios",
    whatsapp: "Iniciar chat en WhatsApp",
    whatsappSub: "Respuesta rápida · +54 9 11 2648-5586",
    whatsappMessage:
      "Hola Santiago, vi tu portfolio y me gustaría ponerme en contacto.",
    email: "Escribir correo electrónico",
    copyEmail: "Copiar dirección",
    copiedEmail: "Copiado al portapapeles",
    emailSubject: "Contacto desde tu portfolio",
    instagram: "Instagram",
    github: "GitHub",
    linkedin: "LinkedIn",
    footerNote: "Diseñado y desarrollado con atención al detalle en Buenos Aires.",
    footerMade: "Next.js 14 · TypeScript · Tailwind CSS",
  },
};

export type Dictionary = typeof es;
