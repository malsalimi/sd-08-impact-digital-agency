'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Timeline from '@/components/ui/Timeline';
import CTASection from '@/components/ui/CTASection';
import { Target, Eye, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { ar: "النتائج أولاً", en: "Results First" },
      desc: { ar: "نحن نركز على مقاييس النمو الحقيقية والعائد المباشر على الاستثمار.", en: "We measure success by scalable bottom-line revenue, not vanity metrics." }
    },
    {
      icon: Shield,
      title: { ar: "الشفافية المطلقة", en: "Total Transparency" },
      desc: { ar: "تقارير مباشرة وتواصل مستمر دون تعقيد أو تكاليف خفية.", en: "Unfiltered real-time analytics and direct communication SLAs." }
    },
    {
      icon: Award,
      title: { ar: "الإتقان الفاخر", en: "Prestige Execution" },
      desc: { ar: "نصمم ونطور بأعلى معايير الدقة التي تليق بالعلامات التجارية الكبرى.", en: "Crafting iconic visual aesthetics and sub-second modern web UX." }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: { ar: "الاكتشاف والتحليل العميق", en: "Discovery & Audit" },
      desc: { ar: "تحليل منافسيك، الجمهور المستهدف، ونقاط القوة والضعف في وضعك الحالي.", en: "Deep-dive competitor analysis and funnel bottleneck identification." }
    },
    {
      step: "02",
      title: { ar: "صياغة الاستراتيجية الهجومية", en: "Growth Strategy Blueprint" },
      desc: { ar: "بناء خطة العمل، ركائز الهوية، وهيكلة الحملات المدفوعة ومسار التحويل.", en: "Architecting brand identity guidelines, paid channels, and CRM hooks." }
    },
    {
      step: "03",
      title: { ar: "التصميم والتطوير المبتكر", en: "Design & Engineering" },
      desc: { ar: "إنتاج المواد البصرية الفاخرة وتطوير المنصة الرقمية بتقنيات Next.js السريعة.", en: "Building responsive visual assets and sub-second web platforms." }
    },
    {
      step: "04",
      title: { ar: "الإطلاق والحملات الممولة", en: "Campaign Activation" },
      desc: { ar: "تفعيل الإعلانات الموجهة عبر Google و Meta وأتمتة تأهيل العملاء بالذكاء الاصطناعي.", en: "Activating omnichannel paid media and AI chatbot qualification agents." }
    },
    {
      step: "05",
      title: { ar: "التحسين والتوسع المستمر", en: "Scale & ROAS Optimization" },
      desc: { ar: "متابعة البيانات يومياً واختبار AB لمضاعفة العائد وتوسيع الميزانيات التنافسية.", en: "Daily data iteration and A/B creative testing to maximize ROAS." }
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 bg-navy-900 text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('about.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('about.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('about.storyDesc')}
        </p>
      </section>

      {/* Story & Mission Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t('about.storyTitle')}</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('about.storyDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80">
                <Target className="w-8 h-8 text-electric-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t('about.missionTitle')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t('about.missionDesc')}</p>
              </div>

              <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80">
                <Eye className="w-8 h-8 text-accent-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t('about.visionTitle')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t('about.visionDesc')}</p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Impact Office Strategy Session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-navy-950 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">{t('about.valuesTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-navy-900 border border-slate-800 hover:border-electric-500/50 transition-all text-center">
                  <div className="w-14 h-14 rounded-2xl bg-electric-600/10 text-electric-400 border border-electric-500/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{v.title[language] || v.title.en}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc[language] || v.desc.en}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black">{t('about.timelineTitle')}</h2>
        </div>
        <Timeline />
      </section>

      {/* Creative Process (5 Steps) */}
      <section className="py-20 bg-navy-950 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">{t('about.processTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-navy-900 border border-slate-800 flex flex-col justify-between relative group hover:border-electric-500/50 transition-all">
                <div>
                  <span className="text-3xl font-black text-electric-500 block mb-4">{step.step}</span>
                  <h3 className="text-base font-bold text-white mb-2">{step.title[language] || step.title.en}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc[language] || step.desc.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
