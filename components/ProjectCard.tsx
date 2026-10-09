"use client";

import { m } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import type { Lang } from "@/i18n/shared";

export interface ProjectCardLabels {
  viewDemo: string;
  viewRepo: string;
  demoLabel: string;
  repoLabel: string;
  externalLink: string;
}

export function ProjectCard({
  project,
  labels,
  lang,
  compact = false,
}: {
  project: Project;
  labels: ProjectCardLabels;
  lang: Lang;
  compact?: boolean;
}) {
  return (
    <m.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors focus-within:border-accent/60 hover:border-accent/60 hover:shadow-card-hover"
    >
      {project.badge && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {project.badge[lang]}
        </span>
      )}
      <h3
        className={`font-display font-semibold tracking-tight ${
          compact ? "text-lg" : "text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p
        className={`mt-2 flex-1 text-sm leading-relaxed text-muted ${
          compact ? "line-clamp-3" : ""
        }`}
      >
        {project.description[lang]}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-surface-2/70 px-2.5 py-0.5 text-[11px] font-medium text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels.demoLabel}: ${project.title} (${labels.externalLink})`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg transition-transform hover:scale-[1.04]"
          >
            {labels.viewDemo}
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels.repoLabel}: ${project.title} (${labels.externalLink})`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            {labels.viewRepo}
            <GithubIcon size={13} />
          </a>
        )}
      </div>
    </m.article>
  );
}
