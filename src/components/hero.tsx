"use client";

import { ArrowLeft, ArrowRight, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { HeroBackground } from "@/components/hero-background";
import { HeroCodePreview } from "@/components/hero-code-preview";
import { useDictionary } from "@/i18n/dictionary-provider";

export function Hero() {
  const { dictionary: dict, dir } = useDictionary();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative md:min-h-[90dvh] overflow-hidden pt-20 pb-10 md:pt-24 md:pb-20">
      <HeroBackground />

      <div className="container-max pt-4 pb-6 md:pt-6 md:pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <div className="mb-8 md:mb-10">
            <span className="hero-badge">
              <Sparkles className="w-4 h-4 shrink-0" aria-hidden />
              {dict.hero.badge}
            </span>
          </div>

          <h1 className="hero-title mb-6 md:mb-8">
            <span className="hero-title-line">{dict.hero.titleLine1}</span>
            <span className="hero-title-line">
              <span className="hero-title-accent">{dict.hero.titleAccent}</span>
              {dict.hero.titleLine2Suffix
                ? ` ${dict.hero.titleLine2Suffix}`
                : null}
            </span>
          </h1>

          <p className="hero-subtitle max-w-2xl mx-auto mb-8 md:mb-12">
            {dict.hero.subtitle}
            <br className="hidden sm:block" /> {dict.hero.subtitleLine2}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              {dict.hero.startProject}
              <Arrow className="w-5 h-5" aria-hidden />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-secondary text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" aria-hidden />
              <span>{dict.nav.callUs}</span>
            </a>
          </div>

          <HeroCodePreview />
        </div>
      </div>
    </section>
  );
}
