import type { Locale } from "@/i18n/config";

export type GuideLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type GuideCopy = {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: { title: string; content: string; links?: GuideLink[] }[];
  faq: { question: string; answer: string }[];
};

export type GuideMeta = {
  slug: string;
  publishedAt: string;
  updatedAt: string;
  relatedServices: string[];
  relatedGuides: string[];
  sources: GuideLink[];
};

export type LocalizedGuide = GuideMeta & GuideCopy;

export type GuideCopyMap = Record<Locale, GuideCopy>;
