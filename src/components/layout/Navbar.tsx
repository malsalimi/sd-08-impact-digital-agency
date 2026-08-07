'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  Sparkles, Menu, X, ArrowRight, ArrowLeft, 
  ChevronDown, LayoutDashboard, Users, Briefcase, HelpCircle, PhoneCall 
} from 'lucide-react';

export default function Navbar() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Core Primary Nav Links
  const primaryLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/blog', label: t('nav.blog') },
  ];

  // Secondary Dropdown Pages
  const secondaryLinks = [
    { href: '/team', label: t('nav.team'), icon: Users },
    { href: '/careers', label: t('nav.careers'), icon: Briefcase },
    { href: '/faq', label: t('nav.faq'), icon: HelpCircle },
    { href: '/dashboard', label: t('nav.dashboard'), icon: LayoutDashboard, highlight: true },
    { href: '/contact', label: t('nav.contact'), icon: PhoneCall },
  ];

  const isMoreActive = secondaryLinks.some(link => pathname === link.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-600 via-electric-500 to-accent-500 flex items-center justify-center shadow-lg shadow-electric-600/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
                IMPACT <span className="text-electric-500 text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-electric-500/10 border border-electric-500/20">AGENCY</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                {language === 'ar' ? 'وكالة إمباكت الرقمية' : 'Digital Growth Agency'}
              </span>
            </div>
          </Link>

          {/* Desktop Primary Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-electric-600/20 border border-electric-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "المزيد" / More Pages Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl inline-flex items-center gap-1.5 transition-all ${
                  isMoreActive || moreDropdownOpen
                    ? 'text-white bg-electric-600/20 border border-electric-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800/60'
                }`}
              >
                <span>{language === 'ar' ? 'صفحات أخرى' : 'More Pages'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-electric-400' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {moreDropdownOpen && (
                <div className="absolute top-full mt-2 w-52 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-slate-700/80 p-2 shadow-2xl z-50 animate-fadeIn text-start">
                  {secondaryLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                          isActive
                            ? 'text-white bg-electric-600/20 border border-electric-500/30'
                            : link.highlight
                            ? 'text-accent-400 hover:bg-accent-500/10'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions Bar */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 via-electric-500 to-accent-500 hover:from-electric-500 hover:to-accent-600 shadow-md shadow-electric-600/25 hover:shadow-electric-600/40 hover:-translate-y-0.5 transition-all"
            >
              <span>{t('nav.startProject')}</span>
              {language === 'ar' ? (
                <ArrowLeft className="w-3.5 h-3.5" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5" />
              )}
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              {language === 'ar' ? 'الروابط الرئيسية' : 'Primary Navigation'}
            </span>
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-electric-600/20 border border-electric-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-3 pb-1">
              {language === 'ar' ? 'صفحات إضافية' : 'Secondary Pages'}
            </span>
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-electric-600/20 border border-electric-500/30'
                      : link.highlight
                      ? 'text-accent-400 bg-accent-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-accent-500"
              >
                <span>{t('nav.startProject')}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

