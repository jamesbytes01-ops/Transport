import React from 'react';
import Link from 'next/link';
import { FLEET_DATA } from '@/data/fleetData';
import { ShieldCheck, CheckCircle2, ArrowRight, Truck, Thermometer, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Fleet & Equipment Specifications Matrix',
  description: 'Technical equipment directory for Vanguardia’s 450+ Class-8 power units, 53’ reefer trailers, composite dry vans, and 55-ton RGN lowboys.',
};

export default function FleetPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <span className="badge-tag-accent">ASSET MATRIX & HARDWARE</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, marginTop: '0.75rem' }}>
            Fleet & Equipment Specifications
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', maxWidth: '760px', marginTop: '1rem', lineHeight: 1.6 }}>
            Comprehensive directory of Class-8 power units, trailing assets, telematics sensors, and payload specifications across Vanguardia’s fleet.
          </p>
        </div>
      </section>

      {/* Fleet Cards Grid */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {FLEET_DATA.map((asset) => (
            <div
              key={asset.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 2fr',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  minHeight: '320px',
                  backgroundImage: `url(${asset.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {asset.category}
                </span>
              </div>

              <div style={{ padding: '2rem 2rem 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {asset.equipmentType}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                    {asset.name}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', backgroundColor: 'var(--color-bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', margin: '1.25rem 0' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Max Payload Weight</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>{asset.maxPayloadLbs.toLocaleString()} Lbs</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Active Units</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>{asset.totalActiveUnits} Rigs</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Dimensions</span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>{asset.dimensions.split('|')[0]}</strong>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Satellite Telematics & Safety Systems
                    </div>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {asset.telematics.map((t) => (
                        <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Ideal for: <strong>{asset.idealFor.join(' • ')}</strong>
                  </div>
                  <Link href="/contact#quote" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                    <span>Check Equipment Availability</span>
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
