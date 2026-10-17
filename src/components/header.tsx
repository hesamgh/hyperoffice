"use client";

import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { HashLink } from "@/components/home-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";

export function Header() {
  const { dictionary: dict, locale } = useDictionary();

  const navLinks = [
    { href: localePath(locale, "/#services"), label: dict.nav.services, hash: true },
    { href: localePath(locale, "/guides"), label: dict.nav.guides, hash: false },
    { href: localePath(locale, "/#tech"), label: dict.nav.tech, hash: true },
    { href: localePath(locale, "/#process"), label: dict.nav.process, hash: true },
    { href: localePath(locale, "/#faq"), label: dict.nav.faq, hash: true },
    { href: localePath(locale, "/#contact"), label: dict.nav.contact, hash: true },
  ];

  return (
    <header className="site-header fixed top-0 inset-x-0 z-50">
      <div className="container-max flex items-center justify-between gap-3">
        <Logo linked size="md" />

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label={dict.nav.mainAria}
        >
          {navLinks.map((link) =>
            link.hash ? (
              <HashLink
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </HashLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
