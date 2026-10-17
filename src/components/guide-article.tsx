import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/json-ld";
import { ContentLink } from "@/components/content-link";
import { getGuideJsonLd } from "@/lib/json-ld";
import { formatIsoDate } from "@/lib/format-date";
import { localePath } from "@/i18n/path";
import { getLocaleDirection, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  estimateReadingMinutes,
  getRelatedGuides,
  type LocalizedGuide,
} from "@/content/guides";

type Props = {
  locale: Locale;
  guide: LocalizedGuide;
};

export function GuideArticle({ locale, guide }: Props) {
  const dict = getDictionary(locale);
  const dir = getLocaleDirection(locale);
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const relatedGuides = getRelatedGuides(locale, guide.slug);
  const relatedServices = dict.servicePages.filter((page) =>
    guide.relatedServices.includes(page.slug)
  );
  const minutes = estimateReadingMinutes(guide);

  return (
    <>
      <JsonLd data={getGuideJsonLd(locale, guide)} />
      <article className="pt-24 pb-16 md:pt-28">
        <div className="container-max max-w-3xl">
          <nav aria-label="breadcrumb" className="text-sm text-white/40 mb-8">
            <Link
              href={localePath(locale)}
              className="hover:text-white/70 transition-colors"
            >
              {dict.guides.home}
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={localePath(locale, "/guides")}
              className="hover:text-white/70 transition-colors"
            >
              {dict.guides.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{guide.h1}</span>
          </nav>

          <header className="mb-10">
            <h1 className="section-title mb-4">{guide.h1}</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-4">
              {guide.intro}
            </p>
            <p className="text-sm text-white/40">
              {dict.guides.publishedLabel}{" "}
              <time dateTime={guide.publishedAt}>
                {formatIsoDate(guide.publishedAt, locale)}
              </time>
              {" · "}
              {dict.guides.updatedLabel}{" "}
              <time dateTime={guide.updatedAt}>
                {formatIsoDate(guide.updatedAt, locale)}
              </time>
              {" · "}
              {minutes} {dict.guides.minRead}
            </p>
          </header>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {section.title}
                </h2>
                <p className="text-white/60 leading-relaxed">{section.content}</p>
                {section.links?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={`${link.href}-${link.label}`}>
                        <ContentLink
                          link={link}
                          locale={locale}
                          className="text-brand-400 hover:text-brand-300 transition-colors"
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {guide.faq.length ? (
            <section className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                {dict.nav.faq}
              </h2>
              <div className="space-y-4">
                {guide.faq.map((item) => (
                  <div key={item.question} className="glass-card p-5">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12">
            <h2 className="text-lg font-semibold mb-4">{dict.guides.sources}</h2>
            <ul className="space-y-2 text-sm">
              {guide.sources.map((link) => (
                <li key={link.href}>
                  <ContentLink
                    link={link}
                    locale={locale}
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  />
                </li>
              ))}
            </ul>
          </section>

          {relatedServices.length ? (
            <section className="mt-12">
              <h2 className="text-lg font-semibold mb-4">
                {dict.guides.relatedServices}
              </h2>
              <ul className="flex flex-wrap gap-3">
                {relatedServices.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={localePath(locale, `/${page.slug}`)}
                      className="inline-flex rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 hover:text-white hover:border-brand-400/40 transition-colors"
                    >
                      {page.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {relatedGuides.length ? (
            <section className="mt-10">
              <h2 className="text-lg font-semibold mb-4">
                {dict.guides.relatedGuides}
              </h2>
              <ul className="space-y-3">
                {relatedGuides.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={localePath(locale, `/guides/${item.slug}`)}
                      className="text-brand-400 hover:text-brand-300 transition-colors"
                    >
                      {item.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <Link
              href={localePath(locale, "/#contact")}
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
            >
              <Arrow className="w-4 h-4" />
              {dict.guides.cta}
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-primary w-fit">
              <Phone className="w-4 h-4" />
              {dict.nav.callUs}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
