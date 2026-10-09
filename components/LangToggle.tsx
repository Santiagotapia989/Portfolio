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
      className="flex h-9 items-center rounded-full border border-border bg-surface p-1 text-xs font-semibold transition-opacity disabled:opacity-60"
    >
      <span
        className={`rounded-full px-2 py-1 transition-colors ${
          lang === "es" ? "bg-accent text-accent-fg" : "text-muted"
        }`}
      >
        ES
      </span>
      <span
        className={`rounded-full px-2 py-1 transition-colors ${
          lang === "en" ? "bg-accent text-accent-fg" : "text-muted"
        }`}
      >
        EN
      </span>
    </button>
  );
}
