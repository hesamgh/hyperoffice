import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { routePaths, languageAlternates, absoluteUrl } from "@/lib/seo";
import { locales } from "@/i18n/config";
import { getGuideMeta, guideMetas } from "@/content/guides";

export const dynamic = "force-static";

function lastModifiedForPath(path: string): Date {
  const match = path.match(/^\/guides\/(.+)$/);
  if (match?.[1]) {
    const meta = getGuideMeta(match[1]);
    if (meta) return new Date(meta.updatedAt);
  }
  if (path === "/guides") {
    const latest = [...guideMetas].sort((a, b) =>
      a.updatedAt < b.updatedAt ? 1 : -1
    )[0];
    if (latest) return new Date(latest.updatedAt);
  }
  return new Date(siteConfig.contentUpdatedAt);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routePaths.map((route) => ({
      url: absoluteUrl(locale, route.path),
      lastModified: lastModifiedForPath(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path),
      },
    }))
  );
}
