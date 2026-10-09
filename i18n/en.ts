import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Santiago Tapia Bazán — Backend & Full-Stack Developer",
    description:
      "Portfolio of Santiago Tapia Bazán: Computer Engineering student, backend & full-stack developer. Projects, experience and contact.",
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
    profilePhoto: "Profile photo of Santiago Tapia Bazán",
    externalLink: "opens in a new tab",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Computer Engineering Student | Backend & Full-Stack Developer",
    tagline:
      "I build software that solves real problems: robust backends, automations and end-to-end web products.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
    ctaCv: "Download CV",
    cvEs: "Spanish version (PDF)",
    cvEn: "English version (PDF)",
    scrollHint: "Scroll to explore",
  },
  about: {
    heading: "About me",
    description:
      "Third-year Computer Engineering student focused on Backend Development and Process Automation. Hands-on experience building web applications with C#/.NET, designing and integrating REST APIs, n8n workflows, and infrastructure/deployment management (DevOps/Render). Passionate about solving real-world problems through code and software optimization.",
    educationHeading: "Education",
    languagesHeading: "Languages",
    education: [
      {
        degree: "Computer Engineering",
        institution: "Facultad de Ingeniería del Ejército (FIE)",
        period: "2024 – Present",
      },
      {
        degree: "High School Diploma in Social Sciences",
        institution: "Hans Christian Andersen School",
        period: "2019 – 2023",
      },
    ],
    languages: [
      {
        name: "English",
        level: "B2 Upper-Intermediate · Cambridge First Certificate",
      },
      { name: "Spanish", level: "Native" },
    ],
  },
  experience: {
    heading: "Training & Experience",
    items: [
      {
        org: "Balance Group",
        period: "February 2026",
        role: "Virtual training program for a junior Software Development profile",
        bullets: [
          "Advanced backend development with C# and .NET Framework",
          "Design, documentation and consumption of REST APIs with Swagger / OpenAPI",
          "Workflow automation and system integration with n8n",
          "Frontend development and web layout with HTML, CSS and JavaScript",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    featuredHeading: "Featured achievements",
    demosHeading: "Live demos",
    viewDemo: "View demo",
    viewRepo: "View code",
    repoLabel: "GitHub repository",
    demoLabel: "Live demo",
  },
  contact: {
    heading: "Contact",
    intro:
      "Have a project in mind or want to chat about technology? Reach out through whichever channel you prefer.",
    whatsapp: "Message me on WhatsApp",
    whatsappMessage:
      "Hi Santiago, I saw your portfolio and I'd like to get in touch.",
    email: "Send me an email",
    emailSubject: "Contact from your portfolio",
    instagram: "Follow me on Instagram",
    github: "Check out my code on GitHub",
    linkedin: "Connect on LinkedIn",
    footerNote: "Coming soon on its own domain",
    footerMade: "Built with Next.js, Tailwind CSS and Framer Motion.",
  },
};
