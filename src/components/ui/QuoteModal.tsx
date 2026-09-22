'use client';

import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';
import styles from './QuoteModal.module.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    originZip: '60666',
    destinationZip: '75201',
    serviceType: 'full-truckload-ftl',
    cargoWeight: '42000',
    palletCount: '24',
    isTemperatureControlled: false,
    temperatureReq: '-5°F',
    isHazardous: false,
    isLiftgateRequired: false,
    pickupDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [estimateResult, setEstimateResult] = useState<{
    minRate: number;
    maxRate: number;
    distanceMiles: number;
    transitDays: string;
    ticketId: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [value]: value, [name]: value }));
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Calculate realistic mock rate based on weight and arbitrary distance calculation
      const weightNum = parseInt(formData.cargoWeight, 10) || 40000;
      const baseDistance = Math.floor(Math.random() * 400) + 750; // e.g. 920 miles
      const basePerMile = formData.serviceType === 'temperature-controlled-cold-chain' ? 3.15 : 2.45;
      const estTotal = Math.round(baseDistance * basePerMile + (weightNum > 42000 ? 250 : 0));
      
      setEstimateResult({
        minRate: Math.round(estTotal * 0.94),
        maxRate: Math.round(estTotal * 1.06),
        distanceMiles: baseDistance,
        transitDays: '1 - 2 Business Days',
        ticketId: `VNDG-${Math.floor(100000 + Math.random() * 900000)}`,
      });
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setEstimateResult(null);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <Calculator size={22} style={{ color: 'var(--color-accent)' }} />
            <span>Instant Freight Rate Estimator & Quote Request</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        <div className={styles.stepBar}>
          <div className={`${styles.stepTab} ${step === 1 ? styles.stepTabActive : ''}`}>
            1. Freight Specs
          </div>
          <div className={`${styles.stepTab} ${step === 2 ? styles.stepTabActive : ''}`}>
            2. Contact & Shipper Info
          </div>
          <div className={`${styles.stepTab} ${step === 3 ? styles.stepTabActive : ''}`}>
            3. Estimate & Confirmation
          </div>
        </div>

        {/* Modal Content */}
        <div className={styles.modalBody}>
          {step === 1 && (
            <form onSubmit={handleNextStep}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Origin Zip / Postal Code *</label>
                  <input
                    type="text"
                    name="originZip"
                    required
                    placeholder="e.g. 60666 (Chicago, IL)"
                    className={styles.input}
                    value={formData.originZip}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Destination Zip / Postal Code *</label>
                  <input
                    type="text"
                    name="destinationZip"
                    required
                    placeholder="e.g. 75201 (Dallas, TX)"
                    className={styles.input}
                    value={formData.destinationZip}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Required Service Line *</label>
                  <select
                    name="serviceType"
                    className={styles.select}
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="full-truckload-ftl">Full Truckload (FTL) 53’ Dry Van</option>
                    <option value="temperature-controlled-cold-chain">Temperature-Controlled Cold Chain (Reefer)</option>
                    <option value="heavy-haul-specialized">Heavy Haul & Over-Dimensional (RGN / Lowboy)</option>
                    <option value="intermodal-rail-freight">Intermodal Rail Container</option>
                    <option value="expedited-critical-freight">Expedited / Hot-Shot Emergency Transit</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Total Cargo Weight (Lbs) *</label>
                  <input
                    type="number"
                    name="cargoWeight"
                    required
                    placeholder="e.g. 42000"
                    className={styles.input}
                    value={formData.cargoWeight}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Pallet Count (48"x40")</label>
                  <input
                    type="number"
                    name="palletCount"
                    placeholder="e.g. 24"
                    className={styles.input}
                    value={formData.palletCount}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Target Pickup Date</label>
                  <input
                    type="date"
                    name="pickupDate"
                    className={styles.input}
                    value={formData.pickupDate}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="isTemp"
                      name="isTemperatureControlled"
                      className={styles.checkbox}
                      checked={formData.isTemperatureControlled}
                      onChange={handleChange}
                    />
                    <label htmlFor="isTemp">Requires Temperature Control (-20°F to 70°F)</label>
                  </div>
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="isHaz"
                      name="isHazardous"
                      className={styles.checkbox}
                      checked={formData.isHazardous}
                      onChange={handleChange}
                    />
                    <label htmlFor="isHaz">Hazardous Materials (Hazmat)</label>
                  </div>
                </div>
              </div>

              <div className={styles.footerActions}>
                <button type="button" onClick={onClose} className="btn btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <span>Continue to Shipper Info</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep}>
              <div className={styles.formGrid}>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Company / Business Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="e.g. Apex Industrial Supply Inc."
                    className={styles.input}
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className={styles.input}
                    value={formData.contactName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Corporate Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sjenkins@apexindustrial.com"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Direct Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 019-2834"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Special Delivery Instructions / Accessorials</label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="e.g. Liftgate required at delivery dock, strict 2:00 PM appointment slot."
                    className={styles.textarea}
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.footerActions}>
                <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                  Back to Specs
                </button>
                <button type="submit" className="btn btn-primary">
                  <span>Calculate Freight Rate & Lock Ticket</span>
                  <CheckCircle2 size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && estimateResult && (
            <div>
              <div className={styles.estimateCard}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Estimated Contract Linehaul Cost
                </div>
                <div className={styles.estimateRange}>
                  ${estimateResult.minRate.toLocaleString()} – ${estimateResult.maxRate.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  Distance: <strong>{estimateResult.distanceMiles} Miles</strong> | Estimated Transit: <strong>{estimateResult.transitDays}</strong>
                </div>

                <div className={styles.metricPills}>
                  <span className={styles.metricPill}>Fuel Surcharge Included</span>
                  <span className={styles.metricPill}>100% GPS Telematics</span>
                  <span className={styles.metricPill}>Reference ID: {estimateResult.ticketId}</span>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--color-bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Dispatch Reference Created:</strong> A dedicated Vanguardia Freight Specialist will contact <strong>{formData.email || 'your email'}</strong> within 15 minutes to confirm equipment allocation and dispatch details.
                </div>
              </div>

              <div className={styles.footerActions}>
                <button type="button" onClick={handleReset} className="btn btn-outline">
                  <RotateCcw size={16} />
                  <span>Calculate Another Freight Lane</span>
                </button>
                <button type="button" onClick={onClose} className="btn btn-secondary">
                  <span>Close & Return to Site</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
