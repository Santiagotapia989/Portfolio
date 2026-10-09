"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, Download, FileText } from "lucide-react";

export function CvDownload({
  ctaLabel,
  esLabel,
  enLabel,
}: {
  ctaLabel: string;
  esLabel: string;
  enLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={ctaLabel}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
      >
        {ctaLabel}
        <Download size={16} aria-hidden="true" />
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-surface shadow-card-hover md:left-auto md:right-0 md:translate-x-0"
          >
            <a
              role="menuitem"
              href="/cv-es.pdf"
              download="Santiago Tapia Bazán - CV.pdf"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              <FileText size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {esLabel}
            </a>
            <a
              role="menuitem"
              href="/cv-en.pdf"
              download="Santiago Tapia Bazán - Resume.pdf"
              className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              <FileText size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {enLabel}
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
