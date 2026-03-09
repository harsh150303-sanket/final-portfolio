import {
  frontend,
  backend,
  ux,
  bwmap,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Digital Marketing Executive',
    icon: frontend,
  },
  {
    title: 'SEO Specialist',
    icon: backend,
  },
  {
    title: 'Website Development & UI/UX Design',
    icon: ux,
  },
  {
    title: 'Performance Marketing & Analytics',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: "Search Engine Optimization Executive",
    company_name: "Thinking Dots Studio (Full-time)",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2025 - Present",
    points: [
      "Managing on-page and technical SEO strategies to improve search rankings.",
      "Conducting keyword research and competitor analysis for content growth.",
      "Optimizing website architecture for better crawlability and indexing.",
      "Tracking performance using Google Analytics, Search Console and reporting KPIs."
    ],
  },
  {
    title: "Consultant (Freelance)",
    company_name: "Mansa Sugar Limited",
    icon: microverse,
    iconBg: "#333333",
    date: "Dec 2024 - Jul 2025",
    points: [
      "Worked as irrigation material maintenance and pivot maintenance consultant.",
      "Improved operational efficiency through preventive maintenance planning.",
      "Collaborated with on-site teams to reduce downtime and improve asset lifecycle."
    ],
  },
  {
    title: "Executive Assistant to Managing Director",
    company_name: "Bhoomi Agro Industries",
    icon: microverse,
    iconBg: "#333333",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Acted as liaison between MD, sales, and production teams for daily operational updates.",
      "Organized internal events, client meetings, and business discussions.",
      "Conducted background research and prepared briefing materials to support strategic decision-making."
    ],
  },
  {
    title: "SEO Executive",
    company_name: "Bhoomi Agro Industries",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Created and optimized landing pages and product descriptions aligned with new website launch.",
      "Worked with developers and designers to implement SEO-friendly site architecture.",
      "Ran seasonal and product-focused campaigns across Meta Ads, LinkedIn, X (Twitter), and YouTube.",
      "Delivered monthly performance reports including KPIs, traffic growth, and ROI analysis."
    ],
  },
];

const projects = [
{
  id: 'project-1',
  name: 'Meta Ads Lead Generation – Ellys Education',
  description:
    'Managed Meta Ads campaigns generating 206 qualified conversations with an average cost per lead of ₹20. Optimized targeting and creatives to significantly improve campaign efficiency.',
  tags: [
    { name: 'Meta Ads', color: 'blue-text-gradient' },
    { name: 'Lead Generation', color: 'green-text-gradient' },
    { name: 'Performance Marketing', color: 'pink-text-gradient' },
  ],
  image: bwmap,
  repo: '',
  demo: '',
},

{
  id: 'project-2',
  name: 'Campaign Optimization Case Study',
  description:
    'Reduced cost per lead from ₹229 in previous campaigns to ₹17–₹25 by restructuring campaigns, improving audience targeting, and optimizing ad creatives.',
  tags: [
    { name: 'Meta Ads', color: 'blue-text-gradient' },
    { name: 'Campaign Optimization', color: 'green-text-gradient' },
    { name: 'Growth Marketing', color: 'pink-text-gradient' },
  ],
  image: bwmap,
  repo: '',
  demo: '',
},

{
  id: 'project-3',
  name: 'Digital Marketing Setup – RKG Trends',
  description:
    'Implemented complete digital marketing infrastructure including SEO setup, GA4 installation, Meta Pixel implementation, and Google Merchant Center integration. Also launched campaigns for Better Mee.',
  tags: [
    { name: 'SEO', color: 'blue-text-gradient' },
    { name: 'GA4', color: 'green-text-gradient' },
    { name: 'Meta Pixel', color: 'pink-text-gradient' },
  ],
  image: bwmap,
  repo: '',
  demo: '',
}
];

export { services, technologies, experiences, projects };
