'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Statistic } from '@/data/statistics';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, TrendingUp, Zap, Award } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  TrendingUp,
  Zap,
  Award
};

export default function StatsCard({ stat, index = 0 }: { stat: Statistic; index?: number }) {
  const { language } = useLanguage();
  const Icon = iconMap[stat.iconName] || TrendingUp;
  const label = stat.label[language] || stat.label.en;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60 hover:border-electric-500/50 transition-all duration-300 shadow-xl flex flex-col items-center text-center relative overflow-hidden group"
    >
      <div className="w-14 h-14 rounded-2xl bg-electric-600/10 border border-electric-500/20 text-electric-400 group-hover:bg-electric-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-md">
        <Icon className="w-7 h-7" />
      </div>

      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
        {stat.prefix}{stat.value}{stat.suffix}
      </div>

      <p className="mt-3 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xs">
        {label}
      </p>
    </motion.div>
  );
}
