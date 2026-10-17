import Link from "next/link";
import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { buildLocaleDetectInlineScript } from "@/i18n/detect-locale";
import { siteConfig } from "@/lib/site-config";
import { localePath } from "@/i18n/path";

export const metadata: Metadata = {
  title: "HyperOffice",
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${siteConfig.url}${localePath(defaultLocale)}`,
  },
};

export default function RootPage() {
  const href = `/${defaultLocale}/`;

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <script
        dangerouslySetInnerHTML={{ __html: buildLocaleDetectInlineScript() }}
      />
      <meta httpEquiv="refresh" content={`4;url=${href}`} />
      <p className="text-white/70 text-sm">
        <Link href={href} className="text-brand-400 hover:text-brand-300">
          HyperOffice
        </Link>
      </p>
    </div>
  );
}
