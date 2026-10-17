import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/config";
import { localeSeo } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl } from "@/lib/seo";
import type { Dictionary } from "@/i18n/types";
import type { LocalizedGuide } from "@/content/guides";

type ServicePage = Dictionary["servicePages"][number];

function areaServedForLocale(locale: Locale) {
  const seo = localeSeo[locale];
  if (seo.worldwide) {
    return "Worldwide";
  }
  return { "@type": "Country" as const, name: seo.countryName };
}

function organizationNode(locale: Locale) {
  const dict = getDictionary(locale);
  const seo = localeSeo[locale];

  return {
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: dict.brand.nameLocal,
    alternateName: dict.brand.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.svg`,
    },
    image: `${siteConfig.url}/logo.svg`,
    description: dict.meta.description,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: seo.countryCode,
      addressLocality: dict.location.city,
    },
    areaServed: areaServedForLocale(locale),
    sameAs: siteConfig.socialLinks.filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: seo.contactLanguages,
      areaServed: seo.worldwide ? "Worldwide" : seo.countryCode,
    },
    knowsAbout: dict.services.items.map((item) => item.title),
  };
}

export function getSiteJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const homeUrl = absoluteUrl(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${homeUrl}/#website`,
        url: homeUrl,
        name: dict.brand.nameLocal,
        alternateName: dict.brand.name,
        description: dict.meta.description,
        inLanguage: dict.meta.htmlLang,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      organizationNode(locale),
    ],
  };
}

export function getHomeJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const homeUrl = absoluteUrl(locale);
  const areaServed = areaServedForLocale(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${homeUrl}/#webpage`,
        url: homeUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: dict.meta.htmlLang,
        isPartOf: { "@id": `${homeUrl}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        dateModified: siteConfig.contentUpdatedAt,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${homeUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.brand.nameLocal,
            item: homeUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}/#services`,
        name: dict.services.eyebrow,
        itemListElement: dict.servicePages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: page.h1,
          url: absoluteUrl(locale, `/${page.slug}`),
        })),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${homeUrl}/#service`,
        name: dict.brand.nameLocal,
        description: dict.meta.description,
        url: homeUrl,
        telephone: siteConfig.phone,
        priceRange: "$$",
        areaServed,
        serviceType: dict.services.items.map((item) => item.title),
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}/#faq`,
        mainEntity: dict.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function getServiceJsonLd(locale: Locale, page: ServicePage) {
  const dict = getDictionary(locale);
  const url = absoluteUrl(locale, `/${page.slug}`);
  const homeUrl = absoluteUrl(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: dict.meta.htmlLang,
        isPartOf: { "@id": `${homeUrl}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        dateModified: siteConfig.contentUpdatedAt,
      },
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: page.h1,
        description: page.metaDescription,
        url,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: areaServedForLocale(locale),
        serviceType: page.h1,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.servicePage.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: url,
          },
        ],
      },
    ],
  };
}

export function getGuidesIndexJsonLd(locale: Locale, guides: LocalizedGuide[]) {
  const dict = getDictionary(locale);
  const url = absoluteUrl(locale, "/guides");
  const homeUrl = absoluteUrl(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}/#webpage`,
        url,
        name: dict.guides.metaTitle,
        description: dict.guides.metaDescription,
        inLanguage: dict.meta.htmlLang,
        isPartOf: { "@id": `${homeUrl}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.guides.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.guides.title,
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.h1,
          url: absoluteUrl(locale, `/guides/${guide.slug}`),
        })),
      },
    ],
  };
}

export function getGuideJsonLd(locale: Locale, guide: LocalizedGuide) {
  const dict = getDictionary(locale);
  const url = absoluteUrl(locale, `/guides/${guide.slug}`);
  const homeUrl = absoluteUrl(locale);
  const guidesUrl = absoluteUrl(locale, "/guides");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: guide.h1,
        description: guide.description,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        inLanguage: dict.meta.htmlLang,
        mainEntityOfPage: url,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        image: `${siteConfig.url}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.guides.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.guides.title,
            item: guidesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.h1,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

/** @deprecated use getSiteJsonLd + getHomeJsonLd */
export function getJsonLd(locale: Locale) {
  const site = getSiteJsonLd(locale);
  const home = getHomeJsonLd(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [...site["@graph"], ...home["@graph"]],
  };
}
