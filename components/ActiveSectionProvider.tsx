"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/sections";

const ActiveSectionContext = createContext<string>(SECTION_IDS[0]);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Banda central del viewport: la sección que cruza el medio es la activa
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
