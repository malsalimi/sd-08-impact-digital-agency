'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeamCard from '@/components/ui/TeamCard';
import CTASection from '@/components/ui/CTASection';
import { teamData } from '@/data/team';

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 space-y-16 bg-navy-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('team.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('team.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('team.subtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
