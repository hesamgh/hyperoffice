import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";

/** Build a locale-aware path. `path` is like `/`, `/tarahi-site`, `/#contact`. */
export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") {
    return `/${locale}`;
  }

  if (normalized.startsWith("/#")) {
    return `/${locale}${normalized}`;
  }

  return `/${locale}${normalized}`;
}

export function stripLocaleFromPathname(pathname: string): {
  locale: Locale;
  path: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = segments.slice(1).join("/");
    return {
      locale: maybeLocale,
      path: rest ? `/${rest}` : "/",
    };
  }

  return { locale: defaultLocale, path: pathname || "/" };
}
