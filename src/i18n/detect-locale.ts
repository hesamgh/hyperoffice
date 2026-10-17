import { defaultLocale, isLocale, locales, type Locale } from "./config";

export const LOCALE_STORAGE_KEY = "hyperoffice-locale";
export const LOCALE_COOKIE = "hyperoffice-locale";

/** ISO 3166-1 alpha-2 country code → site locale (VPN / GeoIP) */
export const countryToLocale: Record<string, Locale> = {
  IR: "fa",
  AF: "fa",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  IQ: "ar",
  JO: "ar",
  KW: "ar",
  LB: "ar",
  OM: "ar",
  QA: "ar",
  BH: "ar",
  YE: "ar",
  SY: "ar",
  LY: "ar",
  MA: "ar",
  TN: "ar",
  DZ: "ar",
  SD: "ar",
  TR: "tr",
  CY: "tr",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MO: "zh",
  SG: "zh",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  FR: "fr",
  BE: "fr",
  LU: "fr",
  MC: "fr",
  DE: "de",
  AT: "de",
  LI: "de",
  CH: "de",
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  IN: "en",
  ZA: "en",
  NG: "en",
  PH: "en",
  MY: "en",
  PK: "en",
};

const languageToLocale: Record<string, Locale> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  zh: "zh",
  "zh-hans": "zh",
  "zh-cn": "zh",
  ar: "ar",
  tr: "tr",
  fa: "fa",
};

export function detectLocaleFromLanguages(
  languages: readonly string[]
): Locale {
  for (const tag of languages) {
    const normalized = tag.trim().toLowerCase();
    if (!normalized) continue;

    if (languageToLocale[normalized]) {
      return languageToLocale[normalized];
    }

    const [language, region] = normalized.split("-");
    if (region && countryToLocale[region.toUpperCase()]) {
      return countryToLocale[region.toUpperCase()];
    }

    if (language && isLocale(language)) {
      return language;
    }
  }

  return defaultLocale;
}

export function detectLocaleFromCountry(country: string): Locale | null {
  return countryToLocale[country.toUpperCase()] ?? null;
}

/** @deprecated use detectLocaleFromCountry */
export function detectLocaleFromRegion(region: string): Locale | null {
  return detectLocaleFromCountry(region);
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;

  try {
    const fromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (fromStorage && isLocale(fromStorage)) return fromStorage;
  } catch {
    // private browsing
  }

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`)
  );
  if (match?.[1] && isLocale(match[1])) return match[1];

  return null;
}

export function saveLocalePreference(locale: Locale): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // private browsing
  }

  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

function browserLanguages(): readonly string[] {
  if (typeof navigator === "undefined") return [defaultLocale];
  return navigator.languages?.length > 0
    ? navigator.languages
    : [navigator.language || defaultLocale];
}

/** Resolve locale from browser language only (sync). */
export function detectPreferredLocale(): Locale {
  const stored = readStoredLocale();
  if (stored) return stored;
  return detectLocaleFromLanguages(browserLanguages());
}

async function fetchJsonWithTimeout(
  url: string,
  timeoutMs: number
): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) return null;
    return response.json();
  } finally {
    clearTimeout(timer);
  }
}

/** Detect country from visitor IP (works with VPN). */
export async function fetchCountryCode(): Promise<string | null> {
  const providers = [
    async () => {
      const data = (await fetchJsonWithTimeout("https://api.country.is/", 2800)) as {
        country?: string;
      } | null;
      return typeof data?.country === "string"
        ? data.country.toUpperCase()
        : null;
    },
    async () => {
      const data = (await fetchJsonWithTimeout("https://ipwho.is/", 2800)) as {
        success?: boolean;
        country_code?: string;
      } | null;
      return data?.success && data.country_code
        ? data.country_code.toUpperCase()
        : null;
    },
  ];

  for (const provider of providers) {
    try {
      const code = await provider();
      if (code) return code;
    } catch {
      // try next provider
    }
  }

  return null;
}

/**
 * Priority: saved choice → GeoIP country (VPN) → browser language → en
 */
export async function detectPreferredLocaleAsync(): Promise<Locale> {
  const stored = readStoredLocale();
  if (stored) return stored;

  const country = await fetchCountryCode();
  if (country) {
    const fromCountry = detectLocaleFromCountry(country);
    if (fromCountry) return fromCountry;
  }

  return detectLocaleFromLanguages(browserLanguages());
}

export function buildLocaleDetectInlineScript(): string {
  const localeList = JSON.stringify([...locales]);
  const fallback = JSON.stringify(defaultLocale);
  const storageKey = JSON.stringify(LOCALE_STORAGE_KEY);
  const cookieName = JSON.stringify(LOCALE_COOKIE);
  const countryMap = JSON.stringify(countryToLocale);
  const languageMap = JSON.stringify(languageToLocale);

  return `(function(){try{var locales=${localeList};var fallback=${fallback};var storageKey=${storageKey};var cookieName=${cookieName};var countryMap=${countryMap};var languageMap=${languageMap};function isLocale(v){return locales.indexOf(v)>=0;}function readStored(){try{var s=localStorage.getItem(storageKey);if(s&&isLocale(s))return s;}catch(e){}var m=document.cookie.match(new RegExp("(?:^|; )"+cookieName+"=([^;]*)"));if(m&&m[1]&&isLocale(m[1]))return m[1];return null;}function detectLang(langs){for(var i=0;i<langs.length;i++){var tag=(langs[i]||"").trim().toLowerCase();if(!tag)continue;if(languageMap[tag])return languageMap[tag];var parts=tag.split("-");if(parts[1]&&countryMap[parts[1].toUpperCase()])return countryMap[parts[1].toUpperCase()];if(isLocale(parts[0]))return parts[0];}return fallback;}function go(locale){location.replace("/"+locale+"/"+location.search+location.hash);}function fetchJson(url,ms){return new Promise(function(resolve,reject){var done=false;var t=setTimeout(function(){done=true;reject(new Error("timeout"));},ms);fetch(url,{cache:"no-store"}).then(function(r){return r.json();}).then(function(j){if(!done){clearTimeout(t);resolve(j);}}).catch(function(e){clearTimeout(t);reject(e);});});}function fetchCountry(){return fetchJson("https://api.country.is/",2800).then(function(d){return d&&d.country?String(d.country).toUpperCase():null;}).catch(function(){return fetchJson("https://ipwho.is/",2800).then(function(d){return d&&d.success&&d.country_code?String(d.country_code).toUpperCase():null;}).catch(function(){return null;});});}async function main(){var path=location.pathname;if(path!=="/"&&path!=="")return;var stored=readStored();if(stored){go(stored);return;}var country=await fetchCountry();if(country&&countryMap[country]){go(countryMap[country]);return;}var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||fallback];go(detectLang(langs));}main();}catch(e){}})();`;
}
