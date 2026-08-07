'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import { servicesData } from '@/data/services';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 space-y-20 bg-navy-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('services.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('services.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('services.subtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
