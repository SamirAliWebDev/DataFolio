import { Project, Skill, Experience } from './types';

export const RESUME_DATA = {
  name: "Alex Chen",
  role: "Senior Data Analyst",
  bio: "I transform chaotic data into clear strategic advantages. Specializing in predictive modeling and executive storytelling, I bridge the gap between raw numbers and high-level decision making. My work has directly influenced $10M+ in revenue optimization.",
  location: "San Francisco, CA",
  email: "alex.analytics@datafolio.dev"
};

export const SKILLS: Skill[] = [
  { name: 'Python (Pandas/NumPy)', level: 98, category: 'Technical' },
  { name: 'SQL (Advanced/Optimization)', level: 95, category: 'Technical' },
  { name: 'Machine Learning', level: 88, category: 'Technical' },
  { name: 'Tableau / PowerBI', level: 92, category: 'Tools' },
  { name: 'React / D3.js', level: 80, category: 'Tools' },
  { name: 'Statistical Analysis', level: 90, category: 'Analytical' },
  { name: 'A/B Testing Strategy', level: 94, category: 'Analytical' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Churn Prediction Engine',
    description: 'Developed a Random Forest model that identified at-risk enterprise customers with 92% accuracy. Implemented automated alert workflows for CSMs, reducing quarterly churn by 18% and saving an estimated $1.2M annually.',
    tags: ['Python', 'Scikit-Learn', 'Tableau', 'SQL'],
    imageUrl: 'https://picsum.photos/seed/churn/600/400',
    github: 'https://github.com/example/churn',
  },
  {
    id: '2',
    title: 'Real-time Revenue Command Center',
    description: 'Architected a live executive dashboard aggregating streams from Salesforce, Stripe, and Google Analytics. Reduced reporting latency from 24 hours to 5 minutes, enabling agile daily budget adjustments.',
    tags: ['SQL', 'BigQuery', 'PowerBI', 'Airflow'],
    imageUrl: 'https://picsum.photos/seed/sales/600/400',
    link: '#',
  },
  {
    id: '3',
    title: 'Market Basket Analysis & Uplift',
    description: 'Applied association rule mining to 5M+ transaction records for a major retailer. Uncovered cross-selling opportunities that were implemented in the checkout flow, driving a 7% uplift in Average Order Value (AOV).',
    tags: ['R', 'Statistics', 'Data Mining'],
    imageUrl: 'https://picsum.photos/seed/market/600/400',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Lead Data Analyst',
    company: 'FinTech Corp',
    period: '2021 - Present',
    description: [
      'Leading a team of 3 analysts overseeing reporting infrastructure for a $50M lending portfolio.',
      'Optimized ETL pipelines processing 500GB+ daily, reducing data availability latency by 40%.',
      'Partnered with C-suite to define North Star metrics, directly influencing the 2024 product roadmap.'
    ]
  },
  {
    id: '2',
    role: 'Data Analyst',
    company: 'Retail Solutions Inc.',
    period: '2018 - 2021',
    description: [
      'Automated 15+ weekly KPI reports using Python, saving the team 10+ hours of manual work per week.',
      'Conducted deep-dive cohort analysis that identified a high-value user segment, increasing marketing spend efficiency by 20%.'
    ]
  }
];

// Context string for the AI
export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Alex Chen's portfolio website. You are knowledgeable about his skills, experience, and projects.
Your goal is to answer visitor questions professionally and concisely, acting as an interactive resume.

Resume Context:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
Bio: ${RESUME_DATA.bio}
Location: ${RESUME_DATA.location}
Contact: ${RESUME_DATA.email}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}). Key achievements: ${e.description.join('; ')}`).join('\n')}

Tone: Professional, enthusiastic, data-driven, yet friendly. 
Keep answers short (under 100 words) unless asked for details.
If asked about something not in the context, say you don't have that specific info but emphasize Alex's adaptability.
`;