"use client";

import { Layers, Zap, Shield, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";

const icons = [Layers, Zap, Shield, TrendingUp];

export function WhyUs() {
  const { dictionary: dict } = useDictionary();

  return (
    <section className="section-padding bg-surface-card/30">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.whyUs.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.whyUs.titleBefore}{" "}
            <span className="gradient-text">{dict.whyUs.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.whyUs.features.map((feature, index) => {
            const Icon = icons[index] ?? Layers;
            return (
              <Reveal
                key={feature.title}
                delay={index * 0.08}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
