import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { lessonById, lessonsByModule, moduleById, neighbours } from '../content';
import { useProgress } from '../lib/ProgressContext';
import Callout from '../components/ui/Callout';
import ActivityHost from '../components/activities/ActivityHost';
import SparkleBurst from '../components/whimsy/SparkleBurst';
import styles from './LessonPage.module.css';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessonId ? lessonById.get(lessonId) : undefined;
  const { isComplete, markComplete } = useProgress();
  const [celebrate, setCelebrate] = useState(0);

  useEffect(() => {
    setCelebrate(0);
  }, [lessonId]);

  if (!lesson) return <Navigate to="/" replace />;

  const courseModule = moduleById.get(lesson.moduleId);
  const siblings = lessonsByModule.get(lesson.moduleId) ?? [];
  const positionInModule = siblings.findIndex((entry) => entry.id === lesson.id) + 1;
  const { previous, next } = neighbours(lesson.id);
  const done = isComplete(lesson.id);

  const handleFinish = () => {
    if (!done) {
      markComplete(lesson.id);
      setCelebrate((count) => count + 1);
      return;
    }
    if (next) navigate(`/lesson/${next.id}`);
    else navigate('/certificate');
  };

  return (
    <article className={styles.page} data-accent={courseModule?.accent ?? 'teal'}>
      <header className={styles.head}>
        <Link to={`/module/${lesson.moduleId}`} className={styles.crumb}>
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
          {courseModule?.title ?? 'Back'}
        </Link>

        <p className={styles.position}>
          Lesson {positionInModule} of {siblings.length}
          <span aria-hidden="true"> · </span>
          <span>{lesson.minutes} min</span>
        </p>

        <h1 className={styles.title}>{lesson.title}</h1>
        <p className={styles.summary}>{lesson.summary}</p>
      </header>

      <div className={styles.body}>
        {lesson.blocks.map((block) => (
          <section key={block.id} className={styles.block}>
            {block.heading && <h2 className={styles.blockHeading}>{block.heading}</h2>}

            {block.body?.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {block.bullets && (
              <ul className={styles.termList}>
                {block.bullets.map((bullet, index) => (
                  <li key={index}>
                    {bullet.term ? (
                      <>
                        <strong className={styles.term}>{bullet.term}</strong>
                        <span className={styles.termBody}>{bullet.text}</span>
                      </>
                    ) : (
                      bullet.text
                    )}
                  </li>
                ))}
              </ul>
            )}

            {block.steps && (
              <ol className={styles.stepList}>
                {block.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            )}

            {block.callout && <Callout tone={block.callout.tone}>{block.callout.text}</Callout>}
          </section>
        ))}
      </div>

      {lesson.activity && (
        <ActivityHost activity={lesson.activity} activityId={`${lesson.id}-activity`} />
      )}

      <footer className={styles.footer}>
        <div className={styles.finishWrap}>
          <button
            type="button"
            className={done ? styles.finishDone : styles.finish}
            onClick={handleFinish}
          >
            {done ? (next ? 'Next lesson' : 'See your certificate') : 'Mark this lesson done'}
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.finishIcon}>
              {done ? (
                <path
                  d="M5 12h13m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="m5 13 4.5 4.5L19 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
          <SparkleBurst trigger={celebrate} count={18} spreadWidth={190} />
        </div>

        {done && (
          <p className={styles.doneNote} role="status">
            Saved. You can always come back and read this again.
          </p>
        )}

        <nav className={styles.pager} aria-label="Lesson navigation">
          {previous ? (
            <Link to={`/lesson/${previous.id}`} className={styles.pagerPrev}>
              <span className={styles.pagerLabel}>Previous</span>
              <span className={styles.pagerTitle}>{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/lesson/${next.id}`} className={styles.pagerNext}>
              <span className={styles.pagerLabel}>Next</span>
              <span className={styles.pagerTitle}>{next.title}</span>
            </Link>
          ) : (
            <Link to="/certificate" className={styles.pagerNext}>
              <span className={styles.pagerLabel}>Finish</span>
              <span className={styles.pagerTitle}>Your certificate</span>
            </Link>
          )}
        </nav>
      </footer>
    </article>
  );
}
