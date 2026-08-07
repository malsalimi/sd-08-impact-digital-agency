export interface Service {
  id: string;
  iconName: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  benefits: {
    ar: string[];
    en: string[];
  };
  featured?: boolean;
}

export const servicesData: Service[] = [
  {
    id: "brand-identity",
    iconName: "Palette",
    title: {
      ar: "تصميم الهوية البصرية الفاخرة",
      en: "Luxury Brand Identity"
    },
    description: {
      ar: "نصمم هويات تجارية فريدة تعكس الفخامة وتترك انطباعاً استثنائياً لدى الجمهور المستهدف.",
      en: "We craft iconic brand identities that convey luxury, prestige, and command attention in competitive markets."
    },
    benefits: {
      ar: [
        "دليل هوية بصرية متكامل (Brand Guidelines)",
        "تصميم الشعار والشخصية البصرية",
        "تطوير المطبوعات والعناصر الرقمية"
      ],
      en: [
        "Comprehensive Brand Guidelines",
        "Iconic Logo & Visual Assets",
        "Digital & Print Collateral Design"
      ]
    },
    featured: true
  },
  {
    id: "social-media",
    iconName: "Share2",
    title: {
      ar: "إدارة وسائل التواصل الاجتماعي",
      en: "Social Media Management"
    },
    description: {
      ar: "نستهدف جمهورك بعناية من خلال محتوى إبداعي استراتيجي وإدارة احترافية لكافة المنصات.",
      en: "Engage and build high-intent audiences with creative storytelling and community management across platforms."
    },
    benefits: {
      ar: [
        "استراتيجية محتوى شهري مبتكرة",
        "تصوير وإنتاج فيديو ريلز وسوريز احترافي",
        "تحليل التفاعل وإدارة مجتمع المتابعين"
      ],
      en: [
        "Monthly Strategic Content Plan",
        "High-End Video & Visual Production",
        "Community Growth & Sentiment Analytics"
      ]
    },
    featured: true
  },
  {
    id: "seo",
    iconName: "Search",
    title: {
      ar: "تحسين محركات البحث (SEO)",
      en: "Search Engine Optimization (SEO)"
    },
    description: {
      ar: "نتصدر نتائج محركات البحث لعلامتك التجارية لزيادة الزيارات المجانية المستهدفة ومضاعفة التحويلات.",
      en: "Dominating search engine rankings to drive sustainable, high-converting organic search traffic."
    },
    benefits: {
      ar: [
        "تدقيق تقني وتصحيح هيكل الموقع",
        "بناء الروابط الخلفية عالية السلطة",
        "استراتيجية الكلمات المفتاحية التنافسية"
      ],
      en: [
        "Technical SEO & Architecture Audit",
        "High-Authority Backlink Acquisition",
        "Intent-Driven Keyword Strategy"
      ]
    },
    featured: true
  },
  {
    id: "google-ads",
    iconName: "Target",
    title: {
      ar: "الحملات الإعلانية المدفوعة (PPC & Google Ads)",
      en: "Performance Marketing & PPC"
    },
    description: {
      ar: "حملات إعلانية دقيقة تحقق أعلى عائد على الاستثمار الإعلاني (ROAS) عبر جوجل، ميتـا، وتيك توك.",
      en: "Data-backed paid acquisition campaigns structured for maximum ROAS across Google, Meta, and TikTok."
    },
    benefits: {
      ar: [
        "إدارة الميزانيات وتعديل المزايدات آلياً",
        "اختبار AB لمواد الإعلان ونصوصه",
        "تقارير يومية لمؤشرات الأداء"
      ],
      en: [
        "Algorithmic Bidding & Budget Scaling",
        "Rigorous A/B Creative Testing",
        "Real-Time ROAS Dashboarding"
      ]
    },
    featured: true
  },
  {
    id: "content-marketing",
    iconName: "FileText",
    title: {
      ar: "صناعة وتأليف المحتوى الإستراتيجي",
      en: "Strategic Content Marketing"
    },
    description: {
      ar: "نكتب نصوصاً تسويقية ملهمة ومقالات متعمقة تحول الزوار إلى عملاء مخلصين لعلامتك التجارية.",
      en: "Compelling copywriting, whitepapers, and brand articles designed to establish thought leadership."
    },
    benefits: {
      ar: [
        "كتابة نصوص إعلانية مقنعة (Copywriting)",
        "إعداد أدلة ودراسات حالة متخصصة",
        "إنتاج المحتوى الترويجي السمعي والبصري"
      ],
      en: [
        "Conversion-Focused Copywriting",
        "Whitepaper & Case Study Authoring",
        "Multimedia Narrative Scripting"
      ]
    }
  },
  {
    id: "web-development",
    iconName: "Code",
    title: {
      ar: "تطوير المواقع والتطبيقات السريعة",
      en: "High-Performance Web Development"
    },
    description: {
      ar: "نطور منصات رقمية فائقة السرعة والأمان باستخدام أحدث تقنيات React و Next.js المتقدمة.",
      en: "Engineered ultra-fast, secure web platforms and web apps built with Next.js and modern JS tech."
    },
    benefits: {
      ar: [
        "سرعة تحميل ممتازة وتوافق مع كافة الشاشات",
        "بنية برمجية نظيفة وقابلة للتوسع",
        "ربط أدوات التتبع والتحليل المتقدمة"
      ],
      en: [
        "Sub-Second Load Speed & Responsiveness",
        "Scalable Clean Architecture",
        "Seamless Analytics & CRM Integrations"
      ]
    },
    featured: true
  },
  {
    id: "ui-ux",
    iconName: "Layout",
    title: {
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      en: "UI/UX Experience Design"
    },
    description: {
      ar: "نصمم تجارب مستخدم سلسة وجذابة ترفع من معدل التفاعل وتسهل رحلة العميل نحو الشراء.",
      en: "User-centered design systems crafted for intuitive navigation, high conversion, and delightful UX."
    },
    benefits: {
      ar: [
        "بحوث المستخدم واختبار نماذج الإطار",
        "تصميم نظام مكونات فاخر (Design System)",
        "تحسين رحلة العميل وسلاسة التصفح"
      ],
      en: [
        "User Research & Wireframing",
        "Scalable Design System Creation",
        "Conversion Funnel UX Optimization"
      ]
    }
  },
  {
    id: "ai-automation",
    iconName: "Bot",
    title: {
      ar: "أتمتة المبيعات بالذكاء الاصطناعي",
      en: "AI Marketing & Sales Automation"
    },
    description: {
      ar: "نربط أنظمتك بحلول الذكاء الاصطناعي لأتمتة خدمة العملاء، تأهيل العملاء المحتملين، وإرسال التنبيهات.",
      en: "Leveraging cutting-edge AI agents and automation tools to streamline lead qualification and workflows."
    },
    benefits: {
      ar: [
        "شات بوت ذكي مخصص للرد الفوري",
        "أتمتة متابعات العملاء وعمليات البيع",
        "تحليل البيانات التنبؤي لنسب الشراء"
      ],
      en: [
        "Custom Conversational AI Chatbots",
        "Automated Lead Scoring & Follow-ups",
        "Predictive Customer Analytics"
      ]
    },
    featured: true
  },
  {
    id: "email-marketing",
    iconName: "Mail",
    title: {
      ar: "التسويق عبر البريد الإلكتروني",
      en: "Email Marketing & Automation"
    },
    description: {
      ar: "نبني سلاسل رسائل إلكترونية مخصصة تزيد من قيمة العميل مدى الحياة وتحافظ على ولائه.",
      en: "Targeted lifecycle marketing campaigns and automated flows that maximize customer lifetime value."
    },
    benefits: {
      ar: [
        "سلاسل الترحيب وإعادة الاستهداف الممرحلة",
        "تصاميم قوالب بريد تفاعلية فاخرة",
        "تقسيم شرائح العملاء لزيادة نسب الفتح"
      ],
      en: [
        "Automated Welcome & Retention Sequences",
        "Bespoke Responsive HTML Templates",
        "Advanced Behavioral Audience Segmentation"
      ]
    }
  },
  {
    id: "analytics",
    iconName: "BarChart3",
    title: {
      ar: "تحليل البيانات وتقارير الأداء",
      en: "Advanced Analytics & Intelligence"
    },
    description: {
      ar: "نحول الأرقام والبيانات المعقدة إلى رؤى استراتيجية واضحة تساعدك في اتخاذ القرارات الصحيحة.",
      en: "Turning complex marketing data into clear, actionable revenue metrics and growth dashboards."
    },
    benefits: {
      ar: [
        "بناء لوحات تحكم تفاعلية مخصصة",
        "تتبع مسار العميل عبر كل المنصات",
        "تقارير دورية مدعومة بالتوصيات"
      ],
      en: [
        "Custom Real-Time Executive Dashboards",
        "Cross-Channel Multi-Touch Attribution",
        "Monthly Growth Recommendations"
      ]
    }
  }
];
