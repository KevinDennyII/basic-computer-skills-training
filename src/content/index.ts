import { modules, moduleById } from './modules';
import { welcomeLessons } from './lessons/welcome';
import { fundamentalsLessons } from './lessons/fundamentals';
import { windowsLessons } from './lessons/windows';
import { macLessons } from './lessons/mac';
import { docsLessons, finishLessons } from './lessons/docs';
import type { CourseModule, LearnerPath, Lesson } from './types';

export const lessons: Lesson[] = [
  ...welcomeLessons,
  ...fundamentalsLessons,
  ...windowsLessons,
  ...macLessons,
  ...docsLessons,
  ...finishLessons,
];

export const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));

export const lessonsByModule = new Map<string, Lesson[]>(
  modules.map((entry) => [entry.id, lessons.filter((lesson) => lesson.moduleId === entry.id)]),
);

/**
 * A module belongs to a path if it is universal (no track) or its track matches.
 * On the `both` path everything is included.
 */
export function moduleInPath(courseModule: CourseModule, path: LearnerPath): boolean {
  if (!courseModule.track) return true;
  if (path === 'both') return true;
  return courseModule.track === path;
}

/** The modules that make up a learner's chosen journey, in order. */
export function modulesForPath(path: LearnerPath): CourseModule[] {
  return modules.filter((entry) => moduleInPath(entry, path));
}

/** Lessons for a path, preserving the global lesson order. */
export function lessonsForPath(path: LearnerPath): Lesson[] {
  const allowed = new Set(modulesForPath(path).map((entry) => entry.id));
  return lessons.filter((lesson) => allowed.has(lesson.moduleId));
}

export function lessonIndex(lessonId: string): number {
  return lessons.findIndex((lesson) => lesson.id === lessonId);
}

/**
 * Previous/next follow the learner's path, so a Windows-only learner never gets
 * routed sideways into the Mac lessons and vice versa.
 */
export function neighbours(
  lessonId: string,
  path: LearnerPath = 'both',
): { previous?: Lesson; next?: Lesson } {
  const sequence = lessonsForPath(path);
  const index = sequence.findIndex((lesson) => lesson.id === lessonId);
  if (index === -1) {
    // The lesson is outside the current path (e.g. peeking at Mac while on Windows).
    const globalIndex = lessonIndex(lessonId);
    return { previous: lessons[globalIndex - 1], next: lessons[globalIndex + 1] };
  }
  return { previous: sequence[index - 1], next: sequence[index + 1] };
}

export const totalMinutes = lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);

export function minutesForPath(path: LearnerPath): number {
  return lessonsForPath(path).reduce((sum, lesson) => sum + lesson.minutes, 0);
}

export { modules, moduleById };
export type { CourseModule, Lesson };
export * from './types';
