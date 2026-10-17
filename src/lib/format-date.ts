import type { Locale } from "@/i18n/config";
import { localeHreflang } from "@/i18n/config";

export function formatIsoDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeHreflang[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}
