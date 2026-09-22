import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA, SERVICE_COMPARISON_MATRIX, DISPATCH_WORKFLOW_STEPS } from '@/data/servicesData';
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Thermometer, ShieldAlert, Layers, Warehouse, Zap, Check, ArrowDown } from 'lucide-react';

export const metadata = {
  title: 'Freight & Supply Chain Services Portfolio',
  description: 'Technical equipment specs, SLA guarantees, and comparison matrix for FTL, Refrigerated Cold Chain, Heavy Haul RGN, Intermodal, Warehousing, and Expedited logistics.',
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck size={24} />;
      case 'Thermometer': return <Thermometer size={24} />;
      case 'ShieldAlert': return <ShieldAlert size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Warehouse': return <Warehouse size={24} />;
      case 'Zap': return <Zap size={24} />;
      default: return <Truck size={24} />;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Services Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 65%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.18) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Services & Logistics Portfolio</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">ENTERPRISE CARRIER CAPABILITIES</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>6 Core Asset-Backed Transport Modes</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Transportation & Supply Chain Solutions
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Asset-backed surface transportation capabilities, GDP cold chain, and high-volume FTL logistics engineered for Fortune 500 enterprise shippers across North America.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Truck size={14} color="#38BDF8" /> <span>53' Dry Van FTL</span>
            </div>
            <div className="header-stat-pill">
              <Thermometer size={14} color="#34D399" /> <span>Temp-Controlled Cold Chain (-20°F)</span>
            </div>
            <div className="header-stat-pill">
              <ShieldAlert size={14} color="#FBBF24" /> <span>55-Ton Heavy Haul RGN</span>
            </div>
            <div className="header-stat-pill">
              <Warehouse size={14} color="#C084FC" /> <span>3.2M Sq. Ft. Warehousing & Cross-Dock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Cards Grid */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.25rem' }}>
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  height: '210px',
                  backgroundImage: `url(${service.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.88)',
                    color: '#FFFFFF',
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                  }}
                >
                  {getIcon(service.iconName)}
                  <span>{service.title}</span>
                </div>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.15rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {service.shortDesc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.keyFeatures.slice(0, 3).map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    SLA: {service.slaGuarantee.split('.')[0]}
                  </span>
                  <Link href={`/services/${service.slug}`} className="btn btn-outline" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
                    <span>Technical Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Informative Side-by-Side Service Comparison Matrix */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          SERVICE BENCHMARK COMPARISON
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          Side-by-Side Carrier SLA & Equipment Matrix
        </h2>

        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflowX: 'auto', boxShadow: 'var(--shadow-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', minWidth: '900px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', textAlign: 'left' }}>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Service Line</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Max Payload</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Lead Time</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Telematics Ping</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Temp Precision</th>
                <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>SLA Score</th>
              </tr>
            </thead>
            <tbody>
              {SERVICE_COMPARISON_MATRIX.map((item, index) => (
                <tr key={item.name} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: index % 2 === 0 ? '#FFFFFF' : 'var(--color-bg-main)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    {item.name}
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>{item.bestFor}</span>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{item.maxPayload}</td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--color-text-secondary)' }}>{item.leadTime}</td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--color-text-secondary)' }}>{item.telematicsFrequency}</td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--color-text-secondary)' }}>{item.tempRange}</td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--color-success)' }}>{item.slaScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Informative Step-by-Step Dispatch Workflow */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          DISPATCH ARCHITECTURE
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '2rem' }}>
          6-Step End-to-End Carrier Execution Protocol
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {DISPATCH_WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNum}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                {step.stepNum}
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
