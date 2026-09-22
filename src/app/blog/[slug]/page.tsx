import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blogData';
import { generateArticleSchema } from '@/lib/seo';
import { Clock, ArrowRight, User } from 'lucide-react';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: BlogDetailProps) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} | Vanguardia Logistics Blog`,
    description: article.excerpt,
  };
}

export default function BlogArticlePage({ params }: BlogDetailProps) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = generateArticleSchema({
    title: article.title,
    excerpt: article.excerpt,
    publishDate: article.publishDate,
    slug: article.slug,
    authorName: article.author.name,
    imageUrl: article.imageUrl,
  });

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Link href="/blog" style={{ color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
            ← Back to Logistics Blog
          </Link>
          <span className="badge-tag-accent" style={{ display: 'block', width: 'fit-content' }}>
            {article.category}
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 800, marginTop: '0.75rem', lineHeight: 1.2 }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img src={article.author.avatar} alt={article.author.name} style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
            <div>
              <strong style={{ fontSize: '0.95rem', color: '#FFFFFF', display: 'block' }}>{article.author.name}</strong>
              <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>{article.author.role} • Published {article.publishDate} ({article.readTime})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div
          style={{
            height: '420px',
            borderRadius: 'var(--radius-lg)',
            backgroundImage: `url(${article.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '3rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
          }}
        />

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
          }}
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
          {article.tags.map((t) => (
            <span key={t} className="badge-tag">
              #{t}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
