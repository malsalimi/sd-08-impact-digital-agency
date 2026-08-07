'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PricingPackage } from '@/data/pricing';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPackage;
  isYearly: boolean;
  index?: number;
}

export default function PricingCard({ plan, isYearly, index = 0 }: PricingCardProps) {
  const { language, t } = useLanguage();
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const name = plan.name[language] || plan.name.en;
  const description = plan.description[language] || plan.description.en;
  const features = plan.features[language] || plan.features.en;
  const ctaText = plan.ctaText[language] || plan.ctaText.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-b from-navy-800 via-navy-800 to-navy-900 border-2 border-electric-500 shadow-2xl shadow-electric-600/20 scale-105 z-10'
          : 'bg-navy-800/60 border border-slate-700/60 hover:border-slate-600'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-electric-600 to-accent-500 shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('pricing.popular')}</span>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-extrabold text-white">{name}</h3>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[40px]">
          {description}
        </p>

        {/* Pricing tag */}
        <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-slate-700/60">
          <span className="text-4xl sm:text-5xl font-black text-white">${price.toLocaleString()}</span>
          <span className="text-slate-400 text-xs font-semibold">
            / {t('pricing.monthly')}
          </span>
        </div>

        {/* Features List */}
        <div className="mt-6 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            {language === 'ar' ? 'الميزات المضمنة:' : 'Included Features:'}
          </span>
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-6 border-t border-slate-700/60">
        <Link
          href={`/contact?plan=${plan.id}`}
          className={`w-full py-4 px-6 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all duration-300 ${
            plan.popular
              ? 'text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-accent-500 shadow-xl shadow-electric-600/30 hover:scale-[1.02]'
              : 'text-white bg-navy-900 hover:bg-navy-700 border border-slate-700 hover:border-electric-500'
          }`}
        >
          <span>{ctaText}</span>
          {language === 'ar' ? (
            <ArrowLeft className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </Link>
      </div>
    </motion.div>
  );
}
