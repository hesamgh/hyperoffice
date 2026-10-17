"use client";

import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";

export function Process() {
  const { dictionary: dict } = useDictionary();

  return (
    <section id="process" className="section-padding">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.process.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.process.titleBefore}{" "}
            <span className="gradient-text">{dict.process.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto">{dict.process.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.process.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.1} className="relative">
              {index < dict.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -left-3 w-6 h-px bg-gradient-to-l from-brand-500/50 to-transparent" />
              )}
              <div className="glass-card p-6 h-full">
                <span className="text-4xl font-bold gradient-text opacity-50 latin-nums">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
