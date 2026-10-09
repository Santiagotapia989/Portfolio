import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/es";

const WHATSAPP_NUMBER = "5491126485586";
const EMAIL = "bazan0897@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/santiagotapiaa__";
const GITHUB_URL = "https://github.com/Santiagotapia989";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/santiago-tapia-baz%C3%A1n-890344385";

export function Contact({ t }: { t: Dictionary }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`;
  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.contact.emailSubject,
  )}`;

  const channels = [
    {
      id: "whatsapp",
      label: t.contact.whatsapp,
      href: whatsappUrl,
      icon: MessageCircle,
      primary: true,
      external: true,
    },
    {
      id: "email",
      label: t.contact.email,
      href: mailtoUrl,
      icon: Mail,
      primary: false,
      external: false,
    },
    {
      id: "linkedin",
      label: t.contact.linkedin,
      href: LINKEDIN_URL,
      icon: LinkedinIcon,
      primary: false,
      external: true,
    },
    {
      id: "github",
      label: t.contact.github,
      href: GITHUB_URL,
      icon: GithubIcon,
      primary: false,
      external: true,
    },
    {
      id: "instagram",
      label: t.contact.instagram,
      href: INSTAGRAM_URL,
      icon: InstagramIcon,
      primary: false,
      external: true,
      wide: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] snap-start scroll-mt-16 flex-col justify-center px-4 pb-10 pt-24 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
        <SectionHeading>{t.contact.heading}</SectionHeading>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
            {t.contact.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map((ch, i) => (
            <Reveal key={ch.id} delay={0.08 * (i + 1)} className="h-full">
              <a
                href={ch.href}
                {...(ch.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={`${ch.label}${
                  ch.external ? ` (${t.a11y.externalLink})` : ""
                }`}
                className={`flex h-full items-center gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:shadow-card-hover ${
                  ch.primary
                    ? "border-accent bg-accent text-accent-fg shadow-card"
                    : "border-border bg-surface hover:border-accent/60"
                } ${"wide" in ch && ch.wide ? "sm:col-span-2" : ""}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    ch.primary
                      ? "bg-accent-fg/15 text-accent-fg"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <ch.icon size={20} />
                </span>
                <span className="font-semibold">{ch.label}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-16 w-full max-w-5xl border-t border-border pt-6 text-center text-xs text-muted">
        <p className="font-medium text-foreground/80">{t.contact.footerNote}</p>
        <p className="mt-2">
          © 2026 Santiago Tapia Bazán · {t.contact.footerMade}
        </p>
      </footer>
    </section>
  );
}
