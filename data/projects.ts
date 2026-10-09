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
      es: "🥇 1.º Puesto · Hackathon CYBER.AR 2026",
      en: "🥇 1st Place · CYBER.AR 2026 Hackathon",
    },
    description: {
      es: "Herramienta de seguridad basada en IA que actúa como \"aduana\" para agentes de IA que programan: analiza paquetes y repositorios en cuarentena antes de que el agente los use, detectando prompt injection, typosquatting y secretos filtrados. Veredicto vinculante con aprobación humana por token e informe ejecutivo imprimible.",
      en: "AI-based security tool that acts as a \"customs checkpoint\" for coding AI agents: it analyzes packages and repositories in quarantine before the agent can use them, detecting prompt injection, typosquatting and leaked secrets. Binding verdict with human token approval and a printable executive report.",
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
    id: "hackathon-uca",
    title: "Hackathon UCA 2023",
    badge: {
      es: "🥇 1.º Puesto · Hackathon UCA 2023",
      en: "🥇 1st Place · UCA 2023 Hackathon",
    },
    description: {
      es: "Ideación y diseño de una solución integral enfocada en sostenibilidad, desarrollada en equipo durante la hackathon organizada por la UCA.",
      en: "Ideation and design of an integral solution focused on sustainability, built with a team during the hackathon organized by UCA.",
    },
    tech: ["Ideación", "Diseño de solución", "Trabajo en equipo"],
  },
  {
    id: "centro-medico",
    title: "Centro Médico Digital",
    badge: {
      es: "Plataforma web",
      en: "Web platform",
    },
    description: {
      es: "Plataforma integral para la gestión de turnos médicos: reserva online en 4 pasos, autenticación de pacientes, cartilla médica por especialidad y sede, mails de confirmación y exportación de turnos a Excel.",
      en: "Full platform for medical appointment management: 4-step online booking, patient authentication, provider directory by specialty and location, confirmation emails and Excel export of appointments.",
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
      es: "Sitio web corporativo con catálogo dinámico por categorías, carrito de compras persistente, checkout con Mercado Pago, formulario de contacto vía email y botones de WhatsApp por producto.",
      en: "Corporate website with a dynamic category-based catalog, persistent shopping cart, Mercado Pago checkout, email contact form and per-product WhatsApp buttons.",
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
    title: "DocuMind AI — Chatbot RAG",
    badge: {
      es: "Automatización con IA",
      en: "AI automation",
    },
    description: {
      es: "Sistema RAG (Retrieval-Augmented Generation) automatizado con dos flujos en n8n: ingesta de PDFs desde Google Drive, embeddings con Hugging Face indexados en Pinecone, y un agente conversacional con Groq que responde en tiempo real.",
      en: "Automated RAG (Retrieval-Augmented Generation) system with two n8n workflows: PDF ingestion from Google Drive, Hugging Face embeddings indexed in Pinecone, and a conversational agent powered by Groq answering in real time.",
    },
    tech: ["n8n", "Pinecone", "Groq", "Hugging Face", "Google Drive API"],
    repoUrl: "https://github.com/Santiagotapia989/DocuMind-AI",
    demoUrl: "https://documind-stb.netlify.app/",
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
