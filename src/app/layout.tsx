import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import { iranSans } from "@/lib/fonts";
import { locales, localeHreflang } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HyperOffice",
    template: "%s | HyperOffice",
  },
  description:
    "HyperOffice — professional web design and development with Next.js, Python, PHP and Java.",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/icon-192.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    languages: {
      ...Object.fromEntries(
        locales.map((locale) => [
          localeHreflang[locale],
          `${siteConfig.url}${localePath(locale)}`,
        ])
      ),
      "x-default": `${siteConfig.url}${localePath("en")}`,
    },
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={iranSans.variable} suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
