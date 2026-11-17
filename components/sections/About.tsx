import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/es";

export function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <SectionHeading index={t.about.index}>{t.about.heading}</SectionHeading>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Columna izquierda: narrativa y stack técnico */}
        <div className="space-y-8 lg:col-span-7">
          <Reveal delay={0.05}>
            <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              {t.about.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {t.about.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="pt-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {t.about.stackHeading}
              </h3>
              <div className="mt-4 divide-y divide-border border-y border-border">
                {t.about.stackGroups.map((group) => (
                  <div
                    key={group.category}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="w-48 shrink-0 text-sm font-semibold text-foreground">
                      {group.category}
                    </span>
                    <ul className="flex flex-wrap gap-1.5 sm:justify-end">
                      {group.items.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground/90"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Columna derecha: formación e idiomas tipo dossier */}
        <div className="space-y-8 lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {t.about.educationHeading}
                </h3>
                <span className="font-mono text-[11px] text-accent">ACAD</span>
              </div>

              <ul className="mt-5 space-y-6">
                {t.about.education.map((ed) => (
                  <li key={ed.degree} className="group">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-base font-bold text-foreground">
                        {ed.degree}
                      </p>
                      <span className="font-mono text-xs text-accent">
                        {ed.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/85">
                      {ed.institution}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{ed.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {t.about.languagesHeading}
                </h3>
                <span className="font-mono text-[11px] text-accent">LANG</span>
              </div>

              <ul className="mt-4 divide-y divide-border">
                {t.about.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between gap-4 py-3 first:pt-1 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {lang.name}
                      </p>
                      <p className="text-xs text-muted">{lang.level}</p>
                    </div>
                    <span className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs font-semibold text-foreground">
                      {lang.code}
                    </span>
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
