'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import CTASection from '@/components/ui/CTASection';
import { portfolioData } from '@/data/portfolio';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, 
  Quote, Code, Layers, Target, CheckSquare 
} from 'lucide-react';

export default function CaseStudyDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { language, t } = useLanguage();

  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-36 pb-20 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">{language === 'ar' ? 'دراسة الحالة غير موجودة' : 'Case Study Not Found'}</h1>
        <Link href="/portfolio" className="text-electric-400 font-bold underline">
          {language === 'ar' ? 'العودة إلى الأعمال' : 'Back to Portfolio'}
        </Link>
      </div>
    );
  }

  const title = project.title[language] || project.title.en;
  const challenge = project.challenge[language] || project.challenge.en;
  const solution = project.solution[language] || project.solution.en;
  const objectives = project.objectives[language] || project.objectives.en;
  const process = project.process[language] || project.process.en;
  const deliverables = project.deliverables[language] || project.deliverables.en;

  return (
    <div className="pt-28 pb-20 space-y-20 bg-navy-900 text-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          {language === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{language === 'ar' ? 'العودة لمعرض الأعمال' : 'Back to Portfolio'}</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block">
            {project.client} • {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
        </div>

        {/* Cover Image */}
        <div className="relative h-[480px] w-full rounded-3xl overflow-hidden mt-10 border border-slate-700 shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.client}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-navy-800/90 border border-electric-500/40 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 text-center border-b md:border-b-0 md:border-r border-slate-700/60 last:border-none">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {m.label[language] || m.label.en}
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-black text-white">{m.after}</span>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-accent-500 text-white">
                  {m.growth}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 block mt-1">
                {language === 'ar' ? 'القيمة السابقة:' : 'Baseline:'} {m.before}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-accent-500" />
              <span>{t('portfolio.challenge')}</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{challenge}</p>

            <div className="mt-6 pt-6 border-t border-slate-700/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {t('caseStudy.objectives')}
              </h4>
              <ul className="space-y-2">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-electric-500" />
              <span>{t('portfolio.solution')}</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{solution}</p>

            <div className="mt-6 pt-6 border-t border-slate-700/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {t('caseStudy.deliverables')}
              </h4>
              <ul className="space-y-2">
                {deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckSquare className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Strategy Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-navy-950 border border-slate-800 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-electric-500" />
              <span>{t('caseStudy.technologies')}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-navy-900 text-electric-400 border border-electric-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4">{t('caseStudy.process')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-900 border border-slate-800">
                  <span className="text-xs font-bold text-electric-500 block mb-1">0{idx + 1}</span>
                  <p className="text-xs text-slate-300 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-navy-800 via-navy-800 to-navy-900 border border-slate-700 text-center relative">
          <Quote className="w-12 h-12 text-electric-500/20 mx-auto mb-4" />
          <p className="text-base sm:text-xl text-slate-200 italic max-w-3xl mx-auto leading-relaxed">
            "{project.testimonial.quote[language] || project.testimonial.quote.en}"
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-electric-500">
              <Image src={project.testimonial.avatar} alt={project.testimonial.author} fill className="object-cover" />
            </div>
            <div className="text-start">
              <span className="text-sm font-bold text-white block">{project.testimonial.author}</span>
              <span className="text-xs text-slate-400 block">{project.testimonial.role[language] || project.testimonial.role.en}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('caseStudy.gallery')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <Image src={img} alt={`Gallery item ${i}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
