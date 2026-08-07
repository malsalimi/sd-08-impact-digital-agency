'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Palette, Share2, Search, Target, FileText, Code, 
  Layout, Bot, Mail, BarChart3, CheckCircle2, ArrowRight, ArrowLeft 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Share2,
  Search,
  Target,
  FileText,
  Code,
  Layout,
  Bot,
  Mail,
  BarChart3,
};

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const { language, t } = useLanguage();
  const IconComponent = iconMap[service.iconName] || Palette;

  const title = service.title[language] || service.title.en;
  const description = service.description[language] || service.description.en;
  const benefits = service.benefits[language] || service.benefits.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60 hover:border-electric-500/50 hover:bg-navy-800/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-electric-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Icon & Category */}
        <div className="w-14 h-14 rounded-2xl bg-electric-600/10 border border-electric-500/20 text-electric-400 group-hover:bg-electric-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-md">
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-white group-hover:text-electric-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Key Benefits */}
        <div className="mt-6 pt-6 border-t border-slate-700/60">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            {t('services.benefits')}
          </span>
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-4">
        <Link
          href={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-electric-400 group-hover:text-accent-400 transition-colors"
        >
          <span>{t('services.getStarted')}</span>
          {language === 'ar' ? (
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          ) : (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      </div>
    </motion.div>
  );
}
