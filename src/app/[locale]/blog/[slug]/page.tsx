'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import Image from 'next/image';

const postImages: Record<string, string> = {
  'architectural-drift': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
  'graphrag-architecture': 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('blog');

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={i} className="text-3xl md:text-4xl font-bold mt-8 mb-4">
            {paragraph.slice(2)}
          </h1>
        );
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.slice(3)}
          </h2>
        );
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={i} className="font-semibold my-4">
            {paragraph.slice(2, -2)}
          </p>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
        return (
          <ul key={i} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="text-slate-600 dark:text-slate-400">
                {item.slice(2)}
              </li>
            ))}
          </ul>
        );
      }
      if (paragraph.startsWith('1. ')) {
        const items = paragraph.split('\n').filter((line) => /^\d+\. /.test(line));
        return (
          <ol key={i} className="list-decimal pl-6 my-4 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="text-slate-600 dark:text-slate-400">
                {item.replace(/^\d+\. /, '')}
              </li>
            ))}
          </ol>
        );
      }
      if (paragraph.startsWith('---')) {
        return <hr key={i} className="my-8 border-slate-200 dark:border-slate-700" />;
      }
      if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
        return (
          <p key={i} className="italic text-slate-600 dark:text-slate-400 my-4">
            {paragraph.slice(1, -1)}
          </p>
        );
      }
      return (
        <p key={i} className="text-slate-600 dark:text-slate-400 my-4 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={postImages[slug] || postImages['architectural-drift']}
          alt={t(`posts.${slug}.title`)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <article className="container-custom max-w-4xl -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-12"
        >
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToBlog')}
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
              <Tag className="w-3 h-3" />
              {t(`posts.${slug}.category`)}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {t('publishedOn')} {t(`posts.${slug}.date`)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {t(`posts.${slug}.readTime`)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {t(`posts.${slug}.title`)}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-8 border-b border-slate-200 dark:border-slate-700 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium">{t(`posts.${slug}.author`)}</p>
              <p className="text-sm text-slate-500">Author</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {renderContent(t(`posts.${slug}.content`))}
          </div>
        </motion.div>
      </article>

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}
