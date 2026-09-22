'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RESEARCH_REPORTS } from '@/data/researchData';
import { FileText, Download, CheckCircle2, ArrowRight, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';

export default function ResearchPage() {
  const [activeMetricTab, setActiveMetricTab] = useState<'linehaul' | 'reefer' | 'fuel' | 'class8'>('linehaul');

  const indexMetrics = {
    linehaul: {
      title: 'North American Contract Linehaul Rate Index',
      val: '142.8 Index Points',
      change: '+3.8% YoY Adjustment',
      desc: 'Measures contract linehaul rate movements across major Midwest-to-Sunbelt freight corridors. Data gathered from 38 transcontinental hubs.',
      corridorData: [
        { lane: 'Chicago, IL → Dallas, TX', spotRate: '$2.48/Mi', contractRate: '$2.62/Mi', trend: '+2.1%' },
        { lane: 'Atlanta, GA → Columbus, OH', spotRate: '$2.35/Mi', contractRate: '$2.51/Mi', trend: '+4.0%' },
        { lane: 'Los Angeles, CA → Chicago, IL', spotRate: '$2.85/Mi', contractRate: '$2.98/Mi', trend: '+5.2%' },
        { lane: 'Harrisburg, PA → Atlanta, GA', spotRate: '$2.42/Mi', contractRate: '$2.55/Mi', trend: '+1.8%' },
      ],
    },
    reefer: {
      title: 'Refrigerated Cold Chain Load-to-Truck Ratio',
      val: '9.4 Load-to-Truck Ratio',
      change: 'Surge Capacity Tightness',
      desc: 'Capacity tightness tracker for GDP pharmaceutical and food produce transport. Ratios above 7.0 indicate constrained regional reefer availability.',
      corridorData: [
        { lane: 'Central Valley, CA → Midwest', spotRate: '$3.85/Mi', contractRate: '$3.60/Mi', trend: '+8.4%' },
        { lane: 'Florida Agricultural → Northeast', spotRate: '$3.40/Mi', contractRate: '$3.25/Mi', trend: '+6.1%' },
        { lane: 'Texas Sunbelt → Chicago Hub', spotRate: '$3.15/Mi', contractRate: '$3.10/Mi', trend: '+3.9%' },
      ],
    },
    fuel: {
      title: 'National Diesel Fuel Surcharge Index',
      val: '$0.52 / Mile Avg',
      change: '-4.2% MoM Variance',
      desc: 'Standard carrier fuel surcharge calculation based on U.S. EIA On-Highway Diesel Price index. Updated weekly for Fortune 500 contract accounts.',
      corridorData: [
        { lane: 'U.S. Midwest Region', spotRate: '$3.78/Gal', contractRate: '$0.51/Mi Surcharge', trend: '-2.0%' },
        { lane: 'U.S. Gulf Coast Region', spotRate: '$3.62/Gal', contractRate: '$0.48/Mi Surcharge', trend: '-3.1%' },
        { lane: 'U.S. West Coast Region', spotRate: '$4.45/Gal', contractRate: '$0.64/Mi Surcharge', trend: '-1.4%' },
      ],
    },
    class8: {
      title: 'Class-8 Tractor Order Lead Times & Orders',
      val: '19,400 Monthly Units',
      change: '4.5 Month Equipment Lead',
      desc: 'Tracks OEM Class-8 order backlogs and build rates for heavy sleeper tractors across Kenworth, Peterbilt, Volvo, and Freightliner plants.',
      corridorData: [
        { lane: 'Kenworth W990 Sleeper Cab', spotRate: '4.2 Mos Lead', contractRate: 'Cummins X15 500HP', trend: 'Stable' },
        { lane: 'Volvo VNL 860 Executive', spotRate: '4.5 Mos Lead', contractRate: 'Volvo D13 Turbo Compound', trend: 'Stable' },
        { lane: 'Utility Thermo King S-700', spotRate: '3.8 Mos Lead', contractRate: 'Multi-Temp Microprocessor', trend: 'Normalized' },
      ],
    },
  };

  const currentMetric = indexMetrics[activeMetricTab];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Research & Intelligence Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 55%, #090D16 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Research & Economics Intelligence</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">FREIGHT ECONOMICS & MARKET INTELLIGENCE</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>Q3 2026 Executive Reports</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Research & Supply Chain Insights
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Quarterly market indices, regulatory compliance benchmarks, and economic research published by GetDigiFort Economics & Telematics Lab.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <TrendingUp size={14} color="#818CF8" /> <span>North American Linehaul Rate Index</span>
            </div>
            <div className="header-stat-pill">
              <BarChart3 size={14} color="#34D399" /> <span>Cold Chain Load-to-Truck Ratios</span>
            </div>
            <div className="header-stat-pill">
              <FileText size={14} color="#FBBF24" /> <span>Executive PDF Research Briefings</span>
            </div>
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#38BDF8" /> <span>38 Hub Sensor Data Feeds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Freight Rate Market Index Explorer */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            <BarChart3 size={16} />
            <span>INTERACTIVE FREIGHT MARKET INDEX EXPLORER</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Live Macro Freight Benchmarks & Lane Rates
          </h2>

          {/* Metric Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveMetricTab('linehaul')}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeMetricTab === 'linehaul' ? 'var(--color-secondary)' : 'var(--color-border)',
                backgroundColor: activeMetricTab === 'linehaul' ? 'var(--color-secondary)' : '#FFFFFF',
                color: activeMetricTab === 'linehaul' ? '#FFFFFF' : 'var(--color-text-main)',
              }}
            >
              Contract Linehaul Index
            </button>

            <button
              onClick={() => setActiveMetricTab('reefer')}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeMetricTab === 'reefer' ? 'var(--color-secondary)' : 'var(--color-border)',
                backgroundColor: activeMetricTab === 'reefer' ? 'var(--color-secondary)' : '#FFFFFF',
                color: activeMetricTab === 'reefer' ? '#FFFFFF' : 'var(--color-text-main)',
              }}
            >
              Reefer Load-to-Truck Ratio
            </button>

            <button
              onClick={() => setActiveMetricTab('fuel')}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeMetricTab === 'fuel' ? 'var(--color-secondary)' : 'var(--color-border)',
                backgroundColor: activeMetricTab === 'fuel' ? 'var(--color-secondary)' : '#FFFFFF',
                color: activeMetricTab === 'fuel' ? '#FFFFFF' : 'var(--color-text-main)',
              }}
            >
              Diesel Fuel Surcharge
            </button>

            <button
              onClick={() => setActiveMetricTab('class8')}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeMetricTab === 'class8' ? 'var(--color-secondary)' : 'var(--color-border)',
                backgroundColor: activeMetricTab === 'class8' ? 'var(--color-secondary)' : '#FFFFFF',
                color: activeMetricTab === 'class8' ? '#FFFFFF' : 'var(--color-text-main)',
              }}
            >
              Class-8 Fleet Backlog
            </button>
          </div>

          {/* Active Metric Spotlight Data */}
          <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {currentMetric.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                  {currentMetric.desc}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {currentMetric.val}
                </div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-success)' }}>
                  {currentMetric.change}
                </span>
              </div>
            </div>

            {/* Corridor Data Table */}
            <div style={{ marginTop: '1.25rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                    <th style={{ padding: '0.5rem 0' }}>Corridor / Asset Class</th>
                    <th style={{ padding: '0.5rem 0' }}>Spot Rate / Lead</th>
                    <th style={{ padding: '0.5rem 0' }}>Contract Benchmark</th>
                    <th style={{ padding: '0.5rem 0' }}>Quarter Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMetric.corridorData.map((row) => (
                    <tr key={row.lane} style={{ borderBottom: '1px dashed var(--color-border)' }}>
                      <td style={{ padding: '0.65rem 0', fontWeight: 600, color: 'var(--color-primary)' }}>{row.lane}</td>
                      <td style={{ padding: '0.65rem 0', color: 'var(--color-text-secondary)' }}>{row.spotRate}</td>
                      <td style={{ padding: '0.65rem 0', color: 'var(--color-text-secondary)' }}>{row.contractRate}</td>
                      <td style={{ padding: '0.65rem 0', fontWeight: 600, color: 'var(--color-secondary)' }}>{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {RESEARCH_REPORTS.map((report) => (
            <div
              key={report.id}
              id={report.slug}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                padding: '2.25rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
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
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                  {report.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {report.subtitle}
                </p>
              </div>

              {/* Key Stats Preview */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', backgroundColor: 'var(--color-bg-elevated)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
                {report.stats.map((st) => (
                  <div key={st.label}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{st.label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
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
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  Key Executive Findings:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {report.keyFindings.map((kf) => (
                    <li key={kf} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-secondary-light)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author & PDF Download */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.15rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={report.author.avatar} alt={report.author.name} style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--color-primary)', display: 'block' }}>{report.author.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{report.author.role}</span>
                  </div>
                </div>

                <a href={report.downloadablePdf} download className="btn btn-secondary" style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem' }}>
                  <Download size={15} />
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
