'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function PortfolioCard({ project, index = 0 }: { project: CaseStudy; index?: number }) {
  const { language, t } = useLanguage();

  const title = project.title[language] || project.title.en;
  const summary = project.summary[language] || project.summary.en;
  const primaryMetric = project.metrics[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-navy-800/80 border border-slate-700/60 overflow-hidden shadow-2xl hover:border-electric-500/50 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Cover Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.client}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900/90 text-electric-400 border border-electric-500/30 backdrop-blur-md">
            {project.category}
          </span>
          {primaryMetric && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-accent-500 text-white shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              {primaryMetric.growth}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest block">
            {project.client}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-electric-300 transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {summary}
          </p>
        </div>

        {/* Metrics Grid Snippet */}
        {project.metrics.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-700/60 grid grid-cols-2 gap-2">
            <div>
              <span className="text-[11px] text-slate-400 block">{primaryMetric.label[language] || primaryMetric.label.en}</span>
              <span className="text-sm font-extrabold text-white">{primaryMetric.after}</span>
            </div>
            <div className="text-end">
              <span className="text-[11px] text-slate-400 block">{language === 'ar' ? 'البداية' : 'Before'}</span>
              <span className="text-xs font-semibold text-slate-400">{primaryMetric.before}</span>
            </div>
          </div>
        )}

        {/* Action Link */}
        <div className="mt-6 pt-2">
          <Link
            href={`/portfolio/${project.id}`}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-navy-900 hover:bg-electric-600 border border-slate-700 hover:border-electric-500 flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span>{t('portfolio.viewCaseStudy')}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
