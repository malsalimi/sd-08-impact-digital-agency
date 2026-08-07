export interface TeamMember {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  role: {
    ar: string;
    en: string;
  };
  bio: {
    ar: string;
    en: string;
  };
  image: string;
  experienceYears: number;
  skills: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    behance?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "ceo",
    name: {
      ar: "سليمان العبدالله / Sulaiman Al-Abdallah",
      en: "Sulaiman Al-Abdallah"
    },
    role: {
      ar: "الرئيس التنفيذي والمؤسس (CEO)",
      en: "Chief Executive Officer & Founder"
    },
    bio: {
      ar: "قائد استراتيجي ذو خبرة تزيد عن 14 عاماً في بناء الهويات الرقمية وقيادة التحول الرقمي للشركات الكبرى.",
      en: "Visionary leader with 14+ years of expertise scaling luxury digital brands and driving agency growth."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    experienceYears: 14,
    skills: ["Executive Strategy", "Digital Transformation", "Brand Scaling", "Investment Growth"],
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "creative-director",
    name: {
      ar: "لينا القحطاني / Lina Al-Qahtani",
      en: "Lina Al-Qahtani"
    },
    role: {
      ar: "المديرة الإبداعية (Creative Director)",
      en: "Creative Director"
    },
    bio: {
      ar: "حائزة على جوائز عالمية في تصميم الهويات البصرية، تشرف على الرؤية الفنية والجمالية لكافة مشاريع الوكالة.",
      en: "Award-winning designer crafting iconic brand systems and luxury design aesthetics across global markets."
    },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    experienceYears: 10,
    skills: ["Brand Systems", "Luxury Aesthetics", "Art Direction", "Typography"],
    socials: {
      linkedin: "#",
      behance: "#"
    }
  },
  {
    id: "marketing-manager",
    name: {
      ar: "فهد الدوسري / Fahad Al-Dossary",
      en: "Fahad Al-Dossary"
    },
    role: {
      ar: "مدير التسويق والأداء (Marketing Manager)",
      en: "Growth Marketing Manager"
    },
    bio: {
      ar: "متخصص في قيادة حملات الأداء وتحسين عائد الاستثمار الإعلاني لمختلف القطاعات التجارية.",
      en: "Performance marketing specialist driven by ROAS optimization, audience segmentation, and scaling channels."
    },
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    experienceYears: 9,
    skills: ["PPC Scaling", "Meta & Google Ads", "Funnel Optimization", "Data Analytics"],
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "seo-specialist",
    name: {
      ar: "زياد العمري / Ziyad Al-Omari",
      en: "Ziyad Al-Omari"
    },
    role: {
      ar: "أخصائي أول تحسين محركات البحث (SEO Specialist)",
      en: "Senior SEO & Organic Growth Specialist"
    },
    bio: {
      ar: "خبير في تصدر الكلمات المفتاحية التنافسية وبناء السلطة العالية للمواقع الإلكترونية.",
      en: "Architect of enterprise SEO strategy, backlink acquisition, and semantic search dominance."
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    experienceYears: 8,
    skills: ["Technical SEO", "Schema Markup", "Link Engineering", "Content Strategy"],
    socials: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "ui-designer",
    name: {
      ar: "مايا الزهراني / Maya Al-Zahrani",
      en: "Maya Al-Zahrani"
    },
    role: {
      ar: "مصممة تجربة وواجهة المستخدم (UI/UX Designer)",
      en: "Lead UI/UX Designer"
    },
    bio: {
      ar: "تعد أنظمة تصميم معقدة وتجارب تصفح سلسة تجمع بين الجمالية العالية وسهولة الاستخدام.",
      en: "Crafting intuitive web interfaces, scalable component design systems, and frictionless conversion flows."
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    experienceYears: 7,
    skills: ["Figma Design Systems", "Prototyping", "User Research", "Micro-Interactions"],
    socials: {
      linkedin: "#",
      behance: "#"
    }
  },
  {
    id: "developer",
    name: {
      ar: "عمر السالم / Omar Al-Salim",
      en: "Omar Al-Salim"
    },
    role: {
      ar: "مطور تطبيقات ويب متقدم (Senior Web Engineer)",
      en: "Senior Web & AI Engineer"
    },
    bio: {
      ar: "مطور برمجيات متخصص في Next.js، الأداء الفائق، وأتمتة الذكاء الاصطناعي للمنصات الرقمية.",
      en: "Full-stack Next.js developer building sub-second web experiences and automated AI integrations."
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    experienceYears: 8,
    skills: ["Next.js & React", "TypeScript", "Tailwind CSS", "AI Integration"],
    socials: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: "copywriter",
    name: {
      ar: "هدى الشمري / Huda Al-Shammari",
      en: "Huda Al-Shammari"
    },
    role: {
      ar: "كاتبة نصوص إعلانية واستراتيجية (Copywriter)",
      en: "Senior Brand Copywriter"
    },
    bio: {
      ar: "تنسج كلمات مقنعة تلامس مشاعر الجمهور وتحول القراء إلى عملاء دائمين.",
      en: "Master of narrative storytelling, high-converting ad copy, and strategic messaging."
    },
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    experienceYears: 6,
    skills: ["Conversion Copy", "Brand Storytelling", "Ad Scripts", "SEO Copywriting"],
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "photographer",
    name: {
      ar: "يوسف الخالد / Youssef Al-Khaled",
      en: "Youssef Al-Khaled"
    },
    role: {
      ar: "مصور ومدير الإنتاج المرئي (Visual Producer)",
      en: "Senior Visual & Content Producer"
    },
    bio: {
      ar: "يلتقط زوايا سينمائية تبرز جمال المنتجات والعلامات التجارية لإنتاج محتوى ترويجي استثنائي.",
      en: "Capturing cinematic imagery and high-end promotional video production for luxury brands."
    },
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    experienceYears: 9,
    skills: ["Commercial Photography", "Cinematography", "Lighting", "Post-Production"],
    socials: {
      behance: "#",
      linkedin: "#"
    }
  }
];
