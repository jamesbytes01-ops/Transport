import { ResearchReport } from '@/types';

export const RESEARCH_REPORTS: ResearchReport[] = [
  {
    id: 'report-q3-2026-freight-index',
    title: 'North American Freight & Capacity Outlook: Q3/Q4 2026 Briefing',
    slug: 'north-american-freight-outlook-q3-2026',
    subtitle: 'An executive analysis of spot vs. contract rate dynamics, Class-8 order backlogs, diesel fuel price volatility, and regional corridor capacity shifts.',
    publishDate: 'September 15, 2026',
    readTime: '12 min read',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Chief Economist & VP of Supply Chain Intelligence',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Market Intelligence',
    summary: 'The Q3 2026 Freight Intelligence Report analyzes key macro drivers across US Midwest and Southeast freight lanes. Contract rates show structural stabilization, while cold chain reefer capacity tightens ahead of agricultural harvest cycles.',
    downloadablePdf: '/docs/Vanguardia_Freight_Outlook_Q3_2026.pdf',
    keyFindings: [
      'Contract linehaul rates expanded by 3.8% YOY across Midwest-to-Southeast corridors, signaling capacity equilibrium.',
      'Reefer capacity utilization reached 94.2% due to early agricultural harvest peaks in California and the Sunbelt.',
      'Class-8 truck orders normalized to 19,400 monthly units, reducing equipment lead times to 4.5 months.',
      'Intermodal conversion rates increased by 14% as shippers seek to mitigate fuel surcharge exposure.',
    ],
    stats: [
      { label: 'Spot Rate Variance', value: '+2.4%', change: 'MoM Stabilization' },
      { label: 'Reefer Utilization', value: '94.2%', change: '+3.1% YoY' },
      { label: 'Avg Fuel Surcharge', value: '$0.52/Mi', change: '-4.2% MoM' },
    ],
    contentMarkdown: `
# Executive Overview: Q3 2026 Freight Market Intelligence

The North American surface transportation landscape in Q3 2026 reflects a transition from capacity fragmentation toward structured equilibrium. Enterprise shippers face a dual priority: securing guaranteed carrier capacity for critical corridors while optimizing overall cost-per-mile metrics amid shifting energy costs.
    `,
  },
  {
    id: 'report-esg-green-fleet-2026',
    title: 'Decarbonizing Heavy Transport: Fleet Electrification & Alternative Fuels',
    slug: 'decarbonizing-heavy-transport-fleet-electrification-2026',
    subtitle: 'Evaluating the real-world Total Cost of Ownership (TCO) for Renewable Natural Gas (RNG), Hydrogen Fuel Cell, and Battery Electric Class-8 tractors.',
    publishDate: 'August 28, 2026',
    readTime: '15 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Fleet Operations & Sustainability',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Sustainability',
    summary: 'A quantitative study on heavy-duty fleet decarbonization. Vanguardia benchmarks operational range, charging infrastructure latency, and RNG carbon intensity across 1.2 million test miles.',
    downloadablePdf: '/docs/Vanguardia_Decarbonizing_Heavy_Transport_2026.pdf',
    keyFindings: [
      'Renewable Natural Gas (RNG) achieved up to 85% lifecycle carbon reduction with zero operational range degradation vs diesel.',
      'Battery Electric Class-8 trucks performed exceptionally in regional drayage under 180 miles, but face charging downtime on long-haul routes.',
      'Predictive telematics and aerodynamic side skirts reduced overall fleet fuel burn by 4.2 gallons per 1,000 miles.',
    ],
    stats: [
      { label: 'RNG Carbon Intensity', value: '-85%', change: 'vs Standard Diesel' },
      { label: 'Test Mileage Evaluated', value: '1.2M Mi', change: 'Real-World Fleet Data' },
      { label: 'SmartWay Score', value: 'Top 1%', change: 'EPA Verified' },
    ],
    contentMarkdown: `
# Decarbonizing Heavy Transport: 2026 Operational Findings
    `,
  },
  {
    id: 'report-cold-chain-fsma-gdp',
    title: 'GDP & FSMA Compliance: Cold Chain Integrity in High-Risk Supply Chains',
    slug: 'gdp-fsma-compliance-cold-chain-integrity',
    subtitle: 'Standard Operating Procedures for zero-excursion biopharmaceutical and food transport under modern FDA regulations.',
    publishDate: 'July 14, 2026',
    readTime: '10 min read',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Chief Economist & VP of Supply Chain Intelligence',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Regulatory Policy',
    summary: 'A comprehensive operational manual covering satellite temperature telemetry, automated pre-cooling protocols, trailer sanitization verification, and chain-of-custody documentation.',
    downloadablePdf: '/docs/Vanguardia_Cold_Chain_Compliance_Guide.pdf',
    keyFindings: [
      'Automated micro-processor pre-cooling reduced temperature spike incidents during loading by 99.4%.',
      'Dual-sensor redundancy (air return vs rear door probes) provided audit-proof compliance records required by FDA Title 21 CFR.',
      'Sanitization digital logging eliminated paper wash-out log vulnerabilities across multi-stop reefer networks.',
    ],
    stats: [
      { label: 'Compliance Audit Rate', value: '100%', change: 'FDA Compliant' },
      { label: 'Data Telemetry Frequency', value: 'Every 60s', change: 'Satellite Linked' },
      { label: 'Temp Accuracy', value: '±0.5°F', change: 'Microprocessor Precision' },
    ],
    contentMarkdown: `
# GDP & FSMA Cold Chain Operational Manual
    `,
  },
  {
    id: 'report-nearshoring-border-velocity-2026',
    title: 'US-Mexico Nearshoring Velocity & Border Gate Dwell Benchmarks 2026',
    slug: 'us-mexico-nearshoring-border-velocity-2026',
    subtitle: 'Quantifying cross-border transit velocity across Laredo, El Paso, and Otay Mesa ports of entry for automotive tier-1 supply chains.',
    publishDate: 'June 08, 2026',
    readTime: '14 min read',
    author: {
      name: 'Sarah Jenkins',
      role: 'Director of Enterprise Freight Accounts',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Supply Chain Index',
    summary: 'Analysis of cross-border freight velocity and customs dwell times. Vanguardia evaluates C-TPAT Fast Lanes, trans-loading hub efficiency, and trailer drop buffer capacity.',
    downloadablePdf: '/docs/Vanguardia_Nearshoring_Report_2026.pdf',
    keyFindings: [
      'C-TPAT Tier 2 carriers experienced an average border inspection time of 18 minutes vs. 3.8 hours for unvalidated carriers.',
      'Drop-and-hook trailer swaps at Laredo hubs reduced driver transit delays by 68%.',
    ],
    stats: [
      { label: 'Border Clearance Time', value: '18 Mins', change: 'C-TPAT Tier 2' },
      { label: 'Cross-Border Volume', value: '+18.4%', change: 'YoY Growth' },
      { label: 'Laredo Drop Trailers', value: '140 Units', change: 'Dedicated Yard' },
    ],
    contentMarkdown: `
# US-Mexico Nearshoring Velocity Report
    `,
  },
  {
    id: 'report-port-drayage-intermodal-conversion',
    title: 'Seaport Drayage Bottlenecks & Intermodal Rail Conversion Guide',
    slug: 'seaport-drayage-intermodal-conversion-guide',
    subtitle: 'Strategic frameworks for transitioning seaport container imports directly to Class-1 rail ramps to bypass terminal chassis shortages.',
    publishDate: 'May 19, 2026',
    readTime: '11 min read',
    author: {
      name: 'Michael Sterling',
      role: 'Head of Telematics & Logistics Tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Market Intelligence',
    summary: 'A study on port container demurrage risk mitigation. Benchmarks direct ship-to-rail transfers at LA/Long Beach and NY/NJ seaports.',
    downloadablePdf: '/docs/Vanguardia_Port_Drayage_Intermodal_Guide.pdf',
    keyFindings: [
      'Direct rail ramping eliminated container demurrage fees for 98.6% of international ocean shipments.',
      'Intermodal 53-foot container conversions generated an average 22% linehaul cost savings on routes over 800 miles.',
    ],
    stats: [
      { label: 'Demurrage Avoidance', value: '98.6%', change: 'Zero Penalty' },
      { label: 'Linehaul Savings', value: '22%', change: 'vs Highway FTL' },
      { label: 'Class-1 Rail Ramps', value: '42 Hubs', change: 'Direct Ramping' },
    ],
    contentMarkdown: `
# Seaport Drayage & Intermodal Guide
    `,
  },
  {
    id: 'report-telematics-ai-safety-benchmark',
    title: 'Telematics & AI Maintenance: Eliminating Unplanned Roadside Breakdowns',
    slug: 'telematics-ai-maintenance-breakdown-prevention',
    subtitle: 'How predictive sensor algorithms on Class-8 engines reduce roadside breakdown downtime by 74% across high-cube long-haul fleets.',
    publishDate: 'April 05, 2026',
    readTime: '13 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Fleet Operations & Sustainability',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
    category: 'Supply Chain Index',
    summary: 'Operational results from 10 million telematics miles evaluating predictive oil analysis, automated tire pressure inflation, and brake stroke sensors.',
    downloadablePdf: '/docs/Vanguardia_Telematics_AI_Safety_Study.pdf',
    keyFindings: [
      'Predictive oil pressure and coolant sensors prevented 142 catastrophic engine failures before roadside breakdowns occurred.',
      'Automated tire pressure inflation systems maintained optimal 105 PSI pressure, extending tire life by 35,000 miles per tractor.',
    ],
    stats: [
      { label: 'Breakdown Reduction', value: '-74%', change: 'vs Industry Avg' },
      { label: 'Fleet Telematics Miles', value: '10M Mi', change: 'Real-Time Evaluated' },
      { label: 'Tire Life Extension', value: '+35k Mi', change: 'Automated Inflation' },
    ],
    contentMarkdown: `
# Telematics & AI Predictive Maintenance Study
    `,
  },
];
