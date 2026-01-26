import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useCallback } from 'react';

export function useTranslation(namespace?: string) {
  const { translations } = useLanguage();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getNestedValue = useCallback((obj: any, path: string) => {
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined) ? prev[curr] : null, obj);
  }, []);

  const t = useCallback((key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(translations, fullKey);
    // If value is missing, return the key (or part of it)
    return typeof value === 'string' ? value : fullKey;
  }, [translations, namespace, getNestedValue]);

  // Mimic .raw() for arrays/objects
  const raw = useCallback((key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(translations, fullKey);
  }, [translations, namespace, getNestedValue]);

  return Object.assign(t, { raw });
}
