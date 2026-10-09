import { BookOpen, GraduationCap, Languages } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/es";

export function About({ t }: { t: Dictionary }) {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] snap-start scroll-mt-16 flex-col justify-center px-4 py-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading>{t.about.heading}</SectionHeading>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl leading-relaxed text-muted">
            {t.about.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold">
                  {t.about.educationHeading}
                </h3>
              </div>
              <ul className="mt-6 space-y-5">
                {t.about.education.map((ed) => (
                  <li key={ed.degree} className="flex gap-3">
                    <BookOpen
                      size={17}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-accent"
                    />
                    <div>
                      <p className="font-medium">{ed.degree}</p>
                      <p className="text-sm text-muted">{ed.institution}</p>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-accent">
                        {ed.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Languages size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold">
                  {t.about.languagesHeading}
                </h3>
              </div>
              <ul className="mt-6 space-y-5">
                {t.about.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="rounded-xl border border-border bg-surface-2/60 p-4"
                  >
                    <p className="font-medium">{lang.name}</p>
                    <p className="mt-1 text-sm text-muted">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
