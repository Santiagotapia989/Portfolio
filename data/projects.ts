export interface LocalizedString {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: string;
  badge?: LocalizedString;
  description: LocalizedString;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}

/**
 * Logros destacados — info tomada de los README de cada repo (clonados a /tmp
 * durante la generación) y de los datos provistos por el autor.
 */
export const featuredProjects: Project[] = [
  {
    id: "siar",
    title: "SIAR — Sistema de Inspección de Archivos y Repositorios",
    badge: {
      es: "🥇 1.º Puesto · Hackathon Nacional de Ciberdefensa CYBER.AR 2026",
      en: "🥇 1st Place · CYBER.AR 2026 National Cyber Defense Hackathon",
    },
    description: {
      es: "Herramienta de seguridad basada en IA que analiza en un entorno aislado repositorios y paquetes de terceros antes de que los consuman agentes de IA (Cursor, Claude Code, Copilot, MCP). Analizadores deterministas (Unicode oculto, prompt injection, typosquatting, secretos con gitleaks) combinados con triage semántico mediante un modelo local (Ollama). Arquitectura full-stack: TypeScript, Node/Express, React 18, Vite y Tailwind, con aprobación humana por token.",
      en: "AI-based security tool that analyzes third-party repositories and packages in an isolated environment before they are consumed by AI agents (Cursor, Claude Code, Copilot, MCP). Deterministic analyzers (hidden Unicode, prompt injection, typosquatting, secrets via gitleaks) combined with semantic triage powered by a local model (Ollama). Full-stack architecture: TypeScript, Node/Express, React 18, Vite and Tailwind, with human token-based approval.",
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
    badge: {
      es: "Plataforma web",
      en: "Web platform",
    },
    description: {
      es: "Plataforma de gestión de turnos: reserva de turnos médicos online con autenticación, PostgreSQL (Prisma) y mails de confirmación. Next.js 14, React y TypeScript; desplegado en Vercel.",
      en: "Appointment management platform: online medical appointment booking with authentication, PostgreSQL (Prisma) and confirmation emails. Next.js 14, React and TypeScript; deployed on Vercel.",
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
    badge: {
      es: "Sitio corporativo + e-commerce",
      en: "Corporate site + e-commerce",
    },
    description: {
      es: "Sitio web y catálogo e-commerce: catálogo dinámico y carrito de compras con checkout en Mercado Pago. Next.js 14, TypeScript y Tailwind CSS.",
      en: "Website & e-commerce catalog: dynamic catalog and shopping cart with Mercado Pago checkout. Next.js 14, TypeScript and Tailwind CSS.",
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
    id: "hackathon-uca",
    title: "Hackathon UCA — Competencia de Desarrollo Sostenible",
    badge: {
      es: "🥇 1.º Puesto · Hackathon UCA 2023",
      en: "🥇 1st Place · UCA 2023 Hackathon",
    },
    description: {
      es: "1.º Puesto. Diseño de una solución integral de sostenibilidad en equipos multidisciplinarios y bajo presión de tiempo.",
      en: "1st Place. Designed an integral sustainability solution in multidisciplinary teams under time pressure.",
    },
    tech: ["Ideación", "Diseño de solución", "Trabajo en equipo"],
  },
  {
    id: "documind",
    title: "DocuMind AI — Chatbot RAG",
    badge: {
      es: "Automatización con IA",
      en: "AI automation",
    },
    description: {
      es: "Chatbot conversacional con arquitectura RAG que responde sobre mi perfil, experiencia y proyectos. Buscador de relevancia propio sobre una base de conocimiento curada, función serverless en Netlify y generación con LLM (Groq o fallback gratuito).",
      en: "Conversational chatbot with a RAG architecture that answers questions about my profile, experience and projects. Custom relevance-based retriever over a curated knowledge base, Netlify serverless function and LLM generation (Groq or a free fallback).",
    },
    tech: ["JavaScript", "RAG", "Netlify Functions", "Groq"],
    repoUrl: "https://github.com/Santiagotapia989/DocuMind-AI",
    demoUrl: "https://docmindaia.netlify.app/",
  },
];

/** Demos web en vivo (Netlify). */
export const liveDemos: Project[] = [
  {
    id: "espacio-garcia",
    title: "Espacio García",
    description: {
      es: "Sitio web en vivo desplegado en Netlify.",
      en: "Live website deployed on Netlify.",
    },
    tech: ["Preact", "Vite", "Netlify"],
    demoUrl: "https://espacio-garcia.netlify.app/",
  },
  {
    id: "libreria-el-garage",
    title: "Librería El Garage",
    description: {
      es: "Sitio web en vivo desplegado en Netlify.",
      en: "Live website deployed on Netlify.",
    },
    tech: ["React", "React Router", "Netlify"],
    demoUrl: "https://libreria-el-garage.netlify.app/",
  },
  {
    id: "casa-planes",
    title: "Casa Planes",
    description: {
      es: "Sitio web en vivo desplegado en Netlify.",
      en: "Live website deployed on Netlify.",
    },
    tech: ["Preact", "Vite", "Netlify"],
    demoUrl: "https://casa-planes.netlify.app/",
  },
];
