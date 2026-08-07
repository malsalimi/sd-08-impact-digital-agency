'use client';

import React from 'react';
import { dashboardMetrics } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { DollarSign, Target, Users, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  Target,
  Users,
  TrendingUp,
};

export default function DashboardStats() {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardMetrics.map((metric) => {
        const Icon = iconMap[metric.icon] || TrendingUp;
        const title = metric.title[language] || metric.title.en;

        return (
          <div
            key={metric.id}
            className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {title}
              </span>
              <div className="p-2.5 rounded-xl bg-electric-600/10 text-electric-400 border border-electric-500/20">
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">{metric.value}</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                {metric.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
