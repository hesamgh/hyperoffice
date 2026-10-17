"use client";

import { HomeLink } from "@/components/home-link";
import { useDictionary } from "@/i18n/dictionary-provider";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  linked?: boolean;
};

const sizes = {
  sm: 32,
  md: 36,
  lg: 44,
} as const;

export function Logo({
  showWordmark = true,
  size = "md",
  className = "",
  linked = false,
}: LogoProps) {
  const { dictionary: dict } = useDictionary();
  const px = sizes[size];
  const brandName = dict.brand.name;

  const content = (
    <>
      <img
        src="/logo-mark.svg"
        alt={showWordmark ? "" : brandName}
        width={px}
        height={px}
        className="shrink-0 rounded-[22%] group-hover:scale-105 transition-transform duration-300"
        decoding="async"
      />
      {showWordmark && (
        <span className="font-semibold text-[1.05rem] tracking-tight leading-none text-white">
          <span className="bg-gradient-to-l from-white via-white to-brand-300 bg-clip-text text-transparent">
            Hyper
          </span>
          <span className="text-white/50 font-medium">Office</span>
        </span>
      )}
    </>
  );

  const wrapperClass = `inline-flex items-center gap-2.5 ${className}`;

  if (linked) {
    return (
      <HomeLink className={`group ${wrapperClass}`} aria-label={brandName}>
        {content}
      </HomeLink>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
