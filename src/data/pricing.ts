export interface PricingPackage {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: {
    ar: string[];
    en: string[];
  };
  ctaText: {
    ar: string;
    en: string;
  };
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: {
      ar: "باقة البداية (Starter)",
      en: "Starter Package"
    },
    description: {
      ar: "مثالية للشركات الناشئة والمشاريع الصغيرة الراغبة في تأسيس حضور رقمي قوي وشديد الجاذبية.",
      en: "Ideal for early-stage startups needing a premium digital footprint and conversion baseline."
    },
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    features: {
      ar: [
        "إدارة منصتين للتواصل الاجتماعي",
        "تطوير 12 منشوراً إبداعياً + 4 ريلز شهرياً",
        "إدارة إعلانات بميزانية تصل لـ $3,000",
        "تحسين SEO الأساسي للموقع",
        "تقرير أداء شهري وتوصيات نمو",
        "دعم عبر البريد الإلكتروني (خلال 24h)"
      ],
      en: [
        "Management of 2 Social Channels",
        "12 Creative Posts + 4 Reels / Month",
        "Paid Ad Management (up to $3k spend)",
        "Core SEO & On-Page Optimization",
        "Monthly ROI & Performance Report",
        "Standard Email Support (24h SLA)"
      ]
    },
    ctaText: {
      ar: "ابدأ الباقة",
      en: "Get Started"
    }
  },
  {
    id: "growth",
    name: {
      ar: "باقة النمو (Growth)",
      en: "Growth Package"
    },
    description: {
      ar: "الخيار الأكثر شعبية للشركات المتوسطة التي تسعى للتوسع السريع وزيادة حصتها في السوق.",
      en: "Our most popular package for scaling companies aiming to capture market share rapidly."
    },
    monthlyPrice: 3499,
    yearlyPrice: 2799,
    popular: true,
    features: {
      ar: [
        "إدارة 4 منصات تواصل اجتماعي",
        "تطوير 24 منشوراً + 10 ريلز وإنتاج فيديو",
        "إدارة حملات إعلانية بميزانية تصل لـ $15,000",
        "SEO متقدم وبناء الروابط عالية السلطة",
        "تصميم وإطلاق صفحات هبوط عالية التحويل",
        "أتمتة البريد الإلكتروني والـ WhatsApp الذكي",
        "مدير حساب مخصص واجتماعات أسبوعية",
        "دعم فني مباشر وسريع 24/7"
      ],
      en: [
        "Management of 4 Social Channels",
        "24 Creative Posts + 10 High-End Videos",
        "Paid Ad Management (up to $15k spend)",
        "Enterprise SEO & Authority Backlinks",
        "Custom Next.js Landing Page Design",
        "WhatsApp AI & Email Marketing Automation",
        "Dedicated Account Director & Weekly Syncs",
        "Priority 24/7 Direct Channel Support"
      ]
    },
    ctaText: {
      ar: "اختيار باقة النمو",
      en: "Choose Growth"
    }
  },
  {
    id: "enterprise",
    name: {
      ar: "باقة المؤسسات (Enterprise)",
      en: "Enterprise Package"
    },
    description: {
      ar: "حلول مخصصة وشاملة لكبرى المؤسسات والعلامات التجارية الراغبة في القيادة المطلقة.",
      en: "Fully tailored digital growth infrastructure for market leaders and enterprise brands."
    },
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    features: {
      ar: [
        "إدارة شاملة لجميع المنصات والقنوات",
        "إنتاج محتوى مرئي وسينمائي حصري",
        "إدارة ميزانيات إعلانية مفتوحة السقف",
        "تطوير موقع/تطبيق ويب متكامل خاص",
        "تكامل ذكاء اصطناعي وأتمتة مبيعات مخصصة",
        "دخول كامل على لوحة تحكم Impact Suite",
        "فريق عمل كامل مكرس لمشروعك",
        "عقود واتفاقيات مستوى خدمة SLA خاصة"
      ],
      en: [
        "Full Omnichannel Digital Management",
        "Cinematic Production & Studio Shoots",
        "Unlimited Paid Ad Budget Scaling",
        "Full Custom Web Platform & App Engineering",
        "Bespoke Enterprise AI Workflow Automation",
        "Full Access to Impact Suite Analytics Dashboard",
        "Dedicated 6-Member Agency Team Squad",
        "Custom SLA & Guaranteed ROI KPIs"
      ]
    },
    ctaText: {
      ar: "تواصل للاستشارة المباشرة",
      en: "Contact for Enterprise"
    }
  }
];

export interface ComparisonFeature {
  name: { ar: string; en: string };
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

export const comparisonFeatures: ComparisonFeature[] = [
  {
    name: { ar: "إدارة منصات التواصل", en: "Social Channels Managed" },
    starter: "2 منصات",
    growth: "4 منصات",
    enterprise: "غير محدود"
  },
  {
    name: { ar: "استراتيجية الهوية البصرية", en: "Visual Identity System" },
    starter: "أساسي",
    growth: "متقدم",
    enterprise: "دليل فاخر شامل"
  },
  {
    name: { ar: "إدارة الحملات الإعلانية", en: "Ad Campaign Budgeting" },
    starter: "حتى $3,000",
    growth: "حتى $15,000",
    enterprise: "غير محدود"
  },
  {
    name: { ar: "تطوير المواقع والصفحات", en: "Web & Landing Page Dev" },
    starter: "صفحة واحدة",
    growth: "صفحات هبوط متعددة",
    enterprise: "منصة ويب مخصصة"
  },
  {
    name: { ar: "أتمتة الذكاء الاصطناعي", en: "AI & Automation Funnels" },
    starter: false,
    growth: true,
    enterprise: true
  },
  {
    name: { ar: "وصول لوحة تحكم Impact Suite", en: "Impact Suite Dashboard" },
    starter: false,
    growth: "محدود",
    enterprise: "دخول كامل للمؤسسات"
  },
  {
    name: { ar: "مدير حساب مخصص", en: "Dedicated Account Manager" },
    starter: false,
    growth: true,
    enterprise: "فريق كامل مخصص"
  }
];
