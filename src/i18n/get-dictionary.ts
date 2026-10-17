import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { fa } from "./dictionaries/fa";
import { en } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import { tr } from "./dictionaries/tr";
import { fr } from "./dictionaries/fr";
import { zh } from "./dictionaries/zh";
import { es } from "./dictionaries/es";
import { de } from "./dictionaries/de";

const dictionaries: Record<Locale, Dictionary> = {
  fa,
  en,
  ar,
  tr,
  fr,
  zh,
  es,
  de,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getServicePage(locale: Locale, slug: string) {
  return getDictionary(locale).servicePages.find((page) => page.slug === slug);
}

export function getServiceSlugs() {
  return fa.servicePages.map((page) => page.slug);
}
