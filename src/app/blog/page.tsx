import React from 'react';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blogData';
import { Clock, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Blog & Supply Chain Resources',
  description: 'Articles, technical insights, and operational guides on Telematics, FSMA Reefer Standards, Fleet Safety, and Drop-Trailer Strategy.',
};

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">LOGISTICS & FLEET RESOURCES</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Supply Chain Blog & Technical Guides
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Practical operational strategies, telematics guides, and regulatory updates written by Vanguardia fleet engineers and dispatch leads.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
          {BLOG_ARTICLES.map((article) => (
            <div
              key={article.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: '220px',
                  backgroundImage: `url(${article.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {article.category}
                </span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} />
                  <span>{article.publishDate} • {article.readTime}</span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.35 }}>
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {article.excerpt}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={article.author.avatar} alt={article.author.name} style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>{article.author.name}</span>
                  </div>

                  <Link href={`/blog/${article.slug}`} style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
