'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '@/data/faq';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const question = item.question[language] || item.question.en;
        const answer = item.answer[language] || item.answer.en;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-navy-800/90 border-electric-500/50 shadow-xl'
                : 'bg-navy-800/50 border-slate-700/60 hover:border-slate-600'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-6 text-start flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
            >
              <span>{question}</span>
              <div className={`p-2 rounded-xl bg-navy-900 text-electric-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-electric-600 text-white' : ''}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/40">
                    {answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
