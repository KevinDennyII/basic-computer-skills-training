import type { CourseModule } from './types';

export const modules: CourseModule[] = [
  {
    id: 'welcome',
    title: 'Start Here',
    tagline: 'Two minutes, then you are on your way',
    description:
      'How this course works, how to move around, and how your place is saved when you need to step away.',
    accent: 'teal',
    icon: 'compass',
  },
  {
    id: 'fundamentals',
    title: 'How a Computer Works',
    tagline: 'The words people use, in plain language',
    description:
      'Hardware, software, operating systems and apps. Learn the parts you can touch and the parts you can only see.',
    accent: 'sun',
    icon: 'chip',
  },
  {
    id: 'windows',
    title: 'Using a Windows PC',
    tagline: 'Windows 11, the most common computer',
    description:
      'Turn it on, sign in, read the desktop, use the Start button, click with confidence, and learn the shortcuts that save real time.',
    accent: 'teal',
    icon: 'windows',
    track: 'windows',
    partLabel: 'Part 1',
    hero: 'windows',
    firstLook: 'windows',
  },
  {
    id: 'mac',
    title: 'Using a Mac',
    tagline: 'iMac, MacBook Air and MacBook Pro',
    description:
      'The same skills on Apple hardware: the Dock, the menu bar, right-clicking on a trackpad, and Command-key shortcuts.',
    accent: 'coral',
    icon: 'apple',
    track: 'mac',
    partLabel: 'Part 2',
    hero: 'mac',
    firstLook: 'mac',
  },
  {
    id: 'docs',
    title: 'Documents & the Cloud',
    tagline: 'Microsoft 365 and Google Workspace',
    description:
      'Word, Excel and PowerPoint next to Google Docs, Sheets and Slides. Pick the right tool and never lose your work again.',
    accent: 'leaf',
    icon: 'docs',
  },
  {
    id: 'finish',
    title: 'You Did It',
    tagline: 'Proof of what you learned',
    description: 'A short review, a certificate you can print, and where to go next.',
    accent: 'sun',
    icon: 'star',
  },
];

export const moduleById = new Map(modules.map((entry) => [entry.id, entry]));
