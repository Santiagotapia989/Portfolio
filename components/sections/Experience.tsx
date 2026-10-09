import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/es";

export function Experience({ t }: { t: Dictionary }) {
  return (
    <section
      id="experience"
      className="relative flex min-h-[100svh] snap-start scroll-mt-16 flex-col justify-center px-4 py-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading>{t.experience.heading}</SectionHeading>

        <ol className="relative mt-12 space-y-10 border-l-2 border-border pl-8">
          {t.experience.items.map((item, i) => (
            <li key={item.org} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.65rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-background text-accent"
              >
                <Briefcase size={15} />
              </span>
              <Reveal delay={0.1 * (i + 1)}>
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">
                      {item.org}
                    </h3>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 font-medium text-foreground/90">
                    {item.role}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
