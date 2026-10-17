"use client";

import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";

export function Stats() {
  const { dictionary: dict } = useDictionary();

  return (
    <section className="section-padding bg-surface-card/50">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="text-center glass-card p-8"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 latin-nums">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
