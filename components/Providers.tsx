"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ActiveSectionProvider } from "@/components/ActiveSectionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
