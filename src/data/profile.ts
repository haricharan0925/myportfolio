/**
 * Single source of truth for all site content.
 * Edit this file to update copy, links, skills and projects.
 *
 * Privacy: keep everything here generic. No employer names, internal
 * project names, awards, work metrics, phone number or LinkedIn.
 */
import type { IconType } from 'react-icons';
import {
  LuBrainCircuit,
  LuCloud,
  LuCode2,
  LuDatabase,
  LuFileText,
  LuLanguages,
  LuLayoutDashboard,
  LuMic,
  LuMonitorSmartphone,
  LuMusic,
  LuNetwork,
  LuServer,
  LuServerCog,
  LuSmartphone,
  LuWrench,
  LuBoxes,
} from 'react-icons/lu';
import {
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiLangchain,
  SiMicrosoftazure,
  SiPython,
  SiReact,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si';

export const profile = {
  name: 'Hari Charan',
  initials: 'HC',
  role: 'AI Engineer',
  headline: ['AI Engineer', 'Python', 'LLMs & Agentic AI', 'Azure Cloud'],
  statement: 'Building AI-powered applications, agentic workflows and scalable backend systems.',
  intro:
    'AI Engineer with 3 years of professional experience in Python development, LLM applications, RAG and multi-agent systems, voice AI, cloud deployments and full-stack development.',
  experienceYears: '3 Years',
  email: 'haricharan.0925@gmail.com',
  github: 'https://github.com/haricharan0925',
  githubHandle: 'haricharan0925',
  location: 'Bengaluru, India',
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
  { icon: LuBrainCircuit, title: 'LLMs & RAG', text: 'AI applications' },
  { icon: LuNetwork, title: 'Agentic AI', text: 'Multi-agent automation' },
  { icon: LuCloud, title: 'Azure Cloud', text: 'Deployments & CI/CD' },
];

export const heroTech: { icon: IconType; label: string }[] = [
  { icon: SiPython, label: 'Python' },
  { icon: LuBrainCircuit, label: 'LLMs' },
  { icon: SiLangchain, label: 'LangChain' },
  { icon: SiMicrosoftazure, label: 'Azure' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiFastapi, label: 'FastAPI' },
  { icon: SiKubernetes, label: 'Kubernetes' },
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
];

export const about = [
  'AI Engineer specialising in Python, Generative AI and modern application development.',
  'Experienced in developing LLM-powered applications, AI chatbots, RAG pipelines, multi-agent workflows, voice AI agents and real-time AI translation systems.',
  'Hands-on experience with Microsoft Azure, cloud deployments, containerisation and automated CI/CD pipelines, alongside Python backend services and REST APIs.',
  'Interested in building reliable, scalable and production-ready AI applications.',
];

export const experience = {
  title: 'AI Engineer',
  subtitle: 'Generative AI · Backend · Cloud',
  duration: '3 Years',
  points: [
    'Developed and integrated AI-powered applications using Large Language Models.',
    'Built multi-agent workflow automation using n8n and agent frameworks.',
    'Developed RAG pipelines and knowledge-retrieval assistants, including with locally hosted LLMs.',
    'Built voice-enabled AI agents with speech recognition, text-to-speech and telephony integration.',
    'Worked on real-time AI translation and multilingual media processing pipelines.',
    'Built Python-based backend services and REST APIs with FastAPI.',
    'Automated cloud VM provisioning, deployment pipelines and CI/CD workflows using Python and Linux scripting.',
    'Deployed and managed applications on Microsoft Azure with Docker and containerised environments.',
    'Built machine learning models for time-series forecasting and anomaly detection.',
    'Used AI-assisted development tools to improve engineering productivity.',
  ],
  tags: ['Python', 'LLMs', 'RAG', 'AI Agents', 'FastAPI', 'Azure', 'Docker', 'CI/CD'],
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
      'LLM applications',
      'Retrieval-Augmented Generation (RAG)',
      'Multi-agent workflows',
      'AI agents & workflow automation',
      'AI chatbots & conversational AI',
      'Embedding pipelines',
      'LoRA fine-tuning & evaluation',
      'Real-time AI translation pipelines',
    ],
  },
  {
    title: 'Python & Backend',
    icon: SiPython,
    tier: 'primary',
    items: [
      'Python',
      'FastAPI',
      'REST API design',
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
      'Microsoft Azure (VMs, Blob Storage)',
      'Azure AI Foundry',
      'Docker',
      'Kubernetes',
      'Automated CI/CD pipelines',
      'VM provisioning & deployment automation',
      'Linux scripting',
      'Application configuration & monitoring',
    ],
  },
  {
    title: 'LLM Frameworks & Tooling',
    icon: LuBoxes,
    tier: 'secondary',
    items: ['LangChain', 'CrewAI', 'n8n', 'Azure OpenAI', 'Ollama', 'LLaMA (local LLMs)', 'ChromaDB', 'FAISS'],
  },
  {
    title: 'Voice & Media AI',
    icon: LuMic,
    tier: 'secondary',
    items: [
      'Speech-to-Text',
      'Text-to-Speech',
      'Azure Speech Services',
      'ElevenLabs',
      'Twilio',
      'FFmpeg',
      'HLS/SRT stream processing',
    ],
  },
  {
    title: 'Data & Databases',
    icon: LuDatabase,
    tier: 'secondary',
    items: [
      'Data analytics & processing',
      'Forecasting & anomaly detection',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'Database design',
    ],
  },
  {
    title: 'Full Stack',
    icon: LuLayoutDashboard,
    tier: 'secondary',
    items: ['React', 'TypeScript', 'HTML', 'CSS', 'Responsive web apps', 'Frontend/backend integration', 'Dashboards'],
  },
  {
    title: 'Development Tools',
    icon: LuWrench,
    tier: 'secondary',
    items: ['Claude Code', 'GitHub Copilot', 'Git', 'GitHub', 'VS Code', 'AI-assisted workflows'],
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
  { icon: LuBrainCircuit, label: 'LLM integration, RAG and AI chatbots' },
  { icon: LuNetwork, label: 'Multi-agent workflow automation' },
  { icon: LuMic, label: 'Voice AI and speech pipelines' },
  { icon: LuLanguages, label: 'Real-time AI translation systems' },
  { icon: LuServerCog, label: 'Local and self-hosted LLM deployment' },
  { icon: LuServer, label: 'Backend and API engineering' },
  { icon: SiMicrosoftazure, label: 'Azure, Docker, Kubernetes and CI/CD' },
  { icon: LuDatabase, label: 'Full-stack apps, data and databases' },
];
