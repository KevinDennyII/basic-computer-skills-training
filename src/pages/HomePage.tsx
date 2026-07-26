import { Link } from 'react-router-dom';
import { modules, lessonsByModule, lessonById, totalMinutes } from '../content';
import { useProgress } from '../lib/ProgressContext';
import Brandmark from '../components/brand/Brandmark';
import ModuleIcon from '../components/ui/ModuleIcon';
import HeroScene from '../components/brand/HeroScene';
import styles from './HomePage.module.css';

export default function HomePage() {
  const { nextUpLessonId, completedCount, moduleProgress, resetEverything, percentComplete } =
    useProgress();

  const nextLesson = lessonById.get(nextUpLessonId);
  const started = completedCount > 0;

  return (
    <>
      <section className={styles.hero}>
        <HeroScene />
        <div className={styles.heroContent}>
          <Brandmark size="hero" />
          <h1 className={styles.headline}>Learn the computer, one small win at a time.</h1>
          <p className={styles.support}>
            A hands-on course for anyone who was never shown how. Practice on a Windows PC and a Mac
            without touching a single real setting — because nothing here can break.
          </p>
          <div className={styles.ctaGroup}>
            <Link className={styles.primaryCta} to={`/lesson/${nextUpLessonId}`}>
              {started ? 'Pick up where you left off' : 'Start the first lesson'}
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.ctaArrow}>
                <path
                  d="M5 12h13m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a className={styles.secondaryCta} href="#lessons">
              See all {modules.length} parts
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="lessons" aria-labelledby="lessons-heading">
        <div className={styles.sectionHead}>
          <h2 id="lessons-heading">Everything you will learn</h2>
          <p>
            Six short parts, about {Math.round(totalMinutes / 5) * 5} minutes in total. Stop between
            any of them and your place is saved.
          </p>
        </div>

        <ol className={styles.moduleList}>
          {modules.map((entry, index) => {
            const moduleLessons = lessonsByModule.get(entry.id) ?? [];
            const { done, total } = moduleProgress(entry.id);
            const finished = total > 0 && done === total;

            return (
              <li key={entry.id} className={styles.moduleRow} data-accent={entry.accent}>
                <Link to={`/module/${entry.id}`} className={styles.moduleLink}>
                  <span className={styles.moduleNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.moduleIconWrap}>
                    <ModuleIcon icon={entry.icon} className={styles.moduleIcon} />
                  </span>
                  <span className={styles.moduleText}>
                    <span className={styles.moduleTitle}>{entry.title}</span>
                    <span className={styles.moduleTagline}>{entry.tagline}</span>
                    <span className={styles.moduleDescription}>{entry.description}</span>
                  </span>
                  <span className={styles.moduleMeta}>
                    <span className={finished ? styles.badgeDone : styles.badge}>
                      {finished ? 'Finished' : `${done} of ${total}`}
                    </span>
                    <span className={styles.moduleLessonCount}>
                      {moduleLessons.reduce((sum, lesson) => sum + lesson.minutes, 0)} min
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {nextLesson && (
        <section className={styles.section} aria-labelledby="next-heading">
          <div className={styles.nextUp}>
            <p className={styles.nextEyebrow}>Next up for you</p>
            <h2 id="next-heading" className={styles.nextTitle}>
              {nextLesson.title}
            </h2>
            <p className={styles.nextSummary}>{nextLesson.summary}</p>
            <Link className={styles.primaryCta} to={`/lesson/${nextLesson.id}`}>
              Open this lesson
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.ctaArrow}>
                <path
                  d="M5 12h13m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <section className={styles.section} aria-labelledby="shared-heading">
        <div className={styles.sectionHead}>
          <h2 id="shared-heading">Sharing this computer?</h2>
          <p>
            Your progress is saved in this browser on this computer only — no account, no password.
            Clear it before the next person begins so their progress is their own.
          </p>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            const confirmed = window.confirm(
              'This erases the saved progress on this computer and starts the course over. Continue?',
            );
            if (confirmed) resetEverything();
          }}
        >
          Reset progress {percentComplete > 0 ? `(${percentComplete}% saved)` : ''}
        </button>
      </section>
    </>
  );
}
