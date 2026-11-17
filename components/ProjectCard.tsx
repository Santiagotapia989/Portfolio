"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import type { Lang } from "@/i18n/shared";

export interface ProjectCardLabels {
  viewDemo: string;
  viewRepo: string;
  demoLabel: string;
  repoLabel: string;
  externalLink: string;
  featuredLabel: string;
}

export function ProjectCard({
  project,
  index,
  labels,
  lang,
  featured = false,
}: {
  project: Project;
  index: number;
  labels: ProjectCardLabels;
  lang: Lang;
  featured?: boolean;
}) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-xl border transition-all duration-300 ${
        featured
          ? "border-foreground/20 bg-surface p-6 shadow-card hover:border-foreground/40 sm:p-8"
          : "border-border bg-surface p-6 shadow-card hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-card-hover"
      }`}
    >
      <div>
        {/* Cabecera: índice, año y etiqueta */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted">
            <span className="font-semibold text-foreground">
              /{formattedIndex}
            </span>
            {project.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </>
            )}
          </div>

          {project.badge && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium ${
                project.award
                  ? "border border-accent/30 bg-accent/10 text-accent"
                  : "border border-border bg-surface-2 text-muted"
              }`}
            >
              {project.award && <Award size={12} aria-hidden="true" />}
              {project.badge[lang]}
            </span>
          )}
        </div>

        {/* Contenido principal */}
        <div className={featured ? "mt-6 grid gap-6 lg:grid-cols-12" : "mt-5"}>
          <div className={featured ? "lg:col-span-5" : ""}>
            {featured && (
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {labels.featuredLabel}
              </p>
            )}
            <h3
              className={`font-display font-bold tracking-tight text-foreground ${
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
          </div>

          <div className={featured ? "lg:col-span-7" : "mt-3"}>
            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
              {project.description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Pie de tarjeta: stack + links */}
      <div className="mt-6 flex flex-col gap-5 border-t border-border/70 pt-5 sm:flex-row sm:items-end sm:justify-between">
        <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.demoUrl || project.repoUrl) && (
          <div className="flex shrink-0 items-center gap-2.5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.demoLabel}: ${project.title} (${labels.externalLink})`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-colors hover:bg-accent hover:text-accent-fg"
              >
                <span>{labels.viewDemo}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.repoLabel}: ${project.title} (${labels.externalLink})`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface-2"
              >
                <GithubIcon size={13} />
                <span>{labels.viewRepo}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
