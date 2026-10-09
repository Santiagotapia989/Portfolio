"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Carga diferida: tsparticles nunca entra al bundle inicial ni corre en SSR
const ParticlesBg = dynamic(() => import("@/components/ParticlesBg"), {
  ssr: false,
});

export function AnimatedBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [loadParticles, setLoadParticles] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    // Difiere la descarga/init de tsparticles fuera del camino crítico
    if (reducedMotion) return;
    const cb = () => setLoadParticles(true);
    let cancelled = false;
    let timer: number | undefined;
    const schedule = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(cb, { timeout: 4000 });
      } else {
        timer = window.setTimeout(cb, 1800);
      }
    };
    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
      timer = window.setTimeout(schedule, 2500);
    }
    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (timer) window.clearTimeout(timer);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Gradientes fluidos de baja opacidad detrás del contenido */}
      <div className="animate-blob-1 absolute -left-32 -top-32 h-[45vmax] w-[45vmax] rounded-full bg-accent/15 blur-2xl md:blur-3xl dark:bg-accent/20" />
      <div className="animate-blob-2 absolute -bottom-40 -right-32 h-[40vmax] w-[40vmax] rounded-full bg-accent/10 blur-2xl md:blur-3xl dark:bg-accent/15" />
      <div className="animate-blob-3 absolute left-1/3 top-1/2 h-[30vmax] w-[30vmax] rounded-full bg-surface-2/70 blur-2xl md:blur-3xl dark:bg-accent/10" />
      {!reducedMotion && loadParticles && <ParticlesBg />}
    </div>
  );
}
