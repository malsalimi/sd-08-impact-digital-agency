'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-navy-800/80 text-slate-200 border border-slate-700/60 hover:bg-navy-800 hover:border-electric-500 hover:text-white transition-all duration-200"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-electric-500 animate-pulse-slow" />
      <span>{language === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
    </button>
  );
}
