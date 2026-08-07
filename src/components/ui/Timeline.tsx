'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Flag, Rocket, Trophy, Globe, Zap } from 'lucide-react';

export default function Timeline() {
  const { language } = useLanguage();

  const events = [
    {
      year: "2021",
      icon: Flag,
      title: { ar: "التأسيس والانطلاقة الأولى", en: "Agency Inception & Vision" },
      desc: { ar: "تأسست إمباكت برؤية تحويل الوكالات التقليدية إلى منظومات تسويقية تعتمد على الذكاء الاصطناعي والتصميم الفاخر.", en: "Impact was founded to replace legacy agency models with AI-backed growth infrastructure." }
    },
    {
      year: "2023",
      icon: Rocket,
      title: { ar: "التوسع الإقليمي وإطلاق Impact Suite", en: "Regional Expansion & Tech Suite" },
      desc: { ar: "الوصول لأكثر من 80 عميل من كبار الشخصيات وتطوير لوحة تحكم تحليل الأداء الخاصة.", en: "Scaled to 80+ enterprise clients while engineering our proprietary real-time analytics suite." }
    },
    {
      year: "2024",
      icon: Trophy,
      title: { ar: "جوائز التميز في الهوية والتصميم", en: "International Design Accolades" },
      desc: { ar: "الحصول على 14 جائزة إقليمية ودولية في تصميم الهويات البصرية وتجارب المستخدم الرقمية.", en: "Awarded 14 international creative design honors across branding and web engineering." }
    },
    {
      year: "2026",
      icon: Globe,
      title: { ar: "القيادة الرقمية وتوليد $45M إيرادات", en: "Market Leadership & $45M Generated" },
      desc: { ar: "تحقيق رقم قياسي في إجمالي الإيرادات المحققة للشركاء وإطلاق منظومة الوكالة الذكية الجديدة.", en: "Achieved $45M in aggregate client sales with our autonomous marketing suite." }
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Central Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-600 via-accent-500 to-electric-600 hidden md:block" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Box */}
              <div className="flex-1 w-full p-6 rounded-3xl bg-navy-800/60 border border-slate-700/60 hover:border-electric-500/50 shadow-xl transition-all">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-electric-600 text-white mb-3">
                  {event.year}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">
                  {event.title[language] || event.title.en}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {event.desc[language] || event.desc.en}
                </p>
              </div>

              {/* Central Node Badge */}
              <div className="w-12 h-12 rounded-2xl bg-navy-900 border-2 border-electric-500 text-electric-400 flex items-center justify-center shrink-0 z-10 shadow-lg shadow-electric-600/30">
                <Icon className="w-6 h-6 text-accent-500" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
