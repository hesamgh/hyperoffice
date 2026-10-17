"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";

function fill(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template
  );
}

export function About() {
  const { dictionary: dict, locale } = useDictionary();

  return (
    <section id="about" className="section-padding bg-surface-card/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-brand-400 text-sm font-medium">
              {dict.about.eyebrow}
            </span>
            <h2 className="section-title mt-3 mb-6">{dict.about.title}</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              {dict.about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Link
              href={localePath(locale, "/tarahi-site")}
              className="inline-flex items-center gap-2 mt-6 text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium"
            >
              {dict.about.moreLink}
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="font-semibold mb-4">{dict.about.whyTitle}</h3>
              <ul className="space-y-3 text-sm text-white/60">
                {dict.about.whyItems.map((item) => (
                  <li key={item}>
                    ✦{" "}
                    {fill(item, {
                      city: dict.location.city,
                      country: dict.location.country,
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
