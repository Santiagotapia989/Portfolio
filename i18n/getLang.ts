import { cookies } from "next/headers";
import { es, type Dictionary } from "./es";
import { en } from "./en";
import { LANG_COOKIE, type Lang } from "./shared";

/** Server-side: reads the language cookie (ES default). */
export function getLang(): Lang {
  return cookies().get(LANG_COOKIE)?.value === "en" ? "en" : "es";
}

export function getDict(lang: Lang): Dictionary {
  return lang === "en" ? en : es;
}
