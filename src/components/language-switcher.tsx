"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Languages } from "lucide-react";
import { locales, localeNames, localeHreflang, type Locale } from "@/i18n/config";
import { saveLocalePreference } from "@/i18n/detect-locale";
import { stripLocaleFromPathname, localePath } from "@/i18n/path";
import { useDictionary } from "@/i18n/dictionary-provider";

type Props = {
  className?: string;
};

export function LanguageSwitcher({ className = "" }: Props) {
  const pathname = usePathname();
  const { locale: currentLocale } = useDictionary();
  const { path } = stripLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && rootRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
        aria-label="Language"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="h-4 w-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline text-xs font-medium">
          {localeNames[currentLocale]}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 opacity-70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute end-0 top-[calc(100%+0.4rem)] z-[60] min-w-[9.5rem] overflow-hidden rounded-xl border border-white/10 bg-surface-card/95 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
        >
          {locales.map((locale) => {
            const active = locale === currentLocale;
            const href = localePath(locale, path);

            return (
              <Link
                key={locale}
                href={href}
                hrefLang={localeHreflang[locale]}
                role="menuitem"
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-brand-500/15 text-brand-300"
                    : "text-white/75 hover:bg-white/[0.05] hover:text-white"
                }`}
                onClick={() => {
                  saveLocalePreference(locale);
                  setOpen(false);
                }}
              >
                <span>{localeNames[locale as Locale]}</span>
                {active ? (
                  <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
                ) : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
