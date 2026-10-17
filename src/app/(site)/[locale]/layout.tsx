import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";
import {
  locales,
  isLocale,
  getLocaleDirection,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { DictionaryProvider } from "@/i18n/dictionary-provider";
import { getSiteJsonLd } from "@/lib/json-ld";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PwaInstallBanner } from "@/components/pwa-install-banner";
import { JsonLd } from "@/components/json-ld";
import { DocumentLocale } from "@/components/document-locale";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const dir = getLocaleDirection(locale);
  const jsonLd = getSiteJsonLd(locale);

  return (
    <DictionaryProvider locale={locale} dictionary={dictionary} dir={dir}>
      <DocumentLocale
        locale={locale}
        htmlLang={dictionary.meta.htmlLang}
        dir={dir}
      />
      <Script src="/pwa-bootstrap.js" strategy="afterInteractive" />
      <JsonLd data={jsonLd} />
      <Header />
      <main>{children}</main>
      <Footer />
      <PwaInstallBanner />
    </DictionaryProvider>
  );
}
