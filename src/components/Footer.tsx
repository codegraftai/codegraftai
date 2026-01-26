'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Github, Mail, ArrowRight, Check } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const footerLinks = {
    product: [
      { label: t('product.features'), href: '/features' },
      { label: t('product.pricing'), href: '/pricing' },
      { label: t('product.integrations'), href: '/integrations' },
      { label: t('product.changelog'), href: '/blog' },
    ],
    company: [
      { label: t('company.about'), href: '/about' },
      { label: t('company.blog'), href: '/blog' },
      { label: t('company.careers'), href: '/about#careers' },
      { label: t('company.contact'), href: '/contact' },
    ],
    resources: [
      { label: t('resources.docs'), href: '/blog' },
      { label: t('resources.api'), href: '/blog' },
      { label: t('resources.guides'), href: '/blog' },
      { label: t('resources.support'), href: '/contact' },
    ],
    legal: [
      { label: t('legal.privacy'), href: '/privacy' },
      { label: t('legal.terms'), href: '/terms' },
      { label: t('legal.impressum'), href: '/impressum' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-10 h-10 mx-auto mb-4 text-primary-500" />
            <h3 className="text-2xl font-bold mb-2">{t('newsletter.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('newsletter.description')}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="input-field flex-1"
              />
              <button
                type="submit"
                className={cn(
                  'btn-primary whitespace-nowrap',
                  status === 'success' && 'bg-green-600 hover:bg-green-600'
                )}
              >
                {status === 'success' ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    {t('newsletter.success')}
                  </>
                ) : (
                  <>
                    {t('newsletter.button')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">{t('newsletter.error')}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl">CodeGraft</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 max-w-xs">
              {t('description')}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('product.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('company.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('resources.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('legal.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} CodeGraft GmbH. {t('copyright')}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Berlin, Germany</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
