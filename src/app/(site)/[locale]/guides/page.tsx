import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { getLocalizedGuides } from "@/content/guides";
import { GuideList } from "@/components/guide-list";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return buildMetadata({
    title: dict.guides.metaTitle,
    description: dict.guides.metaDescription,
    path: "/guides",
    locale,
    keywords: dict.guides.keywords,
  });
}

export default async function GuidesPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const guides = getLocalizedGuides(locale);

  return (
    <GuideList locale={locale} dictionary={dictionary} guides={guides} />
  );
}
