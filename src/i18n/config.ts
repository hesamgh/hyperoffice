/**
 * International-first display order:
 * 1. Default (en)
 * 2. Major global languages (es, fr, de, zh)
 * 3. Regional (ar, tr)
 * 4. Persian — local market, listed last for international positioning
 */
export const locales = ["en", "es", "fr", "de", "zh", "ar", "tr", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
  fr: "Français",
  zh: "中文",
  es: "Español",
  de: "Deutsch",
};

export const localeDirections: Record<Locale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
  ar: "rtl",
  tr: "ltr",
  fr: "ltr",
  zh: "ltr",
  es: "ltr",
  de: "ltr",
};

/** Primary market per locale — used for hreflang, JSON-LD, and geo hints. */
export const localeHreflang: Record<Locale, string> = {
  en: "en",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  zh: "zh-Hans",
  ar: "ar",
  tr: "tr-TR",
  fa: "fa-IR",
};

export const localeSeo: Record<
  Locale,
  {
    countryCode: string;
    countryName: string;
    contactLanguages: string[];
    worldwide?: boolean;
  }
> = {
  en: {
    countryCode: "US",
    countryName: "United States",
    contactLanguages: ["English"],
    worldwide: true,
  },
  es: {
    countryCode: "ES",
    countryName: "Spain",
    contactLanguages: ["Spanish", "English"],
  },
  fr: {
    countryCode: "FR",
    countryName: "France",
    contactLanguages: ["French", "English"],
  },
  de: {
    countryCode: "DE",
    countryName: "Germany",
    contactLanguages: ["German", "English"],
  },
  zh: {
    countryCode: "CN",
    countryName: "China",
    contactLanguages: ["Chinese", "English"],
  },
  ar: {
    countryCode: "SA",
    countryName: "Saudi Arabia",
    contactLanguages: ["Arabic", "English"],
  },
  tr: {
    countryCode: "TR",
    countryName: "Turkey",
    contactLanguages: ["Turkish", "English"],
  },
  fa: {
    countryCode: "IR",
    countryName: "Iran",
    contactLanguages: ["Persian", "English"],
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleDirection(locale: Locale): "rtl" | "ltr" {
  return localeDirections[locale];
}
