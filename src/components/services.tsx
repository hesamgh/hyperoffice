"use client";

import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Palette,
  Search,
  Headphones,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";

const icons = [Globe, ShoppingCart, Code2, Palette, Search, Headphones];

export function Services() {
  const { dictionary: dict, locale, dir } = useDictionary();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="section-padding relative">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.services.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.services.titleBefore}{" "}
            <span className="gradient-text">{dict.services.titleAccent}</span>
            {dict.services.titleAfter ? ` ${dict.services.titleAfter}` : null}
          </h2>
          <p className="section-subtitle mx-auto">{dict.services.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.services.items.map((service, index) => {
            const Icon = icons[index];
            const href = localePath(locale, service.href);
            const isHash = service.href.includes("#");

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <Link
                  href={href}
                  className="glass-card p-6 group hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 block h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  {!isHash && (
                    <span className="inline-flex items-center gap-1 text-xs text-brand-400 group-hover:text-brand-300">
                      {dict.services.moreInfo}
                      <Arrow className="w-3 h-3" />
                    </span>
                  )}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
