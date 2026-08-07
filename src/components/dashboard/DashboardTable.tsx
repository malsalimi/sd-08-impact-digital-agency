'use client';

import React from 'react';
import { recentCampaigns } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { Target, ArrowUpRight } from 'lucide-react';

export default function DashboardTable() {
  const { language, t } = useLanguage();

  return (
    <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-electric-500" />
            <span>{language === 'ar' ? 'حالة الحملات الإعلانية النشطة' : 'Active Ad Campaigns Overview'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'ar' ? 'متابعة مباشرة للميزانيات والمصروفات وعائد الاستثمار ROAS' : 'Real-time media spend and ROAS performance tracking'}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-700/80 text-slate-400 font-bold uppercase text-[11px]">
              <th className="py-3 px-4 text-start">{language === 'ar' ? 'اسم الحملة' : 'Campaign Name'}</th>
              <th className="py-3 px-4 text-start">{language === 'ar' ? 'العميل' : 'Client'}</th>
              <th className="py-3 px-4 text-start">{language === 'ar' ? 'المنصة' : 'Platform'}</th>
              <th className="py-3 px-4 text-start">{language === 'ar' ? 'الميزانية' : 'Budget'}</th>
              <th className="py-3 px-4 text-start">{t('dashboard.spent')}</th>
              <th className="py-3 px-4 text-start">{t('dashboard.roi')}</th>
              <th className="py-3 px-4 text-start">{t('dashboard.status')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/60 font-medium">
            {recentCampaigns.map((cmp) => (
              <tr key={cmp.id} className="hover:bg-navy-900/60 transition-colors">
                <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                  <span>{cmp.name}</span>
                </td>
                <td className="py-4 px-4 text-slate-300">{cmp.client}</td>
                <td className="py-4 px-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-900 text-electric-400 border border-electric-500/30">
                    {cmp.platform}
                  </span>
                </td>
                <td className="py-4 px-4 text-slate-300 font-semibold">{cmp.budget}</td>
                <td className="py-4 px-4 text-slate-300">{cmp.spent}</td>
                <td className="py-4 px-4">
                  <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {cmp.roas}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      cmp.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : cmp.status === 'Optimizing'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {cmp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
