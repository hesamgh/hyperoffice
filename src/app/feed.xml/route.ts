import { siteConfig } from "@/lib/site-config";
import { locales } from "@/i18n/config";
import { getLocalizedGuides } from "@/content/guides";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const items = locales.flatMap((locale) =>
    getLocalizedGuides(locale).map((guide) => {
      const url = absoluteUrl(locale, `/guides/${guide.slug}`);
      return `    <item>
      <title>${escapeXml(`[${locale}] ${guide.title}`)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(guide.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(guide.description)}</description>
    </item>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Guides</title>
    <link>${siteConfig.url}</link>
    <description>Web design, SEO, and ecommerce guides from HyperOffice.</description>
    <language>en</language>
    <lastBuildDate>${new Date(siteConfig.contentUpdatedAt).toUTCString()}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
