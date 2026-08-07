export interface CaseStudy {
  id: string;
  client: string;
  category: 'branding' | 'marketing' | 'web';
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  coverImage: string;
  gallery: string[];
  challenge: {
    ar: string;
    en: string;
  };
  solution: {
    ar: string;
    en: string;
  };
  objectives: {
    ar: string[];
    en: string[];
  };
  process: {
    ar: string[];
    en: string[];
  };
  technologies: string[];
  deliverables: {
    ar: string[];
    en: string[];
  };
  metrics: {
    label: { ar: string; en: string };
    before: string;
    after: string;
    growth: string;
  }[];
  testimonial: {
    quote: { ar: string; en: string };
    author: string;
    role: { ar: string; en: string };
    avatar: string;
  };
  featured?: boolean;
}

export const portfolioData: CaseStudy[] = [
  {
    id: "nova-coffee",
    client: "Nova Coffee Roasters",
    category: "branding",
    title: {
      ar: "إعادة بناء الهوية البصرية وإطلاق سلسلة المقاهي السحابية",
      en: "Brand Identity Rebrand & Cloud Roastery Launch"
    },
    summary: {
      ar: "تحويل المقهى المحلي إلى علامة تجارية فاخرة منافسة في سوق القهوة المختصة مع زيادة 320% في المبيعات.",
      en: "Transforming a local roastery into a luxury specialty coffee icon, resulting in 320% sales growth."
    },
    coverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop"
    ],
    challenge: {
      ar: "عانت Nova Coffee من صعوبة التمايز في سوق التجزئة المزدحم، وافتقاد دليل هوية بصرية ممتد يحاكي الفخامة، بالإضافة لضعف معدل طلبات المتجر الإلكتروني.",
      en: "Nova Coffee struggled with market differentiation in a saturated specialty coffee space, lacking a cohesive luxury identity and digital direct-to-consumer store."
    },
    solution: {
      ar: "قمنا بصياغة دليل هوية بصرية متكامل بنمط مينيمل فاخر، وتصميم تغليف التعبئة الفاخرة، مع بناء متجر إلكتروني فائق السرعة وإطلاق حملة تسويقية مدفوعة بنظام المؤثرين.",
      en: "We crafted a minimal luxury visual identity, engineered sustainable premium packaging, built a high-converting Next.js storefront, and executed a targeted influencer campaign."
    },
    objectives: {
      ar: [
        "إعادة وضع العلامة التجارية في فئة الفخامة الميسورة",
        "زيادة طلبات الاشتراك الشهري لـ القهوة",
        "رفع متوسط قيمة السلة عند الشراء"
      ],
      en: [
        "Reposition brand into affordable luxury segment",
        "Scale recurring monthly bean subscriptions",
        "Increase average order value (AOV)"
      ]
    },
    process: {
      ar: [
        "تحليل المنافسين والجمهور المستهدف",
        "تطوير شعار وعناصر الهوية البصرية والتغليف",
        "تصميم وتطوير متجر إلكتروني مخصص",
        "إطلاق حملات الإعلانات المدفوعة وصناع المحتوى"
      ],
      en: [
        "Audience research & competitor bench-marking",
        "Visual identity, logo system & package engineering",
        "Custom Next.js e-commerce engineering",
        "Omnichannel paid & influencer campaign activation"
      ]
    },
    technologies: ["Figma", "Next.js", "Tailwind CSS", "Shopify Engine", "Google Ads", "Meta Ads"],
    deliverables: {
      ar: [
        "دليل هوية بصرية شامـل 120 صفحة",
        "تصاميم علب وأكواب التغليف الحصرية",
        "منصة متجر إلكتروني متكاملة",
        "خطة تسويق رقمية وحملات ممولة"
      ],
      en: [
        "Comprehensive 120-page Brand Bible",
        "Custom Eco-Friendly Packaging System",
        "High-Performance Custom E-Commerce Site",
        "Paid Media & Influencer Campaign Assets"
      ]
    },
    metrics: [
      {
        label: { ar: "نمو الإيرادات الشهري", en: "Monthly Revenue Growth" },
        before: "$25,000",
        after: "$105,000",
        growth: "+320%"
      },
      {
        label: { ar: "معدل تحويل المتجر", en: "E-Commerce Conversion Rate" },
        before: "1.2%",
        after: "4.8%",
        growth: "+300%"
      },
      {
        label: { ar: "المتابعين النشطين", en: "Social Engaged Audience" },
        before: "8,500",
        after: "64,000",
        growth: "+650%"
      }
    ],
    testimonial: {
      quote: {
        ar: "تحولت Nova Coffee بفضل إمباكت من مجرد حمّاصة محلية إلى واحدة من أكثر العلامات التجارية رواجاً في المنطقة. احترافيتهم تفوق التوقعات!",
        en: "Impact transformed Nova Coffee from a regional roastery into a sought-after lifestyle brand. Their execution quality is world-class."
      },
      author: "طارق المنصوري / Tariq Mansouri",
      role: { ar: "المؤسس والرئيس التنفيذي، Nova Coffee", en: "Founder & CEO, Nova Coffee" },
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    featured: true
  },
  {
    id: "sky-dental",
    client: "Sky Dental Specialized Clinics",
    category: "marketing",
    title: {
      ar: "حملة التسويق والأتمتة لمراكز الأسنان المتخصصة",
      en: "Omnichannel Acquisition & Patient Automation Campaign"
    },
    summary: {
      ar: "استراتيجية أتمتة وإعلانات أثمرت عن مبيعات تفوق 1.8 مليون دولار وزيادة الحجوزات المؤكدة بنسبة 240%.",
      en: "Digital growth engine resulting in $1.8M in new bookings and 240% verified clinic appointments."
    },
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    ],
    challenge: {
      ar: "تعاني عيادات Sky Dental من تسرب العملاء المحتملين قبل تثبيت الحجز وتكلفة الاستحواذ المرتفعة للإعلانات التقليدية.",
      en: "Sky Dental faced high patient acquisition costs and heavy lead leakages prior to appointment confirmation."
    },
    solution: {
      ar: "بناء نظام أتمتة عبر WhatsApp الذكي وتأهيل العملاء بالذكاء الاصطناعي مع حملات استهداف دقيقة لخدمات ابتسامة هوليوود وزراعة الأسنان.",
      en: "Architected a custom WhatsApp AI qualification bot integrated with Google Ads for high-ticket dental treatments."
    },
    objectives: {
      ar: ["مضاعفة الحجوزات الشهرية", "تقليل تكلفة حجز الموعد المؤكد", "أتمتة خدمة العملاء 24/7"],
      en: ["Double monthly high-ticket procedures", "Reduce Cost-Per-Acquisition (CPA)", "Automate patient follow-ups 24/7"]
    },
    process: {
      ar: [
        "تحليل مسار تحويل المرضى",
        "تطوير صفحات هبوط متخصصة لكل علاج",
        "تفعيل شات بوت الذكاء الاصطناعي للتأهيل الفوري",
        "إطلاق إعلانات الاستهداف الجغرافي الدقيق"
      ],
      en: [
        "Patient conversion funnel audit",
        "High-converting dedicated landing page deployment",
        "AI WhatsApp bot integration",
        "Hyper-targeted geographic search ads"
      ]
    },
    technologies: ["Google Search Ads", "Meta Ads", "WhatsApp API", "Make Automation", "Next.js"],
    deliverables: {
      ar: [
        "نظام أتمتة WhatsApp ذكي",
        "6 صفحات هبوط سريعة للتخصصات",
        "لوحة متابعة المواعيد والإسناد"
      ],
      en: [
        "Conversational AI Patient Qualification Agent",
        "6 High-Converting Landing Pages",
        "Executive ROI Analytics Suite"
      ]
    },
    metrics: [
      {
        label: { ar: "الحجوزات الشهرية", en: "Monthly Appointments" },
        before: "140",
        after: "480",
        growth: "+242%"
      },
      {
        label: { ar: "معدل خفض تكلفة العميل", en: "CPA Reduction" },
        before: "$85",
        after: "$28",
        growth: "-67%"
      },
      {
        label: { ar: "إجمالي قيمة العقود", en: "Generated Revenue" },
        before: "$420,000",
        after: "$1,850,000",
        growth: "+340%"
      }
    ],
    testimonial: {
      quote: {
        ar: "فريق إمباكت لم يكتفِ بإطلاق الإعلانات، بل أحدث نقلة نوعية في كيفية استقبالنا وتأهيلنا لمرضى العيادة.",
        en: "Impact didn't just run ads; they completely automated our patient intake workflow with unbelievable ROI."
      },
      author: "د. خالد السعيد / Dr. Khalid Al-Saeed",
      role: { ar: "المدير الطبي، مراكز Sky Dental", en: "Medical Director, Sky Dental" },
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"
    },
    featured: true
  },
  {
    id: "urban-homes",
    client: "Urban Homes Real Estate",
    category: "web",
    title: {
      ar: "منصة التصفح العقاري وإدارة المشاريع السكنية الفاخرة",
      en: "Luxury Real Estate Digital Platform & Virtual Tours"
    },
    summary: {
      ar: "تطوير منصة عقارية فاخرة تفاعلية دعمت إغلاق مبيعات عقارية بـ 14 مليون دولار في 6 أشهر.",
      en: "Creating an interactive luxury real estate platform driving $14M in project sales within 6 months."
    },
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop"
    ],
    challenge: {
      ar: "صعوبة عرض المخططات 3D والمشاريع العقارية تحت الإنشاء للمستثمرين الدوليين بأسلوب عصري جذاب.",
      en: "Inability to seamlessly showcase 3D architectural renders and high-end villas to international buyers."
    },
    solution: {
      ar: "تطوير تطبيق ويب سلس ومستجيب يدعم العرض 360 درجة، وحجوزات المعاينة المباشرة، مع استراتيجية تسويق للمستثمرين.",
      en: "Engineered a Next.js real estate portal featuring 3D virtual walkthroughs and lead routing."
    },
    objectives: {
      ar: ["جذب المستثمرين الدوليين", "تسريع فترة بيع الوحدات السكنية", "تقديم تجربة تصفح تفاعلية"],
      en: ["Attract high-net-worth investors", "Accelerate project sell-out velocity", "Deliver immersive web UX"]
    },
    process: {
      ar: [
        "تصميم واجهات UI/UX فخمة سوداء وذهبية",
        "تطوير منصة Next.js سريعة جداً",
        "دمج خرائط تفاعلية وجولات 360",
        "حملات تسويق موجهة للمستثمرين"
      ],
      en: [
        "Luxury dark UI/UX design architecture",
        "Fast Next.js frontend development",
        "360-degree virtual tour integration",
        "Investor targeted digital campaign"
      ]
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Mapbox", "SEO Enterprise"],
    deliverables: {
      ar: [
        "منصة عقارية مخصصة متوافقة مع كل الأجهزة",
        "نظام إدارة المبيعات وتأهيل المستثمرين",
        "كتالوجات رقمية تفاعلية"
      ],
      en: [
        "Bespoke High-End Property Portal",
        "Lead Automation Engine",
        "Interactive Digital Catalogs"
      ]
    },
    metrics: [
      {
        label: { ar: "إجمالي قيمة الوحدات المباعة", en: "Total Property Sales" },
        before: "$4.5M",
        after: "$14.2M",
        growth: "+215%"
      },
      {
        label: { ar: "معدل بقاء الزائر بالمنصة", en: "Avg. Time on Site" },
        before: "1m 10s",
        after: "4m 45s",
        growth: "+300%"
      },
      {
        label: { ar: "طلبات الشراء المؤهلة", en: "Qualified Investor Leads" },
        before: "35/mo",
        after: "160/mo",
        growth: "+357%"
      }
    ],
    testimonial: {
      quote: {
        ar: "المنصة التي صممتها إمباكت كانت السبب الرئيس في جذب المستثمرين الأجانب وإغلاق مبيعات المشروع بالكامل قبل موعده.",
        en: "The web application designed by Impact was the key differentiator in selling out our project ahead of schedule."
      },
      author: "سارة الهاشمي / Sarah Al-Hashimi",
      role: { ar: "نائب الرئيس للتسويق، Urban Homes", en: "VP of Marketing, Urban Homes" },
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    featured: true
  },
  {
    id: "alpha-finance",
    client: "Alpha Finance Tech",
    category: "branding",
    title: {
      ar: "الهوية الرقمية والحملات التسويقية لتطبيق التمويل التشاركي",
      en: "Fintech Brand Launch & User Acquisition Strategy"
    },
    summary: {
      ar: "بناء الهوية واستحواذ أكثر من 120,000 مستخدم نشط للتطبيق خلال السنة الأولى من الإطلاق.",
      en: "Building brand authority and driving 120,000 active app downloads in Year 1."
    },
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    ],
    challenge: {
      ar: "كسب ثقة مستخدمي القطاع المالي وتوضيح ميزات الاستثمار التشاركي بأسلوب مبسط وآمن.",
      en: "Building consumer trust in a fintech startup while simplifying complex wealth management concepts."
    },
    solution: {
      ar: "ابتكار هوية بصرية باللون الأزرق الكحلي مع حملات توعية عبر الفيديو والبودكاست وحملات إعلانات الأداء.",
      en: "Designed a high-trust visual identity, educational video funnels, and precision user acquisition campaigns."
    },
    objectives: {
      ar: ["ترسيخ الثقة بالأمان المالي", "تخفيض تكلفة تثبيت التطبيق", "زيادة قيمة المبالغ المستثمرة"],
      en: ["Build financial security trust", "Minimize Cost-Per-Install (CPI)", "Increase average deposit size"]
    },
    process: {
      ar: ["دراسة سلوك المستثمر", "تصميم الهوية وشاشات التطبيق", "إطلاقات تسويق الأداء عبر TikTok و Meta"],
      en: ["Investor behavioral research", "App UI design & brand guidelines", "Performance campaign launch"]
    },
    technologies: ["Figma", "TikTok Ads", "Apple Search Ads", "Meta Ads", "Mixpanel"],
    deliverables: {
      ar: ["هوية بصرية فاخرة", "نصوص ومواد ترويجية للتطبيق", "تقارير تتبع التثبيت والمبيعات"],
      en: ["Complete Fintech Brand System", "App Store Creative Suite", "Attribution Tracking Setup"]
    },
    metrics: [
      {
        label: { ar: "تنزيلات التطبيق", en: "App Downloads" },
        before: "5,000",
        after: "125,000",
        growth: "+2400%"
      },
      {
        label: { ar: "تكلفة التثبيت (CPI)", en: "Cost Per Install" },
        before: "$4.20",
        after: "$1.10",
        growth: "-73%"
      },
      {
        label: { ar: "المبالغ المستثمرة بالمنصة", en: "Total Platform Assets" },
        before: "$1.2M",
        after: "$18.5M",
        growth: "+1440%"
      }
    ],
    testimonial: {
      quote: {
        ar: "دقة استراتيجيات إمباكت وفهمهم للقطاع المالي جعلت من Alpha Finance علامة موثوقة في وقت قياسي.",
        en: "Impact's deep understanding of fintech marketing propelled our brand into market leadership position."
      },
      author: "فيصل الناصر / Faisal Al-Nasser",
      role: { ar: "المؤسس الشريك، Alpha Finance", en: "Co-Founder, Alpha Finance" },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "green-farm",
    client: "Green Farm Organic Foods",
    category: "marketing",
    title: {
      ar: "حملة التسويق العضوي وزيادة الوعي بالمنتجات الطبيعية",
      en: "D2C Organic Food Brand Expansion & Retargeting"
    },
    summary: {
      ar: "مضاعفة مبيعات الاشتراكات الغذائية الأسبوعية وتطوير هوية التغليف المستدامة.",
      en: "Doubling weekly organic produce subscriptions through sustainable branding and retargeting."
    },
    coverImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop"
    ],
    challenge: {
      ar: "رفع نسبة إعادة الشراء وزيادة وعي العائلات بأهمية المنتجات العضوية المحلية.",
      en: "Increasing repeat subscription orders and educating households on farm-to-table organic benefits."
    },
    solution: {
      ar: "إطلاق حملة تسويقية محاكية للأسلوب الصحي واستخدام البريد الإلكتروني لإعادة الاستهداف اليومي.",
      en: "Deployed a lifestyle-centric content engine paired with automated Klaviyo retention email flows."
    },
    objectives: {
      ar: ["زيادة مشتركي الصناديق الأسبوعية", "رفع معدل الاحتفاظ بالعملاء", "تطوير هوية الصناديق العضوية"],
      en: ["Grow weekly box subscribers", "Improve customer retention cohort", "Enhance eco-box packaging design"]
    },
    process: {
      ar: ["تصوير المنتجات الطبيعية", "تطوير سلاسل البريد الإلكتروني التلقائية", "إدارات الحملات الممولة برياضية وصحة"],
      en: ["Farm photo & video production", "Retention email sequence automation", "Health influencer partnerships"]
    },
    technologies: ["Klaviyo", "Meta Ads", "Shopify", "Google Analytics 4"],
    deliverables: {
      ar: ["استراتيجية المحتوى والتصوير", "قوالب البريد الإلكتروني الذكية", "حملات استهداف محددة"],
      en: ["D2C Content & Shoot Direction", "Automated Retention Email Funnels", "Paid Social Performance Assets"]
    },
    metrics: [
      {
        label: { ar: "الاشتراكات الأسبوعية النشطة", en: "Active Weekly Subscribers" },
        before: "800",
        after: "3,400",
        growth: "+325%"
      },
      {
        label: { ar: "نسبة فتح البريد الإلكتروني", en: "Email Open Rate" },
        before: "18%",
        after: "46%",
        growth: "+155%"
      },
      {
        label: { ar: "معدل العائد على الإعلان (ROAS)", en: "Ad ROAS Multiplier" },
        before: "2.1x",
        after: "6.4x",
        growth: "+204%"
      }
    ],
    testimonial: {
      quote: {
        ar: "النتائج التي حققناها مع إمباكت كانت مذهلة، أصبحنا الخيار الأول للعائلات الباحثة عن الأغذية الصحية.",
        en: "Our partnership with Impact delivered remarkable growth, placing Green Farm at the top of organic food delivery."
      },
      author: "نورة الجابري / Noura Al-Jabri",
      role: { ar: "مديرة التسويق، Green Farm", en: "Marketing Director, Green Farm" },
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  }
];
