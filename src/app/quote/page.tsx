'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function DedicatedQuotePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    originZip: '',
    destinationZip: '',
    serviceType: 'full-truckload-ftl',
    cargoWeight: '42000',
    palletCount: '24',
    pickupDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    isTemp: false,
    isHazmat: false,
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [estimate, setEstimate] = useState<{
    min: number;
    max: number;
    miles: number;
    refId: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const weightNum = parseInt(formData.cargoWeight, 10) || 40000;
      const miles = Math.floor(Math.random() * 500) + 650;
      const ratePerMile = formData.serviceType === 'temperature-controlled-cold-chain' ? 3.20 : 2.50;
      const base = Math.round(miles * ratePerMile + (weightNum > 42000 ? 200 : 0));

      setEstimate({
        min: Math.round(base * 0.95),
        max: Math.round(base * 1.05),
        miles,
        refId: `VNDG-${Math.floor(100000 + Math.random() * 900000)}`,
      });
      setStep(3);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Bespoke Rate Calculator Header Banner */}
      <section className="dark-hero" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 60%, #451A03 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.75rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.18) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Enterprise Freight Rate Calculator</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag-accent">ENTERPRISE RATE CALCULATOR</span>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>3-Step Instant Contract Confirmation</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Request an Enterprise Freight Quote
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', marginTop: '0.85rem', lineHeight: 1.6 }}>
            Lock in guaranteed Class-8 asset capacity and contract rate estimates across North American freight corridors.
          </p>

          <div className="header-stat-ribbon">
            <div className="header-stat-pill">
              <Calculator size={14} color="#FBBF24" /> <span>Instant Mileage & Fuel Surcharge Calculation</span>
            </div>
            <div className="header-stat-pill">
              <CheckCircle2 size={14} color="#34D399" /> <span>Official DMB-100 Carrier Tariff Rates</span>
            </div>
            <div className="header-stat-pill">
              <ShieldCheck size={14} color="#38BDF8" /> <span>Guaranteed Dispatch Booking SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="container" style={{ maxWidth: '800px', marginTop: '4rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
          {/* Progress Indicator */}
          <div style={{ display: 'flex', backgroundColor: 'var(--color-bg-elevated)', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ flex: 1, padding: '1rem', textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: step === 1 ? 'var(--color-secondary)' : 'var(--color-text-muted)', borderBottom: step === 1 ? '3px solid var(--color-accent)' : 'none' }}>
              1. Origin & Freight Specs
            </div>
            <div style={{ flex: 1, padding: '1rem', textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: step === 2 ? 'var(--color-secondary)' : 'var(--color-text-muted)', borderBottom: step === 2 ? '3px solid var(--color-accent)' : 'none' }}>
              2. Shipper Contact Information
            </div>
            <div style={{ flex: 1, padding: '1rem', textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: step === 3 ? 'var(--color-secondary)' : 'var(--color-text-muted)', borderBottom: step === 3 ? '3px solid var(--color-accent)' : 'none' }}>
              3. Rate Estimate & Summary
            </div>
          </div>

          <div style={{ padding: '2.5rem' }}>
            {step === 1 && (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Origin Postal Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 60666 (Chicago, IL)"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.originZip}
                    onChange={(e) => setFormData({ ...formData, originZip: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Destination Postal Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 75201 (Dallas, TX)"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.destinationZip}
                    onChange={(e) => setFormData({ ...formData, destinationZip: e.target.value })}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Freight Service Line *</label>
                  <select
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="full-truckload-ftl">Full Truckload (FTL) 53’ Dry Van</option>
                    <option value="temperature-controlled-cold-chain">Temperature-Controlled Cold Chain (Reefer)</option>
                    <option value="heavy-haul-specialized">Heavy Haul & Over-Dimensional (RGN Lowboy)</option>
                    <option value="intermodal-rail-freight">Intermodal Rail Container</option>
                    <option value="expedited-critical-freight">Expedited Hot-Shot Emergency Transit</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Cargo Weight (Lbs) *</label>
                  <input
                    type="number"
                    required
                    placeholder="42000"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.cargoWeight}
                    onChange={(e) => setFormData({ ...formData, cargoWeight: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Pickup Date</label>
                  <input
                    type="date"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                    <span>Next: Shipper Contact Info</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Company / Shipper Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Logistics North America"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sjenkins@company.com"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Direct Dispatch Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                    Back to Freight Specs
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                    <span>Generate Rate Estimate</span>
                    <CheckCircle2 size={16} />
                  </button>
                </div>
              </form>
            )}

            {step === 3 && estimate && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ backgroundColor: 'var(--color-secondary-subtle)', border: '1px solid rgba(30, 58, 138, 0.2)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Estimated Contract Linehaul Rate Range
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-secondary)', margin: '0.75rem 0' }}>
                    ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                    Corridor Distance: <strong>{estimate.miles} Miles</strong> | Telematics Reference: <strong>{estimate.refId}</strong>
                  </p>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                  Your inquiry has been assigned to our Central Dispatch Desk. A dedicated Vanguardia Account Executive will email your formal rate confirmation within 15 minutes.
                </p>

                <Link href="/" className="btn btn-primary">
                  <span>Return to Homepage</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
