"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/json-ld";
import { getServiceJsonLd } from "@/lib/json-ld";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";
import type { Dictionary } from "@/i18n/types";
import { getGuidesForService } from "@/content/guides";

type Props = {
  page: Dictionary["servicePages"][number];
};

export function ServicePageLayout({ page }: Props) {
  const { dictionary: dict, locale, dir } = useDictionary();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const relatedServices = dict.servicePages.filter(
    (item) => item.slug !== page.slug
  );
  const relatedGuides = getGuidesForService(locale, page.slug);

  return (
    <>
      <JsonLd data={getServiceJsonLd(locale, page)} />

      <article className="pt-24 pb-16 md:pt-28">
        <div className="container-max">
          <nav aria-label="breadcrumb" className="text-sm text-white/40 mb-8">
            <Link
              href={localePath(locale)}
              className="hover:text-white/70 transition-colors"
            >
              {dict.servicePage.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{page.h1}</span>
          </nav>

          <header className="max-w-3xl mb-12">
            <h1 className="section-title mb-4">{page.h1}</h1>
            <p className="text-lg text-white/70 leading-relaxed">{page.intro}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {page.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    {section.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="font-semibold mb-4">{dict.servicePage.features}</h2>
                <ul className="space-y-3 mb-6">
                  {page.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary w-full"
                >
                  <Phone className="w-4 h-4" />
                  {dict.servicePage.freeConsult}
                </a>
              </div>
            </aside>
          </div>

          {(relatedServices.length > 0 || relatedGuides.length > 0) && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedServices.length > 0 ? (
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    {dict.servicePage.relatedServices}
                  </h2>
                  <ul className="space-y-2">
                    {relatedServices.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={localePath(locale, `/${item.slug}`)}
                          className="text-brand-400 hover:text-brand-300 transition-colors"
                        >
                          {item.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {relatedGuides.length > 0 ? (
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    {dict.servicePage.relatedGuides}
                  </h2>
                  <ul className="space-y-2">
                    {relatedGuides.map((guide) => (
                      <li key={guide.slug}>
                        <Link
                          href={localePath(locale, `/guides/${guide.slug}`)}
                          className="text-brand-400 hover:text-brand-300 transition-colors"
                        >
                          {guide.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-white/5">
            <Link
              href={localePath(locale, "/#contact")}
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
            >
              <Arrow className="w-4 h-4" />
              {dict.servicePage.startCta}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
