import { ArrowDown, ArrowRight, Mail } from "lucide-react";
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
      className="relative flex min-h-[100svh] snap-start scroll-mt-16 flex-col justify-center px-4 pb-20 pt-24 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="w-full max-w-xl text-center md:text-left">
          <p className="anim-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.hero.greeting}
          </p>
          <h1 className="mt-3 break-words font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Santiago Tapia Bazán
          </h1>
          <p
            className="anim-fade-up mt-4 text-lg font-medium text-foreground/90"
            style={{ animationDelay: "0.08s" }}
          >
            {t.hero.role}
          </p>
          <p className="anim-fade-up mt-3 leading-relaxed text-muted">
            {t.hero.tagline}
          </p>
          <div
            className="anim-fade-up mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg shadow-card transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
            >
              {t.hero.ctaContact}
              <Mail size={16} aria-hidden="true" />
            </a>
            <CvDownload
              ctaLabel={t.hero.ctaCv}
              esLabel={t.hero.cvEs}
              enLabel={t.hero.cvEn}
            />
          </div>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: "0.12s" }}>
          <ProfilePhoto photoAlt={t.a11y.profilePhoto} hasPhoto={hasPhoto} />
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.nav.about}
        className="animate-hint absolute bottom-6 left-1/2 hidden flex-col items-center gap-1 text-xs text-muted sm:flex"
      >
        {t.hero.scrollHint}
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
