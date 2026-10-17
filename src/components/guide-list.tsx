import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { getGuidesIndexJsonLd } from "@/lib/json-ld";
import { formatIsoDate } from "@/lib/format-date";
import { localePath } from "@/i18n/path";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { LocalizedGuide } from "@/content/guides";
import { estimateReadingMinutes } from "@/content/guides";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
  guides: LocalizedGuide[];
};

export function GuideList({ locale, dictionary: dict, guides }: Props) {
  return (
    <>
      <JsonLd data={getGuidesIndexJsonLd(locale, guides)} />
      <section className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container-max">
          <header className="max-w-3xl mb-12">
            <nav aria-label="breadcrumb" className="text-sm text-white/40 mb-8">
              <Link
                href={localePath(locale)}
                className="hover:text-white/70 transition-colors"
              >
                {dict.guides.home}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/60">{dict.guides.title}</span>
            </nav>
            <h1 className="section-title mb-4">{dict.guides.title}</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {dict.guides.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <article key={guide.slug} className="glass-card p-6 flex flex-col">
                <p className="text-xs text-white/40 mb-3">
                  {dict.guides.updatedLabel}{" "}
                  {formatIsoDate(guide.updatedAt, locale)} ·{" "}
                  {estimateReadingMinutes(guide)} {dict.guides.minRead}
                </p>
                <h2 className="text-xl font-semibold mb-3">
                  <Link
                    href={localePath(locale, `/guides/${guide.slug}`)}
                    className="hover:text-brand-300 transition-colors"
                  >
                    {guide.h1}
                  </Link>
                </h2>
                <p className="text-sm text-white/55 leading-relaxed flex-1">
                  {guide.description}
                </p>
                <Link
                  href={localePath(locale, `/guides/${guide.slug}`)}
                  className="inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 mt-5"
                >
                  {dict.guides.readMore}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
