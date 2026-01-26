'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { storage, Language, DEFAULT_LANGUAGE } from './storage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  isLoading: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from storage
  useEffect(() => {
    const storedLang = storage.getLanguage();
    if (storedLang) {
      setLanguageState(storedLang);
    }
    setIsInitialized(true);
  }, []);

  // Load translations when language changes
  useEffect(() => {
    if (!isInitialized) return;

    async function loadTranslations() {
      setIsLoading(true);
      try {
        let messages;
        switch (language) {
          case 'de':
            messages = await import('@/locales/de/main.json');
            break;
          case 'fr':
            messages = await import('@/locales/fr/main.json');
            break;
          case 'en':
          default:
            messages = await import('@/locales/en/main.json');
            break;
        }
        setTranslations(messages.default || messages);
      } catch (error) {
        console.error('Failed to load translations', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (storage.getCookiesAccepted()) {
        storage.setLanguage(lang);
    }
  };

  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
         <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
