'use client';

import React from 'react';
import Link from 'next/link';
import { RESEARCH_REPORTS } from '@/data/researchData';
import { FileText, ArrowRight, Download } from 'lucide-react';
import styles from './ResearchPreview.module.css';

export const ResearchPreview: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <div>
            <span className="badge-tag">RESEARCH & MARKET INTELLIGENCE</span>
            <h2 className={styles.sectionTitle}>Freight Market Index & Strategic Intelligence</h2>
            <p className={styles.sectionDesc}>
              Our in-house economists and supply chain analysts publish quarterly market outlooks, regulatory briefings, and decarbonization benchmarks for enterprise executives.
            </p>
          </div>

          <Link href="/research" className="btn btn-outline">
            <span>Explore All Research Reports</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Reports Grid */}
        <div className={styles.grid}>
          {RESEARCH_REPORTS.map((report) => (
            <div key={report.id} className={styles.reportCard}>
              <div>
                <div className={styles.category}>{report.category}</div>
                <h3 className={styles.title}>
                  <Link href={`/research#${report.slug}`}>{report.title}</Link>
                </h3>
                <p className={styles.summary}>{report.summary}</p>

                {/* Key Stats Preview */}
                <div className={styles.statGrid}>
                  {report.stats.slice(0, 2).map((st) => (
                    <div key={st.label} className={styles.statItem}>
                      <span className={styles.statVal}>{st.value}</span>
                      <span className={styles.statLbl}>{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span>{report.publishDate} • {report.readTime}</span>
                <Link
                  href={`/research#${report.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: 600,
                    color: 'var(--color-secondary)',
                  }}
                >
                  <span>Read Briefing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
