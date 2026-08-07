export interface FAQItem {
  id: string;
  category: 'general' | 'services' | 'pricing' | 'process';
  question: {
    ar: string;
    en: string;
  };
  answer: {
    ar: string;
    en: string;
  };
}

export const faqData: FAQItem[] = [
  {
    id: "1",
    category: "general",
    question: {
      ar: "ما الذي يميز وكالة إمباكت عن وكالات التسويق التقليدية؟",
      en: "What differentiates Impact Agency from traditional marketing agencies?"
    },
    answer: {
      ar: "نحن ندمج بين التصميم البصري الفاخر الفائز بجوائز، والتقنيات البرمجية المتقدمة (مثل Next.js)، وخوارزميات الذكاء الاصطناعي لتأهيل العملاء. لا نقدم مجرد إعلانات بل نبني محركات نمو مستدامة ومقاسة بالأرقام.",
      en: "We combine award-winning luxury visual identity, ultra-fast custom Next.js engineering, and conversational AI chatbots. We build quantifiable digital growth engines, not just aesthetic ads."
    }
  },
  {
    id: "2",
    category: "process",
    question: {
      ar: "كم تستغرق عادة فترة تنفيذ المشروع أو الحملة التسويقية؟",
      en: "How long does a typical project branding or web build take?"
    },
    answer: {
      ar: "تتراوح المدة بحسب نطاق العمل. إطلاق الهوية البصرية والموقع الإلكتروني يستغرق من 3 إلى 6 أسابيع، بينما تبدأ الحملات التسويقية المدفوعة وأتمتة المبيعات بالعمل خلال 10 أيام عمل.",
      en: "Timelines depend on scope. Full branding and web portal projects typically span 3 to 6 weeks, while performance ad funnels launch within 10 business days."
    }
  },
  {
    id: "3",
    category: "pricing",
    question: {
      ar: "هل يمكن تفصيل باقة مخصصة تناسب احتياجات مشروعي فقط؟",
      en: "Can I request a bespoke customized package for my enterprise?"
    },
    answer: {
      ar: "بالتأكيد! بالإضافة للباقات الأساسية، يقدم فريقنا باقة Enterprise المخصصة بالكامل لمتطلبات وأهداف عملك التجارية الكبرى.",
      en: "Absolutely! Alongside our core tiers, our team creates fully tailored Enterprise strategies matching your precise operational scope and targets."
    }
  },
  {
    id: "4",
    category: "services",
    question: {
      ar: "كيف تضمنون تحقيق نتائج ومؤشرات أداء إيجابية (ROI)؟",
      en: "How do you ensure measurable ROI for marketing spend?"
    },
    answer: {
      ar: "نعتمد على نظام تتبع دقيق يقيس مسار التحويل من النقرة الأولى وحتى مرحلة إغلاق الشراء، مع تعديل المزايدات واستراتيجيات المحتوى أسبوعياً بناءً على تحليل البيانات الحية.",
      en: "We implement multi-touch attribution tracking from initial ad engagement down to final sale closure, optimizing campaigns weekly based on real-time data."
    }
  },
  {
    id: "5",
    category: "general",
    question: {
      ar: "هل تعمل وكالة إمباكت مع عملاء خارج المنطقة؟",
      en: "Does Impact Agency partner with international clients?"
    },
    answer: {
      ar: "نعم، نحن وكالة بمرجعية دولية ونخدم عملاء وشركات رائدة في مختلف أنحاء العالم العربي وأوروبا وأمريكا الشمالية عبر فروعنا الرقمية.",
      en: "Yes, we operate as a global creative agency serving industry-leading clients across the Middle East, Europe, and North America."
    }
  }
];
