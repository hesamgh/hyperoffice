import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import type { Locale } from "@/i18n/config";
import { locales, localeHreflang, localeSeo } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { getDictionary } from "@/i18n/get-dictionary";
import { getGuideSlugs } from "@/content/guides";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((loc) => [
        localeHreflang[loc],
        `${siteConfig.url}${localePath(loc, path)}`,
      ])
    ),
    "x-default": `${siteConfig.url}${localePath("en", path)}`,
  };
}

export function absoluteUrl(locale: Locale, path = "/"): string {
  return `${siteConfig.url}${localePath(locale, path)}`;
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMeta): Metadata {
  const dict = getDictionary(locale);
  const url = absoluteUrl(locale, path);
  const seo = localeSeo[locale];
  const alternateLocale = locales
    .filter((loc) => loc !== locale)
    .map((loc) => getDictionary(loc).meta.localeOg);

  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title,
    description,
    keywords: [...dict.meta.keywords, ...keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: dict.meta.localeOg,
      alternateLocale,
      url,
      siteName: dict.meta.siteName,
      title,
      description,
      images: [ogImage],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
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
    other: {
      "content-language": dict.meta.htmlLang,
      "geo.region": seo.countryCode,
      "geo.placename": dict.location.city,
    },
  };
}

export const routePaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/tarahi-site", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/tarahi-forooshgah",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  { path: "/seo-site", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
  ...getGuideSlugs().map((slug) => ({
    path: `/guides/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
];
