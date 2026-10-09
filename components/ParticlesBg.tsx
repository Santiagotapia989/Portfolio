"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Particles,
  ParticlesProvider,
  useParticlesProvider,
  type ParticlesPluginRegistrar,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const initParticles: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

export default function ParticlesBg() {
  return (
    <ParticlesProvider init={initParticles}>
      <ParticlesCanvas />
    </ParticlesProvider>
  );
}

function ParticlesCanvas() {
  const { loaded } = useParticlesProvider();
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const color = resolvedTheme === "dark" ? "#8e7fff" : "#4f46e5";
    return {
      fullScreen: { enable: false },
      // Menos carga en móvil: menos partículas, 30fps y sin canvas retina
      fpsLimit: isMobile ? 30 : 60,
      detectRetina: !isMobile,
      interactivity: {
        // El canvas tiene pointer-events: none; escucha los eventos en window
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.55 } },
        },
      },
      particles: {
        number: {
          value: isMobile ? 16 : 64,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: color },
        links: {
          enable: true,
          color,
          distance: 130,
          opacity: 0.28,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.7,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 1, max: 2.4 } },
        shape: { type: "circle" },
      },
    };
  }, [resolvedTheme, isMobile]);

  if (!loaded) return null;

  return (
    <Particles
      key={resolvedTheme}
      id="bg-particles"
      className="absolute inset-0 h-full w-full"
      options={options}
    />
  );
}
