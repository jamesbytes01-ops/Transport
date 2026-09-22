import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Thermometer, ShieldAlert, Layers, Warehouse, Zap } from 'lucide-react';

export const metadata = {
  title: 'Transportation & Logistics Services',
  description: 'Explore Vanguardia’s freight services: FTL Dry Van, Refrigerated Cold Chain, Heavy Haul RGN, Intermodal Rail, Contract Warehousing, and Expedited Emergency Transport.',
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
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">ENTERPRISE SERVICE PORTFOLIO</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Transportation & Supply Chain Solutions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Asset-backed freight capabilities designed for high-volume enterprise shippers across the United States, Canada, and Mexico.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
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
                  height: '220px',
                  backgroundImage: `url(${service.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    color: '#FFFFFF',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  {getIcon(service.iconName)}
                  <span>{service.title}</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {service.shortDesc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.keyFeatures.slice(0, 3).map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    SLA: {service.slaGuarantee.split('.')[0]}
                  </span>
                  <Link href={`/services/${service.slug}`} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    <span>Detailed Specs</span>
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
