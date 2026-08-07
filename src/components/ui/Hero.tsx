'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, ArrowRight, Sparkles, TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-900 text-white">
      {/* Dynamic Background Gradients & Animated Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-electric-600/30 via-electric-500/20 to-accent-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern Grid Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/90 border border-electric-500/30 text-electric-400 text-xs sm:text-sm font-semibold mb-8 shadow-xl shadow-electric-600/10 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-accent-500 animate-spin-slow" />
          <span>{t('hero.badge')}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            {t('hero.title')}
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-electric-600 via-electric-500 to-accent-500 hover:from-electric-500 hover:to-accent-600 shadow-xl shadow-electric-600/30 hover:shadow-electric-600/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>{t('hero.ctaPrimary')}</span>
            {language === 'ar' ? (
              <ArrowLeft className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-200 bg-navy-800/80 hover:bg-navy-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>{t('hero.ctaSecondary')}</span>
          </Link>
        </motion.div>

        {/* Quick Stats Badges Floating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-2xl bg-navy-800/40 border border-slate-800 backdrop-blur-sm flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-electric-400 font-extrabold text-2xl sm:text-3xl">
              <TrendingUp className="w-5 h-5 text-electric-500" />
              <span>185+</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">{t('hero.statsClients')}</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-800/40 border border-slate-800 backdrop-blur-sm flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-accent-400 font-extrabold text-2xl sm:text-3xl">
              <Zap className="w-5 h-5 text-accent-500" />
              <span>380%</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">{t('hero.statsGrowth')}</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-800/40 border border-slate-800 backdrop-blur-sm flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-2xl sm:text-3xl">
              <Award className="w-5 h-5 text-amber-500" />
              <span>24</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">{t('hero.statsAwards')}</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-800/40 border border-slate-800 backdrop-blur-sm flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-2xl sm:text-3xl">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>100%</span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-1">{language === 'ar' ? 'نتائج مثبتة ومقاسة' : 'Guaranteed Performance'}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
