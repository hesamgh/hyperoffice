import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import type { GuideLink } from "@/content/guides";

type Props = {
  link: GuideLink;
  locale: Locale;
  className?: string;
};

export function ContentLink({ link, locale, className }: Props) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={localePath(locale, link.href)} className={className}>
      {link.label}
    </Link>
  );
}
