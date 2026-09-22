'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FLEET_DATA } from '@/data/fleetData';
import { ShieldCheck, CheckCircle2, ArrowRight, Truck, Thermometer, ShieldAlert, Calculator, AlertTriangle, Check } from 'lucide-react';

export default function FleetPage() {
  const [calcEquipment, setCalcEquipment] = useState('fleet-dryvan-53');
  const [calcWeight, setCalcWeight] = useState('42000');
  const [calcPallets, setCalcPallets] = useState('24');

  const selectedAsset = FLEET_DATA.find((f) => f.id === calcEquipment) || FLEET_DATA[0];
  const weightNum = parseInt(calcWeight, 10) || 0;
  const isOverweight = weightNum > selectedAsset.maxPayloadLbs;

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Hardware & Fleet Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #0B132B 0%, #1C2541 60%, #070C19 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(30, 58, 138, 0.25) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Fleet & Technical Hardware</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">ASSET DIRECTORY & SATELLITE TELEMATICS</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Truck size={14} color="#D97706" /> 450+ Class-8 Power Units
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Fleet & Equipment Technical Directory
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Technical specifications for Class-8 power units, trailing assets, satellite telematics sensors, and payload constraints across GetDigiFort’s asset network.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Truck size={14} color="#38BDF8" /> <span>450+ Sleepers & Day Cabs</span>
            </div>
            <div className="header-stat-pill">
              <Thermometer size={14} color="#34D399" /> <span>Thermo King S-700 (-20°F to +70°F)</span>
            </div>
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#FBBF24" /> <span>100% Solar Satellite GPS Tracked</span>
            </div>
            <div className="header-stat-pill">
              <CheckCircle2 size={14} color="#60A5FA" /> <span>USDOT #3849120 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Trailer Capacity & Payload Calculator */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            <Calculator size={16} />
            <span>INTERACTIVE PAYLOAD & CLEARANCE CALCULATOR</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Verify Freight Compatibility & Equipment Payload Limits
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.2fr', gap: '1.25rem', alignItems: 'center' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>Select Trailer / Asset Type</label>
              <select
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF', fontSize: '0.875rem' }}
                value={calcEquipment}
                onChange={(e) => setCalcEquipment(e.target.value)}
              >
                {FLEET_DATA.map((f) => (
                  <option key={f.id} value={f.id}>{f.name.split(' ')[0]} - {f.equipmentType}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>Cargo Weight (Lbs)</label>
              <input
                type="number"
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.875rem' }}
                value={calcWeight}
                onChange={(e) => setCalcWeight(e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>Pallet Count (48"x40")</label>
              <input
                type="number"
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.875rem' }}
                value={calcPallets}
                onChange={(e) => setCalcPallets(e.target.value)}
              />
            </div>

            {/* Live Verification Box */}
            <div style={{ backgroundColor: isOverweight ? 'rgba(220, 38, 38, 0.08)' : 'var(--color-secondary-subtle)', border: `1px solid ${isOverweight ? 'rgba(220, 38, 38, 0.3)' : 'rgba(30, 58, 138, 0.2)'}`, borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: isOverweight ? 'var(--color-error)' : 'var(--color-secondary)' }}>
                {isOverweight ? <AlertTriangle size={16} /> : <Check size={16} />}
                <span>{isOverweight ? 'EXCEEDS PAYLOAD LIMIT' : 'COMPATIBLE PAYLOAD'}</span>
              </div>
              <div style={{ fontSize: '0.78125rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                Max Payload: <strong>{selectedAsset.maxPayloadLbs.toLocaleString()} Lbs</strong> ({selectedAsset.dimensions.split('|')[0]})
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Cards Directory */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
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
                  minHeight: '300px',
                  backgroundImage: `url(${asset.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {asset.category}
                </span>
              </div>

              <div style={{ padding: '1.75rem 1.75rem 1.75rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.15rem' }}>
                <div>
                  <div style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {asset.equipmentType}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                    {asset.name}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', backgroundColor: 'var(--color-bg-elevated)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', margin: '1rem 0' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Max Payload</span>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{asset.maxPayloadLbs.toLocaleString()} Lbs</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Active Assets</span>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{asset.totalActiveUnits} Rigs</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Dimensions</span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>{asset.dimensions.split('|')[0]}</strong>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Integrated Telematics & Safety Systems
                    </div>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      {asset.telematics.map((t) => (
                        <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Ideal for: <strong>{asset.idealFor.join(' • ')}</strong>
                  </div>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}>
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
