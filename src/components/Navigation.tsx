import React, { useState, useEffect, useRef } from 'react';
import type { Locale } from '../types/calendar';
import { LOCALES, LOCALE_NAMES, getRelativeLocaleUrl } from '../i18n/utils';
import { translations } from '../i18n/translations';
import { 
  Sun, 
  Moon, 
  Globe, 
  Coffee, 
  Calendar, 
  Check, 
  Sparkles,
  ChevronDown 
} from 'lucide-react';

interface NavigationProps {
  currentLocale: Locale;
}

export const Navigation: React.FC<NavigationProps> = ({ currentLocale }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  const t = translations[currentLocale]?.nav || translations.en.nav;

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('c30-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle outside clicks to close language menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('c30-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const currentLangMeta = LOCALE_NAMES[currentLocale] || LOCALE_NAMES.en;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F7EAE0]/90 dark:bg-[#0E1B15]/90 border-b border-[#1D4533]/10 dark:border-[#F9D2BA]/15 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href={getRelativeLocaleUrl(currentLocale)} 
          className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4533] dark:focus-visible:ring-[#F9D2BA] rounded-lg p-1"
          title="Content30 Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1D4533] dark:bg-[#F9D2BA] text-[#F7EAE0] dark:text-[#1D4533] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-150">
            <Calendar className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1D4533] dark:text-[#F7EAE0]">
                Content<span className="text-[#5E3122] dark:text-[#F9D2BA]">30</span>
              </span>
              {/* Privacy badge hidden on small screens */}
              <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#1D4533]/10 dark:bg-[#F9D2BA]/15 text-[#1D4533] dark:text-[#F9D2BA]">
                <Sparkles className="w-2.5 h-2.5" /> 100% Client-Side
              </span>
            </div>
            {/* Tagline visible only on desktop */}
            <span className="hidden md:block text-[11px] font-medium text-[#5E3122]/80 dark:text-[#F7EAE0]/60 -mt-0.5">
              {t.brandTagline}
            </span>
          </div>
        </a>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm font-medium text-[#1D4533] dark:text-[#F7EAE0] bg-white/50 dark:bg-[#1D3B2E]/50 hover:bg-white dark:hover:bg-[#1D3B2E] border border-[#1D4533]/15 dark:border-[#F9D2BA]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
              aria-label={t.selectLanguage}
              title={t.selectLanguage}
            >
              <Globe className="w-4 h-4 text-[#5E3122] dark:text-[#F9D2BA]" />
              {/* Strict Responsive Rule: Desktop shows text, Mobile/Tablet shows ICON ONLY */}
              <span className="hidden xl:inline">{currentLangMeta.flag} {currentLangMeta.name}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#5E3122] dark:text-[#F9D2BA] transition-transform duration-150 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 py-1.5 rounded-xl bg-white dark:bg-[#162C22] shadow-xl border border-[#1D4533]/15 dark:border-[#F9D2BA]/20 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5E3122]/70 dark:text-[#F9D2BA]/70 border-b border-[#1D4533]/10 dark:border-[#F9D2BA]/10">
                  {t.selectLanguage}
                </div>
                {LOCALES.map((loc) => {
                  const meta = LOCALE_NAMES[loc];
                  const isCurrent = loc === currentLocale;
                  return (
                    <a
                      key={loc}
                      href={getRelativeLocaleUrl(loc)}
                      className={`flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                        isCurrent 
                          ? 'bg-[#F9D2BA]/40 dark:bg-[#1D3B2E] text-[#1D4533] dark:text-[#F9D2BA] font-bold' 
                          : 'text-[#1D4533] dark:text-[#F7EAE0] hover:bg-[#F7EAE0] dark:hover:bg-[#1F3E31]'
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span>{meta.flag}</span>
                        <span>{meta.nativeName}</span>
                      </span>
                      {isCurrent && <Check className="w-4 h-4 text-[#1D4533] dark:text-[#F9D2BA]" />}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Light / Dark Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm font-medium text-[#1D4533] dark:text-[#F7EAE0] bg-white/50 dark:bg-[#1D3B2E]/50 hover:bg-white dark:hover:bg-[#1D3B2E] border border-[#1D4533]/15 dark:border-[#F9D2BA]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#1D4533] dark:focus:ring-[#F9D2BA]"
            aria-label={t.toggleTheme}
            title={theme === 'dark' ? t.themeLight : t.themeDark}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F9D2BA]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1D4533]" />
            )}
            {/* Strict Responsive Rule: Desktop shows text, Mobile/Tablet shows ICON ONLY */}
            <span className="hidden xl:inline">
              {theme === 'dark' ? t.themeLight : t.themeDark}
            </span>
          </button>

          {/* Support Developer Button (Buy Me a Coffee) */}
          <a
            href="https://buymeacoffee.com/kisharadilz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-sm font-semibold text-[#F7EAE0] bg-[#5E3122] hover:bg-[#4C271B] dark:bg-[#F9D2BA] dark:text-[#1D4533] dark:hover:bg-[#F4BE9F] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5E3122] dark:focus:ring-[#F9D2BA]"
            title={t.supportDev}
            aria-label={t.supportDev}
          >
            <Coffee className="w-4 h-4" />
            {/* Strict Responsive Rule: Desktop shows text, Mobile/Tablet shows ICON ONLY */}
            <span className="hidden xl:inline">{t.supportDev}</span>
          </a>

        </div>
      </div>
    </header>
  );
};
