/**
 * Single source of truth for all site content.
 * Edit this file to update copy, links, skills and projects.
 */
import type { IconType } from 'react-icons';
import {
  LuBot,
  LuBrainCircuit,
  LuCloud,
  LuCode2,
  LuContainer,
  LuDatabase,
  LuFileText,
  LuLanguages,
  LuLayoutDashboard,
  LuMonitorSmartphone,
  LuMusic,
  LuServer,
  LuSmartphone,
  LuWorkflow,
  LuWrench,
} from 'react-icons/lu';
import {
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiMicrosoftazure,
  SiPython,
  SiReact,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si';

export const profile = {
  name: 'Hari Charan',
  initials: 'HC',
  role: 'Software Engineer',
  headline: ['Software Engineer', 'Python', 'AI & LLM Engineering', 'Azure Cloud'],
  statement: 'Building AI-powered applications, scalable backend systems and modern software solutions.',
  intro:
    'Software Engineer with 3 years of professional experience in Python development, AI engineering, LLM integrations, cloud deployments and full-stack application development. Experienced in building AI-powered solutions, real-time AI translation pipelines, automated deployment workflows and scalable backend applications.',
  experienceYears: '3 Years',
  email: 'haricharan.0925@gmail.com',
  github: 'https://github.com/haricharan0925',
  githubHandle: 'haricharan0925',
  location: 'Bengaluru, India',
  /** Add a real LinkedIn profile URL here to show it. Leave empty to hide. */
  linkedin: '',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const highlights: { icon: IconType; title: string; text: string }[] = [
  { icon: LuCode2, title: '3 Years', text: 'Professional experience' },
  { icon: LuBrainCircuit, title: 'AI & LLMs', text: 'Application development' },
  { icon: LuCloud, title: 'Azure Cloud', text: 'Deployments & CI/CD' },
  { icon: LuLayoutDashboard, title: 'Full-Stack', text: 'Web applications' },
];

export const heroTech: { icon: IconType; label: string }[] = [
  { icon: SiPython, label: 'Python' },
  { icon: LuBrainCircuit, label: 'LLMs' },
  { icon: SiFastapi, label: 'FastAPI' },
  { icon: SiMicrosoftazure, label: 'Azure' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiKubernetes, label: 'Kubernetes' },
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
];

export const about = [
  'Software Engineer specialising in Python, Artificial Intelligence and modern application development.',
  'Experienced in developing LLM-powered applications, AI chatbots, RAG pipelines, real-time AI translation systems and backend services.',
  'Hands-on experience with Microsoft Azure, cloud application deployments, containerisation and automated CI/CD pipelines.',
  'Interested in building reliable, scalable and production-ready AI applications.',
];

export const experience = {
  title: 'Software Engineer',
  duration: '3 Years',
  points: [
    'Developed and integrated AI-powered applications using Large Language Models.',
    'Worked on real-time AI translation pipelines and multilingual processing workflows.',
    'Built Python-based backend services and REST APIs.',
    'Integrated LLMs and AI models into applications.',
    'Worked on automated application deployment pipelines and CI/CD workflows.',
    'Deployed and managed applications using Microsoft Azure cloud services.',
    'Worked with Docker, Kubernetes and containerised application environments.',
    'Developed data-processing workflows and database-driven applications.',
    'Used AI-assisted development tools to improve engineering productivity.',
  ],
  tags: ['Python', 'LLMs', 'REST APIs', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
};

export type SkillGroup = {
  title: string;
  icon: IconType;
  items: string[];
  tier: 'primary' | 'secondary' | 'supporting';
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Generative AI',
    icon: LuBrainCircuit,
    tier: 'primary',
    items: [
      'Large Language Models (LLMs)',
      'AI chatbots & conversational AI',
      'Retrieval-Augmented Generation (RAG)',
      'Model fine-tuning & evaluation',
      'AI agents & workflow automation',
      'Real-time AI translation pipelines',
      'Speech-to-Text (STT)',
      'Text-to-Speech (TTS)',
    ],
  },
  {
    title: 'Python & Backend',
    icon: SiPython,
    tier: 'primary',
    items: [
      'Python',
      'FastAPI',
      'REST APIs',
      'Backend architecture',
      'API integration',
      'Asynchronous processing',
      'Data processing',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: LuCloud,
    tier: 'primary',
    items: [
      'Microsoft Azure',
      'Azure AI Foundry',
      'Docker',
      'Kubernetes',
      'Cloud application deployments',
      'Automated CI/CD pipelines',
      'Deployment automation',
      'Application configuration & monitoring',
    ],
  },
  {
    title: 'Full Stack',
    icon: LuLayoutDashboard,
    tier: 'secondary',
    items: [
      'React',
      'TypeScript',
      'HTML',
      'CSS',
      'Responsive web applications',
      'Frontend/backend integration',
      'Dashboard development',
    ],
  },
  {
    title: 'Data & Databases',
    icon: LuDatabase,
    tier: 'secondary',
    items: [
      'Data analytics & processing',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Database design & optimisation',
      'Data visualisation & reporting',
    ],
  },
  {
    title: 'Development Tools',
    icon: LuWrench,
    tier: 'secondary',
    items: ['Claude Code', 'GitHub Copilot', 'Git', 'GitHub', 'VS Code', 'AI-assisted development workflows'],
  },
  {
    title: 'Mobile',
    icon: LuSmartphone,
    tier: 'supporting',
    items: ['Kotlin', 'Android application development'],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  icon: IconType;
  /** Public repository URL. Omit for private projects. */
  repo?: string;
  isPrivate?: boolean;
  /** Neutral category label shown on the card. */
  category: string;
  /**
   * Optional status, e.g. 'Completed' or 'In progress'.
   * Intentionally left unset until confirmed by the owner.
   */
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'AI Document Assistant',
    description:
      'An AI-powered application designed to process documents and enable natural-language interaction with their contents through intelligent information retrieval.',
    tech: ['Python', 'LLMs', 'RAG', 'AI APIs'],
    icon: LuFileText,
    isPrivate: true,
    category: 'AI · Personal project',
    featured: true,
  },
  {
    title: 'CWave',
    subtitle: 'Android Music Player',
    description: 'A modern Android music player focused on a clean interface and seamless music playback.',
    tech: ['Kotlin', 'Android'],
    icon: LuMusic,
    repo: 'https://github.com/haricharan0925/cwave',
    category: 'Mobile · Personal project',
  },
  {
    title: 'Frame X',
    subtitle: 'Android Application',
    description: 'An Android application exploring smartphone connectivity and external display capabilities.',
    tech: ['Kotlin', 'Android'],
    icon: LuMonitorSmartphone,
    repo: 'https://github.com/haricharan0925/framex',
    category: 'Mobile · Personal project',
  },
];

export const capabilities: { icon: IconType; label: string }[] = [
  { icon: SiPython, label: 'Python-based AI application development' },
  { icon: LuBrainCircuit, label: 'LLM integration and RAG implementation' },
  { icon: LuLanguages, label: 'Real-time AI translation systems' },
  { icon: LuBot, label: 'AI chatbot and automation development' },
  { icon: LuServer, label: 'Backend and API engineering' },
  { icon: SiMicrosoftazure, label: 'Azure cloud deployments' },
  { icon: LuContainer, label: 'Docker, Kubernetes and CI/CD automation' },
  { icon: LuWorkflow, label: 'Full-stack application development' },
  { icon: LuDatabase, label: 'Data analytics and database engineering' },
];

