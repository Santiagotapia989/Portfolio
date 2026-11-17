"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { m, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  toLightLabel,
  toDarkLabel,
}: {
  toLightLabel: string;
  toDarkLabel: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? toLightLabel : toDarkLabel}
      className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-foreground/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <m.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {isDark ? <Moon size={15} /> : <Sun size={15} />}
          </m.span>
        )}
      </AnimatePresence>
    </button>
  );
}
