'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import CTASection from '@/components/ui/CTASection';
import { Briefcase, Heart, Sparkles, Send, CheckCircle2, DollarSign, Clock, Laptop } from 'lucide-react';

export default function CareersPage() {
  const { t, language } = useLanguage();
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: "1",
      title: { ar: "مطور Next.js و React أول (Senior Frontend)", en: "Senior Next.js & Frontend Engineer" },
      type: "Full-time • Remote",
      department: "Engineering"
    },
    {
      id: "2",
      title: { ar: "مصمم واجهات وتجربة المستخدم (UI/UX Lead)", en: "Lead UI/UX Systems Designer" },
      type: "Full-time • Hybrid",
      department: "Creative Studio"
    },
    {
      id: "3",
      title: { ar: "مدير إعلانات الأداء (Growth Paid Ads Manager)", en: "Growth Paid Media Specialist" },
      type: "Full-time • Remote",
      department: "Performance Growth"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: { ar: "رواتب تنافسية ومكافآت أداء", en: "Top 5% Salary & Quarterly ROAS Bonuses" } },
    { icon: Laptop, title: { ar: "عمل مرن عن بعد وأحدث أجهزة Apple", en: "100% Remote Flexibility & M3 Max Gear" } },
    { icon: Clock, title: { ar: "إجازات سنوية مدفوعة وساعات مرنة", en: "Unlimited PTO & Asynchronous Hours" } },
    { icon: Heart, title: { ar: "تأمين صحي شامل وميزانية تعليم", en: "Full Health Coverage & $2,500 Learning Fund" } }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => setApplied(false), 5000);
  };

  return (
    <div className="pt-28 pb-20 space-y-20 bg-navy-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('careers.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('careers.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('careers.subtitle')}
        </p>
      </section>

      {/* Culture & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">{t('careers.benefitsTitle')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-navy-800/60 border border-slate-700/60 text-center">
                <div className="w-12 h-12 rounded-xl bg-electric-600/10 text-electric-400 border border-electric-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">{b.title[language] || b.title.en}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">{t('careers.openPositions')}</h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 hover:border-electric-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
              <div>
                <span className="text-xs font-bold text-electric-400 uppercase tracking-wider block mb-1">{job.department}</span>
                <h3 className="text-lg font-bold text-white">{job.title[language] || job.title.en}</h3>
                <span className="text-xs text-slate-400 block mt-1">{job.type}</span>
              </div>

              <a
                href="#apply-form"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500 transition-colors text-center"
              >
                {t('careers.applyNow')}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-800/90 border border-slate-700 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">{t('careers.applyNow')}</h2>
          <p className="text-xs text-slate-400 text-center mb-8">{t('contact.demoNotice')}</p>

          {applied ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-bold text-sm">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              {language === 'ar' ? 'تم استلام طلبك التجريبي بنجاح!' : 'Application Demo Submitted Successfully!'}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t('contact.name')}</label>
                  <input required type="text" className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-electric-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t('contact.email')}</label>
                  <input required type="email" className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-electric-500" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">{language === 'ar' ? 'رابط البورتفوليو / GitHub' : 'Portfolio / GitHub URL'}</label>
                <input required type="url" placeholder="https://" className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-electric-500" />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t('contact.message')}</label>
                <textarea rows={4} required className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-electric-500" />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-electric-600 to-electric-700 hover:from-electric-500 hover:to-electric-600 flex items-center justify-center gap-2">
                <span>{t('careers.applyNow')}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
