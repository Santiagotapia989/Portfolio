import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { getLang, getDict } from "@/i18n/getLang";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
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
        className={`${sans.variable} ${display.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
