'use client';

import React from 'react';
import { revenueChartData } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function DashboardCharts() {
  const { language } = useLanguage();

  const maxRevenue = Math.max(...revenueChartData.map(d => d.revenue));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Revenue Growth Chart */}
      <div className="lg:col-span-2 p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl flex flex-col justify-between">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-electric-500" />
              <span>{language === 'ar' ? 'تحليل نمو الإيرادات وحجم الحملات' : 'Monthly Revenue & Ad Spend Growth'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ar' ? 'مقارنة بين الإيرادات المحققة والمصروفات الإعلانية' : 'Comparing gross client revenue vs monthly media spend'}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-electric-400">
              <span className="w-3 h-3 rounded-full bg-electric-500" />
              {language === 'ar' ? 'الإيرادات ($)' : 'Revenue ($)'}
            </span>
            <span className="flex items-center gap-1.5 text-accent-400">
              <span className="w-3 h-3 rounded-full bg-accent-500" />
              {language === 'ar' ? 'المصروفات' : 'Ad Spend'}
            </span>
          </div>
        </div>

        {/* Custom Responsive SVG Chart */}
        <div className="h-64 w-full flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-slate-700/60">
          {revenueChartData.map((item, idx) => {
            const revHeight = (item.revenue / maxRevenue) * 100;
            const spendHeight = (item.adSpend / maxRevenue) * 100;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  {/* Revenue Bar */}
                  <div
                    style={{ height: `${revHeight}%` }}
                    className="w-1/2 bg-gradient-to-t from-electric-700 to-electric-500 rounded-t-lg group-hover:brightness-125 transition-all relative"
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-navy-950 text-electric-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-electric-500 pointer-events-none transition-opacity">
                      ${(item.revenue / 1000).toFixed(0)}k
                    </span>
                  </div>
                  {/* Spend Bar */}
                  <div
                    style={{ height: `${spendHeight}%` }}
                    className="w-1/2 bg-gradient-to-t from-accent-600 to-accent-500 rounded-t-lg group-hover:brightness-125 transition-all"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-400">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Leads Widget */}
      <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-accent-500" />
            <span>{language === 'ar' ? 'معدل إغلاق الفرص (Leads)' : 'Lead Conversion Rate'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ar' ? 'أداء تحويل الزوار إلى مواعيد حقيقية' : 'Performance of inbound qualified lead funnels'}
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="relative w-36 h-36 rounded-full border-8 border-navy-900 border-t-electric-500 border-r-accent-500 border-b-emerald-500 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <span className="text-3xl font-black text-white block">2,840</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">{language === 'ar' ? 'عميل محتمل' : 'Qualified Leads'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/60 space-y-2 text-xs">
          <div className="flex justify-between text-slate-300">
            <span>{language === 'ar' ? 'محتملون عبر Google Ads' : 'Google Search Ads'}</span>
            <span className="font-bold text-white">42%</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>{language === 'ar' ? 'محتملون عبر WhatsApp AI' : 'WhatsApp AI Agent'}</span>
            <span className="font-bold text-white">38%</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>{language === 'ar' ? 'توصيات مباشرة' : 'Direct Referrals'}</span>
            <span className="font-bold text-white">20%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
