"use client";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-sky-500/20 border-blue-500/20 text-sky-300",
  Backend:
    "from-purple-500/20 to-pink-500/20 border-purple-500/20 text-purple-300",
  Database:
    "from-green-500/20 to-emerald-500/20 border-green-500/20 text-green-300",
};

export function TechStack() {
  const { dictionary: dict } = useDictionary();

  return (
    <section id="tech" className="section-padding relative bg-surface-card/50">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="container-max relative">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.tech.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.tech.titleBefore}{" "}
            <span className="gradient-text">{dict.tech.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{dict.tech.subtitle}</p>
        </Reveal>

        <div className="space-y-8">
          {dict.tech.categories.map((category, catIndex) => (
            <Reveal key={category.key} delay={catIndex * 0.1}>
              <h3 className="text-sm font-medium text-white/40 mb-4 uppercase tracking-wider">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {siteConfig.techStack
                  .filter((t) => t.category === category.key)
                  .map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 rounded-xl border bg-gradient-to-l text-sm font-medium ${categoryColors[category.key]}`}
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
