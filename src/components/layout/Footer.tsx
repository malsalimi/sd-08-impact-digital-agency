'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Mail, Send, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 via-electric-500 to-accent-500 flex items-center justify-center shadow-lg shadow-electric-600/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                IMPACT <span className="text-electric-500">AGENCY</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              {t('footer.desc')}
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-500 border border-accent-500/20">
                Salimi Digital (SD) Collection • sd-08-impact-digital-agency
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/" className="hover:text-electric-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/about" className="hover:text-electric-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/portfolio" className="hover:text-electric-400 transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link href="/pricing" className="hover:text-electric-400 transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link href="/blog" className="hover:text-electric-400 transition-colors">{t('nav.blog')}</Link></li>
              <li><Link href="/careers" className="hover:text-electric-400 transition-colors">{t('nav.careers')}</Link></li>
              <li><Link href="/dashboard" className="hover:text-electric-400 transition-colors flex items-center gap-1 text-accent-400">{t('nav.dashboard')} <ExternalLink className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/services#brand-identity" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'الهوية البصرية الفاخرة' : 'Luxury Brand Identity'}</Link></li>
              <li><Link href="/services#social-media" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'إدارة وسائل التواصل' : 'Social Media Management'}</Link></li>
              <li><Link href="/services#seo" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'تحسين محركات البحث SEO' : 'Search Engine Optimization'}</Link></li>
              <li><Link href="/services#google-ads" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'الحملات المدفوعة PPC' : 'Performance Paid PPC'}</Link></li>
              <li><Link href="/services#web-development" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'تطوير المواقع الفائقة' : 'High-Speed Web Dev'}</Link></li>
              <li><Link href="/services#ai-automation" className="hover:text-electric-400 transition-colors">{language === 'ar' ? 'أتمتة الذكاء الاصطناعي' : 'AI Sales Automation'}</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t('footer.newsletterTitle')}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder={language === 'ar' ? 'بريدك الإلكتروني...' : 'Your email address...'}
                  className="w-full bg-navy-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-electric-700 hover:from-electric-500 hover:to-electric-600 flex items-center justify-center gap-2 shadow-md"
              >
                <span>{t('footer.subscribe')}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Demo Notice & Rights Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 bg-navy-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-ping" />
            <span className="text-slate-300 font-medium">{t('footer.demoNote')}</span>
          </div>

          <div className="text-slate-500 text-center md:text-end">
            <p>{t('footer.rights')}</p>
            <p className="text-[11px] text-slate-600 mt-1">Designed by Salimi Tech • Salimi Digital Collection</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
