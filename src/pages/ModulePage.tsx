import { Link, Navigate, useParams } from 'react-router-dom';
import { lessonsByModule, moduleById } from '../content';
import { useProgress } from '../lib/ProgressContext';
import ModuleIcon from '../components/ui/ModuleIcon';
import DesktopFirstLook from '../components/firstlook/DesktopFirstLook';
import heroWindows from '../assets/hero-windows.jpg';
import heroMac from '../assets/hero-mac.jpg';
import styles from './ModulePage.module.css';

const HERO_IMAGES = {
  windows: heroWindows,
  mac: heroMac,
} as const;

export default function ModulePage() {
  const { moduleId } = useParams();
  const courseModule = moduleId ? moduleById.get(moduleId) : undefined;
  const { isComplete } = useProgress();

  if (!courseModule) return <Navigate to="/" replace />;

  const moduleLessons = lessonsByModule.get(courseModule.id) ?? [];
  const isOsHub = Boolean(courseModule.hero || courseModule.firstLook);

  return (
    <div className={styles.page} data-accent={courseModule.accent}>
      {isOsHub && courseModule.hero ? (
        <header className={styles.osHead}>
          <Link to="/" className={styles.backFloating}>
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
          <img className={styles.osHeroImage} src={HERO_IMAGES[courseModule.hero]} alt="" />
          <div className={styles.osHeroText}>
            {courseModule.partLabel && (
              <span className={styles.osPart}>{courseModule.partLabel}</span>
            )}
            <h1 className={styles.osTitle}>{courseModule.title}</h1>
            <p className={styles.osTagline}>{courseModule.tagline}</p>
          </div>
        </header>
      ) : (
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
      )}

      {courseModule.firstLook && (
        <section className={styles.firstLook} aria-labelledby="firstlook-heading">
          <div className={styles.firstLookHead}>
            <h2 id="firstlook-heading" className={styles.firstLookTitle}>
              A first look — no {courseModule.firstLook === 'windows' ? 'PC' : 'Mac'} needed
            </h2>
            <p className={styles.firstLookBlurb}>
              Watch the screen come together piece by piece, so it already feels familiar the first
              time you sit down at one.
            </p>
          </div>
          <DesktopFirstLook flavor={courseModule.firstLook} />
        </section>
      )}

      {isOsHub && <p className={styles.osDescription}>{courseModule.description}</p>}

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
