import { ArrowUpRight } from "lucide-react";
import { featuredProjects, liveDemos } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import type { Dictionary } from "@/i18n/es";
import type { Lang } from "@/i18n/shared";

export function Projects({ t, lang }: { t: Dictionary; lang: Lang }) {
  const labels = {
    viewDemo: t.projects.viewDemo,
    viewRepo: t.projects.viewRepo,
    demoLabel: t.projects.demoLabel,
    repoLabel: t.projects.repoLabel,
    externalLink: t.a11y.externalLink,
    featuredLabel: t.projects.featuredLabel,
  };

  const [flagship, ...otherFeatured] = featuredProjects;

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <SectionHeading index={t.projects.index}>
        {t.projects.heading}
      </SectionHeading>

      {/* Proyecto insignia (ancho completo) */}
      {flagship && (
        <Reveal delay={0.06} className="mt-12">
          <ProjectCard
            project={flagship}
            index={1}
            labels={labels}
            lang={lang}
            featured
          />
        </Reveal>
      )}

      {/* Grilla de proyectos principales */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {otherFeatured.map((p, i) => (
          <Reveal key={p.id} delay={0.06 * (i + 2)} className="h-full">
            <ProjectCard
              project={p}
              index={i + 2}
              labels={labels}
              lang={lang}
            />
          </Reveal>
        ))}
      </div>

      {/* Directorio tabular de sitios web en producción */}
      <div className="mt-16">
        <Reveal delay={0.1}>
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {t.projects.demosHeading}
            </h3>
            <span className="font-mono text-[11px] text-muted">
              0{liveDemos.length} DEPLOYMENTS
            </span>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-b border-border">
          {liveDemos.map((demo, idx) => (
            <Reveal key={demo.id} delay={0.05 * (idx + 1)}>
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.demoLabel}: ${demo.title} (${labels.externalLink})`}
                className="group flex flex-col gap-3 py-5 transition-colors hover:bg-surface-2/40 sm:flex-row sm:items-center sm:justify-between sm:px-3"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="font-mono text-xs text-muted">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      {demo.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-muted">
                      {demo.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <ul className="flex flex-wrap gap-1.5">
                    {demo.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
