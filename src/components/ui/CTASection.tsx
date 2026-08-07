'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, ArrowRight, ArrowLeft, PhoneCall } from 'lucide-react';

export default function CTASection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-20 bg-navy-900 text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-electric-600/30 via-accent-500/20 to-electric-600/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-16 rounded-3xl bg-gradient-to-tr from-navy-950 via-navy-800 to-navy-900 border border-slate-700/80 shadow-2xl text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-600/10 border border-electric-500/30 text-electric-400 text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span>{language === 'ar' ? 'جاهز للسيطرة الرقمية؟' : 'Ready for Digital Dominance?'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            {language === 'ar'
              ? 'دعنا نحول فكرتك إلى قصة نجاح عالمية تضاعف إيراداتك'
              : "Let's Scale Your Revenue With World-Class Brand & Marketing Systems"}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'تواصل مع فريق خبراء إمباكت اليوم للحصول على استشارة استراتيجية مخصصة وتحديد خطة النمو لمشروعك.'
              : 'Consult with Impact strategy leads today to unveil custom campaign funnels designed for rapid ROI.'}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-electric-600 via-electric-500 to-accent-500 hover:from-electric-500 hover:to-accent-600 shadow-xl shadow-electric-600/30 hover:shadow-electric-600/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>{t('hero.ctaPrimary')}</span>
              {language === 'ar' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-200 bg-navy-800/80 hover:bg-navy-800 border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-accent-500" />
              <span>{language === 'ar' ? 'تصفح الباقات' : 'Explore Packages'}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
