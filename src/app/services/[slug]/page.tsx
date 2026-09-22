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
      {/* Service Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <Link href="/services" style={{ color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
            ← Back to All Freight Services
          </Link>
          <span className="badge-tag-accent" style={{ display: 'block', width: 'fit-content' }}>
            TECHNICAL SERVICE SPECIFICATION
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            {service.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Detailed Copy & Specs */}
          <div>
            <div
              style={{
                height: '380px',
                borderRadius: 'var(--radius-lg)',
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            />

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Operational Overview & Network Design
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {service.fullDesc}
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Core Operational Features
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {service.keyFeatures.map((feat) => (
                <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>
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
                      <td style={{ padding: '0.85rem 0', fontWeight: 700, color: 'var(--color-primary)' }}>
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
              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                CONTRACT SLA COMMITMENT
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Service Level Guarantee
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.slaGuarantee}
              </p>

              <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  OPERATIONAL METRICS
                </div>
                {service.metrics.map((m) => (
                  <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px dashed var(--color-border)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{m.label}</span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{m.value}</strong>
                  </div>
                ))}
              </div>

              <Link href="/contact#quote" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                <span>Request Rate for This Service</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
