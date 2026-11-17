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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs font-bold tracking-tighter transition-colors group-hover:border-accent group-hover:text-accent">
            ST
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Santiago Tapia Bazán
          </span>
          <span className="hidden border-l border-border pl-3 font-mono text-[11px] uppercase tracking-wider text-muted lg:inline-block">
            BUE · AR
          </span>
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTION_IDS.map((id, index) => {
              const isActive = active === id;
              const num = `0${index}`;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-surface-2 text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className={`font-mono text-[10px] ${
                          isActive ? "text-accent" : "text-muted/60"
                        }`}
                      >
                        {num}
                      </span>
                    )}
                    <span>{t.nav[id]}</span>
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
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
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
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {SECTION_IDS.map((id, index) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-surface-2 text-foreground"
                          : "text-muted hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <span>{t.nav[id]}</span>
                      <span className="font-mono text-xs text-accent">
                        0{index}
                      </span>
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
