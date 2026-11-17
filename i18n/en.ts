import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Santiago Tapia Bazán — Full Stack Developer",
    description:
      "Portfolio of Santiago Tapia Bazán: Computer Engineering student, full stack development and process automation. Projects, experience and contact.",
    ogLocale: "en_US",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    sectionNav: "Section navigation",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    langToEnglish: "Cambiar idioma a español",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    profilePhoto: "Portrait of Santiago Tapia Bazán",
    externalLink: "opens in a new tab",
  },
  nav: {
    home: "Index",
    about: "Profile",
    experience: "Experience",
    projects: "Work",
    contact: "Contact",
  },
  hero: {
    status: "Available for Full Stack roles & select projects",
    location: "Buenos Aires, AR",
    greeting: "Computer Engineering · Full Stack & Automation",
    role: "End-to-end software engineering, backend architecture & applied security.",
    tagline:
      "I build reliable web applications, well-structured APIs, and automated workflows designed to solve real problems in production.",
    ctaProjects: "Explore selected work",
    ctaContact: "Start a conversation",
    ctaCv: "Download CV",
    cvEs: "Spanish CV (PDF)",
    cvEn: "English Resume (PDF)",
    scrollHint: "Explore index",
    highlights: [
      { label: "Recognition", value: "1st Place CYBER.AR 2026 Hackathon" },
      { label: "Education", value: "B.S. Computer Engineering · Year 3" },
      { label: "Focus", value: ".NET, Next.js, APIs & SecOps" },
    ],
  },
  about: {
    index: "01 // PROFILE & STACK",
    heading: "About me",
    lead: "Third-year Computer Engineering student focused on building resilient web products, automating complex operations, and applying security-first engineering.",
    description:
      "I work across the stack—from C#/.NET and Node.js backends to modern React and Next.js interfaces in TypeScript. In 2026 I won 1st place at the CYBER.AR National Cyber Defense Hackathon by building an isolated security auditing platform for AI coding agents. I enjoy turning complex requirements into clean, fast, maintainable systems.",
    stackHeading: "Technical arsenal",
    stackGroups: [
      {
        category: "Backend & Data",
        items: ["C# / .NET", "Node.js", "Express", "PostgreSQL", "Prisma", "SQLite", "REST / OpenAPI"],
      },
      {
        category: "Frontend & Product",
        items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Zustand", "Vite"],
      },
      {
        category: "Automation & Security",
        items: ["n8n Workflows", "MCP Servers", "Ollama / RAG", "Gitleaks", "Code Auditing"],
      },
    ],
    educationHeading: "Academic background",
    languagesHeading: "Languages",
    education: [
      {
        degree: "B.S. in Computer Engineering",
        institution: "Facultad de Ingeniería del Ejército (FIE)",
        period: "2024 – Present",
        detail: "Currently in 3rd year of undergraduate studies",
      },
      {
        degree: "High School Diploma in Social Sciences",
        institution: "Hans Christian Andersen School",
        period: "2019 – 2023",
        detail: "Bilingual secondary education",
      },
    ],
    languages: [
      {
        name: "Spanish",
        code: "ES",
        level: "Native speaker",
      },
      {
        name: "English",
        code: "EN",
        level: "B2 Upper-Intermediate · Cambridge First (FCE)",
      },
    ],
  },
  experience: {
    index: "02 // EXPERIENCE",
    heading: "Training & technical experience",
    items: [
      {
        org: "Balance Group",
        period: "February 2026",
        location: "Remote · Argentina",
        role: "Intensive Software Development Training (Junior Engineer Track)",
        stack: ["C#", ".NET Framework", "Swagger / OpenAPI", "n8n", "JavaScript"],
        bullets: [
          "Backend architecture and development using C# and .NET Framework with strict separation of concerns.",
          "RESTful API design, interactive documentation, and consumption using the Swagger / OpenAPI specification.",
          "Automated workflow orchestration and third-party system integration built on n8n.",
          "Semantic, responsive frontend development and UI implementation with modern HTML, CSS, and JavaScript.",
        ],
      },
    ],
  },
  projects: {
    index: "03 // SELECTED WORK",
    heading: "Projects & engineering achievements",
    featuredHeading: "Case studies & featured builds",
    demosHeading: "Live production deployments",
    viewDemo: "Live site",
    viewRepo: "Source code",
    repoLabel: "GitHub repository",
    demoLabel: "Live demo",
    featuredLabel: "FLAGSHIP PROJECT",
  },
  contact: {
    index: "04 // CONTACT",
    heading: "Let's build something together",
    intro:
      "Open to joining engineering teams, taking on select freelance builds, or discussing software architecture and process automation.",
    directLabel: "Direct channels",
    socialsLabel: "Profiles & repositories",
    whatsapp: "Chat on WhatsApp",
    whatsappSub: "Fast response · +54 9 11 2648-5586",
    whatsappMessage:
      "Hi Santiago, I saw your portfolio and I'd like to get in touch.",
    email: "Send an email",
    copyEmail: "Copy address",
    copiedEmail: "Copied to clipboard",
    emailSubject: "Contact from your portfolio",
    instagram: "Instagram",
    github: "GitHub",
    linkedin: "LinkedIn",
    footerNote: "Designed and engineered with care in Buenos Aires.",
    footerMade: "Next.js 14 · TypeScript · Tailwind CSS",
  },
};
