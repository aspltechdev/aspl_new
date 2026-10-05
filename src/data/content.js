import redbookImg from '../assets/redbook.png';
import avantImg from '../assets/avant.png';
import digipondiImg from '../assets/digipondi.png';
import dementeeImg from '../assets/dementee.png';
import webdevelopmentImg from '../assets/webdevelopment.jfif';
import appdevelopmentImg from '../assets/appdevelopment.jfif';
import digitalmarketingImg from '../assets/digitalmarketing.jfif';

export const companyDetails = {
  name: 'ASPL Tech Solutions',
  legalName: 'ASPL Tech Solutions Pvt. Ltd.',
  tagline: 'Where Technology Meets Tomorrow',
  quote: 'Where Technology Meets Tomorrow.',
  phone: '+91 9843 40 6360',
  rawPhone: '9843406360',
  email: 'info@aspltech.in',
  website: 'www.aspltech.in',
  address: '305, 1st Floor, ASPL Tech Solutions, Block 18, Parappana Agrahara Main Rd, AECS Layout, Singasandra, Bengaluru, Karnataka 560100',
  city: 'Bengaluru, Karnataka, India',
  mapUrl: 'https://maps.app.goo.gl/mNtmZLUWr4fn81Rj8?g_st=ac',
  embedMapUrl: 'https://maps.google.com/maps?q=ASPL+TECH+SOLUTIONS+PVT+LTD,+Singasandra,+Bengaluru,+Karnataka+560100&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const coreServices = [
  {
    id: '01',
    key: 'web-development',
    title: 'Web Development',
    image: webdevelopmentImg,
    short: 'Thoughtful, responsive websites that help your business make a strong first impression and reach more customers.',
    description: 'We plan and build modern websites for businesses, brands, and growing teams. From clear company websites to campaign landing pages and online stores, each project is shaped around your audience and goals.',
    points: ['Business and company websites', 'Landing pages for campaigns', 'E-commerce websites', 'Responsive layouts for mobile and desktop', 'Website redesigns and improvements', 'Search-friendly site structure'],
    deliverables: ['Responsive website', 'Clear page structure and navigation', 'Cross-browser review', 'Launch support'],
  },
  {
    id: '02',
    key: 'applications-development',
    title: 'App Development',
    image: appdevelopmentImg,
    short: 'Useful web and mobile applications designed around the way your customers and team work.',
    description: 'We create custom applications that make everyday tasks easier and digital services more accessible. We work with you to shape the features, experience, and integrations your project needs.',
    points: ['Custom web applications', 'Mobile app development', 'Customer and staff portals', 'Workflow and booking tools', 'API and third-party integrations', 'Application updates and support'],
    deliverables: ['Project plan and agreed scope', 'Application interface and functionality', 'Integration guidance', 'Launch support'],
  },
  {
    id: '03',
    key: 'digital-marketing',
    title: 'Digital Marketing',
    image: digitalmarketingImg,
    short: 'Practical digital marketing to improve visibility, connect with the right audience, and support business growth.',
    description: 'We help businesses strengthen their online presence through focused digital marketing. The right mix of search, social media, content, and paid campaigns depends on your goals and audience.',
    points: ['Search engine optimization (SEO)', 'Social media planning and management', 'Digital advertising campaigns', 'Content and creative support', 'Local search visibility', 'Campaign tracking and reporting'],
    deliverables: ['Campaign plan aligned to your goals', 'Platform and audience recommendations', 'Creative and content direction', 'Regular performance updates'],
  },
];

export const partners = [
  { id: 'p1', name: 'Avant Enterprises', category: 'Bengaluru', logo: avantImg, darkBg: false },
  { id: 'p2', name: 'Digi Pondy', category: 'Pondicherry', logo: digipondiImg, darkBg: false },
  { id: 'p3', name: 'De Mentee Academy', category: 'Pondicherry', logo: dementeeImg, darkBg: false },
  { id: 'p4', name: 'Redbook Events', category: 'Coimbatore', logo: redbookImg, darkBg: true },
];

export const asplBrochurePillars = [
  { id: '01', title: 'Analysis', tagline: 'Analyzing business with professionals', description: 'We conduct thorough business and operational diagnostics to uncover bottlenecks, identify digital growth avenues, and build high-efficiency solutions.', highlight: 'Rigorous Techinical Audits' },
  { id: '02', title: 'Marketing', tagline: 'The best and reliable marketing', description: 'Data-driven performance campaigns that generate measurable qualified inbound leads, elevate brand presence, and maximize conversion rates.', highlight: 'Reliable Lead Generation' },
  { id: '03', title: 'Strategy', tagline: 'The best and most accurate strategy', description: 'Clear, actionable architectural roadmaps tailored to your company goals, ensuring future-proof scalability and sustained technological advantage.', highlight: 'Strategic Long-Term Roadmaps' },
  { id: '04', title: 'End-to-End Delivery', tagline: 'Design, Development & Deployment under one roof', description: 'No outsourcing fragmentation. Our specialized in-house team oversees your project from concept and wireframing through cloud launch and scaling.', highlight: 'Unified Specialized Team' },
  { id: '05', title: 'Measurable ROI', tagline: 'Real outcomes, not just presentations', description: 'We treat every client engagement as a long-term partnership, delivering robust platforms that generate real revenue and operational efficiency.', highlight: 'Guaranted quality & Support' },
];

export const companyVision = 'To become a global innovation partner that empowers businesses and individuals with future-ready technology, skill development, and growth-focused solutions -creating meaningful and measurable impact.';
export const companyMission = 'To simplify growth by delivering practical, scalable, and high-quality solutions. across technology, operations, training, and digital transformation.';
