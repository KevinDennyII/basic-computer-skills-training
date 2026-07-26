import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { clearProgress, emptyProgress, readProgress, writeProgress } from './progress';
import type { ProgressState } from './progress';
import { lessonsByModule, lessonsForPath } from '../content';
import type { LearnerPath } from '../content/types';

interface ProgressContextValue {
  state: ProgressState;
  /** The path used for all progress math. Falls back to `both` until one is chosen. */
  activePath: LearnerPath;
  hasChosenPath: boolean;
  completedCount: number;
  totalLessons: number;
  percentComplete: number;
  isComplete: (lessonId: string) => boolean;
  markComplete: (lessonId: string) => void;
  recordQuiz: (activityId: string, correct: number, total: number) => void;
  setLearnerName: (name: string) => void;
  setPath: (path: LearnerPath) => void;
  resetEverything: () => void;
  moduleProgress: (moduleId: string) => { done: number; total: number };
  nextUpLessonId: string;
  courseFinished: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => readProgress());

  useEffect(() => {
    writeProgress(state);
  }, [state]);

  const markComplete = useCallback((lessonId: string) => {
    setState((current) => {
      if (current.completedLessonIds.includes(lessonId)) {
        return { ...current, currentLessonId: lessonId };
      }
      return {
        ...current,
        completedLessonIds: [...current.completedLessonIds, lessonId],
        currentLessonId: lessonId,
      };
    });
  }, []);

  const recordQuiz = useCallback((activityId: string, correct: number, total: number) => {
    setState((current) => ({
      ...current,
      quizScores: { ...current.quizScores, [activityId]: { correct, total } },
    }));
  }, []);

  const setLearnerName = useCallback((name: string) => {
    setState((current) => ({ ...current, learnerName: name }));
  }, []);

  const setPath = useCallback((path: LearnerPath) => {
    setState((current) => ({ ...current, path }));
  }, []);

  const resetEverything = useCallback(() => {
    clearProgress();
    setState(emptyProgress);
  }, []);

  const value = useMemo<ProgressContextValue>(() => {
    const activePath: LearnerPath = state.path ?? 'both';
    const completedSet = new Set(state.completedLessonIds);
    const pathLessons = lessonsForPath(activePath);
    const completedCount = pathLessons.filter((lesson) => completedSet.has(lesson.id)).length;
    const firstUnfinished = pathLessons.find((lesson) => !completedSet.has(lesson.id));

    return {
      state,
      activePath,
      hasChosenPath: state.path !== null,
      completedCount,
      totalLessons: pathLessons.length,
      percentComplete: Math.round((completedCount / pathLessons.length) * 100),
      isComplete: (lessonId: string) => completedSet.has(lessonId),
      markComplete,
      recordQuiz,
      setLearnerName,
      setPath,
      resetEverything,
      moduleProgress: (moduleId: string) => {
        const moduleLessons = lessonsByModule.get(moduleId) ?? [];
        return {
          done: moduleLessons.filter((lesson) => completedSet.has(lesson.id)).length,
          total: moduleLessons.length,
        };
      },
      nextUpLessonId: firstUnfinished?.id ?? pathLessons[0].id,
      courseFinished: completedCount === pathLessons.length,
    };
  }, [state, markComplete, recordQuiz, setLearnerName, setPath, resetEverything]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used inside ProgressProvider');
  }
  return context;
}
