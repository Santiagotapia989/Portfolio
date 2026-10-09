import { Navbar } from "@/components/Navbar";
import { SectionNav } from "@/components/SectionNav";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { SkipLink } from "@/components/SkipLink";
import { getLang, getDict } from "@/i18n/getLang";
import fs from "node:fs";
import path from "node:path";

export default function Home() {
  const lang = getLang();
  const t = getDict(lang);
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "profile.png"),
  );

  return (
    <>
      <SkipLink label={t.a11y.skipToContent} />
      <AnimatedBackground />
      <Navbar t={t} lang={lang} />
      <SectionNav t={t} />
      <main id="main-content">
        <Hero t={t} hasPhoto={hasPhoto} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </main>
    </>
  );
}
