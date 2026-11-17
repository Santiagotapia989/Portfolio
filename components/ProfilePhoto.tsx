"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfilePhoto({
  photoAlt,
  hasPhoto,
}: {
  photoAlt: string;
  hasPhoto: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-60 shrink-0 sm:w-72">
      {/* Marco desplazado arquitectónico */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 inset-0 translate-x-2.5 translate-y-2.5 rounded-xl border border-border bg-surface-2/60"
      />

      {/* Contenedor principal tipo retrato editorial */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-2 shadow-card">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-2">
          {!hasPhoto || failed ? (
            <div className="flex h-full w-full items-center justify-center bg-surface-2 font-display text-5xl font-bold tracking-tight text-foreground">
              ST
            </div>
          ) : (
            <Image
              src="/profile.png"
              alt={photoAlt}
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 240px, 288px"
              className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
