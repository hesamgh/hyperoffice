"use client";

import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";

export function Portfolio() {
  const { dictionary: dict } = useDictionary();

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.portfolio.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.portfolio.titleBefore}{" "}
            <span className="gradient-text">{dict.portfolio.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{dict.portfolio.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.portfolio.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card p-6 h-full hover:bg-white/[0.04] transition-colors">
                <span className="text-xs text-brand-400 font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
