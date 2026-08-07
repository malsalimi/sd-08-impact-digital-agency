'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-16 bg-navy-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('contact.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('contact.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-navy-800/80 border border-slate-700/80 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {language === 'ar' ? 'بيانات التواصل التجريبية' : 'Demo Contact Info'}
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-electric-600/10 text-electric-400 border border-electric-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">{t('contact.email')}</span>
                  <span className="text-sm font-semibold text-white">contact@impactagency-demo.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-electric-600/10 text-electric-400 border border-electric-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">{language === 'ar' ? 'الهاتف' : 'Phone'}</span>
                  <span className="text-sm font-semibold text-white">+000000000</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-electric-600/10 text-electric-400 border border-electric-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">{language === 'ar' ? 'العنوان' : 'Address'}</span>
                  <span className="text-sm font-semibold text-white">Digital City</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <span className="text-amber-400 font-bold block mb-1">⚠️ {language === 'ar' ? 'تنبيه العرض التجريبي' : 'Demo Project Notice'}</span>
              {t('contact.demoNotice')}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="p-8 sm:p-12 rounded-3xl bg-navy-800/90 border border-slate-700/80 shadow-2xl">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-bold text-base space-y-4">
                  <CheckCircle2 className="w-12 h-12 mx-auto" />
                  <p>{t('contact.successMessage')}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold border border-slate-700 mt-4"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.name')}</label>
                      <input required type="text" placeholder={language === 'ar' ? 'سليمان محمد' : 'John Doe'} className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.email')}</label>
                      <input required type="email" placeholder="name@company.com" className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.company')}</label>
                      <input required type="text" placeholder={language === 'ar' ? 'شركة الأمل' : 'Acme Inc'} className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.budget')}</label>
                      <select className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500">
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.service')}</label>
                    <select className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500">
                      <option>{language === 'ar' ? 'تصميم الهوية البصرية الفاخرة' : 'Luxury Brand Identity'}</option>
                      <option>{language === 'ar' ? 'إدارة وسائل التواصل الاجتماعي' : 'Social Media Management'}</option>
                      <option>{language === 'ar' ? 'تحسين محركات البحث SEO' : 'SEO & Content'}</option>
                      <option>{language === 'ar' ? 'الحملات الإعلانية المدفوعة PPC' : 'Google & Meta Ads'}</option>
                      <option>{language === 'ar' ? 'تطوير المواقع والتطبيقات' : 'High-Performance Web Engineering'}</option>
                      <option>{language === 'ar' ? 'أتمتة الذكاء الاصطناعي' : 'AI Sales Automation'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">{t('contact.message')}</label>
                    <textarea rows={5} required placeholder={language === 'ar' ? 'اكتب تفاصيل مشروعك وأهدافك...' : 'Tell us about your project goals...'} className="w-full bg-navy-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-electric-500" />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-electric-600 via-electric-500 to-accent-500 hover:from-electric-500 hover:to-accent-600 shadow-xl shadow-electric-600/30 flex items-center justify-center gap-2">
                    <span>{t('contact.submit')}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
