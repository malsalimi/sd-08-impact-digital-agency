'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PricingCard from '@/components/ui/PricingCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import { pricingPackages, comparisonFeatures } from '@/data/pricing';
import { faqData } from '@/data/faq';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-28 pb-20 space-y-24 bg-navy-900 text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('pricing.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('pricing.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('pricing.subtitle')}
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-full bg-navy-800 border border-slate-700">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              !isYearly ? 'bg-electric-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('pricing.monthly')}
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isYearly ? 'bg-electric-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>{t('pricing.yearly')}</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={index} />
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">{t('pricing.compareTitle')}</h2>
        </div>

        <div className="p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60 shadow-2xl overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-700/80 text-slate-400 font-bold uppercase text-[11px]">
                <th className="py-4 px-4 text-start">{t('pricing.feature')}</th>
                <th className="py-4 px-4 text-center">{t('pricing.starter')}</th>
                <th className="py-4 px-4 text-center text-electric-400">{t('pricing.growth')}</th>
                <th className="py-4 px-4 text-center">{t('pricing.enterprise')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60 font-medium">
              {comparisonFeatures.map((feat, idx) => (
                <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                  <td className="py-4 px-4 text-white font-bold">{feat.name[language] || feat.name.en}</td>

                  {/* Starter */}
                  <td className="py-4 px-4 text-center text-slate-300">
                    {typeof feat.starter === 'boolean' ? (
                      feat.starter ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      feat.starter
                    )}
                  </td>

                  {/* Growth */}
                  <td className="py-4 px-4 text-center text-electric-300 font-bold">
                    {typeof feat.growth === 'boolean' ? (
                      feat.growth ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      feat.growth
                    )}
                  </td>

                  {/* Enterprise */}
                  <td className="py-4 px-4 text-center text-slate-300 font-bold">
                    {typeof feat.enterprise === 'boolean' ? (
                      feat.enterprise ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      feat.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
        </div>
        <FAQAccordion items={faqData.filter(f => f.category === 'pricing' || f.category === 'general')} />
      </section>

      <CTASection />
    </div>
  );
}
