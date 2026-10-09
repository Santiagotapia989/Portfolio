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
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-[100svh] snap-start scroll-mt-16 flex-col justify-center px-4 py-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading>{t.projects.heading}</SectionHeading>

        <Reveal delay={0.1}>
          <h3 className="mt-10 font-display text-lg font-semibold text-muted">
            {t.projects.featuredHeading}
          </h3>
        </Reveal>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * (i + 1)} className="h-full">
              <ProjectCard project={p} labels={labels} lang={lang} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <h3 className="mt-12 font-display text-lg font-semibold text-muted">
            {t.projects.demosHeading}
          </h3>
        </Reveal>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liveDemos.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * (i + 1)} className="h-full">
              <ProjectCard project={p} labels={labels} lang={lang} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
