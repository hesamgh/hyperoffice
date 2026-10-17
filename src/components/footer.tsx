"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/logo";
import { PwaFooterInstall } from "@/components/pwa-footer-install";
import { HomeLink, HashLink } from "@/components/home-link";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";
import { locales, localeNames, localeHreflang } from "@/i18n/config";
import { getLocalizedGuides } from "@/content/guides";

function fill(
  template: string,
  values: Record<string, string | number>
): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template
  );
}

export function Footer() {
  const { dictionary: dict, locale } = useDictionary();
  const currentYear = new Date().getFullYear();
  const guides = getLocalizedGuides(locale);

  return (
    <footer className="border-t border-white/5 bg-surface-card">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Logo showWordmark size="md" />
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {fill(dict.footer.blurb, {
                city: dict.location.city,
                country: dict.location.country,
              })}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.servicesHeading}</h3>
            <ul className="space-y-2 text-sm text-muted">
              {dict.servicePages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={localePath(locale, `/${page.slug}`)}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {page.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.guidesHeading}</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href={localePath(locale, "/guides")}
                  className="hover:text-brand-400 transition-colors"
                >
                  {dict.guides.title}
                </Link>
              </li>
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={localePath(locale, `/guides/${guide.slug}`)}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {guide.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.pagesHeading}</h3>
            <ul className="space-y-2 text-sm text-muted mb-6">
              <li>
                <HomeLink className="hover:text-brand-400 transition-colors">
                  {dict.servicePage.home}
                </HomeLink>
              </li>
              <li>
                <HashLink
                  href={localePath(locale, "/#contact")}
                  className="hover:text-brand-400 transition-colors"
                >
                  {dict.nav.contact}
                </HashLink>
              </li>
            </ul>
            <h3 className="font-semibold mb-4">{dict.footer.languagesHeading}</h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted mb-6">
              {locales.map((loc) => (
                <li key={loc}>
                  <Link
                    href={localePath(loc)}
                    hrefLang={localeHreflang[loc]}
                    className={`hover:text-brand-400 transition-colors ${
                      loc === locale ? "text-white" : ""
                    }`}
                  >
                    {localeNames[loc]}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-4">{dict.footer.contactHeading}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-muted hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{dict.nav.callUs}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-brand-400 transition-colors"
                >
                  {dict.contact.telegram}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-brand-400 transition-colors"
                >
                  {dict.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <MapPin className="w-4 h-4 shrink-0" />
                {dict.location.city} · {dict.location.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            {fill(dict.footer.rights, {
              year: currentYear,
              name: dict.brand.nameLocal,
            })}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <PwaFooterInstall />
            <HomeLink className="text-muted hover:text-white transition-colors">
              hyperoffice.ir
            </HomeLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
