"use client";

import { useEffect } from "react";
import { type Locale } from "@/i18n/config";
import { saveLocalePreference } from "@/i18n/detect-locale";

type Props = {
  locale: Locale;
  htmlLang: string;
  dir: "rtl" | "ltr";
};

export function DocumentLocale({ locale, htmlLang, dir }: Props) {
  useEffect(() => {
    document.documentElement.lang = htmlLang;
    document.documentElement.dir = dir;
    document.documentElement.dataset.locale = locale;
    saveLocalePreference(locale);
  }, [locale, htmlLang, dir]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(htmlLang)};document.documentElement.dir=${JSON.stringify(dir)};document.documentElement.dataset.locale=${JSON.stringify(locale)};`,
      }}
    />
  );
}
