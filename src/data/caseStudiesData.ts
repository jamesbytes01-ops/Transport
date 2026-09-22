import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-automotive-oem',
    clientIndustry: 'Automotive OEM Manufacturing',
    title: 'Eliminating Assembly Line Downtime for a Top-3 Global Automotive Manufacturer',
    challenge: 'Unpredictable component delivery across 12 tier-1 supplier plants led to micro-stoppages on assembly lines, costing up to $22,000 per minute of line downtime.',
    solution: 'Vanguardia deployed a dedicated 45-truck drop-trailer fleet with real-time Samsara telematics, geofenced automated arrival alerts, and dual-driver expedited hot-shot standby units.',
    results: [
      { metric: '32% Reduction', description: 'In total supply chain transit latency' },
      { metric: 'Zero Minutes', description: 'Assembly line shutdown hours in 24 months' },
      { metric: '99.94%', description: 'On-time delivery score for just-in-time (JIT) feeds' },
    ],
    quote: {
      text: 'Vanguardia transformed our inbound tier-1 supply chain. Their drop-trailer program and zero-downtime commitment gave our plant managers absolute predictability.',
      author: 'David Sterling',
      title: 'VP of Global Logistics & Assembly Operations',
      company: 'Apex Automotive North America',
    },
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'case-bio-pharma-coldchain',
    clientIndustry: 'Biopharmaceutical Logistics',
    title: 'Guaranteeing Zero-Temperature-Excursion Transport for Temperature-Sensitive Vaccines',
    challenge: 'Transporting $140M in high-value biopharmaceutical products across varying climate zones required GDP-compliant reefer trailers with continuous dual-temp logging.',
    solution: 'Implemented Vanguardia Pharma-Shield cold chain protocols featuring Thermo King S-700 multi-zone units, satellite telematics, automated pre-cooling, and continuous 24/7 command center monitoring.',
    results: [
      { metric: '$0 Cargo Loss', description: 'Across 1,400+ pharmaceutical shipments' },
      { metric: '0.00°F Excursion', description: 'Strict adherence to GDP temperature band' },
      { metric: '100% Audit', description: 'Compliance on FDA CFR Title 21 digital records' },
    ],
    quote: {
      text: 'When moving live vaccines, there is zero margin for error. Vanguardia is the only carrier in our network that has delivered 100% audit-proof cold chain transport for three consecutive years.',
      author: 'Dr. Aris Thorne',
      title: 'Head of Cold Chain Logistics Compliance',
      company: 'Vanguard BioPharma Global',
    },
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'case-national-retail-peak',
    clientIndustry: 'National Retail & E-Commerce',
    title: 'Scaling Peak Q4 Fleet Capacity by 300% for Nationwide Store Replenishment',
    challenge: 'A national retailer required 250 additional 53-foot dry vans during November and December peak demand without sacrificing SLAs or incurring surge broker markups.',
    solution: 'Provided a dedicated seasonal asset reservation program, deploying 220 Vanguardia trailers with drop-and-hook capabilities at 4 major fulfillment hubs.',
    results: [
      { metric: '+300% Capacity', description: 'Scaled fleet commitment without spot market exposure' },
      { metric: '99.7%', description: 'On-time delivery score across 4,200 peak loads' },
      { metric: '$1.4M Saved', description: 'Compared to spot market freight rates' },
    ],
    quote: {
      text: 'During Peak Season, capacity is gold. Vanguardia came through with guaranteed asset capacity, protecting our store delivery SLAs when other providers failed.',
      author: 'Rachel Lin',
      title: 'Senior Director of Transportation Strategy',
      company: 'OmniNation Stores Inc.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200',
  },
];
