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

## Key Corridor Trends: Midwest & Sunbelt Networks

Our proprietary telemetry tracking across 38 transcontinental dispatch terminals indicates strong volume velocity in the Chicago-Dallas and Atlanta-Ohio logistics triangles.

1. **Dry Van Linehaul Dynamics**: Contract rate renewal agreements across major retail and manufacturing sectors averaged a moderate 3.8% upward adjustment, driven primarily by driver compensation increases and insurance premiums.
2. **Cold Chain Capacity Tightness**: The pharmaceutical and food produce segments experienced heightened demand. Reefer load-to-truck ratios surged in California's Central Valley and Florida agricultural hubs.

## Intermodal Rail Optimization

As diesel prices exhibit localized volatility, intermodal rail conversions continue to gain traction among Fortune 500 shippers moving freight over 750 miles. Transitioning long-haul FTL lanes to 53-foot intermodal containers yields average cost reductions of 19% alongside a 60% decrease in Scope 3 greenhouse gas emissions.
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

Achieving net-zero emissions in heavy-duty freight requires a pragmatic, multi-fuel strategy rather than a one-size-fits-all approach. Vanguardia's 18-month field trial evaluated three low-carbon powertrains across varying duty cycles.

## RNG vs. Battery Electric: Duty Cycle Allocation

Our findings demonstrate that Renewable Natural Gas (RNG) powered by dairy biomethane provides an immediate, scalable bridge for long-haul freight operations over 400 miles, while Battery Electric Vehicles (BEVs) excel in port drayage and urban cross-dock operations.
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

In biopharmaceutical and high-value food logistics, temperature deviations can ruin millions of dollars of cargo. Vanguardia's GDP protocol establishes multi-layered safety mechanisms from dispatch to offloading.
    `,
  },
];
