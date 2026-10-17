import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: {
    title: "HyperOffice | Conception et développement web professionnels",
    description: "HyperOffice crée des sites et applications web modernes et rapides avec Next.js, React, Python, PHP et Java. Sites vitrine, boutiques en ligne, plateformes sur mesure et SEO : un accompagnement complet.",
    keywords: ["création de site web", "développement web", "site vitrine", "site e-commerce", "Next.js", "SEO", "design UI/UX", "création de site Téhéran", "HyperOffice"],
    siteName: "HyperOffice",
    localeOg: "fr_FR",
    htmlLang: "fr",
  },
  brand: { name: "HyperOffice", nameLocal: "HyperOffice" },
  location: { city: "Téhéran", country: "Iran" },
  nav: { services: "Services", guides: "Guides", tech: "Technologies", process: "Méthode", faq: "FAQ", contact: "Contact", callUs: "Appelez-nous", mainAria: "Navigation principale", mobileAria: "Menu mobile", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
  hero: { badge: "Conception web créative et professionnelle", titleLine1: "Donnez vie au site web", titleAccent: "dont vous rêvez avec HyperOffice", titleLine2Suffix: "", subtitle: "Conception, développement et ingénierie web avec des technologies modernes", subtitleLine2: "Des sites rapides, élégants et conçus pour être visibles sur Google", startProject: "Démarrer un projet" },
  services: {
    eyebrow: "Nos services", titleBefore: "Tout ce qu'il vous faut pour votre", titleAccent: "présence web", titleAfter: "", subtitle: "Du design UI/UX au développement complet et au SEO, tout au même endroit", moreInfo: "En savoir plus",
    items: [
      { title: "Sites vitrine", description: "Des sites professionnels au branding affirmé et à l'expérience utilisateur soignée", href: "/tarahi-site" },
      { title: "Boutiques en ligne", description: "E-commerce avec paiement, panier et panneau d'administration complet", href: "/tarahi-forooshgah" },
      { title: "Développement Next.js", description: "Des sites rapides, évolutifs et optimisés pour le référencement", href: "/tarahi-site" },
      { title: "Design UI/UX", description: "Des interfaces modernes conçues selon les standards internationaux", href: "/tarahi-site" },
      { title: "SEO et optimisation", description: "Gagnez en visibilité sur Google et progressez dans les résultats", href: "/seo-site" },
      { title: "Support et maintenance", description: "Support continu, mises à jour et améliorations régulières", href: "/#contact" },
    ],
  },
  about: {
    eyebrow: "À propos", title: "À propos de HyperOffice",
    paragraphs: ["HyperOffice est une équipe spécialisée dans la conception et le développement web. Avec des outils modernes tels que Next.js, React, Python et PHP, nous créons des sites rapides, esthétiques et performants sur Google.", "Nous réalisons des sites vitrine, des boutiques en ligne, des pages d'atterrissage et des plateformes sur mesure. De la première consultation au lancement et au support, nous restons à vos côtés.", "Nous accompagnons des clients dans tout l'Iran, notamment à Téhéran. Contactez-nous dès aujourd'hui pour une consultation gratuite."],
    moreLink: "En savoir plus sur la création de sites", whyTitle: "Pourquoi HyperOffice ?",
    whyItems: ["Expertise approfondie en Next.js et React", "SEO intégré dès le premier jour", "Consultation et support gratuits", "Délais transparents et livraisons ponctuelles", "Services à {city} et dans tout l'{country}"],
  },
  portfolio: {
    eyebrow: "Portfolio", titleBefore: "Des projets que nous avons", titleAccent: "réalisés", subtitle: "Un aperçu de nos réalisations en conception et développement web",
    items: [
      { title: "Site vitrine", category: "Conception web", description: "Un site d'entreprise moderne avec Next.js, SEO et CMS", tags: ["Next.js", "SEO", "UI/UX"] },
      { title: "Boutique en ligne", category: "E-commerce", description: "Une boutique avec paiement, panier et gestion des commandes", tags: ["Next.js", "Laravel", "Paiement"] },
      { title: "Page d'atterrissage", category: "Landing page", description: "Une page rapide, optimisée pour la conversion", tags: ["Next.js", "Tailwind", "SEO"] },
      { title: "Plateforme d'administration", category: "Application web", description: "Un tableau de bord Python et React sur mesure pour automatiser l'activité", tags: ["Python", "React", "PostgreSQL"] },
    ],
  },
  whyUs: {
    eyebrow: "Pourquoi HyperOffice ?", titleBefore: "Une différence que vous pouvez", titleAccent: "ressentir",
    features: [
      { title: "Design moderne", description: "Inspiré de produits de référence comme Linear et Vercel" },
      { title: "Hautes performances", description: "Des sites Next.js avec d'excellents Core Web Vitals" },
      { title: "Sécurité", description: "Développés selon de solides pratiques de sécurité et avec HTTPS" },
      { title: "SEO efficace", description: "Une optimisation complète pour mieux vous positionner sur Google" },
    ],
  },
  tech: { eyebrow: "Stack technique", titleBefore: "Conçus avec les", titleAccent: "bons outils", subtitle: "Next.js, React, shadcn/ui, Material UI — côté serveur : Python, PHP et Java", categories: [{ key: "Frontend", label: "Front-end" }, { key: "Backend", label: "Back-end" }, { key: "Database", label: "Base de données" }] },
  process: {
    eyebrow: "Notre méthode", titleBefore: "De l'idée à la", titleAccent: "mise en ligne", subtitle: "Une méthode claire et professionnelle pour votre projet",
    steps: [
      { step: "01", title: "Consultation gratuite", description: "Nous étudions vos besoins et recommandons la meilleure approche." },
      { step: "02", title: "Design et prototype", description: "Nous préparons le design UI/UX et un prototype pour votre validation." },
      { step: "03", title: "Développement", description: "Nous développons votre solution avec des technologies modernes." },
      { step: "04", title: "Livraison et support", description: "Mise en ligne, formation et accompagnement continu." },
    ],
  },
  stats: [{ value: "50+", label: "Projets livrés" }, { value: "30+", label: "Clients satisfaits" }, { value: "100 %", label: "Satisfaction client" }, { value: "24/7", label: "Support" }],
  faq: {
    eyebrow: "Questions fréquentes", title: "Une question ?", subtitle: "Les réponses aux questions les plus courantes sur la création de sites et notre collaboration",
    items: [
      { question: "Combien coûte un site web ?", answer: "Le prix dépend du périmètre : nombre de pages, fonctionnalités et complexité technique. Un site vitrine simple démarre à quelques millions de tomans ; les projets plus importants, comme les boutiques en ligne ou les plateformes sur mesure, font l'objet d'un devis dédié. Après une consultation gratuite, nous vous remettons une estimation claire et détaillée." },
      { question: "Quel est le délai de réalisation ?", answer: "Comptez généralement 2 à 4 semaines pour un site vitrine, 1 à 2 semaines pour une page d'atterrissage et 4 à 8 semaines pour une boutique en ligne. Nous confirmons le calendrier après avoir étudié vos besoins." },
      { question: "Quelles technologies utilisez-vous ?", answer: "Côté front-end : Next.js, React, TypeScript, Tailwind CSS, shadcn/ui et Material UI. Côté back-end : Python (Django/FastAPI), PHP (Laravel) et Java (Spring Boot). Selon le projet, nous choisissons PostgreSQL, MongoDB, MySQL, SQL Server, Oracle ou SQLite." },
      { question: "Mon site sera-t-il optimisé pour le SEO ?", answer: "Oui. Chaque projet est livré avec une structure adaptée aux moteurs de recherche, de bonnes performances, des balises meta correctes, un sitemap, des données structurées et une optimisation des Core Web Vitals." },
      { question: "Proposez-vous un support après la mise en ligne ?", answer: "Oui. Nous proposons support technique, corrections de bugs, mises à jour de sécurité et développements complémentaires. La durée et le périmètre sont définis dans le contrat." },
      { question: "Puis-je payer en plusieurs fois ?", answer: "Oui. Le règlement est généralement échelonné : une partie au lancement, une autre après la validation de l'interface, puis le solde à la livraison finale. Les détails figurent dans notre accord." },
      { question: "Comment démarrer ?", answer: "Appelez-nous ou envoyez-nous un message sur Telegram. Nous étudierons vos besoins, vous proposerons une consultation gratuite puis, une fois l'accord trouvé, lancerons le contrat et le planning." },
    ],
  },
  contact: { eyebrow: "Travaillons ensemble", titleBefore: "Prêt à lancer votre", titleAccent: "prochain projet ?", subtitle: "Appelez-nous dès maintenant pour une consultation gratuite et un devis clair. Réponse rapide et conseils d'experts.", telegram: "Telegram", whatsapp: "WhatsApp", freeNote: "Votre première consultation est entièrement gratuite" },
  footer: { blurb: "Spécialistes de la conception et du développement web à {city} et dans tout l'{country}. Des sites modernes, rapides et optimisés pour le SEO.", servicesHeading: "Services", guidesHeading: "Guides", pagesHeading: "Pages", languagesHeading: "Langues", contactHeading: "Contact", rights: "© {year} {name}. Tous droits réservés." },
  servicePage: { home: "Accueil", features: "Fonctionnalités", freeConsult: "Consultation gratuite", startCta: "Démarrer un projet — contactez-nous", relatedServices: "Services liés", relatedGuides: "Guides liés" },
  guides: {
    title: "Guides",
    subtitle: "Textes pratiques sur la création de site, le SEO et l’e-commerce — mis à jour pour un site vivant.",
    metaTitle: "Guides création de site, SEO et e-commerce",
    metaDescription: "Guides HyperOffice : Next.js, coût d’un site, SEO technique et lancement d’une boutique.",
    keywords: ["guide création site", "SEO", "e-commerce", "prix site web", "Next.js"],
    readMore: "Lire la suite",
    publishedLabel: "Publié",
    updatedLabel: "Mis à jour",
    relatedServices: "Services liés",
    relatedGuides: "Guides liés",
    sources: "Sources et liens utiles",
    minRead: "min de lecture",
    home: "Accueil",
    cta: "Consultation gratuite pour votre projet",
  },
  pwa: { installTitle: "Installer HyperOffice", installDescription: "Ajoutez-le à votre écran d'accueil pour y accéder rapidement", install: "Installer l'application", installIos: "Ajouter à l'écran d'accueil", installing: "Préparation de l'installation…", dismiss: "Fermer" },
  servicePages: [
    {
      slug: "tarahi-site", metaTitle: "Conception web professionnelle | Sites vitrine et sur mesure", metaDescription: "Conception web professionnelle avec Next.js et React : sites vitrine, pages d'atterrissage et sites sur mesure, avec SEO performant, rapidité et UI/UX moderne. Consultation gratuite.", keywords: ["création de site web", "développement de site", "site vitrine", "site sur mesure", "création de site Téhéran"], h1: "Conception web professionnelle", intro: "Chez HyperOffice, le design ne se limite pas à l'apparence. Votre site doit être rapide, visible sur Google et capable de convertir vos visiteurs en clients. Nous créons avec Next.js et React des sites modernes qui servent les utilisateurs comme les moteurs de recherche.",
      sections: [
        { title: "Pourquoi Next.js ?", content: "Next.js est l'un des meilleurs frameworks pour les sites modernes. Le SSR et le SSG permettent aux pages de se charger rapidement et d'être bien indexées. SEO intégré, routage propre et évolutivité comptent parmi ses atouts majeurs." },
        { title: "Ce que nous réalisons", content: "Sites vitrine, pages d'atterrissage, sites de services, portfolios, blogs et plateformes sur mesure. Chaque projet comprend un UI/UX adapté, un design responsive et un travail approfondi sur les performances." },
        { title: "Notre processus", content: "Nous commençons par une consultation gratuite, puis partageons le design UI/UX et un prototype. Après votre validation, nous développons avec Next.js, testons en profondeur et livrons avec formation et support." },
      ],
      features: ["UI/UX sur mesure", "Design responsive — mobile et ordinateur", "SEO et données structurées", "Grande rapidité (Core Web Vitals)", "Panneau de gestion de contenu", "Support après lancement"],
    },
    {
      slug: "tarahi-forooshgah", metaTitle: "Création de site e-commerce | Développement de boutique en ligne", metaDescription: "Boutiques en ligne professionnelles avec paiement, panneau d'administration, panier et SEO. Développées avec Next.js et Laravel. Consultation gratuite.", keywords: ["site e-commerce", "boutique en ligne", "création de boutique", "développement e-commerce"], h1: "Création de boutique en ligne", intro: "Votre boutique doit être rapide, sécurisée et inspirer confiance. Nous développons des boutiques complètes avec paiement, gestion des produits et des commandes, ainsi que SEO, afin de vous permettre de vendre en ligne sereinement.",
      sections: [
        { title: "Fonctionnalités de la boutique", content: "Produits et catégories, panier, paiement en ligne, suivi des commandes, panneau d'administration, rapports de vente, codes promo, filtres, recherche et intégrations de livraison." },
        { title: "Technologies", content: "Next.js côté front-end pour la rapidité et le SEO ; Laravel ou Python côté back-end pour des API sécurisées et évolutives. PostgreSQL ou MongoDB selon les besoins du projet." },
        { title: "SEO e-commerce", content: "Chaque fiche produit reçoit des URL propres, des balises meta, des données structurées produit et une entrée dans le sitemap, pour gagner en visibilité sur Google et développer vos ventes organiques." },
      ],
      features: ["Passerelle de paiement en ligne", "Panneau d'administration complet", "SEO des produits", "Design mobile-first", "Rapports de vente", "Support technique"],
    },
    {
      slug: "seo-site", metaTitle: "SEO de site web | Optimisation Google", metaDescription: "Services SEO pour Google : positionnement, Core Web Vitals, données structurées, sitemaps et stratégie de contenu. SEO technique et on-page.", keywords: ["SEO de site web", "optimisation Google", "services SEO", "classement dans les recherches", "SEO technique"], h1: "SEO et optimisation de site", intro: "Un beau site que personne ne trouve sur Google n'aide pas votre entreprise. Nous optimisons votre site sur les plans technique et éditorial afin de vous positionner sur les mots-clés importants.",
      sections: [
        { title: "SEO technique", content: "Vitesse et Core Web Vitals, sitemap.xml, robots.txt, URL canoniques, données structurées JSON-LD, structure des titres, compatibilité mobile et HTTPS." },
        { title: "SEO de contenu", content: "Recherche de mots-clés, optimisation des titres et descriptions, contenu ciblé, liens internes et structure d'URL claire." },
        { title: "SEO des nouveaux sites", content: "Lorsque nous créons un site, le SEO est intégré dès le premier jour dans Next.js : SSR, Metadata API, Open Graph, schéma FAQ et HTML sémantique." },
      ],
      features: ["Recherche de mots-clés", "Données structurées", "Optimisation de la vitesse", "Rapports de positionnement", "SEO local", "Consultation SEO gratuite"],
    },
  ],
};
