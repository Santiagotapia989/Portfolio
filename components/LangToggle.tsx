"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LANG_COOKIE, type Lang } from "@/i18n/shared";

export function LangToggle({ lang, label }: { lang: Lang; label: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    document.cookie = `${LANG_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
    startTransition(() => router.refresh());
  };

  return (
    <button
      type="button"
      onClick={switchLang}
      disabled={pending}
      aria-label={`ES EN — ${label}`}
      className="flex h-8 items-center rounded-md border border-border bg-surface p-0.5 font-mono text-[11px] font-medium transition-opacity disabled:opacity-60"
    >
      <span
        className={`rounded-[4px] px-2 py-0.5 transition-colors ${
          lang === "es"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </span>
      <span
        className={`rounded-[4px] px-2 py-0.5 transition-colors ${
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </span>
    </button>
  );
}
