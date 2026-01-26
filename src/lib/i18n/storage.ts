const LANGUAGE_KEY = 'codegraft_language';
const COOKIES_ACCEPTED_KEY = 'codegraft_cookies_accepted';

export type Language = 'en' | 'de' | 'fr';
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'de', 'fr'];
export const DEFAULT_LANGUAGE: Language = 'en';

export const storage = {
  getLanguage: (): Language | null => {
    if (typeof window === 'undefined') return null;
    const lang = localStorage.getItem(LANGUAGE_KEY);
    return (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) ? (lang as Language) : null;
  },
  setLanguage: (lang: Language) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(LANGUAGE_KEY, lang);
  },
  getCookiesAccepted: (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(COOKIES_ACCEPTED_KEY) === 'true';
  },
  setCookiesAccepted: (accepted: boolean) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(COOKIES_ACCEPTED_KEY, String(accepted));
  },
};
