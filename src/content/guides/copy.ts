import type { GuideCopyMap, GuideMeta } from "./types";

export const guideMetas: GuideMeta[] = [
  {
    slug: "nextjs-vs-wordpress",
    publishedAt: "2026-06-18",
    updatedAt: "2026-09-10",
    relatedServices: ["tarahi-site", "seo-site"],
    relatedGuides: ["nextjs-technical-seo", "website-cost"],
    sources: [
      { href: "https://nextjs.org/", label: "Next.js", external: true },
      { href: "https://react.dev/", label: "React", external: true },
      {
        href: "https://developers.google.com/search/docs",
        label: "Google Search Central",
        external: true,
      },
    ],
  },
  {
    slug: "website-cost",
    publishedAt: "2026-07-08",
    updatedAt: "2026-09-08",
    relatedServices: ["tarahi-site", "tarahi-forooshgah"],
    relatedGuides: ["ecommerce-launch-checklist", "nextjs-vs-wordpress"],
    sources: [
      { href: "https://nextjs.org/", label: "Next.js", external: true },
      { href: "https://web.dev/", label: "web.dev", external: true },
    ],
  },
  {
    slug: "nextjs-technical-seo",
    publishedAt: "2026-08-04",
    updatedAt: "2026-09-11",
    relatedServices: ["seo-site", "tarahi-site"],
    relatedGuides: ["nextjs-vs-wordpress", "ecommerce-launch-checklist"],
    sources: [
      {
        href: "https://developers.google.com/search/docs",
        label: "Google Search Central",
        external: true,
      },
      { href: "https://web.dev/learn/performance", label: "web.dev Performance", external: true },
      { href: "https://schema.org/", label: "Schema.org", external: true },
      { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
    ],
  },
  {
    slug: "ecommerce-launch-checklist",
    publishedAt: "2026-08-22",
    updatedAt: "2026-09-09",
    relatedServices: ["tarahi-forooshgah", "seo-site"],
    relatedGuides: ["website-cost", "nextjs-technical-seo"],
    sources: [
      {
        href: "https://developers.google.com/search/docs/appearance/structured-data/product",
        label: "Google Product schema",
        external: true,
      },
      { href: "https://nextjs.org/", label: "Next.js", external: true },
    ],
  },
];

export const guideCopy: Record<string, GuideCopyMap> = {
  "nextjs-vs-wordpress": {
    fa: {
      title: "Next.js یا وردپرس؟ انتخاب درست برای طراحی سایت",
      description:
        "مقایسه Next.js و وردپرس برای طراحی سایت شرکتی، فروشگاهی و سئو. ببینید کدام تکنولوژی سرعت، امنیت و رتبه گوگل بهتری می‌دهد.",
      keywords: [
        "Next.js",
        "وردپرس",
        "طراحی سایت",
        "طراحی سایت شرکتی",
        "سئو سایت",
      ],
      h1: "Next.js یا وردپرس؟ کدام برای کسب‌وکار شما بهتر است؟",
      intro:
        "انتخاب تکنولوژی سایت روی سرعت، امنیت، هزینه نگهداری و رتبه گوگل اثر مستقیم دارد. وردپرس برای شروع سریع معروف است؛ Next.js برای سایت‌هایی ساخته شده که باید در گوگل دیده شوند و سال‌ها رشد کنند. در هایپرآفیس معمولاً Next.js را پیشنهاد می‌کنیم — مگر اینکه نیازتان واقعاً یک وبلاگ ساده باشد.",
      sections: [
        {
          title: "تفاوت اصلی در معماری",
          content:
            "وردپرس صفحات را معمولاً در لحظه از دیتابیس می‌سازد. اگر افزونه زیاد نصب شود، سایت سنگین و آسیب‌پذیر می‌شود. Next.js می‌تواند صفحات را از قبل بسازد یا در سرور رندر کند؛ گوگل HTML کامل می‌بیند و Core Web Vitals بهتر می‌شود. برای طراحی سایت شرکتی و لندینگ، این تفاوت در ایندکس و نرخ تبدیل محسوس است.",
          links: [
            { href: "/tarahi-site", label: "خدمات طراحی سایت با Next.js" },
            { href: "https://nextjs.org/", label: "مستندات Next.js", external: true },
          ],
        },
        {
          title: "سئو: ایندکس، سرعت و کنترل متا",
          content:
            "هر دو می‌توانند رتبه بگیرند، اما کنترل در Next.js دقیق‌تر است: عنوان و توضیحات یکتا برای هر زبان، hreflang، canonical، JSON-LD و sitemap از خود کد تولید می‌شوند. وردپرس به افزونه وابسته است و با به‌روزرسانی می‌شکند. اگر هدف شما «طراحی سایت تهران» یا کلمات رقابتی فارسی است، زیرساخت سئو باید بخشی از محصول باشد نه چند افزونه.",
          links: [{ href: "/seo-site", label: "خدمات سئو سایت" }],
        },
        {
          title: "امنیت و نگهداری",
          content:
            "بیشتر نفوذهای وردپرس از افزونه و قالب قدیمی است. سایت Next.js سطح حمله کوچک‌تری دارد، وابستگی به ده‌ها پلاگین ندارد و به‌روزرسانی‌اش قابل پیش‌بینی است. هزینه نگهداری بلندمدت معمولاً کمتر از سایتی است که هر ماه باید افزونه و قالب را وصله کرد.",
        },
        {
          title: "کی وردپرس هنوز منطقی است؟",
          content:
            "اگر فقط یک وبلاگ شخصی، سایت خیلی کوچک یا تیمی دارید که فقط با ویرایشگر کلاسیک راحت است، وردپرس کافی است. برای برند، فروش، چندزبانه بودن و رتبه پایدار گوگل، Next.js انتخاب بهتری است. ما در صورت نیاز، محتوای وردپرس را به سایت جدید مهاجرت می‌دهیم.",
        },
      ],
      faq: [
        {
          question: "سایت فعلی‌ام وردپرس است؛ باید عوض شود؟",
          answer:
            "اگر کند است، هک شده، در گوگل دیده نمی‌شود یا توسعه آن گران شده، مهاجرت به Next.js معمولاً به‌صرفه‌تر از وصله مداوم است. اول وضعیت سئو و محتوا را بررسی می‌کنیم تا رتبه فعلی از بین نرود.",
        },
        {
          question: "Next.js را خودم می‌توانم مدیریت کنم؟",
          answer:
            "بله. پنل محتوا یا CMS سبک می‌گذاریم تا متن و تصاویر را بدون کدنویسی عوض کنید. کدنویسی و سئو تکنیکال با تیم توسعه می‌ماند.",
        },
      ],
    },
    en: {
      title: "Next.js vs WordPress: which is better for a business site?",
      description:
        "Compare Next.js and WordPress for corporate sites, stores, and SEO. See which stack wins on speed, security, and Google rankings.",
      keywords: ["Next.js", "WordPress", "web design", "corporate website", "SEO"],
      h1: "Next.js vs WordPress: which should your business choose?",
      intro:
        "Your stack shapes speed, security, upkeep, and search visibility. WordPress is famous for a fast start. Next.js is built for sites that need to rank and keep growing. At HyperOffice we usually recommend Next.js unless you truly need a simple blog.",
      sections: [
        {
          title: "Architecture is the real difference",
          content:
            "WordPress often builds pages on the fly from a database. Extra plugins make it slow and fragile. Next.js can prerender or server-render HTML that Google can index cleanly, which helps Core Web Vitals. For a corporate site or landing page, that shows up in both rankings and conversions.",
          links: [
            { href: "/tarahi-site", label: "Next.js web design" },
            { href: "https://nextjs.org/", label: "Next.js docs", external: true },
          ],
        },
        {
          title: "SEO: metadata, hreflang, and structured data",
          content:
            "Both can rank, but Next.js gives tighter control: unique titles per language, hreflang, canonicals, JSON-LD, and sitemaps generated from code. WordPress leans on plugins that break on updates. If you compete for commercial keywords, SEO should be part of the product, not a plugin stack.",
          links: [{ href: "/seo-site", label: "SEO services" }],
        },
        {
          title: "Security and maintenance",
          content:
            "Most WordPress breaches start with outdated plugins or themes. A Next.js site has a smaller attack surface and fewer moving parts. Long-term maintenance is usually cheaper than patching a plugin-heavy CMS every month.",
        },
        {
          title: "When WordPress still makes sense",
          content:
            "A personal blog, a tiny brochure, or a team that only knows the classic editor can stay on WordPress. For brand, sales, multilingual sites, and durable rankings, Next.js is the better default. We can migrate WordPress content when you are ready.",
        },
      ],
      faq: [
        {
          question: "We already have WordPress. Do we have to move?",
          answer:
            "Move if the site is slow, compromised, invisible on Google, or expensive to extend. We audit SEO and content first so existing rankings are not thrown away.",
        },
        {
          question: "Can we edit a Next.js site ourselves?",
          answer:
            "Yes. We add a content panel or a lightweight CMS so you change copy and images without code. Engineering and technical SEO stay with the development team.",
        },
      ],
    },
    es: {
      title: "Next.js o WordPress: qué conviene para un sitio de empresa",
      description:
        "Compara Next.js y WordPress para sitios corporativos, tiendas y SEO. Velocidad, seguridad y visibilidad en Google.",
      keywords: ["Next.js", "WordPress", "diseño web", "sitio corporativo", "SEO"],
      h1: "Next.js frente a WordPress: qué debería elegir tu negocio",
      intro:
        "La tecnología define velocidad, seguridad, mantenimiento y visibilidad. WordPress arranca rápido; Next.js está pensado para sitios que deben posicionar y crecer. En HyperOffice solemos recomendar Next.js, salvo que necesites un blog sencillo.",
      sections: [
        {
          title: "La diferencia está en la arquitectura",
          content:
            "WordPress suele generar páginas al vuelo desde la base de datos. Los plugins extra lo vuelven lento y frágil. Next.js puede prerenderizar HTML que Google indexa bien y mejora Core Web Vitals.",
          links: [
            { href: "/tarahi-site", label: "Diseño web con Next.js" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "SEO: metadatos, hreflang y datos estructurados",
          content:
            "Ambos pueden posicionar, pero Next.js controla títulos por idioma, hreflang, canonical, JSON-LD y sitemaps desde el código. WordPress depende de plugins. El SEO comercial debe formar parte del producto.",
          links: [{ href: "/seo-site", label: "Servicios SEO" }],
        },
        {
          title: "Seguridad y mantenimiento",
          content:
            "La mayoría de ataques a WordPress vienen de temas y plugins desactualizados. Next.js reduce la superficie de ataque y el mantenimiento a largo plazo suele ser más barato.",
        },
        {
          title: "Cuándo WordPress sigue teniendo sentido",
          content:
            "Un blog personal o un folleto mínimo pueden quedarse en WordPress. Para marca, ventas, varios idiomas y rankings estables, Next.js es mejor. Podemos migrar el contenido cuando quieras.",
        },
      ],
      faq: [
        {
          question: "¿Hay que abandonar WordPress sí o sí?",
          answer:
            "Conviene migrar si el sitio es lento, inseguro, invisible en Google o caro de ampliar. Primero auditamos SEO y contenidos.",
        },
        {
          question: "¿Podemos editar un sitio Next.js?",
          answer:
            "Sí. Añadimos un panel o CMS ligero para textos e imágenes. El SEO técnico queda en el equipo de desarrollo.",
        },
      ],
    },
    fr: {
      title: "Next.js ou WordPress : que choisir pour un site pro ?",
      description:
        "Comparatif Next.js et WordPress pour sites vitrine, e-commerce et SEO. Vitesse, sécurité et visibilité Google.",
      keywords: ["Next.js", "WordPress", "création de site", "site vitrine", "SEO"],
      h1: "Next.js vs WordPress : quel choix pour votre entreprise ?",
      intro:
        "La stack influe sur la vitesse, la sécurité, la maintenance et le référencement. WordPress démarre vite ; Next.js est conçu pour les sites qui doivent se classer et durer. Chez HyperOffice, Next.js est le choix par défaut, sauf besoin d’un blog simple.",
      sections: [
        {
          title: "L’architecture change tout",
          content:
            "WordPress construit souvent les pages à la volée. Trop d’extensions ralentissent le site. Next.js pré-rend ou rend côté serveur un HTML que Google indexe correctement, ce qui aide les Core Web Vitals.",
          links: [
            { href: "/tarahi-site", label: "Conception web Next.js" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "SEO : métadonnées, hreflang, données structurées",
          content:
            "Les deux peuvent ranker, mais Next.js contrôle titres par langue, hreflang, canonical, JSON-LD et sitemaps dans le code. WordPress dépend d’extensions. Le SEO commercial doit être intégré au produit.",
          links: [{ href: "/seo-site", label: "Services SEO" }],
        },
        {
          title: "Sécurité et maintenance",
          content:
            "La plupart des piratages WordPress viennent de thèmes et plugins obsolètes. Next.js réduit la surface d’attaque. La maintenance long terme est généralement moins chère.",
        },
        {
          title: "Quand WordPress reste pertinent",
          content:
            "Un blog personnel ou un mini-site peut rester sur WordPress. Pour la marque, les ventes, le multilinguisme et un ranking durable, préférez Next.js. Nous migrons le contenu si besoin.",
        },
      ],
      faq: [
        {
          question: "Faut-il quitter WordPress ?",
          answer:
            "Oui si le site est lent, piraté, invisible sur Google ou trop cher à faire évoluer. Nous auditons d’abord le SEO existant.",
        },
        {
          question: "Peut-on éditer un site Next.js ?",
          answer:
            "Oui, via un CMS léger pour textes et images. Le SEO technique reste côté développement.",
        },
      ],
    },
    de: {
      title: "Next.js oder WordPress: Was eignet sich für die Firmenwebsite?",
      description:
        "Vergleich von Next.js und WordPress für Unternehmenswebsites, Shops und SEO. Tempo, Sicherheit und Google-Sichtbarkeit.",
      keywords: ["Next.js", "WordPress", "Webdesign", "Unternehmenswebsite", "SEO"],
      h1: "Next.js vs. WordPress: Was sollte Ihr Unternehmen wählen?",
      intro:
        "Der Stack beeinflusst Tempo, Sicherheit, Pflege und Rankings. WordPress startet schnell. Next.js ist für Sites gebaut, die ranken und wachsen sollen. Bei HyperOffice ist Next.js der Standard – außer Sie brauchen nur ein einfaches Blog.",
      sections: [
        {
          title: "Architektur macht den Unterschied",
          content:
            "WordPress baut Seiten oft live aus der Datenbank. Plugins machen sie langsam und angreifbar. Next.js liefert vorgerendertes HTML, das Google sauber indexiert und Core Web Vitals verbessert.",
          links: [
            { href: "/tarahi-site", label: "Webdesign mit Next.js" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "SEO: Metadaten, hreflang, strukturierte Daten",
          content:
            "Beide können ranken, Next.js steuert Titel pro Sprache, hreflang, Canonicals, JSON-LD und Sitemaps im Code. WordPress hängt an Plugins. Kommerzielles SEO gehört ins Produkt.",
          links: [{ href: "/seo-site", label: "SEO-Leistungen" }],
        },
        {
          title: "Sicherheit und Wartung",
          content:
            "Die meisten WordPress-Angriffe starten bei veralteten Themes und Plugins. Next.js hat eine kleinere Angriffsfläche. Langfristige Wartung ist meist günstiger.",
        },
        {
          title: "Wann WordPress noch passt",
          content:
            "Ein privater Blog oder eine Mini-Seite kann WordPress bleiben. Für Marke, Vertrieb, Mehrsprachigkeit und stabile Rankings ist Next.js besser. Content können wir migrieren.",
        },
      ],
      faq: [
        {
          question: "Müssen wir von WordPress weg?",
          answer:
            "Ja, wenn die Site langsam, unsicher, bei Google unsichtbar oder teuer erweiterbar ist. Zuerst prüfen wir SEO und Inhalte.",
        },
        {
          question: "Können wir Next.js selbst pflegen?",
          answer:
            "Ja, mit einem leichten CMS für Texte und Bilder. Technisches SEO bleibt beim Entwicklungsteam.",
        },
      ],
    },
    zh: {
      title: "Next.js 还是 WordPress？企业网站怎么选",
      description:
        "对比 Next.js 与 WordPress 在企业站、网店和 SEO 上的表现：速度、安全与谷歌排名。",
      keywords: ["Next.js", "WordPress", "网站设计", "企业网站", "SEO"],
      h1: "Next.js 对比 WordPress：企业该选哪个？",
      intro:
        "技术栈决定速度、安全、维护成本和搜索可见度。WordPress 上手快；Next.js 适合要长期排名和增长的网站。HyperOffice 默认推荐 Next.js，除非你只需要简单博客。",
      sections: [
        {
          title: "真正的差别在架构",
          content:
            "WordPress 常从数据库即时拼页面，插件一多就慢且脆弱。Next.js 可预渲染或服务端渲染，Google 能抓到完整 HTML，Core Web Vitals 更好。",
          links: [
            { href: "/tarahi-site", label: "Next.js 网站设计" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "SEO：元数据、hreflang 与结构化数据",
          content:
            "两者都能排名，但 Next.js 能在代码里控制多语言标题、hreflang、canonical、JSON-LD 和 sitemap。WordPress 依赖插件。商业关键词的 SEO 应做成产品能力。",
          links: [{ href: "/seo-site", label: "SEO 服务" }],
        },
        {
          title: "安全与维护",
          content:
            "多数 WordPress 入侵来自过期主题和插件。Next.js 攻击面更小，长期维护通常更便宜。",
        },
        {
          title: "什么时候仍可用 WordPress",
          content:
            "个人博客或极小宣传页可以留在 WordPress。品牌、销售、多语言和稳定排名更适合 Next.js。需要时我们可迁移内容。",
        },
      ],
      faq: [
        {
          question: "现有 WordPress 必须换掉吗？",
          answer:
            "若网站慢、被入侵、在 Google 不可见或扩展成本高，迁移通常更划算。我们会先审计 SEO 与内容。",
        },
        {
          question: "Next.js 网站能自己改文案吗？",
          answer:
            "可以。我们会加轻量 CMS，方便改文字和图片。技术 SEO 仍由开发团队负责。",
        },
      ],
    },
    ar: {
      title: "Next.js أم ووردبريس؟ الاختيار الصحيح لتصميم الموقع",
      description:
        "مقارنة Next.js وووردبريس لمواقع الشركات والمتاجر وتحسين محركات البحث: السرعة والأمان وترتيب جوجل.",
      keywords: ["Next.js", "ووردبريس", "تصميم مواقع", "موقع شركة", "SEO"],
      h1: "Next.js مقابل ووردبريس: ماذا يناسب عملك؟",
      intro:
        "التقنية تؤثر على السرعة والأمان والصيانة والظهور في البحث. ووردبريس سريع للانطلاق؛ Next.js مصمم لمواقع تريد الترتيب والنمو. في هايبرأوفيس نوصي عادةً بـ Next.js إلا إذا كنت تحتاج مدونة بسيطة.",
      sections: [
        {
          title: "الفرق في البنية",
          content:
            "ووردبريس يبني الصفحات غالباً من قاعدة البيانات لحظة الطلب. الإضافات الكثيرة تبطئه. Next.js يمكنه توليد HTML مسبقاً يفهرسه جوجل بسهولة ويحسّن Core Web Vitals.",
          links: [
            { href: "/tarahi-site", label: "تصميم مواقع بـ Next.js" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "السيو: البيانات الوصفية وhreflang والبيانات المنظمة",
          content:
            "كلاهما قد يظهر في النتائج، لكن Next.js يتحكم بالعناوين لكل لغة وcanonical وJSON-LD وخريطة الموقع من الكود. ووردبريس يعتمد على الإضافات. سيو الكلمات التجارية يجب أن يكون جزءاً من المنتج.",
          links: [{ href: "/seo-site", label: "خدمات تحسين محركات البحث" }],
        },
        {
          title: "الأمان والصيانة",
          content:
            "معظم اختراقات ووردبريس تأتي من قوالب وإضافات قديمة. Next.js سطح هجوم أصغر وصيانته على المدى الطويل أرخص عادة.",
        },
        {
          title: "متى يبقى ووردبريس مناسباً",
          content:
            "مدونة شخصية أو موقع صغير جداً يمكن أن يبقى على ووردبريس. للعلامة التجارية والمبيعات وتعدد اللغات والترتيب المستقر، Next.js أفضل. يمكننا نقل المحتوى عند الحاجة.",
        },
      ],
      faq: [
        {
          question: "هل يجب ترك ووردبريس؟",
          answer:
            "إذا كان الموقع بطيئاً أو مخترقاً أو غير ظاهر في جوجل أو مكلف التطوير، فالنقل أوفر. نراجع السيو والمحتوى أولاً.",
        },
        {
          question: "هل يمكن تعديل موقع Next.js بدون برمجة؟",
          answer:
            "نعم عبر لوحة محتوى خفيفة للنصوص والصور. السيو التقني يبقى مع فريق التطوير.",
        },
      ],
    },
    tr: {
      title: "Next.js mi WordPress mi? Kurumsal site için doğru seçim",
      description:
        "Kurumsal siteler, e-ticaret ve SEO için Next.js ile WordPress karşılaştırması. Hız, güvenlik ve Google sıralaması.",
      keywords: ["Next.js", "WordPress", "web tasarım", "kurumsal site", "SEO"],
      h1: "Next.js ve WordPress: işletmeniz hangisini seçmeli?",
      intro:
        "Teknoloji hızı, güvenliği, bakımı ve arama görünürlüğünü belirler. WordPress hızlı başlar; Next.js sıralanması ve büyümesi gereken siteler içindir. HyperOffice’te varsayılan önerimiz Next.js’tir.",
      sections: [
        {
          title: "Asıl fark mimaride",
          content:
            "WordPress sayfaları çoğu zaman veritabanından anlık üretir. Eklenti şişmesi siteyi yavaşlatır. Next.js Google’ın rahat indexlediği HTML üretir ve Core Web Vitals’ı iyileştirir.",
          links: [
            { href: "/tarahi-site", label: "Next.js web tasarım" },
            { href: "https://nextjs.org/", label: "Next.js", external: true },
          ],
        },
        {
          title: "SEO: meta, hreflang, yapılandırılmış veri",
          content:
            "İkisi de sıralanabilir; Next.js dil bazlı başlık, hreflang, canonical, JSON-LD ve sitemap’i koddan üretir. WordPress eklentiye bağlıdır. Ticari SEO ürünün parçası olmalıdır.",
          links: [{ href: "/seo-site", label: "SEO hizmetleri" }],
        },
        {
          title: "Güvenlik ve bakım",
          content:
            "WordPress ihlallerinin çoğu eski tema ve eklentiden gelir. Next.js saldırı yüzeyini küçültür; uzun vadeli bakım genelde daha ucuzdur.",
        },
        {
          title: "WordPress ne zaman yeter?",
          content:
            "Kişisel blog veya çok küçük bir tanıtım sitesi WordPress’te kalabilir. Marka, satış, çok dil ve kalıcı sıralama için Next.js daha iyidir. İçeriği taşıyabiliriz.",
        },
      ],
      faq: [
        {
          question: "Mevcut WordPress’i bırakmalı mıyız?",
          answer:
            "Site yavaş, güvensiz, Google’da görünmüyor veya geliştirmesi pahalıysa geçiş mantıklıdır. Önce SEO ve içeriği denetleriz.",
        },
        {
          question: "Next.js sitesini kendimiz düzenleyebilir miyiz?",
          answer:
            "Evet. Metin ve görseller için hafif bir CMS ekleriz. Teknik SEO geliştirme ekibinde kalır.",
        },
      ],
    },
  },
  "website-cost": {
    fa: {
      title: "هزینه طراحی سایت چقدر است؟ راهنمای واقعی قیمت",
      description:
        "هزینه طراحی سایت شرکتی، فروشگاهی و اختصاصی به چه عواملی بستگی دارد و چطور پیش‌فاکتور شفاف بگیرید. مشاوره رایگان هایپرآفیس.",
      keywords: [
        "هزینه طراحی سایت",
        "قیمت طراحی سایت",
        "طراحی سایت شرکتی",
        "طراحی فروشگاه اینترنتی",
      ],
      h1: "هزینه طراحی سایت: چه چیزی قیمت را بالا یا پایین می‌آورد؟",
      intro:
        "قیمت ثابت برای «طراحی سایت» وجود ندارد؛ مثل پرسیدن قیمت یک ساختمان بدون نقشه. محدوده هزینه به تعداد صفحات، امکانات، طراحی اختصاصی، فروش آنلاین و سئو بستگی دارد. اینجا می‌بینید بودجه را کجا خرج کنید تا سایت هم زیبا باشد هم در گوگل کار کند.",
      sections: [
        {
          title: "سایت شرکتی",
          content:
            "سایت معرفی شرکت با چند صفحه خدمات، درباره ما، تماس و بلاگ معمولاً ساده‌ترین پروژه است. اگر UI اختصاصی، چندزبانگی، انیمیشن و اتصال به سیستم داخلی بخواهید، هزینه بالا می‌رود. در هایپرآفیس این پروژه‌ها با Next.js ساخته می‌شوند تا سرعت و سئو از روز اول داخل کار باشد — نه افزونه بعداً.",
          links: [{ href: "/tarahi-site", label: "طراحی سایت شرکتی" }],
        },
        {
          title: "فروشگاه اینترنتی",
          content:
            "فروشگاه از سایت شرکتی گران‌تر است چون درگاه پرداخت، سبد، موجودی، سفارش و پنل مدیریت دارد. هر درگاه، روش ارسال و گزارش فروش یک ماژول است. اگر محصول زیاد و فیلتر پیچیده دارید، معماری باید از اول درست باشد تا بعداً بازنویسی نشود.",
          links: [
            { href: "/tarahi-forooshgah", label: "طراحی فروشگاه اینترنتی" },
            { href: "/guides/ecommerce-launch-checklist", label: "چک‌لیست راه‌اندازی فروشگاه" },
          ],
        },
        {
          title: "چه چیزهایی را در پیش‌فاکتور بخواهید",
          content:
            "تعداد صفحات، زبان‌ها، مسئول محتوا، هاست، آموزش، مدت پشتیبانی و مالکیت سورس باید نوشته شود. «سایت ارزان» بدون سئو، سرعت و امنیت در عمل گران تمام می‌شود چون چند ماه بعد باید از نو ساخته شود. مشاوره اول ما رایگان است و محدوده قیمت را شفاف می‌گوییم.",
          links: [{ href: "/#contact", label: "درخواست پیش‌فاکتور" }],
        },
        {
          title: "هزینه سئو جداست یا داخل پروژه؟",
          content:
            "سئو تکنیکال (ساختار، اسکیما، سرعت، sitemap) باید داخل طراحی سایت جدید باشد. سئو محتوایی و لینک‌سازی خارجی کار ماهانه است. اگر فقط ظاهر بخرید و سئو نخرید، سایت در گوگل دیده نمی‌شود.",
          links: [{ href: "/seo-site", label: "خدمات سئو" }],
        },
      ],
      faq: [
        {
          question: "ارزان‌ترین مسیر درست چیست؟",
          answer:
            "یک سایت شرکتی متمرکز با چند صفحه قوی، سئو داخلی و فرم تماس. فروشگاه کامل را وقتی موجودی، عکس محصول و فرآیند ارسال آماده است شروع کنید.",
        },
        {
          question: "پرداخت مرحله‌ای ممکن است؟",
          answer:
            "بله. معمولاً شروع، تأیید طراحی و تحویل. جزئیات در قرارداد می‌آید.",
        },
      ],
    },
    en: {
      title: "How much does a website cost? A practical pricing guide",
      description:
        "What drives the cost of corporate sites, online stores, and custom platforms — and how to get a clear quote from HyperOffice.",
      keywords: [
        "website cost",
        "web design price",
        "corporate website",
        "ecommerce website cost",
      ],
      h1: "Website cost: what actually changes the price?",
      intro:
        "There is no flat fee for “a website,” any more than there is one price for a building without a plan. Scope, pages, features, custom UI, commerce, and SEO all move the number. Here is where budget should go so the site looks good and works in Google.",
      sections: [
        {
          title: "Corporate sites",
          content:
            "A company site with services, about, contact, and a blog is the leanest project. Custom UI, extra languages, motion, and internal-system integrations raise the cost. We build these in Next.js so speed and SEO are included from day one.",
          links: [{ href: "/tarahi-site", label: "Corporate web design" }],
        },
        {
          title: "Online stores",
          content:
            "Stores cost more because they need payments, cart, stock, orders, and an admin. Each gateway, shipping method, and report is a module. Large catalogs need the right architecture up front so you do not rebuild later.",
          links: [
            { href: "/tarahi-forooshgah", label: "Ecommerce design" },
            { href: "/guides/ecommerce-launch-checklist", label: "Store launch checklist" },
          ],
        },
        {
          title: "What to demand on the quote",
          content:
            "Pages, languages, who owns content, hosting, training, support window, and source-code ownership should be written down. A cheap site without SEO, speed, or security gets rebuilt within months. First consultation is free and the range is stated clearly.",
          links: [{ href: "/#contact", label: "Request a quote" }],
        },
        {
          title: "Is SEO extra?",
          content:
            "Technical SEO belongs in a new build: structure, schema, speed, sitemap. Content SEO and off-site links are ongoing. Buy the look without SEO and Google will not find you.",
          links: [{ href: "/seo-site", label: "SEO services" }],
        },
      ],
      faq: [
        {
          question: "What is the smartest low budget?",
          answer:
            "A focused corporate site with a few strong pages, built-in SEO, and a contact path. Start a full store only when products, photos, and fulfillment are ready.",
        },
        {
          question: "Can we pay in stages?",
          answer:
            "Yes. Typically kickoff, design approval, and delivery. Details go in the contract.",
        },
      ],
    },
    es: {
      title: "¿Cuánto cuesta una web? Guía práctica de precios",
      description:
        "Qué determina el precio de un sitio corporativo, una tienda o una plataforma a medida, y cómo pedir un presupuesto claro.",
      keywords: ["precio diseño web", "coste página web", "sitio corporativo", "tienda online"],
      h1: "Coste de una web: qué sube o baja el precio",
      intro:
        "No hay tarifa única. El alcance, las páginas, el diseño, el comercio y el SEO cambian la cifra. El presupuesto debe cubrir tanto la apariencia como el rendimiento en Google.",
      sections: [
        {
          title: "Sitios corporativos",
          content:
            "Servicios, nosotros, contacto y blog es el proyecto más contenido. UI a medida, idiomas y animación suben el coste. Lo construimos con Next.js para incluir velocidad y SEO desde el primer día.",
          links: [{ href: "/tarahi-site", label: "Diseño web corporativo" }],
        },
        {
          title: "Tiendas online",
          content:
            "Cuestan más por pagos, carrito, stock, pedidos y panel. Un catálogo grande necesita buena arquitectura para no rehacer el proyecto.",
          links: [{ href: "/tarahi-forooshgah", label: "Diseño de tienda" }],
        },
        {
          title: "Qué exigir en el presupuesto",
          content:
            "Páginas, idiomas, contenidos, hosting, formación, soporte y propiedad del código. Una web barata sin SEO se reconstruye en meses. La primera consulta es gratuita.",
          links: [{ href: "/#contact", label: "Pedir presupuesto" }],
        },
        {
          title: "¿El SEO va aparte?",
          content:
            "El SEO técnico entra en el desarrollo nuevo. El contenido y los enlaces externos son trabajo continuo.",
          links: [{ href: "/seo-site", label: "Servicios SEO" }],
        },
      ],
      faq: [
        {
          question: "¿Cuál es el presupuesto inteligente más bajo?",
          answer:
            "Un sitio corporativo breve, con SEO de base y contacto claro. La tienda completa, cuando el catálogo esté listo.",
        },
        {
          question: "¿Se puede pagar por fases?",
          answer: "Sí: inicio, aprobación de diseño y entrega.",
        },
      ],
    },
    fr: {
      title: "Combien coûte un site web ? Guide des prix",
      description:
        "Les facteurs de prix d’un site vitrine, d’une boutique et d’une plateforme sur mesure, et comment obtenir un devis clair.",
      keywords: ["prix site web", "coût création site", "site vitrine", "site e-commerce"],
      h1: "Coût d’un site : ce qui fait vraiment varier le prix",
      intro:
        "Il n’existe pas de tarif unique. Le périmètre, les pages, le design, le e-commerce et le SEO changent le montant. Le budget doit servir l’apparence et Google.",
      sections: [
        {
          title: "Sites vitrine",
          content:
            "Services, à propos, contact et blog : le projet le plus simple. UI sur mesure et langues font monter le prix. Nous les construisons en Next.js pour intégrer vitesse et SEO dès le départ.",
          links: [{ href: "/tarahi-site", label: "Création de site vitrine" }],
        },
        {
          title: "Boutiques en ligne",
          content:
            "Plus chères : paiement, panier, stock, commandes, admin. Un gros catalogue exige la bonne architecture.",
          links: [{ href: "/tarahi-forooshgah", label: "Création de boutique" }],
        },
        {
          title: "Ce que le devis doit contenir",
          content:
            "Pages, langues, contenus, hébergement, formation, support et propriété du code. Un site low-cost sans SEO se refait en quelques mois. Premier échange gratuit.",
          links: [{ href: "/#contact", label: "Demander un devis" }],
        },
        {
          title: "Le SEO est-il en extra ?",
          content:
            "Le SEO technique appartient au build. Le contenu et les liens externes sont un travail continu.",
          links: [{ href: "/seo-site", label: "Services SEO" }],
        },
      ],
      faq: [
        {
          question: "Quel budget minimum est raisonnable ?",
          answer:
            "Un vitrine ciblé, SEO inclus, avec un contact clair. La boutique complète quand le catalogue est prêt.",
        },
        {
          question: "Paiement en plusieurs fois ?",
          answer: "Oui : lancement, validation du design, livraison.",
        },
      ],
    },
    de: {
      title: "Was kostet eine Website? Praxisleitfaden zu Preisen",
      description:
        "Welche Faktoren den Preis für Unternehmenswebsites, Shops und individuelle Plattformen bestimmen – und wie Sie ein klares Angebot erhalten.",
      keywords: ["Website Kosten", "Webdesign Preis", "Unternehmenswebsite", "Onlineshop Kosten"],
      h1: "Website-Kosten: was den Preis wirklich verändert",
      intro:
        "Es gibt keinen Pauschalpreis. Umfang, Seiten, Design, Commerce und SEO bewegen die Zahl. Das Budget sollte Aussehen und Google-Leistung tragen.",
      sections: [
        {
          title: "Unternehmenswebsites",
          content:
            "Leistungen, Über uns, Kontakt und Blog sind das schlankeste Projekt. Eigenes UI und weitere Sprachen erhöhen den Preis. Wir bauen mit Next.js, damit Tempo und SEO von Tag eins dabei sind.",
          links: [{ href: "/tarahi-site", label: "Unternehmens-Webdesign" }],
        },
        {
          title: "Onlineshops",
          content:
            "Teurer wegen Zahlung, Warenkorb, Lager, Bestellungen und Admin. Große Kataloge brauchen die richtige Architektur.",
          links: [{ href: "/tarahi-forooshgah", label: "Shop-Design" }],
        },
        {
          title: "Was ins Angebot gehört",
          content:
            "Seiten, Sprachen, Inhalte, Hosting, Schulung, Support und Quellcode-Rechte. Eine billige Site ohne SEO wird oft nach Monaten neu gebaut. Erstberatung ist kostenlos.",
          links: [{ href: "/#contact", label: "Angebot anfragen" }],
        },
        {
          title: "Ist SEO extra?",
          content:
            "Technisches SEO gehört in den Neubau. Content-SEO und Offpage sind laufend.",
          links: [{ href: "/seo-site", label: "SEO-Leistungen" }],
        },
      ],
      faq: [
        {
          question: "Was ist das klügste kleine Budget?",
          answer:
            "Eine fokussierte Firmenwebsite mit wenigen starken Seiten, SEO inklusive. Den Shop starten, wenn Produkte bereit sind.",
        },
        {
          question: "Zahlung in Raten?",
          answer: "Ja: Start, Designfreigabe, Übergabe.",
        },
      ],
    },
    zh: {
      title: "做网站要多少钱？实用报价指南",
      description:
        "企业站、网店和定制平台的价格由什么决定，以及如何拿到清晰报价。",
      keywords: ["网站价格", "网站设计费用", "企业网站", "网店建设"],
      h1: "网站成本：真正影响报价的因素",
      intro:
        "没有统一价。范围、页数、设计、电商和 SEO 都会改数字。预算既要覆盖外观，也要覆盖谷歌表现。",
      sections: [
        {
          title: "企业网站",
          content:
            "服务、关于、联系和博客是最精简的项目。定制 UI 和多语言会加价。我们用 Next.js，从第一天就包含速度和 SEO。",
          links: [{ href: "/tarahi-site", label: "企业网站设计" }],
        },
        {
          title: "网店",
          content:
            "更贵，因为有支付、购物车、库存、订单和后台。大目录必须一开始架构正确。",
          links: [{ href: "/tarahi-forooshgah", label: "网店设计" }],
        },
        {
          title: "报价单里该写清什么",
          content:
            "页数、语言、内容责任、主机、培训、支持和源码归属。没有 SEO 的便宜站几个月后往往要重做。首次咨询免费。",
          links: [{ href: "/#contact", label: "获取报价" }],
        },
        {
          title: "SEO 另算吗？",
          content:
            "技术 SEO 应包含在新站建设里。内容和外链是持续工作。",
          links: [{ href: "/seo-site", label: "SEO 服务" }],
        },
      ],
      faq: [
        {
          question: "最小的合理预算是什么？",
          answer: "聚焦的企业站、内置 SEO、清晰联系入口。目录准备好再做完整网店。",
        },
        {
          question: "可以分期付款吗？",
          answer: "可以：启动、设计确认、交付。",
        },
      ],
    },
    ar: {
      title: "كم تكلفة تصميم الموقع؟ دليل عملي للأسعار",
      description:
        "ما الذي يحدد سعر موقع الشركة أو المتجر أو المنصة المخصصة، وكيف تحصل على عرض سعر واضح.",
      keywords: ["تكلفة تصميم موقع", "سعر تصميم المواقع", "موقع شركة", "متجر إلكتروني"],
      h1: "تكلفة الموقع: ما الذي يرفع السعر أو يخفضه؟",
      intro:
        "لا يوجد سعر ثابت. النطاق والصفحات والتصميم والتجارة والسيو تغيّر الرقم. الميزانية يجب أن تغطي الشكل والأداء في جوجل.",
      sections: [
        {
          title: "مواقع الشركات",
          content:
            "خدمات وحولنا واتصل ومدونة هو أبسط مشروع. الواجهة المخصصة واللغات ترفع التكلفة. نبنيها بـ Next.js لتشمل السرعة والسيو من اليوم الأول.",
          links: [{ href: "/tarahi-site", label: "تصميم موقع شركة" }],
        },
        {
          title: "المتاجر الإلكترونية",
          content:
            "أغلى بسبب الدفع والسلة والمخزون والطلبات ولوحة الإدارة. الكتالوج الكبير يحتاج معمارية صحيحة من البداية.",
          links: [{ href: "/tarahi-forooshgah", label: "تصميم متجر إلكتروني" }],
        },
        {
          title: "ماذا يجب أن يتضمن عرض السعر",
          content:
            "الصفحات واللغات والمحتوى والاستضافة والتدريب والدعم وملكية الشيفرة. الموقع الرخيص بلا سيو يُعاد بناؤه خلال أشهر. الاستشارة الأولى مجانية.",
          links: [{ href: "/#contact", label: "اطلب عرض سعر" }],
        },
        {
          title: "هل السيو منفصل؟",
          content:
            "السيو التقني جزء من البناء الجديد. المحتوى والروابط الخارجية عمل مستمر.",
          links: [{ href: "/seo-site", label: "خدمات السيو" }],
        },
      ],
      faq: [
        {
          question: "ما أذكى ميزانية صغيرة؟",
          answer:
            "موقع شركة مركز بعدد صفحات قوي وسيو مدمج. المتجر الكامل عندما تكون المنتجات جاهزة.",
        },
        {
          question: "هل يمكن الدفع على مراحل؟",
          answer: "نعم: البدء، اعتماد التصميم، التسليم.",
        },
      ],
    },
    tr: {
      title: "Web sitesi ne kadar tutar? Uygulamalı fiyat rehberi",
      description:
        "Kurumsal site, e-ticaret ve özel platform fiyatını neler belirler ve net teklif nasıl alınır.",
      keywords: ["web sitesi maliyeti", "web tasarım fiyatı", "kurumsal site", "e-ticaret maliyeti"],
      h1: "Web sitesi maliyeti: fiyatı gerçekten ne değiştirir?",
      intro:
        "Tek bir fiyat yoktur. Kapsam, sayfa, tasarım, ticaret ve SEO tutarı değiştirir. Bütçe hem görünüme hem Google performansına gitmelidir.",
      sections: [
        {
          title: "Kurumsal siteler",
          content:
            "Hizmetler, hakkımızda, iletişim ve blog en yalın projedir. Özel UI ve dil sayısı fiyatı yükseltir. Hızı ve SEO’yu ilk günden katmak için Next.js kullanırız.",
          links: [{ href: "/tarahi-site", label: "Kurumsal web tasarım" }],
        },
        {
          title: "E-ticaret",
          content:
            "Ödeme, sepet, stok, sipariş ve admin yüzünden daha pahalıdır. Büyük katalog baştan doğru mimari ister.",
          links: [{ href: "/tarahi-forooshgah", label: "E-ticaret tasarımı" }],
        },
        {
          title: "Teklifte ne yazmalı",
          content:
            "Sayfalar, diller, içerik, hosting, eğitim, destek ve kaynak kodu. SEO’suz ucuz site aylar içinde yeniden yazılır. İlk görüşme ücretsizdir.",
          links: [{ href: "/#contact", label: "Teklif isteyin" }],
        },
        {
          title: "SEO ayrı mı?",
          content:
            "Teknik SEO yeni kurulumun parçasıdır. İçerik ve dış bağlantı süreklidir.",
          links: [{ href: "/seo-site", label: "SEO hizmetleri" }],
        },
      ],
      faq: [
        {
          question: "En akıllı küçük bütçe nedir?",
          answer:
            "Odaklı kurumsal site, yerleşik SEO, net iletişim. Mağazayı ürünler hazır olunca açın.",
        },
        {
          question: "Taksitli ödeme olur mu?",
          answer: "Evet: başlangıç, tasarım onayı, teslim.",
        },
      ],
    },
  },
  "nextjs-technical-seo": {
    fa: {
      title: "سئو تکنیکال Next.js: چک‌لیست رتبه گرفتن در گوگل",
      description:
        "چک‌لیست سئو تکنیکال برای سایت‌های Next.js: متادیتا، sitemap، robots، اسکیما، hreflang، Core Web Vitals و لینک‌سازی داخلی.",
      keywords: [
        "سئو تکنیکال",
        "سئو Next.js",
        "sitemap",
        "Schema Markup",
        "Core Web Vitals",
      ],
      h1: "سئو تکنیکال در Next.js؛ همان زیرساختی که گوگل می‌فهمد",
      intro:
        "محتوای خوب بدون زیرساخت درست ایندکس نمی‌شود. Next.js ابزارهای سئو را داخل فریم‌ورک دارد؛ باید عمداً پیکربندی شوند. این چک‌لیست همان کاری است که روی hyperoffice.ir پیاده می‌کنیم تا صفحات جدید همان روز برای گوگل قابل فهم باشند.",
      sections: [
        {
          title: "متادیتا، canonical و hreflang",
          content:
            "هر صفحه باید عنوان و توضیح یکتا، آدرس canonical و نسخه زبانی متناظر داشته باشد. x-default را روی زبان اصلی بگذارید. بدون این‌ها گوگل نسخه‌های تکراری می‌بیند و اعتبار دامنه پخش می‌شود. در سایت چندزبانه، hreflang اشتباه از بی‌hreflang بدتر است.",
          links: [
            {
              href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
              label: "Next.js Metadata",
              external: true,
            },
            { href: "/seo-site", label: "پیاده‌سازی سئو سایت" },
          ],
        },
        {
          title: "Sitemap، robots و RSS",
          content:
            "sitemap باید فقط URLهای ایندکس‌شدنی داشته باشد، lastModified واقعی، و نسخه جایگزین زبان‌ها. robots.txt مسیرهای تست، پیش‌نمایش و صفحات خصوصی را ببندد و به sitemap اشاره کند. فید RSS به گوگل و خواننده‌ها سیگنال محتوای تازه می‌دهد.",
          links: [
            {
              href: "https://developers.google.com/search/docs",
              label: "Google Search Central",
              external: true,
            },
          ],
        },
        {
          title: "JSON-LD و داده ساختاریافته",
          content:
            "Organization، WebSite، Service، FAQ و Article را با JSON-LD بدهید — نه در صفحه خدمات FAQ جعلی. محصول فروشگاه باید Product schema داشته باشد. داده ساختگی رتبه را بالا نمی‌برد؛ داده دقیق ریچ‌رزالت می‌سازد.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "سرعت، ایندکس HTML و لینک داخلی",
          content:
            "Core Web Vitals بخشی از رتبه است. خروجی استاتیک یا SSR یعنی ربات متن را بدون اجرای سنگین جاوااسکریپت می‌بیند. هر مقاله باید به خدمات مرتبط و هر خدمت به مقالات مرتبط لینک بدهد. لینک داخلی اعتبار را در سایت می‌چرخاند؛ لینک خارجی معتبر به منابع رسمی اعتماد می‌سازد.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev Performance", external: true },
            { href: "/tarahi-site", label: "طراحی سایت SEO-ready" },
          ],
        },
      ],
      faq: [
        {
          question: "سایت استاتیک هم هر روز در گوگل بهتر می‌شود؟",
          answer:
            "رتبه جادویی هر روز بالا نمی‌رود. اما با محتوای جدید، sitemap به‌روز، لینک داخلی و بازنشر، گوگل دوباره کرال می‌کند. مسیر درست محتوای مفید مداوم است نه دستکاری lastmod.",
        },
        {
          question: "اسکیما به تنهایی کافی است؟",
          answer:
            "خیر. اسکیما کمک می‌کند گوگل موضوع را بفهمد. رتبه از ارتباط، لینک، تجربه صفحه و اعتبار دامنه می‌آید.",
        },
      ],
    },
    en: {
      title: "Next.js technical SEO: a ranking checklist",
      description:
        "Technical SEO checklist for Next.js: metadata, sitemaps, robots, schema, hreflang, Core Web Vitals, and internal links.",
      keywords: ["technical SEO", "Next.js SEO", "sitemap", "schema markup", "Core Web Vitals"],
      h1: "Technical SEO in Next.js: the infrastructure Google actually reads",
      intro:
        "Strong copy will not rank on a broken crawl path. Next.js has SEO primitives — they still need to be wired on purpose. This is the checklist we use on hyperoffice.ir so new URLs are understandable to Google the day they ship.",
      sections: [
        {
          title: "Metadata, canonicals, and hreflang",
          content:
            "Every indexable URL needs a unique title and description, a canonical, and matching language alternates. Point x-default at the primary locale. Without that, Google sees duplicates and splits equity. Wrong hreflang is worse than none.",
          links: [
            {
              href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
              label: "Next.js Metadata",
              external: true,
            },
            { href: "/seo-site", label: "Get SEO implemented" },
          ],
        },
        {
          title: "Sitemaps, robots, and RSS",
          content:
            "Sitemaps should list only indexable URLs, real lastmod dates, and language alternates. robots.txt should block test and private paths and point to the sitemap. An RSS feed signals fresh content to readers and crawlers.",
          links: [
            {
              href: "https://developers.google.com/search/docs",
              label: "Google Search Central",
              external: true,
            },
          ],
        },
        {
          title: "JSON-LD structured data",
          content:
            "Ship Organization, WebSite, Service, FAQ, and Article as JSON-LD — and do not mark a service page as an FAQ page if the FAQ is only on the home page. Product schema belongs on product URLs. Fake markup does not boost rank; accurate markup can earn rich results.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "Speed, HTML indexing, and internal links",
          content:
            "Core Web Vitals are a ranking input. Static or SSR HTML lets the bot read the page without a heavy JS execute. Each guide should link to related services and each service to related guides. Internal links move equity around your site; outbound links to official docs build trust.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev Performance", external: true },
            { href: "/tarahi-site", label: "SEO-ready web design" },
          ],
        },
      ],
      faq: [
        {
          question: "Will a static site climb Google every day?",
          answer:
            "Rankings do not magically rise daily. Fresh useful URLs, an honest sitemap, internal links, and republishing earn recrawls. Do not fake lastmod.",
        },
        {
          question: "Is schema enough?",
          answer:
            "No. Schema helps Google understand the page. Rankings still come from relevance, links, page experience, and domain trust.",
        },
      ],
    },
    es: {
      title: "SEO técnico con Next.js: lista de comprobación",
      description:
        "Metadatos, sitemaps, robots, schema, hreflang, Core Web Vitals y enlaces internos para sitios Next.js.",
      keywords: ["SEO técnico", "SEO Next.js", "sitemap", "schema", "Core Web Vitals"],
      h1: "SEO técnico en Next.js: la base que Google sí lee",
      intro:
        "Un buen texto no posiciona si el rastreo está roto. Next.js trae primitivas SEO; hay que configurarlas. Esta es la lista que aplicamos en hyperoffice.ir.",
      sections: [
        {
          title: "Metadatos, canonical y hreflang",
          content:
            "Cada URL indexable necesita título único, canonical e idiomas alternativos. x-default al idioma principal. Un hreflang mal puesto es peor que no tenerlo.",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "Servicios SEO" },
          ],
        },
        {
          title: "Sitemap, robots y RSS",
          content:
            "El sitemap solo con URLs indexables y lastmod real. robots.txt bloquea test y apunta al sitemap. RSS avisa de contenido nuevo.",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "Organization, WebSite, Service, FAQ y Article. No marques FAQ en una página de servicio si las preguntas están en la home. El marcado falso no sube posiciones.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "Velocidad y enlazado interno",
          content:
            "Core Web Vitals importan. HTML estático o SSR se lee sin JS pesado. Cada guía debe enlazar servicios y cada servicio, guías. Los enlaces salientes a docs oficiales aportan confianza.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "Diseño web SEO-ready" },
          ],
        },
      ],
      faq: [
        {
          question: "¿Una web estática sube cada día en Google?",
          answer: "No por arte de magia. URLs útiles nuevas, sitemap honesto y enlaces internos provocan recrawls. No falsifiques lastmod.",
        },
        {
          question: "¿Basta el schema?",
          answer: "No. Ayuda a entender. El ranking sigue dependiendo de relevancia, enlaces y experiencia.",
        },
      ],
    },
    fr: {
      title: "SEO technique Next.js : checklist de ranking",
      description:
        "Métadonnées, sitemaps, robots, schema, hreflang, Core Web Vitals et maillage interne pour Next.js.",
      keywords: ["SEO technique", "SEO Next.js", "sitemap", "schema", "Core Web Vitals"],
      h1: "SEO technique Next.js : l’infrastructure que Google lit",
      intro:
        "Un bon texte ne ranke pas si le crawl est cassé. Next.js fournit des primitives SEO à configurer. C’est la checklist d’hyperoffice.ir.",
      sections: [
        {
          title: "Métadonnées, canonical, hreflang",
          content:
            "Chaque URL indexable doit avoir un titre unique, un canonical et des alternatives linguistiques. x-default sur la langue principale. Un mauvais hreflang vaut pire que rien.",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "Services SEO" },
          ],
        },
        {
          title: "Sitemap, robots, RSS",
          content:
            "Sitemap : URLs indexables et lastmod réel. robots.txt bloque les chemins de test. Le RSS signale le contenu frais.",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "Organization, WebSite, Service, FAQ, Article. Pas de FAQ schema sur une page service si la FAQ est ailleurs. Le balisage fictif n’augmente pas le rank.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "Vitesse et maillage",
          content:
            "Les Core Web Vitals comptent. HTML statique ou SSR. Chaque guide lie les services, chaque service lie les guides. Les liens sortants vers la doc officielle créent de la confiance.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "Sites SEO-ready" },
          ],
        },
      ],
      faq: [
        {
          question: "Un site statique monte-t-il chaque jour ?",
          answer: "Non. De nouvelles URL utiles, un sitemap honnête et le maillage interne font recrawler. Ne trafiquez pas lastmod.",
        },
        {
          question: "Le schema suffit-il ?",
          answer: "Non. Il aide à comprendre. Le ranking dépend encore des liens et de l’expérience.",
        },
      ],
    },
    de: {
      title: "Technisches SEO mit Next.js: Ranking-Checkliste",
      description:
        "Metadaten, Sitemaps, robots, Schema, hreflang, Core Web Vitals und interne Links für Next.js-Sites.",
      keywords: ["technisches SEO", "Next.js SEO", "Sitemap", "Schema", "Core Web Vitals"],
      h1: "Technisches SEO in Next.js: was Google wirklich liest",
      intro:
        "Starker Text rankt nicht, wenn der Crawl-Pfad bricht. Next.js hat SEO-Bausteine – sie müssen verdrahtet werden. Das ist unsere Checkliste auf hyperoffice.ir.",
      sections: [
        {
          title: "Metadaten, Canonical, hreflang",
          content:
            "Jede indexierbare URL braucht einzigartigen Titel, Canonical und Sprachalternativen. x-default auf die Hauptsprache. Falsches hreflang ist schlimmer als keins.",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "SEO-Leistungen" },
          ],
        },
        {
          title: "Sitemap, robots, RSS",
          content:
            "Sitemap nur mit indexierbaren URLs und echtem lastmod. robots.txt sperrt Testpfade. RSS signalisiert frischen Content.",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "Organization, WebSite, Service, FAQ, Article. Kein FAQ-Markup auf einer Leistungsseite, wenn die FAQ nur auf der Home steht. Fakes heben das Ranking nicht.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "Tempo und interne Links",
          content:
            "Core Web Vitals zählen. Statisches oder SSR-HTML. Jeder Guide verlinkt Leistungen, jede Leistung Guides. Outbound zu offiziellen Docs schafft Vertrauen.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "SEO-ready Webdesign" },
          ],
        },
      ],
      faq: [
        {
          question: "Steigt eine statische Site jeden Tag?",
          answer: "Nicht magisch. Neue nützliche URLs, ehrliche Sitemap und interne Links holen Recrawls. lastmod nicht fälschen.",
        },
        {
          question: "Reicht Schema?",
          answer: "Nein. Es erklärt die Seite. Ranking kommt weiter von Relevanz, Links und Experience.",
        },
      ],
    },
    zh: {
      title: "Next.js 技术 SEO：可执行清单",
      description:
        "面向 Next.js 的技术 SEO：元数据、sitemap、robots、schema、hreflang、Core Web Vitals 与内链。",
      keywords: ["技术 SEO", "Next.js SEO", "sitemap", "schema", "Core Web Vitals"],
      h1: "Next.js 技术 SEO：Google 真正会读的基础设施",
      intro:
        "抓取路径坏了，再好的文案也难排名。Next.js 有 SEO 能力，但必须主动接好。这是我们在 hyperoffice.ir 用的清单。",
      sections: [
        {
          title: "元数据、canonical 与 hreflang",
          content:
            "每个可索引 URL 都要有独立标题、canonical 和语言版本。x-default 指向主语言。错误的 hreflang 比没有更糟。",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "SEO 服务" },
          ],
        },
        {
          title: "Sitemap、robots 与 RSS",
          content:
            "Sitemap 只放可索引 URL 和真实 lastmod。robots.txt 屏蔽测试路径并指向 sitemap。RSS 提示有新内容。",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "提供 Organization、WebSite、Service、FAQ、Article。首页才有 FAQ 时，不要在服务页标 FAQ。假标记不会加分。",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "速度与内链",
          content:
            "Core Web Vitals 会影响排名。静态或 SSR HTML 便于抓取。指南链向服务，服务链向指南。指向官方文档的外链能建立信任。",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "面向 SEO 的网站设计" },
          ],
        },
      ],
      faq: [
        {
          question: "静态站会每天自动上升吗？",
          answer: "不会。新的有用 URL、诚实的 sitemap 和内链才会促使重新抓取。不要伪造 lastmod。",
        },
        {
          question: "有 schema 就够了吗？",
          answer: "不够。它帮助理解页面。排名仍取决于相关性、链接和体验。",
        },
      ],
    },
    ar: {
      title: "السيو التقني في Next.js: قائمة تحقق للترتيب",
      description:
        "بيانات وصفية وخرائط موقع وrobots وschema وhreflang وCore Web Vitals والروابط الداخلية لمواقع Next.js.",
      keywords: ["سيو تقني", "سيو Next.js", "sitemap", "schema", "Core Web Vitals"],
      h1: "السيو التقني في Next.js: البنية التي يقرأها جوجل",
      intro:
        "النص القوي لا يرتب إذا كان مسار الزحف مكسوراً. Next.js يوفر أدوات سيو يجب ضبطها عمداً. هذه قائمة hyperoffice.ir.",
      sections: [
        {
          title: "البيانات الوصفية وcanonical وhreflang",
          content:
            "كل رابط قابل للفهرسة يحتاج عنواناً فريداً وcanonical ونسخاً لغوية. x-default على اللغة الأساسية. hreflang الخاطئ أسوأ من غيابه.",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "خدمات السيو" },
          ],
        },
        {
          title: "Sitemap وrobots وRSS",
          content:
            "الخريطة للروابط القابلة للفهرسة مع lastmod حقيقي. robots يغلق مسارات الاختبار. RSS يعلن عن محتوى جديد.",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "Organization وWebSite وService وFAQ وArticle. لا تضع FAQ على صفحة خدمة إذا كانت الأسئلة في الرئيسية فقط. البيانات المزيفة لا ترفع الترتيب.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "السرعة والروابط الداخلية",
          content:
            "Core Web Vitals عامل ترتيب. HTML ثابت أو SSR. كل دليل يربط الخدمات وكل خدمة تربط الأدلة. الروابط الصادرة إلى وثائق رسمية تبني ثقة.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "تصميم مواقع جاهز للسيو" },
          ],
        },
      ],
      faq: [
        {
          question: "هل يرتفع الموقع الثابت كل يوم؟",
          answer: "ليس سحراً. روابط مفيدة جديدة وخريطة صادقة وروابط داخلية تعيد الزحف. لا تزيّف lastmod.",
        },
        {
          question: "هل يكفي schema؟",
          answer: "لا. يساعد الفهم. الترتيب يعتمد على الصلة والروابط وتجربة الصفحة.",
        },
      ],
    },
    tr: {
      title: "Next.js teknik SEO: sıralama kontrol listesi",
      description:
        "Next.js için teknik SEO: meta, sitemap, robots, schema, hreflang, Core Web Vitals ve iç bağlantılar.",
      keywords: ["teknik SEO", "Next.js SEO", "sitemap", "schema", "Core Web Vitals"],
      h1: "Next.js’te teknik SEO: Google’ın okuduğu altyapı",
      intro:
        "Tarama yolu bozuksa iyi metin sıralanmaz. Next.js SEO primitive’leri sunar; bilinçli bağlanmalıdır. hyperoffice.ir’de kullandığımız liste budur.",
      sections: [
        {
          title: "Meta, canonical, hreflang",
          content:
            "Her indekslenebilir URL benzersiz başlık, canonical ve dil alternatifleri ister. x-default ana dile. Yanlış hreflang hiç olmamasından kötüdür.",
          links: [
            { href: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", label: "Next.js Metadata", external: true },
            { href: "/seo-site", label: "SEO hizmetleri" },
          ],
        },
        {
          title: "Sitemap, robots, RSS",
          content:
            "Sitemap yalnızca indekslenebilir URL ve gerçek lastmod. robots test yollarını kapatsın. RSS taze içeriği duyurur.",
          links: [{ href: "https://developers.google.com/search/docs", label: "Google Search Central", external: true }],
        },
        {
          title: "JSON-LD",
          content:
            "Organization, WebSite, Service, FAQ, Article. SSS yalnızca anasayfadaysa hizmet sayfasına FAQ işaretleme. Sahte işaret sıralama yükseltmez.",
          links: [{ href: "https://schema.org/", label: "Schema.org", external: true }],
        },
        {
          title: "Hız ve iç link",
          content:
            "Core Web Vitals sıralama girdisidir. Statik veya SSR HTML. Her rehber hizmete, her hizmet rehbere bağlansın. Resmi dokümanlara giden dış link güven üretir.",
          links: [
            { href: "https://web.dev/learn/performance", label: "web.dev", external: true },
            { href: "/tarahi-site", label: "SEO-ready web tasarım" },
          ],
        },
      ],
      faq: [
        {
          question: "Statik site her gün yükselir mi?",
          answer: "Sihirle değil. Yeni yararlı URL, dürüst sitemap ve iç link yeniden taramayı getirir. lastmod uydurmayın.",
        },
        {
          question: "Schema yeter mi?",
          answer: "Hayır. Anlamaya yardım eder. Sıralama hâlâ alaka, link ve deneyime bağlıdır.",
        },
      ],
    },
  },
  "ecommerce-launch-checklist": {
    fa: {
      title: "چک‌لیست راه‌اندازی فروشگاه اینترنتی موفق",
      description:
        "قبل از باز کردن فروشگاه آنلاین: پرداخت، موجودی، صفحات محصول، سئو، سرعت موبایل و پشتیبانی. راهنمای هایپرآفیس.",
      keywords: [
        "فروشگاه اینترنتی",
        "طراحی فروشگاه اینترنتی",
        "راه‌اندازی فروشگاه آنلاین",
        "سئو فروشگاه",
      ],
      h1: "فروشگاه اینترنتی را قبل از تبلیغات، درست راه بیندازید",
      intro:
        "بیشتر فروشگاه‌ها به‌خاطر تبلیغات کم نمی‌فروشند؛ به‌خاطر تسویه ناقص، صفحه محصول ضعیف و ایندکس بد می‌فروشند. این چک‌لیست را قبل از خرید ترافیک طی کنید. اگر موردی جا افتاده، همان را در طراحی فروشگاه اینترنتی اولویت بدهید.",
      sections: [
        {
          title: "صفحه محصول که گوگل و مشتری بفهمند",
          content:
            "هر محصول URL تمیز، عنوان یکتا، توضیح واقعی، عکس فشرده، قیمت و موجودی مشخص می‌خواهد. اسکیمای Product به گوگل کمک می‌کند قیمت و موجودی را نشان دهد. محتوای کپی از تأمین‌کننده رتبه نمی‌گیرد.",
          links: [
            {
              href: "https://developers.google.com/search/docs/appearance/structured-data/product",
              label: "راهنمای Product در گوگل",
              external: true,
            },
            { href: "/tarahi-forooshgah", label: "طراحی فروشگاه اینترنتی" },
          ],
        },
        {
          title: "پرداخت، ارسال و اعتماد",
          content:
            "درگاه باید در موبایل بدون اصطکاک کار کند. هزینه ارسال قبل از پرداخت نهایی دیده شود. تلفن، واتساپ یا تلگرام در فوتر باشد. گواهی‌ها و سیاست مرجوعی را مخفی نکنید. فروشگاه بدون اعتماد، سئوی خوب هم تبدیل نمی‌شود.",
        },
        {
          title: "سئو دسته و فیلتر",
          content:
            "صفحات دسته باید متن مفید داشته باشند نه فقط گرید کالا. فیلترهای تکراری را noindex کنید تا بودجه خزش هدر نرود. sitemap محصولات را جدا یا با اولویت درست بگذارید. لینک داخلی از راهنماها و صفحه خدمات فروشگاه به دسته‌های اصلی قدرت می‌دهد.",
          links: [{ href: "/seo-site", label: "سئو فروشگاه" }],
        },
        {
          title: "سرعت موبایل و بعد از خرید",
          content:
            "بیشتر خرید ایران روی موبایل است. تصاویر بزرگ، اسکریپت چت و اسلایدر سنگین سبد را می‌کشند. بعد از خرید: پیام سفارش، پیگیری مرسوله و موجودی واقعی. فروشگاه Next.js این مسیر را سریع و قابل ایندکس نگه می‌دارد.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "هزینه طراحی فروشگاه" },
          ],
        },
      ],
      faq: [
        {
          question: "با چند محصول می‌توان فروشگاه را باز کرد؟",
          answer:
            "حتی با ۲۰ محصول خوب، عکس واقعی و ارسال مشخص بهتر از ۲۰۰ محصول ناقص است. گوگل و مشتری کیفیت را می‌فهمند.",
        },
        {
          question: "وردپرس برای فروشگاه کافی است؟",
          answer:
            "برای کاتالوگ خیلی کوچک شاید. برای رشد، سرعت و سئو رقابتی، فروشگاه اختصاصی با Next.js پایدارتر است.",
        },
      ],
    },
    en: {
      title: "Ecommerce launch checklist: ship a store that can sell",
      description:
        "Before you open an online store: payments, inventory, product pages, SEO, mobile speed, and support. HyperOffice’s checklist.",
      keywords: ["ecommerce checklist", "online store", "ecommerce SEO", "product pages"],
      h1: "Launch the store properly before you buy ads",
      intro:
        "Most stores do not fail from too little advertising. They fail from broken checkout, thin product pages, and weak indexing. Run this list before you buy traffic. Anything missing belongs in the store build.",
      sections: [
        {
          title: "Product pages people and Google can parse",
          content:
            "Every product needs a clean URL, unique title, real copy, compressed images, and clear price and stock. Product schema helps Google show price and availability. Supplier copy-paste does not rank.",
          links: [
            {
              href: "https://developers.google.com/search/docs/appearance/structured-data/product",
              label: "Google Product schema",
              external: true,
            },
            { href: "/tarahi-forooshgah", label: "Ecommerce website design" },
          ],
        },
        {
          title: "Payments, shipping, and trust",
          content:
            "Checkout must work on a phone. Shipping cost should appear before pay. Phone, WhatsApp, or Telegram belongs in the footer. Return policy should not be hidden. A store without trust will not convert even with good SEO.",
        },
        {
          title: "Category SEO and filters",
          content:
            "Category URLs need useful text, not only a grid. Duplicate filter URLs should be noindexed so crawl budget survives. Put products in the sitemap with sane priority. Internal links from guides and the store service page into key categories pass equity.",
          links: [{ href: "/seo-site", label: "Ecommerce SEO" }],
        },
        {
          title: "Mobile speed and after-purchase",
          content:
            "Most purchases happen on phones. Huge images, chat widgets, and sliders kill the cart. After pay: order message, shipment tracking, real stock. A Next.js store keeps that path fast and indexable.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "What a store costs" },
          ],
        },
      ],
      faq: [
        {
          question: "How many products before launch?",
          answer:
            "Twenty complete products with real photos and shipping rules beat two hundred empty ones. Google and buyers both notice.",
        },
        {
          question: "Is WordPress enough for a store?",
          answer:
            "Maybe for a tiny catalog. For growth, speed, and competitive SEO, a custom Next.js store holds up better.",
        },
      ],
    },
    es: {
      title: "Lista de lanzamiento de una tienda online",
      description:
        "Pagos, inventario, fichas de producto, SEO, velocidad móvil y soporte antes de abrir la tienda.",
      keywords: ["tienda online", "checklist ecommerce", "SEO ecommerce", "fichas de producto"],
      h1: "Lanza la tienda bien antes de pagar anuncios",
      intro:
        "La mayoría de tiendas no fallan por falta de ads, sino por un checkout roto y fichas pobres. Completa esta lista antes de comprar tráfico.",
      sections: [
        {
          title: "Fichas que Google y el cliente entienden",
          content:
            "URL limpia, título único, texto real, imágenes comprimidas, precio y stock. El schema Product ayuda a mostrar precio. El texto del proveedor no posiciona.",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Schema de producto", external: true },
            { href: "/tarahi-forooshgah", label: "Diseño de tienda" },
          ],
        },
        {
          title: "Pago, envío y confianza",
          content:
            "El checkout debe funcionar en el móvil. El envío, visible antes de pagar. Teléfono o mensajería en el pie. Sin confianza no hay conversión.",
        },
        {
          title: "SEO de categorías",
          content:
            "Las categorías necesitan texto útil. Los filtros duplicados, noindex. El sitemap de productos con prioridad razonable. Enlaces internos hacia categorías clave.",
          links: [{ href: "/seo-site", label: "SEO de tienda" }],
        },
        {
          title: "Velocidad móvil y postventa",
          content:
            "La mayoría compra en el teléfono. Imágenes enormes matan el carrito. Después: mensaje de pedido, seguimiento y stock real.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "Coste de una tienda" },
          ],
        },
      ],
      faq: [
        {
          question: "¿Con cuántos productos abrir?",
          answer: "Veinte fichas completas superan doscientas vacías.",
        },
        {
          question: "¿Basta WordPress?",
          answer: "Para un catálogo mínimo, quizá. Para crecer, mejor una tienda Next.js.",
        },
      ],
    },
    fr: {
      title: "Checklist de lancement d’une boutique en ligne",
      description:
        "Paiement, stock, fiches produit, SEO, vitesse mobile et support avant d’ouvrir la boutique.",
      keywords: ["boutique en ligne", "checklist e-commerce", "SEO e-commerce", "fiches produit"],
      h1: "Lancez la boutique correctement avant d’acheter des pubs",
      intro:
        "La plupart des boutiques échouent à cause du checkout et de fiches pauvres, pas du manque d’ads. Passez cette liste avant d’acheter du trafic.",
      sections: [
        {
          title: "Fiches lisibles par Google et l’acheteur",
          content:
            "URL propre, titre unique, vrai texte, images compressées, prix et stock. Le schema Product aide à afficher le prix. Le texte fournisseur ne ranke pas.",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Schema produit Google", external: true },
            { href: "/tarahi-forooshgah", label: "Création de boutique" },
          ],
        },
        {
          title: "Paiement, livraison, confiance",
          content:
            "Le checkout doit marcher sur mobile. Les frais de port avant le paiement. Téléphone ou messagerie dans le footer. Sans confiance, pas de conversion.",
        },
        {
          title: "SEO des catégories",
          content:
            "Les catégories ont besoin de texte utile. Filtres dupliqués en noindex. Sitemap produits. Maillage vers les catégories clés.",
          links: [{ href: "/seo-site", label: "SEO boutique" }],
        },
        {
          title: "Vitesse mobile et après-vente",
          content:
            "L’achat se fait surtout sur téléphone. Les images lourdes tuent le panier. Ensuite : message de commande, suivi, stock réel.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "Coût d’une boutique" },
          ],
        },
      ],
      faq: [
        {
          question: "Combien de produits pour ouvrir ?",
          answer: "Vingt fiches complètes valent mieux que deux cents vides.",
        },
        {
          question: "WordPress suffit-il ?",
          answer: "Pour un tout petit catalogue, peut-être. Pour grandir, préférez Next.js.",
        },
      ],
    },
    de: {
      title: "Checkliste für den Start eines Onlineshops",
      description:
        "Zahlung, Lager, Produktseiten, SEO, Mobiltempo und Support, bevor der Shop live geht.",
      keywords: ["Onlineshop Checkliste", "Ecommerce SEO", "Produktseiten", "Shop starten"],
      h1: "Shop richtig starten – vor den Anzeigen",
      intro:
        "Die meisten Shops scheitern an Checkout und dünnen Produktseiten, nicht an zu wenig Werbung. Diese Liste vor dem Traffic-Kauf abarbeiten.",
      sections: [
        {
          title: "Produktseiten für Menschen und Google",
          content:
            "Saubere URL, einzigartiger Titel, echter Text, komprimierte Bilder, Preis und Bestand. Product-Schema hilft bei Preisangaben. Lieferantentexte ranken nicht.",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Google Product Schema", external: true },
            { href: "/tarahi-forooshgah", label: "Shop-Design" },
          ],
        },
        {
          title: "Zahlung, Versand, Vertrauen",
          content:
            "Checkout muss auf dem Handy funktionieren. Versandkosten vor dem Bezahlen. Telefon oder Messenger im Footer. Ohne Vertrauen keine Conversion.",
        },
        {
          title: "Kategorie-SEO",
          content:
            "Kategorien brauchen nützlichen Text. Doppelte Filter-URLs noindexen. Produktsitemap. Interne Links in wichtige Kategorien.",
          links: [{ href: "/seo-site", label: "Shop-SEO" }],
        },
        {
          title: "Mobiltempo und danach",
          content:
            "Gekauft wird meist am Telefon. Schwere Bilder töten den Warenkorb. Danach: Bestellmail, Tracking, echter Bestand.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "Was ein Shop kostet" },
          ],
        },
      ],
      faq: [
        {
          question: "Wie viele Produkte zum Start?",
          answer: "Zwanzig vollständige Artikel schlagen zweihundert leere.",
        },
        {
          question: "Reicht WordPress?",
          answer: "Für einen Mini-Katalog vielleicht. Zum Wachsen ist ein Next.js-Shop stabiler.",
        },
      ],
    },
    zh: {
      title: "网店上线清单：先能卖，再投广告",
      description:
        "开店前确认支付、库存、商品页、SEO、手机速度和售后。HyperOffice 清单。",
      keywords: ["网店清单", "电商 SEO", "商品页", "在线商店"],
      h1: "先把商店做对，再去买流量",
      intro:
        "多数网店不是输在广告少，而是结账坏、商品页空、索引差。买流量前先过这张清单。",
      sections: [
        {
          title: "人与 Google 都读得懂的商品页",
          content:
            "干净 URL、独立标题、真实文案、压缩图、明确价格与库存。Product schema 有助于展示价格。供应商通稿难排名。",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Google 商品结构化数据", external: true },
            { href: "/tarahi-forooshgah", label: "网店设计" },
          ],
        },
        {
          title: "支付、物流与信任",
          content:
            "结账必须能在手机完成。运费在付款前可见。页脚放电话或即时通讯。没有信任，SEO 再好也不转化。",
        },
        {
          title: "分类 SEO 与筛选",
          content:
            "分类页要有有用文字。重复筛选 URL 应 noindex。商品 sitemap 优先级合理。从指南和服务页内链到核心分类。",
          links: [{ href: "/seo-site", label: "电商 SEO" }],
        },
        {
          title: "手机速度与售后",
          content:
            "购买多发生在手机。大图和聊天插件会拖死购物车。下单后：通知、物流跟踪、真实库存。",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "网店要花多少钱" },
          ],
        },
      ],
      faq: [
        {
          question: "开业需要多少 SKU？",
          answer: "20 个完整商品好过 200 个空页。",
        },
        {
          question: "WordPress 够不够？",
          answer: "极小目录或许可以。要增长和竞争 SEO，更适合 Next.js 网店。",
        },
      ],
    },
    ar: {
      title: "قائمة تشغيل متجر إلكتروني ناجح",
      description:
        "قبل فتح المتجر: الدفع والمخزون وصفحات المنتج والسيو وسرعة الجوال والدعم.",
      keywords: ["متجر إلكتروني", "قائمة إطلاق متجر", "سيو المتاجر", "صفحات المنتج"],
      h1: "شغّل المتجر بشكل صحيح قبل الإعلانات",
      intro:
        "معظم المتاجر لا تفشل لقلة الإعلانات بل لسلة مكسورة وصفحات منتج ضعيفة. أكمل هذه القائمة قبل شراء الزيارات.",
      sections: [
        {
          title: "صفحات منتج يفهمها العميل وجوجل",
          content:
            "رابط نظيف وعنوان فريد ونص حقيقي وصور مضغوطة وسعر ومخزون واضح. Schema المنتج يساعد على إظهار السعر. نص المورد لا يرتب.",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "بيانات المنتج في جوجل", external: true },
            { href: "/tarahi-forooshgah", label: "تصميم متجر إلكتروني" },
          ],
        },
        {
          title: "الدفع والشحن والثقة",
          content:
            "الدفع يجب أن يعمل على الجوال. تكلفة الشحن قبل الدفع. هاتف أو واتساب في التذييل. بلا ثقة لا تحويل.",
        },
        {
          title: "سيو التصنيفات",
          content:
            "التصنيف يحتاج نصاً مفيداً. روابط الفلاتر المكررة noindex. خريطة المنتجات بأولوية معقولة. روابط داخلية إلى التصنيفات المهمة.",
          links: [{ href: "/seo-site", label: "سيو المتجر" }],
        },
        {
          title: "سرعة الجوال وما بعد الشراء",
          content:
            "معظم الشراء على الهاتف. الصور الثقيلة تقتل السلة. بعد الدفع: رسالة طلب وتتبع ومخزون حقيقي.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "تكلفة المتجر" },
          ],
        },
      ],
      faq: [
        {
          question: "كم منتجاً يكفي للإطلاق؟",
          answer: "عشرون منتجاً مكتملاً أفضل من مئتين ناقصة.",
        },
        {
          question: "هل يكفي ووردبريس؟",
          answer: "لكتالوج صغير جداً ربما. للنمو والسيو التنافسي متجر Next.js أثبت.",
        },
      ],
    },
    tr: {
      title: "E-ticaret açılış kontrol listesi",
      description:
        "Mağazayı açmadan önce ödeme, stok, ürün sayfaları, SEO, mobil hız ve destek.",
      keywords: ["e-ticaret checklist", "online mağaza", "e-ticaret SEO", "ürün sayfası"],
      h1: "Reklam almadan önce mağazayı doğru açın",
      intro:
        "Çoğu mağaza az reklamdane değil; bozuk ödeme ve zayıf ürün sayfasından kaybeder. Trafik satın almadan bu listeyi bitirin.",
      sections: [
        {
          title: "Google’ın ve müşterinin anladığı ürün sayfası",
          content:
            "Temiz URL, benzersiz başlık, gerçek metin, sıkıştırılmış görsel, net fiyat ve stok. Product schema fiyatı göstermeye yardım eder. Tedarikçi metni sıralanmaz.",
          links: [
            { href: "https://developers.google.com/search/docs/appearance/structured-data/product", label: "Google Product schema", external: true },
            { href: "/tarahi-forooshgah", label: "E-ticaret tasarımı" },
          ],
        },
        {
          title: "Ödeme, kargo, güven",
          content:
            "Ödeme telefonda çalışmalı. Kargo ücreti ödemeden önce görünmeli. Telefona veya mesaja footer’da yer verin. Güven yoksa SEO dönüşmez.",
        },
        {
          title: "Kategori SEO’su",
          content:
            "Kategoriler yararlı metin ister. Yinelenen filtre URL’leri noindex. Ürün sitemap’i. Ana kategorilere iç link.",
          links: [{ href: "/seo-site", label: "E-ticaret SEO" }],
        },
        {
          title: "Mobil hız ve sonrası",
          content:
            "Satın alma çoğunlukla telefonda. Ağır görseller sepeti öldürür. Sonra: sipariş mesajı, kargo takibi, gerçek stok.",
          links: [
            { href: "https://nextjs.org/", label: "Next.js", external: true },
            { href: "/guides/website-cost", label: "Mağaza maliyeti" },
          ],
        },
      ],
      faq: [
        {
          question: "Kaç ürünle açılmalı?",
          answer: "Yirmi tamamlanmış ürün, iki yüz boş üründen iyidir.",
        },
        {
          question: "WordPress yeter mi?",
          answer: "Çok küçük katalog için belki. Büyüme ve rekabetçi SEO için Next.js mağaza daha sağlamdır.",
        },
      ],
    },
  },
};
