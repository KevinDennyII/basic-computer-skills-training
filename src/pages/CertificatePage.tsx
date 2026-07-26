import { useState } from 'react';
import { Link } from 'react-router-dom';
import { modulesForPath, lessonsForPath } from '../content';
import { useProgress } from '../lib/ProgressContext';
import SparkleBurst from '../components/whimsy/SparkleBurst';
import styles from './CertificatePage.module.css';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const CERT_SCOPE: Record<string, string> = {
  windows: 'computer fundamentals, using a Windows PC,',
  mac: 'computer fundamentals, using a Mac,',
  both: 'computer fundamentals, Windows, macOS,',
};

export default function CertificatePage() {
  const {
    state,
    activePath,
    setLearnerName,
    courseFinished,
    completedCount,
    totalLessons,
    nextUpLessonId,
  } = useProgress();
  const [draftName, setDraftName] = useState(state.learnerName);
  const [burst, setBurst] = useState(0);

  const name = state.learnerName.trim();
  const pathLessons = lessonsForPath(activePath);
  const pathModules = modulesForPath(activePath);

  return (
    <div className={styles.page}>
      {courseFinished ? (
        <>
          <header className={styles.head}>
            <p className={styles.eyebrow}>Course complete</p>
            <h1 className={styles.title}>
              All {totalLessons} lessons, finished.
              <span className={styles.titleSparkle} aria-hidden="true">
                <SparkleBurst trigger={burst} count={20} spreadWidth={300} />
              </span>
            </h1>
            <p className={styles.lede}>
              Put your name on it and print it, or save it as a PDF. You earned this.
            </p>
          </header>

          <form
            className={styles.nameForm}
            onSubmit={(event) => {
              event.preventDefault();
              setLearnerName(draftName);
              setBurst((count) => count + 1);
            }}
          >
            <label className={styles.label} htmlFor="learner-name">
              Your name, as you would like it to appear
            </label>
            <div className={styles.formRow}>
              <input
                id="learner-name"
                className={styles.input}
                type="text"
                value={draftName}
                placeholder="e.g. Maria Alvarez"
                autoComplete="name"
                onChange={(event) => setDraftName(event.target.value)}
              />
              <button type="submit" className={styles.saveButton}>
                Add to certificate
              </button>
            </div>
          </form>

          <section className={styles.certificate} aria-label="Your certificate">
            <div className={styles.certInner}>
              <p className={styles.certEyebrow}>Certificate of Completion</p>
              <p className={styles.certAwarded}>This certifies that</p>
              <p className={styles.certName}>{name || 'Your name here'}</p>
              <p className={styles.certBody}>
                has completed the Basic Computer Skills Workshop, covering {CERT_SCOPE[activePath]}{' '}
                and everyday documents in Microsoft 365 and Google Workspace.
              </p>
              <div className={styles.certFooter}>
                <div>
                  <p className={styles.certLabel}>Completed</p>
                  <p className={styles.certValue}>{dateFormatter.format(new Date())}</p>
                </div>
                <div className={styles.certSeal} aria-hidden="true">
                  <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle
                      cx="32"
                      cy="32"
                      r="21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="m22 33 6.5 6.5L43 25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.certRight}>
                  <p className={styles.certLabel}>Issued by</p>
                  <p className={styles.certValue}>OhhDenny Services, LLC</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.actions}>
            <button type="button" className={styles.printButton} onClick={() => window.print()}>
              Print or save as PDF
            </button>
            <Link to="/" className={styles.secondaryAction}>
              Back to the lessons
            </Link>
          </div>

          <section className={styles.reviewSection}>
            <h2>Want to go over anything again?</h2>
            <ul className={styles.moduleLinks}>
              {pathModules.map((entry) => (
                <li key={entry.id}>
                  <Link to={`/module/${entry.id}`}>{entry.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <div className={styles.locked}>
          <p className={styles.eyebrow}>Almost there</p>
          <h1 className={styles.title}>Your certificate is waiting</h1>
          <p className={styles.lede}>
            Finish all {totalLessons} lessons and this page turns into a certificate with your name on
            it, ready to print.
          </p>

          <div className={styles.lockedProgress}>
            <div className={styles.lockedTrack} aria-hidden="true">
              <div
                className={styles.lockedFill}
                style={{ width: `${Math.round((completedCount / totalLessons) * 100)}%` }}
              />
            </div>
            <p className={styles.lockedCount}>
              {completedCount} of {totalLessons} lessons done —{' '}
              {totalLessons - completedCount} to go
            </p>
          </div>

          <Link to={`/lesson/${nextUpLessonId}`} className={styles.printButton}>
            Continue the course
          </Link>

          <ul className={styles.checklist}>
            {pathLessons.map((lesson) => (
              <li key={lesson.id} data-done={state.completedLessonIds.includes(lesson.id)}>
                <span className={styles.checkMark} aria-hidden="true">
                  {state.completedLessonIds.includes(lesson.id) ? '✓' : ''}
                </span>
                <Link to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
