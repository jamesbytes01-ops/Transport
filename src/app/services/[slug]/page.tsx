import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { ShieldCheck, CheckCircle2, ArrowRight, Truck, FileText } from 'lucide-react';

interface ServiceDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: ServiceDetailProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Freight Services`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Service Detail Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0B132B 0%, #1E3A8A 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(30, 58, 138, 0.25) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>{service.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">TECHNICAL SERVICE SPECIFICATION</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>{service.slaGuarantee}</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            {service.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            {service.shortDesc}
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Truck size={14} color="#38BDF8" /> <span>Asset-Backed Carrier Operations</span>
            </div>
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#34D399" /> <span>{service.slaGuarantee}</span>
            </div>
            <div className="header-stat-pill">
              <CheckCircle2 size={14} color="#FBBF24" /> <span>USDOT #3849120 Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Detailed Copy & Specs */}
          <div>
            <div
              style={{
                height: '360px',
                borderRadius: 'var(--radius-lg)',
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '2.25rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            />

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Operational Overview & Network Design
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {service.fullDesc}
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Core Operational Features
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {service.keyFeatures.map((feat) => (
                <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Technical Equipment & Operations Matrix
            </h3>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
                <tbody>
                  {Object.entries(service.specifications).map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '0.85rem 0', fontWeight: 600, color: 'var(--color-text-muted)', width: '40%' }}>
                        {k}
                      </td>
                      <td style={{ padding: '0.85rem 0', fontWeight: 600, color: 'var(--color-primary)' }}>
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar CTA & SLA Card */}
          <div>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-md)', position: 'sticky', top: '100px' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                CONTRACT SLA COMMITMENT
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Service Level Guarantee
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.slaGuarantee}
              </p>

              <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  OPERATIONAL METRICS
                </div>
                {service.metrics.map((m) => (
                  <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px dashed var(--color-border)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{m.label}</span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{m.value}</strong>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                <span>Inquire Freight Service</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
