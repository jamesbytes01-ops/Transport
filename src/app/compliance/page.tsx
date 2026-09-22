import React from 'react';
import { ShieldCheck, Award, FileCheck, Lock, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Safety & DOT Compliance Standards',
  description: 'USDOT #3849120 safety credentials, FMCSA audit records, ISO 9001 certifications, and green fleet environmental benchmarks.',
};

export default function CompliancePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Safety & Compliance Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #064E3B 0%, #0F172A 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Safety & Compliance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">REGULATORY & SAFETY AUDIT</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>FMCSA Top Tier Satisfactory Rating</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
            Safety Records & DOT Compliance
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '0.75rem' }}>
            USDOT #3849120 | MC-892104 | FMCSA Satisfactory Safety Credentials for GetDigiFort (DMB Transit Inc.).
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#34D399" /> <span>FMCSA Satisfactory Safety Rating</span>
            </div>
            <div className="header-stat-pill">
              <Award size={14} color="#FBBF24" /> <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="header-stat-pill">
              <FileCheck size={14} color="#38BDF8" /> <span>EPA SmartWay Transport Partner</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container" style={{ maxWidth: '840px', marginTop: '3rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FMCSA Safety Audit & Telematics Monitoring</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Vanguardia operates under full compliance with the Federal Motor Carrier Safety Administration (FMCSA). 100% of our Class-8 highway tractors are equipped with certified Electronic Logging Devices (ELD) and forward-facing AI collision avoidance dashcams.
          </p>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Active Certifications & Credentials</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {[
              'ISO 9001:2015 Quality Management System Certification',
              'EPA SmartWay Transport Partnership - Top Tier Score',
              'C-TPAT Tier 2 Validated Cross-Border Carrier (US / Canada / Mexico)',
              'FDA Title 21 CFR & GDP Compliant Refrigerated Cold Chain Network',
              'Hazmat Authorized Safety License for Chemical Transportation',
            ].map((c) => (
              <li key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Driver Qualification & Maintenance Standards</h2>
          <p>
            Our drivers undergo rigorous pre-employment screening, continuous safety training, and mandatory DOT drug & alcohol testing. Fleet trailing assets receive comprehensive preventive maintenance every 10,000 miles.
          </p>
        </div>
      </article>
    </div>
  );
}
