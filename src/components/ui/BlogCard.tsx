'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article } from '@/data/articles';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

export default function BlogCard({ article, index = 0 }: { article: Article; index?: number }) {
  const { language, t } = useLanguage();

  const title = article.title[language] || article.title.en;
  const excerpt = article.excerpt[language] || article.excerpt.en;
  const authorRole = article.author.role[language] || article.author.role.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-3xl bg-navy-800/60 border border-slate-700/60 overflow-hidden shadow-xl hover:border-electric-500/50 hover:bg-navy-800/90 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Article Cover Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={article.coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900/90 text-electric-400 border border-electric-500/30 backdrop-blur-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Article Metadata */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-electric-500" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent-500" />
              {article.readTime} {t('blog.readTime')}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-electric-300 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Author Footer */}
      <div className="px-6 pb-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-600">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">{article.author.name}</span>
            <span className="text-[10px] text-slate-400 block">{authorRole}</span>
          </div>
        </div>

        <Link
          href={`/blog/${article.slug}`}
          className="p-2 rounded-xl bg-navy-900 text-electric-400 group-hover:bg-electric-600 group-hover:text-white transition-colors"
          aria-label="Read Article"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
