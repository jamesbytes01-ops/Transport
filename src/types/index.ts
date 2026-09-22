export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'ftl' | 'ltl' | 'cold-chain' | 'heavy-haul' | 'warehousing' | 'expedited';
  iconName: string;
  imageUrl: string;
  keyFeatures: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  specifications: Record<string, string>;
  slaGuarantee: string;
}

export interface FleetAsset {
  id: string;
  name: string;
  category: 'Class 8 Tractor' | 'Trailer Unit' | 'Specialized Rig' | 'Intermodal Chassis';
  equipmentType: string;
  totalActiveUnits: number;
  maxPayloadLbs: number;
  maxPayloadKg: number;
  dimensions: string;
  temperatureRange?: string;
  telematics: string[];
  imageUrl: string;
  idealFor: string[];
}

export interface ResearchReport {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: 'Market Intelligence' | 'Supply Chain Index' | 'Regulatory Policy' | 'Sustainability';
  summary: string;
  downloadablePdf: string;
  keyFindings: string[];
  stats: {
    label: string;
    value: string;
    change: string;
  }[];
  contentMarkdown: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: 'Fleet Safety' | 'Logistics Tech' | 'Cold Chain' | 'Supply Chain Strategy' | 'Compliance';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageUrl: string;
  tags: string[];
  contentHtml: string;
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  title: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
    company: string;
  };
  imageUrl: string;
}

export interface TerminalLocation {
  id: string;
  city: string;
  state: string;
  region: 'Northeast' | 'Midwest' | 'Southeast' | 'Southwest' | 'West Coast';
  address: string;
  terminalCode: string;
  dispatchEmail: string;
  dockDoors: number;
  squareFeet: number;
  certifications: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface QuoteRequestFormData {
  originZip: string;
  destinationZip: string;
  serviceType: string;
  cargoWeightLbs: number;
  palletCount: number;
  isTemperatureControlled: boolean;
  temperatureReq?: string;
  isHazardous: boolean;
  isLiftgateRequired: boolean;
  pickupDate: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface EstimatedRateResult {
  estimatedCostMin: number;
  estimatedCostMax: number;
  transitDaysMin: number;
  transitDaysMax: number;
  distanceMiles: number;
  fuelSurchargePct: number;
  carbonOffsetTons: number;
}
