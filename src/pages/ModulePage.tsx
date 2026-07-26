import { Link, Navigate, useParams } from 'react-router-dom';
import { lessonsByModule, moduleById } from '../content';
import { useProgress } from '../lib/ProgressContext';
import ModuleIcon from '../components/ui/ModuleIcon';
import styles from './ModulePage.module.css';

export default function ModulePage() {
  const { moduleId } = useParams();
  const courseModule = moduleId ? moduleById.get(moduleId) : undefined;
  const { isComplete } = useProgress();

  if (!courseModule) return <Navigate to="/" replace />;

  const moduleLessons = lessonsByModule.get(courseModule.id) ?? [];

  return (
    <div className={styles.page} data-accent={courseModule.accent}>
      <header className={styles.head}>
        <Link to="/" className={styles.back}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 12H6m0 0 5-5m-5 5 5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All lessons
        </Link>

        <div className={styles.headMain}>
          <span className={styles.iconWrap}>
            <ModuleIcon icon={courseModule.icon} className={styles.icon} />
          </span>
          <div>
            <p className={styles.eyebrow}>{courseModule.tagline}</p>
            <h1 className={styles.title}>{courseModule.title}</h1>
          </div>
        </div>

        <p className={styles.description}>{courseModule.description}</p>
      </header>

      <ol className={styles.lessonList}>
        {moduleLessons.map((lesson, index) => {
          const done = isComplete(lesson.id);
          return (
            <li key={lesson.id} className={styles.lessonRow}>
              <Link to={`/lesson/${lesson.id}`} className={styles.lessonLink}>
                <span className={done ? styles.checkDone : styles.check} aria-hidden="true">
                  {done ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        d="m5 13 4.5 4.5L19 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <span className={styles.lessonText}>
                  <span className={styles.lessonTitle}>{lesson.title}</span>
                  <span className={styles.lessonSummary}>{lesson.summary}</span>
                </span>
                <span className={styles.lessonMeta}>
                  {done && <span className={styles.doneLabel}>Done</span>}
                  <span className={styles.minutes}>{lesson.minutes} min</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      {moduleLessons.length > 0 && (
        <Link className={styles.startCta} to={`/lesson/${moduleLessons[0].id}`}>
          Start with “{moduleLessons[0].title}”
        </Link>
      )}
    </div>
  );
}
