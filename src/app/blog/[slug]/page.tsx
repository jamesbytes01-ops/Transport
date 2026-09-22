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

      {/* Bespoke Article Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 60%, #090D16 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>{article.category}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">{article.category}</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>{article.publishDate}</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.65rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <User size={14} color="#38BDF8" /> <span>{article.author.name} ({article.author.role})</span>
            </div>
            <div className="header-stat-pill">
              <Clock size={14} color="#FBBF24" /> <span>{article.readTime} Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div
          style={{
            height: '400px',
            borderRadius: 'var(--radius-lg)',
            backgroundImage: `url(${article.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '2.5rem',
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
