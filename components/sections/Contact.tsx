"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";
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
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`;
  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.contact.emailSubject,
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  const socials = [
    {
      id: "github",
      label: t.contact.github,
      handle: "@Santiagotapia989",
      href: GITHUB_URL,
      icon: GithubIcon,
    },
    {
      id: "linkedin",
      label: t.contact.linkedin,
      handle: "/in/santiago-tapia-bazán",
      href: LINKEDIN_URL,
      icon: LinkedinIcon,
    },
    {
      id: "instagram",
      label: t.contact.instagram,
      handle: "@santiagotapiaa__",
      href: INSTAGRAM_URL,
      icon: InstagramIcon,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 pb-12 pt-20 sm:pt-24">
      <SectionHeading index={t.contact.index}>
        {t.contact.heading}
      </SectionHeading>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* Columna izquierda: canales de contacto directo */}
        <div className="space-y-6 lg:col-span-7">
          <Reveal delay={0.05}>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.contact.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {t.contact.directLabel}
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Tarjeta WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-foreground bg-foreground p-5 text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
              >
                <div className="flex items-center justify-between">
                  <MessageCircle size={20} aria-hidden="true" />
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-display text-base font-bold">
                    {t.contact.whatsapp}
                  </p>
                  <p className="mt-1 font-mono text-xs opacity-80">
                    {t.contact.whatsappSub}
                  </p>
                </div>
              </a>

              {/* Tarjeta Email con acción de copiar */}
              <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <Mail size={20} aria-hidden="true" className="text-accent" />
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground transition-colors hover:border-foreground/40"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-500" />
                        <span>{t.contact.copiedEmail}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="text-muted" />
                        <span>{t.contact.copyEmail}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6">
                  <a
                    href={mailtoUrl}
                    className="group inline-flex items-center gap-1.5 font-display text-base font-bold text-foreground hover:text-accent"
                  >
                    <span>{t.contact.email}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <p className="mt-1 font-mono text-xs text-muted">{EMAIL}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Columna derecha: directorio de redes y perfiles */}
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {t.contact.socialsLabel}
            </p>

            <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface px-5 shadow-card">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (${t.a11y.externalLink})`}
                  className="group flex items-center justify-between py-4 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      <s.icon size={17} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent">
                        {s.label}
                      </p>
                      <p className="font-mono text-xs text-muted">{s.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
        <p className="font-medium text-foreground/85">{t.contact.footerNote}</p>
        <p className="font-mono text-[11px]">
          © {new Date().getFullYear()} Santiago Tapia Bazán · {t.contact.footerMade}
        </p>
      </footer>
    </section>
  );
}
