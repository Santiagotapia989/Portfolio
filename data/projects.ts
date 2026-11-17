export interface LocalizedString {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: string;
  year?: string;
  award?: boolean;
  badge?: LocalizedString;
  description: LocalizedString;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "siar",
    title: "SIAR — Sistema de Inspección de Archivos y Repositorios",
    year: "2026",
    award: true,
    badge: {
      es: "1.º Puesto · Hackathon Nacional CYBER.AR 2026",
      en: "1st Place · CYBER.AR 2026 National Cyber Defense Hackathon",
    },
    description: {
      es: "Herramienta de seguridad que audita en un entorno aislado repositorios y paquetes de terceros antes de ser consumidos por agentes de código (Cursor, Claude Code, Copilot, MCP). Combina analizadores deterministas (Unicode oculto, prompt injection, typosquatting, gitleaks) con triaje semántico local vía Ollama y aprobación humana por token.",
      en: "Security platform that audits third-party repositories and packages inside an isolated environment before they are consumed by coding agents (Cursor, Claude Code, Copilot, MCP). Pairs deterministic analyzers (hidden Unicode, prompt injection, typosquatting, gitleaks) with local semantic triage via Ollama and token-based human approval.",
    },
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "MCP Server",
      "SQLite",
      "Ollama",
    ],
    repoUrl: "https://github.com/Santiagotapia989/Hackathon",
  },
  {
    id: "centro-medico",
    title: "Centro Médico Digital",
    year: "2025",
    badge: {
      es: "Plataforma Full Stack",
      en: "Full Stack Platform",
    },
    description: {
      es: "Sistema integral de gestión hospitalaria y reserva de turnos online con autenticación de pacientes, persistencia relacional en PostgreSQL con Prisma y notificaciones transaccionales por correo.",
      en: "End-to-end medical appointment booking and management system featuring patient authentication, PostgreSQL relational persistence with Prisma, and transactional email notifications.",
    },
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL (Neon)",
      "Resend",
    ],
    repoUrl: "https://github.com/Santiagotapia989/mi-gestor-turnos",
    demoUrl: "https://mi-gestor-turnos.vercel.app/",
  },
  {
    id: "centerprints",
    title: "Center Print's S.R.L.",
    year: "2025",
    badge: {
      es: "E-commerce & Catálogo B2B/B2C",
      en: "E-commerce & B2B/B2C Catalog",
    },
    description: {
      es: "Tienda online y catálogo corporativo con filtrado dinámico, estado global de carrito persistente y pasarela de cobro integrada con Mercado Pago.",
      en: "Corporate storefront and e-commerce catalog featuring dynamic filtering, persistent shopping cart state, and integrated Mercado Pago checkout.",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Mercado Pago",
      "Resend",
    ],
    repoUrl: "https://github.com/Santiagotapia989/centerprints-catalog",
    demoUrl: "https://centerprints-catalog.vercel.app/",
  },
  {
    id: "documind",
    title: "DocuMind AI — Asistente RAG",
    year: "2025",
    badge: {
      es: "Arquitectura RAG & Serverless",
      en: "RAG Architecture & Serverless",
    },
    description: {
      es: "Asistente conversacional con recuperación aumentada (RAG) que responde consultas sobre trayectoria y proyectos técnicos. Motor de relevancia propio sobre base documental curada y ejecución serverless en Netlify con inferencia en Groq.",
      en: "Retrieval-Augmented Generation (RAG) assistant that answers technical queries about my work and background. Custom relevance retriever over a curated knowledge base, running on Netlify Functions with Groq inference.",
    },
    tech: ["JavaScript", "RAG", "Netlify Functions", "Groq"],
    repoUrl: "https://github.com/Santiagotapia989/DocuMind-AI",
    demoUrl: "https://docmindaia.netlify.app/",
  },
  {
    id: "hackathon-uca",
    title: "Hackathon UCA — Desarrollo Sostenible",
    year: "2023",
    award: true,
    badge: {
      es: "1.º Puesto · Hackathon UCA 2023",
      en: "1st Place · UCA 2023 Hackathon",
    },
    description: {
      es: "Diseño y validación de una propuesta tecnológica de impacto ambiental y sostenibilidad urbana desarrollada en equipo multidisciplinario bajo presión de tiempo.",
      en: "Design and validation of an urban sustainability and environmental impact solution built within a multidisciplinary team under strict time constraints.",
    },
    tech: ["Arquitectura de solución", "Prototipado", "Liderazgo técnico"],
  },
];

export const liveDemos: Project[] = [
  {
    id: "espacio-garcia",
    title: "Espacio García",
    year: "2025",
    description: {
      es: "Sitio web comercial de alta velocidad con diseño a medida y optimización de carga.",
      en: "High-speed commercial website with custom layout and performance optimization.",
    },
    tech: ["Preact", "Vite", "Netlify"],
    demoUrl: "https://espacio-garcia.netlify.app/",
  },
  {
    id: "libreria-el-garage",
    title: "Librería El Garage",
    year: "2025",
    description: {
      es: "Presencia digital y catálogo navegable con rutas dinámicas para comercio local.",
      en: "Digital storefront and navigable catalog with client-side routing for a local business.",
    },
    tech: ["React", "React Router", "Netlify"],
    demoUrl: "https://libreria-el-garage.netlify.app/",
  },
  {
    id: "casa-planes",
    title: "Casa Planes",
    year: "2025",
    description: {
      es: "Landing page institucional ligera orientada a conversión y contacto directo.",
      en: "Lightweight institutional landing page tailored for conversion and direct inquiries.",
    },
    tech: ["Preact", "Vite", "Netlify"],
    demoUrl: "https://casa-planes.netlify.app/",
  },
];
