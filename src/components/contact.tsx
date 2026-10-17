"use client";

import { Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion";
import { TelegramIcon } from "@/components/icons/telegram";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useDictionary } from "@/i18n/dictionary-provider";

export function Contact() {
  const { dictionary: dict, dir } = useDictionary();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container-max relative">
        <Reveal className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <span className="text-brand-400 text-sm font-medium">
            {dict.contact.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">
            {dict.contact.titleBefore}{" "}
            <span className="gradient-text">{dict.contact.titleAccent}</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">{dict.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-primary text-lg px-10 py-4 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>{dict.nav.callUs}</span>
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-4 w-full sm:w-auto"
            >
              <TelegramIcon />
              {dict.contact.telegram}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-4 w-full sm:w-auto"
            >
              <WhatsAppIcon />
              {dict.contact.whatsapp}
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-muted text-sm">
            <Arrow className="w-4 h-4" />
            {dict.contact.freeNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
