"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/components/ActiveSectionProvider";
import { SECTION_IDS } from "@/lib/sections";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import type { Dictionary } from "@/i18n/es";
import type { Lang } from "@/i18n/shared";

export function Navbar({ t, lang }: { t: Dictionary; lang: Lang }) {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-accent">S</span>TB
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTION_IDS.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-accent" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {t.nav[id]}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} label={t.a11y.langToEnglish} />
          <ThemeToggle
            toLightLabel={t.a11y.themeToLight}
            toDarkLabel={t.a11y.themeToDark}
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            aria-label={t.a11y.mainNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {SECTION_IDS.map((id) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-foreground hover:bg-surface-2"
                      }`}
                    >
                      {t.nav[id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
