const STORAGE_KEY = 'bcs-progress-v1';

export interface ProgressState {
  completedLessonIds: string[];
  currentLessonId: string | null;
  quizScores: Record<string, { correct: number; total: number }>;
  learnerName: string;
}

export const emptyProgress: ProgressState = {
  completedLessonIds: [],
  currentLessonId: null,
  quizScores: {},
  learnerName: '',
};

function isProgressShape(value: unknown): value is ProgressState {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<ProgressState>;
  return (
    Array.isArray(candidate.completedLessonIds) &&
    typeof candidate.quizScores === 'object' &&
    candidate.quizScores !== null
  );
}

export function readProgress(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed: unknown = JSON.parse(raw);
    if (!isProgressShape(parsed)) return emptyProgress;
    return {
      ...emptyProgress,
      ...parsed,
      // Guard against ids left over from an older content revision.
      completedLessonIds: parsed.completedLessonIds.filter((id) => typeof id === 'string'),
    };
  } catch {
    // Private browsing and locked-down lab machines can both throw here.
    return emptyProgress;
  }
}

export function writeProgress(state: ProgressState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Progress saving is a convenience; never let it break the lesson.
  }
}

export function clearProgress(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore.
  }
}
