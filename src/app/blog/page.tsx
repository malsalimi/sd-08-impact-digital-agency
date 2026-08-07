'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import BlogCard from '@/components/ui/BlogCard';
import CTASection from '@/components/ui/CTASection';
import { articlesData } from '@/data/articles';

export default function BlogPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'SEO & Growth', 'Branding', 'AI & Innovation', 'Paid Ads', 'Social Media'];

  const filteredArticles = selectedCategory === 'all'
    ? articlesData
    : articlesData.filter(a => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 space-y-16 bg-navy-900 text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30 uppercase tracking-widest inline-block mb-4">
          {t('blog.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black">{t('blog.title')}</h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('blog.subtitle')}
        </p>

        {/* Category Pill Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30'
                  : 'bg-navy-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {cat === 'all' ? (language === 'ar' ? 'جميع المقالات' : 'All Articles') : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
