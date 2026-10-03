import { translations, type Translation } from './translations';
import type { Locale } from '../types/calendar';

export const LOCALES: Locale[] = ['en', 'es', 'fr', 'pt', 'ja'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, { name: string; nativeName: string; flag: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
};

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && LOCALES.includes(lang as Locale)) {
    return lang as Locale;
  }
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale = DEFAULT_LOCALE): Translation {
  return translations[lang] || translations[DEFAULT_LOCALE];
}

export function getRelativeLocaleUrl(locale: Locale, path = ''): string {
  const cleanPath = path.replace(/^\//, '');
  if (locale === DEFAULT_LOCALE) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}/`;
}
