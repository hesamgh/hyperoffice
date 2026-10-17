"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";
import { getLocalizedGuides, estimateReadingMinutes } from "@/content/guides";

export function GuidesTeaser() {
  const { dictionary: dict, locale, dir } = useDictionary();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const guides = getLocalizedGuides(locale).slice(0, 4);

  return (
    <section id="guides" className="section-padding">
      <div className="container-max">
        <Reveal className="text-center mb-12">
          <span className="text-brand-400 text-sm font-medium">
            {dict.guides.title}
          </span>
          <h2 className="section-title mt-3 mb-4">{dict.guides.title}</h2>
          <p className="section-subtitle mx-auto">{dict.guides.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 0.06}>
              <Link
                href={localePath(locale, `/guides/${guide.slug}`)}
                className="glass-card p-6 block h-full hover:bg-white/[0.05] transition-colors"
              >
                <p className="text-xs text-white/40 mb-2">
                  {estimateReadingMinutes(guide)} {dict.guides.minRead}
                </p>
                <h3 className="text-lg font-semibold mb-2">{guide.h1}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={localePath(locale, "/guides")}
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
          >
            {dict.guides.readMore}
            <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
