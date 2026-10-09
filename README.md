# Portfolio — Santiago Tapia Bazán

Portfolio personal moderno, interactivo y bilingüe (ES/EN) construido con
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**, animaciones con
**Framer Motion**, fondo de partículas con **@tsparticles/react**, modo
claro/oscuro con **next-themes** e i18n propio (sin librerías pesadas).

## Instalación

```bash
npm install
```

## Scripts

| Comando         | Descripción                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Servidor de desarrollo (localhost:3000)  |
| `npm run build` | Build de producción                      |
| `npm start`     | Sirve el build de producción             |
| `npm run lint`  | ESLint                                   |

## Foto de perfil

Colocá tu foto como `public/profile.png` (cuadrada, idealmente ≥ 512×512).
El componente `ProfilePhoto` la detecta automáticamente: **si el archivo no
existe, muestra un placeholder con las iniciales "ST"**. No hace falta tocar
código al subir la imagen.

## Editar textos (ES/EN)

Todos los textos visibles viven en los diccionarios:

- `i18n/es.ts` — español (idioma por defecto)
- `i18n/en.ts` — inglés

Ambos comparten el mismo tipo (`Dictionary`), así que el compilador avisa si
falta alguna clave. La elección de idioma se persiste en la cookie `stb-lang`:
las secciones son Server Components que reciben el diccionario por props, y el
botón ES/EN escribe la cookie y llama `router.refresh()`, así el HTML, los
metadatos y `lang` se renderizan en el idioma correcto desde el servidor (sin
flash de idioma al recargar).

## Editar proyectos

Los proyectos están en `data/projects.ts`, tipados y con campos bilingües:

- `featuredProjects` — "Logros destacados" (badge, descripción ES/EN, stack,
  links a repo y/o demo).
- `liveDemos` — "Demos en vivo".

Para agregar uno, copiá un objeto existente y completá `title`,
`badge`/`description` en `{ es, en }`, `tech`, `repoUrl` y/o `demoUrl`.

## Tema claro/oscuro

- Respeta `prefers-color-scheme` en la primera visita y persiste la elección
  (next-themes, sin flash de tema).
- La paleta se define con variables CSS en `app/globals.css` (`--bg`,
  `--surface`, `--fg`, `--muted`, `--accent`, `--border`, …) para `:root` y
  `.dark`, mapeadas a colores de Tailwind en `tailwind.config.ts`.

## Estructura

```
app/            layout (metadata bilingüe), página, globals.css, icon.svg
components/     Navbar, toggles, fondo animado, ProfilePhoto, SectionNav…
  sections/     Hero, About, Experience, Projects, Contact
data/           projects.ts (proyectos y demos)
i18n/           es.ts, en.ts, shared.ts (tipos/cookie), getLang.ts (server)
lib/            sections.ts (IDs de secciones)
```

## Accesibilidad y performance

- HTML semántico, skip-link, foco visible, `aria-label` en toggles y links
  externos (`rel="noopener noreferrer"`).
- `prefers-reduced-motion`: desactiva partículas, animaciones y smooth scroll.
- Partículas cargadas con `dynamic(..., { ssr: false })`; menos partículas en
  móvil; fondo con `pointer-events: none` y `-z-10`.
- Secciones tipo slides con `scroll-snap-type: y proximity` y
  `min-h-[100svh]`; la sección de proyectos permite scroll natural.

## Despliegue

Listo para **Vercel** o **Netlify** (SSR/funciones — la página es dinámica
porque lee la cookie de idioma). Opcional: definí `NEXT_PUBLIC_SITE_URL` con
el dominio final para las URLs de Open Graph.
