import { renderMinimal } from './minimal';
import { renderModern } from './modern';
import { renderProfessional } from './professional';
import { renderTerminal } from './terminal';
import { renderCreative } from './creative';
import { renderResume } from './resume';
import { renderGlass } from './glass';
import { renderBrutalist } from './brutalist';
import { renderPremium } from './premium';
import { renderCyberpunk } from './cyberpunk';
import { renderSwiss } from './swiss';

export const templates = [
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Clean, simple, and content-focused design.',
    render: renderMinimal,
    thumbnail: 'https://placehold.co/600x400/ffffff/333333?text=Minimal'
  },
  {
    id: 'modern',
    name: 'Modern Gradient',
    description: 'Colorful gradients and modern cards.',
    render: renderModern,
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Modern'
  },
  {
    id: 'professional',
    name: 'Professional Corporate',
    description: 'Structured, business-oriented layout.',
    render: renderProfessional,
    thumbnail: 'https://placehold.co/600x400/1e293b/ffffff?text=Professional'
  },
  {
    id: 'terminal',
    name: 'Terminal/Hacker',
    description: 'Command line interface style for developers.',
    render: renderTerminal,
    thumbnail: 'https://placehold.co/600x400/000000/00ff00?text=Terminal'
  },
  {
    id: 'creative',
    name: 'Creative Agency',
    description: 'Bold typography and artistic layout.',
    render: renderCreative,
    thumbnail: 'https://placehold.co/600x400/eab308/000000?text=Creative'
  },
  {
    id: 'resume',
    name: 'Digital Resume',
    description: 'Print-friendly curriculum vitae style.',
    render: renderResume,
    thumbnail: 'https://placehold.co/600x400/f8fafc/334155?text=Resume'
  },
  {
    id: 'glass',
    name: 'Glassmorphism',
    description: 'Frosted glass effects and depth.',
    render: renderGlass,
    thumbnail: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Glass'
  },
  {
    id: 'brutalist',
    name: 'Brutalist Mono',
    description: 'Raw, unpolished, bold aesthetic.',
    render: renderBrutalist,
    thumbnail: 'https://placehold.co/600x400/f0f0f0/000000?text=Brutalist'
  },
  {
    id: 'premium',
    name: 'Premium Dark',
    description: 'Luxury dark mode with sleek animations.',
    render: renderPremium,
    thumbnail: 'https://placehold.co/600x400/0f172a/38bdf8?text=Premium'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon style with glitch effects.',
    render: renderCyberpunk,
    thumbnail: 'https://placehold.co/600x400/050505/00ffff?text=Cyberpunk'
  },
  {
    id: 'swiss',
    name: 'Swiss Grid',
    description: 'Timeless typographic style with strong grids.',
    render: renderSwiss,
    thumbnail: 'https://placehold.co/600x400/ffffff/000000?text=Swiss+Grid'
  }
];

export const getTemplateFn = (templateId) => {
  const template = templates.find(t => t.id === templateId);
  return template ? template.render : renderMinimal;
};
