import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { getLang, getDict } from "@/i18n/getLang";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const lang = getLang();
  const t = getDict(lang);
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: t.meta.ogLocale,
      siteName: "Santiago Tapia Bazán",
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = getLang();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} bg-background font-sans text-foreground antialiased selection:bg-accent/20 selection:text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
