import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, getServicePage, getServiceSlugs } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { ServicePageLayout } from "@/components/service-page-layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServiceSlugs().map((slug) => ({ locale, slug }))
  );
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const page = getServicePage(locale, slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    locale,
    keywords: page.keywords,
  });
}

export default async function ServiceSlugPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const page = getServicePage(locale, slug);
  if (!page) notFound();

  // Ensure dictionary is loaded for this locale (provider is in parent layout)
  getDictionary(locale);

  return <ServicePageLayout page={page} />;
}
