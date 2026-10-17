import type { Locale } from "@/i18n/config";
import { guideCopy, guideMetas } from "./copy";
import type { LocalizedGuide } from "./types";

export { guideMetas } from "./copy";
export type { GuideCopy, GuideLink, GuideMeta, LocalizedGuide } from "./types";

export function getGuideSlugs(): string[] {
  return guideMetas.map((guide) => guide.slug);
}

export function getGuideMeta(slug: string) {
  return guideMetas.find((guide) => guide.slug === slug);
}

export function getLocalizedGuide(
  locale: Locale,
  slug: string
): LocalizedGuide | undefined {
  const meta = getGuideMeta(slug);
  const copy = guideCopy[slug]?.[locale];
  if (!meta || !copy) return undefined;
  return { ...meta, ...copy };
}

export function getLocalizedGuides(locale: Locale): LocalizedGuide[] {
  return guideMetas
    .map((meta) => getLocalizedGuide(locale, meta.slug))
    .filter((guide): guide is LocalizedGuide => Boolean(guide))
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export function getGuidesForService(locale: Locale, serviceSlug: string) {
  return getLocalizedGuides(locale).filter((guide) =>
    guide.relatedServices.includes(serviceSlug)
  );
}

export function getRelatedGuides(locale: Locale, slug: string) {
  const current = getGuideMeta(slug);
  if (!current) return [];
  return current.relatedGuides
    .map((related) => getLocalizedGuide(locale, related))
    .filter((guide): guide is LocalizedGuide => Boolean(guide));
}

export function estimateReadingMinutes(guide: LocalizedGuide): number {
  const text = [
    guide.intro,
    ...guide.sections.map((section) => `${section.title} ${section.content}`),
    ...guide.faq.map((item) => `${item.question} ${item.answer}`),
  ].join(" ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}
