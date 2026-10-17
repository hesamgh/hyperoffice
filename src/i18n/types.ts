export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteName: string;
    localeOg: string;
    htmlLang: string;
  };
  brand: {
    name: string;
    nameLocal: string;
  };
  location: {
    city: string;
    country: string;
  };
  nav: {
    services: string;
    guides: string;
    tech: string;
    process: string;
    faq: string;
    contact: string;
    callUs: string;
    mainAria: string;
    mobileAria: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2Suffix: string;
    subtitle: string;
    subtitleLine2: string;
    startProject: string;
  };
  services: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    subtitle: string;
    moreInfo: string;
    items: { title: string; description: string; href: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    moreLink: string;
    whyTitle: string;
    whyItems: string[];
  };
  portfolio: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    items: { title: string; category: string; description: string; tags: string[] }[];
  };
  whyUs: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    features: { title: string; description: string }[];
  };
  tech: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    categories: { key: "Frontend" | "Backend" | "Database"; label: string }[];
  };
  process: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    steps: { step: string; title: string; description: string }[];
  };
  stats: { value: string; label: string }[];
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    telegram: string;
    whatsapp: string;
    freeNote: string;
  };
  footer: {
    blurb: string;
    servicesHeading: string;
    guidesHeading: string;
    pagesHeading: string;
    languagesHeading: string;
    contactHeading: string;
    rights: string;
  };
  servicePage: {
    home: string;
    features: string;
    freeConsult: string;
    startCta: string;
    relatedServices: string;
    relatedGuides: string;
  };
  guides: {
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    readMore: string;
    publishedLabel: string;
    updatedLabel: string;
    relatedServices: string;
    relatedGuides: string;
    sources: string;
    minRead: string;
    home: string;
    cta: string;
  };
  pwa: {
    installTitle: string;
    installDescription: string;
    install: string;
    installIos: string;
    installing: string;
    dismiss: string;
  };
  servicePages: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    intro: string;
    sections: { title: string; content: string }[];
    features: string[];
  }[];
};
