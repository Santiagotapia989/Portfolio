"use client";

import { useState } from "react";
import Image from "next/image";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function ProfilePhoto({
  photoAlt,
  hasPhoto,
}: {
  photoAlt: string;
  hasPhoto: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [9, -9]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), {
    stiffness: 180,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <m.div
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className="relative h-52 w-52 shrink-0 sm:h-64 sm:w-64"
    >
      {/* Halo de luz */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full bg-accent/40 blur-2xl dark:bg-accent/50"
      />
      {/* Anillo con gradiente animado */}
      <div
        aria-hidden="true"
        className="animate-ring absolute -inset-2 rounded-full blur-[2px] [background:conic-gradient(from_0deg,rgb(var(--accent)),transparent_40%,rgb(var(--accent))_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-background"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-surface shadow-[0_0_45px_-8px_rgb(var(--accent)/0.55)] [background:radial-gradient(circle_at_35%_25%,rgb(var(--accent)/0.28),rgb(var(--surface-2)))]">
        {!hasPhoto || failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accent/60 font-display text-6xl font-bold text-accent-fg">
            ST
          </div>
        ) : (
          <Image
            src="/profile.png"
            alt={photoAlt}
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 208px, 256px"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </m.div>
  );
}
