'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blogData';
import { Clock, ArrowRight, User, Search, Filter } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Fleet Safety', 'Logistics Tech', 'Cold Chain', 'Supply Chain Strategy', 'Compliance'];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Editorial & Blog Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #451A03 0%, #0F172A 55%, #0B132B 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Editorial Journal & Whitepapers</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">LOGISTICS & FLEET RESOURCES</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>8 Technical B2B Articles</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Supply Chain Blog & Technical Guides
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Practical operational strategies, telematics guides, and regulatory updates written by GetDigiFort fleet engineers and dispatch leads.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Clock size={14} color="#FBBF24" /> <span>Updated Weekly</span>
            </div>
            <div className="header-stat-pill">
              <User size={14} color="#38BDF8" /> <span>Authored by Senior Fleet Engineers</span>
            </div>
            <div className="header-stat-pill">
              <Search size={14} color="#34D399" /> <span>Searchable Knowledge Base</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter & Search Bar */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Filter size={16} style={{ color: 'var(--color-text-muted)', marginRight: '0.25rem' }} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: selectedCategory === cat ? 600 : 500,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--color-secondary)' : 'var(--color-border)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-secondary)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search articles or tags..."
              style={{ width: '100%', padding: '0.5rem 0.75rem 0.5rem 2.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="container" style={{ marginTop: '2.5rem' }}>
        {filteredArticles.length === 0 ? (
          <div style={{ textTransform: 'center', textAlign: 'center', padding: '4rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>No articles found matching your search criteria.</h3>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.25rem' }}>
            {filteredArticles.map((article) => (
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
                    height: '210px',
                    backgroundImage: `url(${article.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ backgroundColor: 'var(--color-secondary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  <div style={{ fontSize: '0.78125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={14} />
                    <span>{article.publishDate} • {article.readTime}</span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.35 }}>
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {article.excerpt}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <img src={article.author.avatar} alt={article.author.name} style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>{article.author.name}</span>
                    </div>

                    <Link href={`/blog/${article.slug}`} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
