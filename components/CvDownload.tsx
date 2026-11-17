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
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface-2/60"
      >
        <Download size={15} aria-hidden="true" className="text-muted" />
        <span>{ctaLabel}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            role="menu"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.14 }}
            className="absolute left-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-lg border border-border bg-surface p-1 shadow-card-hover"
          >
            <a
              role="menuitem"
              href="/cv-es.pdf"
              download="Santiago Tapia Bazán - CV.pdf"
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-2"
              onClick={() => setOpen(false)}
            >
              <FileText size={14} className="shrink-0 text-accent" aria-hidden="true" />
              <span>{esLabel}</span>
            </a>
            <a
              role="menuitem"
              href="/cv-en.pdf"
              download="Santiago Tapia Bazán - Resume.pdf"
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-2"
              onClick={() => setOpen(false)}
            >
              <FileText size={14} className="shrink-0 text-accent" aria-hidden="true" />
              <span>{enLabel}</span>
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
