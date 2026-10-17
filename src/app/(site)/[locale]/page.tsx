import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { TechStack } from "@/components/tech-stack";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Stats } from "@/components/stats";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { GuidesTeaser } from "@/components/guides-teaser";
import { JsonLd } from "@/components/json-ld";
import { getHomeJsonLd } from "@/lib/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return buildMetadata({
    title: dict.meta.title,
    description: dict.meta.description,
    path: "/",
    locale,
    keywords: dict.meta.keywords,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <>
      <JsonLd data={getHomeJsonLd(locale)} />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WhyUs />
      <TechStack />
      <Process />
      <Stats />
      <GuidesTeaser />
      <FAQ />
      <Contact />
    </>
  );
}
