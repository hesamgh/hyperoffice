import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import {
  getGuideSlugs,
  getLocalizedGuide,
} from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import { GuideArticle } from "@/components/guide-article";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getGuideSlugs().map((slug) => ({ locale, slug }))
  );
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const guide = getLocalizedGuide(locale, slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    locale,
    keywords: guide.keywords,
    type: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default async function GuideSlugPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const guide = getLocalizedGuide(locale, slug);
  if (!guide) notFound();

  return <GuideArticle locale={locale} guide={guide} />;
}
