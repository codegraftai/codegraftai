'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import { Mail, Phone, MapPin, Send, Calendar, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormState({ name: '', email: '', company: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <AbstractShapes variant="hero" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('form.subject')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="textarea-field"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn(
                      'btn-primary w-full justify-center',
                      status === 'success' && 'bg-green-600 hover:bg-green-600',
                      status === 'sending' && 'opacity-70 cursor-wait'
                    )}
                  >
                    {status === 'sending' ? (
                      <>{t('form.sending')}</>
                    ) : status === 'success' ? (
                      <>{t('form.success')}</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('form.submit')}
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">{t('form.error')}</p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info Card */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">{t('info.title')}</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${t('info.email')}`}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{t('info.email')}</span>
                  </a>
                  <a
                    href={`mailto:${t('info.sales')}`}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>{t('info.sales')}</span>
                  </a>
                  <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{t('info.address.line1')}</p>
                      <p>{t('info.address.line2')}</p>
                      <p>{t('info.address.line3')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Card */}
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800">
                <Calendar className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('demo.title')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {t('demo.description')}
                </p>
                <button className="btn-primary w-full justify-center">
                  {t('demo.cta')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
