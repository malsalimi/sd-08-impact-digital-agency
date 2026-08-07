'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import DashboardTable from '@/components/dashboard/DashboardTable';
import DashboardActivities from '@/components/dashboard/DashboardActivities';
import { LayoutDashboard, Sparkles, RefreshCw, Download, Filter } from 'lucide-react';

export default function DashboardDemoPage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 space-y-10 bg-navy-950 text-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('dashboard.tag')}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-electric-500" />
              <span>{t('dashboard.title')}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => alert(language === 'ar' ? 'تحديث البيانات التجريبية...' : 'Refreshing real-time dashboard data...')}
              className="p-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-white hover:border-electric-500 transition-colors"
              aria-label="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => alert(language === 'ar' ? 'تنزيل تقرير PDF التجريبي...' : 'Exporting Executive PDF Report...')}
              className="px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-electric-600 shadow-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'ar' ? 'تصدير تقرير PDF' : 'Export Executive PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. Stats Metrics Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardStats />
      </div>

      {/* 2. Charts Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardCharts />
      </div>

      {/* 3. Campaign Table Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardTable />
      </div>

      {/* 4. Activities & System Alerts Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardActivities />
      </div>

      {/* Demo Notice Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-navy-900/80 border border-slate-800 text-center text-xs text-slate-400">
          🔒 {t('footer.demoNote')}
        </div>
      </div>
    </div>
  );
}
