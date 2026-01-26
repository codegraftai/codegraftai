'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useTranslation } from '@/hooks/use-translation';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const { language } = useLanguage();
  const t = useTranslation('blog');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [postsMeta, setPostsMeta] = useState<any>(null);

  useEffect(() => {
     async function loadBlogIndex() {
         try {
             let data;
             switch (language) {
                    case 'de':
                        data = await import(`@/locales/de/blog/index.json`);
                        break;
                    case 'fr':
                        data = await import(`@/locales/fr/blog/index.json`);
                        break;
                    case 'en':
                    default:
                        data = await import(`@/locales/en/blog/index.json`);
                        break;
             }
             setPostsMeta(data.default || data);
         } catch(e) {
             console.error(e);
         }
     }
     loadBlogIndex();
  }, [language]);

  const postImages: Record<string, string> = {
    'architectural-drift': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    'graphrag-architecture': 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop',
  };

  const postSlugs = postsMeta ? Object.keys(postsMeta) : [];

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

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="container-custom">
          {!postsMeta ? (
             <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
             </div>
          ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {postSlugs.map((slug, index) => {
              const post = postsMeta[slug];
              return (
              <motion.article
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group card-hover overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={postImages[slug]}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sm font-medium rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {t('byAuthor')} {post.author}
                    </span>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      {t('readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
            })}
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
