"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { smoothScrollToHash, smoothScrollToTop } from "@/lib/smooth-scroll";
import { useDictionary } from "@/i18n/dictionary-provider";
import { localePath } from "@/i18n/path";

type HomeLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href?: string;
};

export function HomeLink({
  href,
  onClick,
  children,
  ...props
}: HomeLinkProps) {
  const pathname = usePathname();
  const { locale } = useDictionary();
  const target = href ?? localePath(locale);

  return (
    <Link
      href={target}
      onClick={(event) => {
        if (pathname === target) {
          event.preventDefault();
          smoothScrollToTop();
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

type HashLinkProps = ComponentProps<"a"> & {
  href: string;
};

export function HashLink({ href, onClick, children, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const { locale } = useDictionary();
  const homePath = localePath(locale);

  return (
    <a
      href={href}
      onClick={(event) => {
        const hash = href.includes("#") ? href.slice(href.indexOf("#")) : href;
        if (pathname === homePath && hash.startsWith("#")) {
          event.preventDefault();
          smoothScrollToHash(hash);
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
