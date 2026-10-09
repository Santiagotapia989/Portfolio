"use client";

import { useActiveSection } from "@/components/ActiveSectionProvider";
import { SECTION_IDS } from "@/lib/sections";
import type { Dictionary } from "@/i18n/es";

export function SectionNav({ t }: { t: Dictionary }) {
  const active = useActiveSection();

  return (
    <nav
      aria-label={t.a11y.sectionNav}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-center gap-4">
        {SECTION_IDS.map((id) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={t.nav[id]}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-2"
              >
                <span className="pointer-events-none max-w-0 overflow-hidden text-xs font-medium text-muted opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:max-w-24 group-focus-visible:opacity-100">
                  {t.nav[id]}
                </span>
                <span
                  aria-hidden="true"
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-3 w-3 bg-accent"
                      : "h-2 w-2 bg-muted/50 group-hover:bg-accent/60"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
