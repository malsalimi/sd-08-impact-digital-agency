'use client';

import React from 'react';
import Image from 'next/image';
import { recentActivities, dashboardNotifications } from '@/data/dashboard';
import { useLanguage } from '@/context/LanguageContext';
import { Bell, Activity, CheckCircle2 } from 'lucide-react';

export default function DashboardActivities() {
  const { language, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Executive Activity Stream */}
      <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-accent-500" />
          <span>{t('dashboard.recentActivities')}</span>
        </h3>

        <div className="space-y-4">
          {recentActivities.map((act) => (
            <div key={act.id} className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/50 flex items-start gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-electric-500/40 shrink-0">
                <Image src={act.avatar} alt={act.user} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{act.user}</span>
                  <span className="text-[10px] text-slate-500">{act.timestamp}</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {act.action[language] || act.action.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time System Notifications */}
      <div className="p-6 rounded-2xl bg-navy-800/80 border border-slate-700/80 shadow-xl">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-electric-500 animate-pulse" />
          <span>{language === 'ar' ? 'التنبيهات المباشرة للنظام' : 'Live System Alerts'}</span>
        </h3>

        <div className="space-y-4">
          {dashboardNotifications.map((notif) => (
            <div key={notif.id} className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/50 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-electric-600/10 text-electric-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-slate-200 leading-relaxed">
                  {notif.title[language] || notif.title.en}
                </p>
                <span className="text-[10px] text-slate-500 block mt-1">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
