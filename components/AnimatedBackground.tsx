export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Retícula técnica con desvanecimiento radial */}
      <div className="bg-editorial-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_15%,#000_25%,transparent_100%)]" />

      {/* Luz cenital cálida muy sutil */}
      <div className="absolute -top-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.045] blur-3xl dark:bg-accent/[0.06]" />

      {/* Grano editorial analógico de baja opacidad */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.022] dark:opacity-[0.032]">
        <filter id="editorial-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#editorial-noise)" />
      </svg>
    </div>
  );
}
