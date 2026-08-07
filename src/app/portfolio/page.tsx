'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PortfolioCard from '@/components/ui/PortfolioCard';
import CTASection from '@/components/ui/CTASection';
import { portfolioData } from '@/data/portfolio';

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'marketing' | 'web'>('all');

  const filteredProjects = activeTab === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeTab);

  return (
    <div className="pt-28 pb-20 space-y-16 bg-navy-900 text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-accent-500/10 text-accent-500 border border-accent-500/30 uppercase tracking-widest inline-block mb-4">
          {t('portfolio.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('portfolio.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('portfolio.subtitle')}
        </p>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30'
                : 'bg-navy-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            {t('portfolio.all')}
          </button>
          <button
            onClick={() => setActiveTab('branding')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'branding'
                ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30'
                : 'bg-navy-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            {t('portfolio.branding')}
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'marketing'
                ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30'
                : 'bg-navy-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            {t('portfolio.marketing')}
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'web'
                ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30'
                : 'bg-navy-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            {t('portfolio.web')}
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
