import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let messages: any;
  switch (locale) {
    case 'de':
      messages = (await import('./locales/de.json')).default;
      break;
    case 'fr':
      messages = (await import('./locales/fr.json')).default;
      break;
    default:
      messages = (await import('./locales/en.json')).default;
  }

  return {
    locale,
    messages,
  };
});
