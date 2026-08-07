'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import PortfolioCard from '@/components/ui/PortfolioCard';
import StatsCard from '@/components/ui/StatsCard';
import CTASection from '@/components/ui/CTASection';
import { servicesData } from '@/data/services';
import { portfolioData } from '@/data/portfolio';
import { statisticsData } from '@/data/statistics';
import { clientsData } from '@/data/clients';
import { CheckCircle2, ArrowRight, ArrowLeft, Star, Quote } from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();

  const featuredServices = servicesData.filter(s => s.featured).slice(0, 6);
  const featuredProjects = portfolioData.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Agency Intro Section */}
      <section className="py-24 bg-navy-950 relative overflow-hidden border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block">
                {t('agencyIntro.tag')}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {t('agencyIntro.title')}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('agencyIntro.description')}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
                  <span>{t('agencyIntro.feature1')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
                  <span>{t('agencyIntro.feature2')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
                  <span>{t('agencyIntro.feature3')}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-800 hover:bg-slate-800 border border-slate-700 hover:border-electric-500 transition-all"
                >
                  <span>{t('nav.about')}</span>
                  {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            </motion.div>

            {/* Visual Media Badge Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[420px] w-full rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Impact Digital Agency Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              </div>

              {/* Floating Stat Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 p-6 rounded-2xl bg-navy-900/90 border border-electric-500/40 backdrop-blur-xl shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">$45,000,000+</span>
                  <span className="text-xs text-slate-400 font-medium">{language === 'ar' ? 'إجمالي إيرادات شركائنا المضافة' : 'Generated Revenue for Partners'}</span>
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-accent-500 text-white">
                  ROAS 4.8x
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
              {t('services.tag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">{t('services.title')}</h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-electric-600 to-electric-700 hover:from-electric-500 hover:to-electric-600 shadow-xl shadow-electric-600/25"
            >
              <span>{t('services.viewAll')}</span>
              {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Statistics Section */}
      <section className="py-20 bg-navy-950 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statisticsData.map((stat, index) => (
              <StatsCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Case Studies Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-accent-500/10 text-accent-500 border border-accent-500/30 uppercase tracking-widest inline-block mb-4">
              {t('portfolio.tag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">{t('portfolio.title')}</h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-navy-800 hover:bg-slate-800 border border-slate-700 hover:border-electric-500 transition-all"
            >
              <span>{language === 'ar' ? 'استكشف كافة المشاريع' : 'Browse All Case Studies'}</span>
              {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Clients Logos Grid */}
      <section className="py-16 bg-navy-950 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-8">
            {language === 'ar' ? 'علامات تجارية تثق بنا (شركاء النجاح التجريبيين)' : 'Trusted By Industry Pioneers (Fictional Partners)'}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="p-4 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-electric-500/50 flex flex-col items-center justify-center transition-all group"
              >
                <span className="text-sm font-black text-slate-300 group-hover:text-electric-400 transition-colors tracking-tight">
                  {client.logoText}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
              {language === 'ar' ? 'شهادات شركائنا' : 'Client Testimonials'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">
              {language === 'ar' ? 'ماذا يقول الرؤساء التنفيذيون عن إمباكت؟' : 'What Enterprise Leaders Say About Impact'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.slice(0, 3).map((project, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-navy-800/60 border border-slate-700/60 flex flex-col justify-between relative shadow-xl">
                <Quote className="w-10 h-10 text-electric-500/30 mb-4" />
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{project.testimonial.quote[language] || project.testimonial.quote.en}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/60">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-electric-500/40">
                    <Image src={project.testimonial.avatar} alt={project.testimonial.author} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{project.testimonial.author}</span>
                    <span className="text-[11px] text-slate-400 block">{project.testimonial.role[language] || project.testimonial.role.en}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <CTASection />
    </div>
  );
}
