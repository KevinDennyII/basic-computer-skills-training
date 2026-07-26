export type ActivityKind =
  | 'hardware-explorer'
  | 'desktop-sandbox'
  | 'mouse-trainer'
  | 'shortcut-trainer'
  | 'match-game'
  | 'quiz'
  | 'app-picker';

export type DesktopFlavor = 'windows' | 'mac';

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: { id: string; label: string }[];
  correctChoiceId: string;
  explanation: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
  note?: string;
}

export interface HardwarePart {
  id: string;
  name: string;
  plainName: string;
  description: string;
}

export interface SandboxTask {
  id: string;
  instruction: string;
  targetId: string;
  successNote: string;
}

export interface MouseChallenge {
  id: string;
  action: 'left-click' | 'double-click' | 'right-click' | 'drag';
  instruction: string;
  successNote: string;
}

export interface ShortcutDrill {
  id: string;
  label: string;
  keys: string[];
  meaning: string;
}

export interface AppScenario {
  id: string;
  situation: string;
  correctAppId: string;
  explanation: string;
}

export interface AppOption {
  id: string;
  name: string;
  microsoft: string;
  google: string;
  job: string;
}

export type Activity =
  | { kind: 'hardware-explorer'; title: string; intro: string; parts: HardwarePart[] }
  | {
      kind: 'desktop-sandbox';
      title: string;
      intro: string;
      flavor: DesktopFlavor;
      tasks: SandboxTask[];
    }
  | {
      kind: 'mouse-trainer';
      title: string;
      intro: string;
      flavor: DesktopFlavor;
      challenges: MouseChallenge[];
    }
  | {
      kind: 'shortcut-trainer';
      title: string;
      intro: string;
      flavor: DesktopFlavor;
      drills: ShortcutDrill[];
    }
  | { kind: 'match-game'; title: string; intro: string; pairs: MatchPair[] }
  | { kind: 'quiz'; title: string; intro: string; questions: QuizQuestion[] }
  | {
      kind: 'app-picker';
      title: string;
      intro: string;
      apps: AppOption[];
      scenarios: AppScenario[];
    };

export interface LessonBlock {
  id: string;
  heading?: string;
  body?: string[];
  callout?: { tone: 'tip' | 'warning' | 'note'; text: string };
  bullets?: { term?: string; text: string }[];
  steps?: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  summary: string;
  minutes: number;
  blocks: LessonBlock[];
  activity?: Activity;
}

export interface CourseModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  accent: 'teal' | 'coral' | 'sun' | 'leaf';
  icon: 'compass' | 'chip' | 'windows' | 'apple' | 'docs' | 'star';
}
