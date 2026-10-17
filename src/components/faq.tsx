"use client";

import { useDictionary } from "@/i18n/dictionary-provider";

export function FAQ() {
  const { dictionary: dict } = useDictionary();

  return (
    <section id="faq" className="section-padding relative z-10">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-medium">
            {dict.faq.eyebrow}
          </span>
          <h2 className="section-title mt-3 mb-4">{dict.faq.title}</h2>
          <p className="section-subtitle mx-auto">{dict.faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {dict.faq.items.map((faq, index) => (
            <div key={faq.question} className="faq-item glass-card">
              <input
                type="radio"
                name="faq"
                id={`faq-${index}`}
                className="faq-radio"
                defaultChecked={index === 0}
              />
              <label htmlFor={`faq-${index}`} className="faq-summary">
                <span className="font-medium">{faq.question}</span>
                <span className="faq-chevron" aria-hidden />
              </label>

              <div className="faq-panel">
                <div className="faq-panel-inner">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
