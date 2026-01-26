'use client';

import { useState, useEffect } from 'react';
import { storage } from '@/lib/i18n/storage';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const strings = {
  en: {
    text: "We use cookies to improve your experience and store your language preference.",
    accept: "Accept",
    reject: "Reject"
  },
  de: {
    text: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und Ihre Spracheinstellung zu speichern.",
    accept: "Akzeptieren",
    reject: "Ablehnen"
  },
  fr: {
    text: "Nous utilisons des cookies pour améliorer votre expérience et enregistrer votre préférence linguistique.",
    accept: "Accepter",
    reject: "Refuser"
  }
};

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if user has made a choice
    if (typeof window !== 'undefined') {
        const choice = localStorage.getItem('codegraft_cookies_accepted');
        if (choice === null) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShow(true);
        }
    }
  }, []);

  const accept = () => {
    storage.setCookiesAccepted(true);
    storage.setLanguage(language); // Persist current language
    setShow(false);
  };

  const reject = () => {
    storage.setCookiesAccepted(false);
    setShow(false);
  };

  const content = strings[language] || strings['en'];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-6 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
              {content.text}
            </p>
            <div className="flex gap-3 shrink-0">
               <button
                onClick={reject}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {content.reject}
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm"
              >
                {content.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
