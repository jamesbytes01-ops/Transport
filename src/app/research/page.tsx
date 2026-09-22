import React from 'react';
import Link from 'next/link';
import { RESEARCH_REPORTS } from '@/data/researchData';
import { FileText, Download, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Research & Insights | Supply Chain Intelligence & Freight Outlook',
  description: 'Executive research briefings, quarterly Freight Market Index reports, regulatory policy analysis, and heavy transport decarbonization benchmarks.',
};

export default function ResearchPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">FREIGHT MARKET INTELLIGENCE</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Research & Supply Chain Insights
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Quarterly market indices, regulatory compliance frameworks, and quantitative research published by Vanguardia Economics & Telematics Lab.
          </p>
        </div>
      </section>

      {/* Reports List */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {RESEARCH_REPORTS.map((report) => (
            <div
              key={report.id}
              id={report.slug}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ backgroundColor: 'var(--color-secondary-subtle)', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                  {report.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Published {report.publishDate} • {report.readTime}
                </span>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  {report.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {report.subtitle}
                </p>
              </div>

              {/* Key Stats Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', backgroundColor: 'var(--color-bg-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                {report.stats.map((st) => (
                  <div key={st.label}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{st.label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                      {st.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Findings */}
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  Key Executive Findings:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {report.keyFindings.map((kf) => (
                    <li key={kf} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-secondary-light)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author & PDF Download */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={report.author.avatar} alt={report.author.name} style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--color-primary)', display: 'block' }}>{report.author.name}</strong>
                    <span style={{ fontSize: '0.78125rem', color: 'var(--color-text-muted)' }}>{report.author.role}</span>
                  </div>
                </div>

                <a href={report.downloadablePdf} download className="btn btn-secondary" style={{ padding: '0.7rem 1.25rem', fontSize: '0.875rem' }}>
                  <Download size={16} />
                  <span>Download Executive PDF Briefing</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
