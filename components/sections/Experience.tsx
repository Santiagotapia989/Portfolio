import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/es";

export function Experience({ t }: { t: Dictionary }) {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <SectionHeading index={t.experience.index}>
        {t.experience.heading}
      </SectionHeading>

      <div className="mt-12 divide-y divide-border">
        {t.experience.items.map((item, i) => (
          <Reveal key={item.org} delay={0.08 * (i + 1)}>
            <article className="grid gap-8 py-4 lg:grid-cols-12 lg:gap-12">
              {/* Metadatos de período y organización */}
              <div className="lg:col-span-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">
                  {item.org}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {item.location}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border bg-surface-2/70 px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detalle de responsabilidades */}
              <div className="rounded-xl border border-border bg-surface p-6 shadow-card lg:col-span-8 sm:p-8">
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {item.role}
                </h4>

                <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
