'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import BlogCard from '@/components/ui/BlogCard';
import CTASection from '@/components/ui/CTASection';
import { articlesData } from '@/data/articles';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';

export default function BlogArticleDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { language, t } = useLanguage();

  const article = articlesData.find(a => a.slug === id || a.id === id);

  if (!article) {
    return (
      <div className="pt-36 pb-20 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">{language === 'ar' ? 'المقال غير موجود' : 'Article Not Found'}</h1>
        <Link href="/blog" className="text-electric-400 font-bold underline">
          {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  const title = article.title[language] || article.title.en;
  const content = article.content[language] || article.content.en;
  const authorRole = article.author.role[language] || article.author.role.en;
  const related = articlesData.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 space-y-16 bg-navy-900 text-white">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          {language === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('blog.backToBlog')}</span>
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-electric-600/10 text-electric-400 border border-electric-500/30">
          {article.category}
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>

        <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-electric-500/40">
              <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">{article.author.name}</span>
              <span className="text-[11px] text-slate-400 block">{authorRole}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-electric-500" />{article.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-accent-500" />{article.readTime} {t('blog.readTime')}</span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[420px] w-full rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
          <Image src={article.coverImage} alt={title} fill className="object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-800/60 border border-slate-700/60 shadow-xl prose prose-invert max-w-none text-slate-200 leading-relaxed space-y-6">
          {content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-sm sm:text-base leading-loose whitespace-pre-line">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('blog.relatedArticles')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((art, index) => (
            <BlogCard key={art.id} article={art} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
