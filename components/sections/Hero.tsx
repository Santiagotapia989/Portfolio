import { ArrowUpRight, Mail } from "lucide-react";
import { CvDownload } from "@/components/CvDownload";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import type { Dictionary } from "@/i18n/es";

export function Hero({
  t,
  hasPhoto,
}: {
  t: Dictionary;
  hasPhoto: boolean;
}) {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 pb-20 pt-28 sm:pb-24 sm:pt-36"
    >
      <div className="flex flex-col-reverse items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full max-w-2xl">
          {/* Barra de estado y ubicación */}
          <div className="anim-fade-up inline-flex flex-wrap items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-foreground">{t.hero.status}</span>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.hero.location}
            </span>
          </div>

          <p
            className="anim-fade-up mt-6 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent"
            style={{ animationDelay: "0.05s" }}
          >
            {t.hero.greeting}
          </p>

          <h1
            className="anim-fade-up mt-2 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Santiago Tapia Bazán
          </h1>

          <p
            className="anim-fade-up mt-5 text-lg font-medium leading-snug text-foreground/90 sm:text-xl"
            style={{ animationDelay: "0.15s" }}
          >
            {t.hero.role}
          </p>

          <p
            className="anim-fade-up mt-3 max-w-xl text-base leading-relaxed text-muted"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.tagline}
          </p>

          <div
            className="anim-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-fg"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface-2/60"
            >
              <Mail size={15} aria-hidden="true" className="text-muted" />
              <span>{t.hero.ctaContact}</span>
            </a>
            <CvDownload
              ctaLabel={t.hero.ctaCv}
              esLabel={t.hero.cvEs}
              enLabel={t.hero.cvEn}
            />
          </div>
        </div>

        <div
          className="anim-fade-up w-full lg:w-auto"
          style={{ animationDelay: "0.15s" }}
        >
          <ProfilePhoto photoAlt={t.a11y.profilePhoto} hasPhoto={hasPhoto} />
        </div>
      </div>

      {/* Cinta inferior de credenciales clave */}
      <div
        className="anim-fade-up mt-16 grid gap-6 border-y border-border py-6 sm:grid-cols-3"
        style={{ animationDelay: "0.3s" }}
      >
        {t.hero.highlights.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {item.label}
            </span>
            <span className="font-display text-sm font-semibold text-foreground sm:text-base">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
