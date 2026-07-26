import { modules, moduleById } from './modules';
import { welcomeLessons } from './lessons/welcome';
import { fundamentalsLessons } from './lessons/fundamentals';
import { windowsLessons } from './lessons/windows';
import { macLessons } from './lessons/mac';
import { docsLessons, finishLessons } from './lessons/docs';
import type { CourseModule, Lesson } from './types';

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

export function lessonIndex(lessonId: string): number {
  return lessons.findIndex((lesson) => lesson.id === lessonId);
}

export function neighbours(lessonId: string): { previous?: Lesson; next?: Lesson } {
  const index = lessonIndex(lessonId);
  if (index === -1) return {};
  return { previous: lessons[index - 1], next: lessons[index + 1] };
}

export const totalMinutes = lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);

export { modules, moduleById };
export type { CourseModule, Lesson };
export * from './types';
