"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { HashLink } from "@/components/home-link";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";

export function MobileNav() {
  const { dictionary: dict, locale } = useDictionary();
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(72);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: localePath(locale, "/#services"), label: dict.nav.services, hash: true },
    { href: localePath(locale, "/guides"), label: dict.nav.guides, hash: false },
    { href: localePath(locale, "/#tech"), label: dict.nav.tech, hash: true },
    { href: localePath(locale, "/#process"), label: dict.nav.process, hash: true },
    { href: localePath(locale, "/#faq"), label: dict.nav.faq, hash: true },
    { href: localePath(locale, "/#contact"), label: dict.nav.contact, hash: true },
  ];

  const updatePanelTop = useCallback(() => {
    const header = document.querySelector(".site-header");
    if (header) {
      const bottom = header.getBoundingClientRect().bottom;
      if (bottom > 0) setPanelTop(bottom);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    updatePanelTop();
    window.addEventListener("resize", updatePanelTop);
    return () => window.removeEventListener("resize", updatePanelTop);
  }, [updatePanelTop]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePanelTop();
    const frame = requestAnimationFrame(updatePanelTop);
    return () => cancelAnimationFrame(frame);
  }, [open, updatePanelTop]);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    header?.classList.toggle("site-header-open", open);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      header?.classList.remove("site-header-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    window.addEventListener("scroll", updatePanelTop, { passive: true });
    return () => window.removeEventListener("scroll", updatePanelTop);
  }, [open, updatePanelTop]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => setOpen(false);

  const toggle = () => {
    setOpen((value) => !value);
  };

  const belowHeaderStyle = { top: panelTop };

  const overlay =
    open && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="mobile-nav-backdrop"
              style={belowHeaderStyle}
              aria-label={dict.nav.closeMenu}
              onClick={close}
            />

            <nav
              className="fixed inset-x-0 z-[49] border-t border-white/10 bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              style={belowHeaderStyle}
              aria-label={dict.nav.mobileAria}
            >
              <div className="container-max py-5 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.hash ? (
                    <HashLink
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3.5 text-base text-white/85 hover:text-white hover:bg-white/[0.05] transition-colors"
                      onClick={close}
                    >
                      {link.label}
                    </HashLink>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3.5 text-base text-white/85 hover:text-white hover:bg-white/[0.05] transition-colors"
                      onClick={close}
                    >
                      {link.label}
                    </Link>
                  )
                )}

                <div className="my-2 h-px bg-white/10" />

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary text-sm w-full"
                  onClick={close}
                >
                  <Phone className="w-4 h-4" />
                  <span>{dict.nav.callUs}</span>
                </a>
              </div>
            </nav>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
        aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
        aria-expanded={open}
        onClick={toggle}
      >
        {open ? (
          <X className="w-6 h-6" aria-hidden />
        ) : (
          <Menu className="w-6 h-6" aria-hidden />
        )}
      </button>

      {overlay}
    </>
  );
}
