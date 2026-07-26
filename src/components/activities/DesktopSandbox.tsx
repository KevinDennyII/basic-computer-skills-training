import { useState } from 'react';
import type { Activity } from '../../content/types';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import WindowsDesktop from './desktops/WindowsDesktop';
import MacDesktop from './desktops/MacDesktop';
import styles from './DesktopSandbox.module.css';

type SandboxActivity = Extract<Activity, { kind: 'desktop-sandbox' }>;

export default function DesktopSandbox({ activity }: { activity: SandboxActivity }) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ tone: 'right' | 'wrong'; text: string } | null>(null);
  const [burst, setBurst] = useState(0);

  const currentTask = activity.tasks[taskIndex];
  const finished = taskIndex >= activity.tasks.length;

  const handleTarget = (targetId: string, label: string) => {
    if (finished || !currentTask) return;

    if (targetId === currentTask.targetId) {
      setFeedback({ tone: 'right', text: currentTask.successNote });
      setBurst((count) => count + 1);
      setTaskIndex((index) => index + 1);
    } else {
      setFeedback({
        tone: 'wrong',
        text: `That was ${label}. Have another look — nothing bad happens either way.`,
      });
    }
  };

  const restart = () => {
    setTaskIndex(0);
    setFeedback(null);
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <div className={styles.footerRow}>
          <p className={styles.counter} role="status">
            {finished
              ? `All ${activity.tasks.length} found. You can read this desktop now.`
              : `Task ${taskIndex + 1} of ${activity.tasks.length}`}
          </p>
          {finished && (
            <button type="button" className={styles.restart} onClick={restart}>
              Practice again
            </button>
          )}
        </div>
      }
    >
      <div className={styles.instructionBar} data-finished={finished}>
        <span className={styles.instructionIcon} aria-hidden="true">
          {finished ? (
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
            <svg viewBox="0 0 24 24">
              <path
                d="M6 3l13 9-6 1.4 2.6 5.3-2.6 1.2-2.6-5.3L6 18z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <p className={styles.instructionText} aria-live="polite">
          {finished ? 'Every target found. Nicely done.' : currentTask?.instruction}
        </p>
      </div>

      <div className={styles.screenWrap}>
        <div className={styles.bezel}>
          {activity.flavor === 'windows' ? (
            <WindowsDesktop
              onTarget={handleTarget}
              highlightId={currentTask?.targetId}
              disabled={finished}
            />
          ) : (
            <MacDesktop
              onTarget={handleTarget}
              highlightId={currentTask?.targetId}
              disabled={finished}
            />
          )}
          <SparkleBurst trigger={burst} count={16} spreadWidth={360} />
        </div>
        <p className={styles.pretendLabel}>
          Pretend {activity.flavor === 'windows' ? 'Windows 11' : 'Mac'} desktop — nothing here is
          real
        </p>
      </div>

      {feedback && (
        <p
          className={feedback.tone === 'right' ? styles.feedbackRight : styles.feedbackWrong}
          role="status"
        >
          {feedback.text}
        </p>
      )}
    </ActivityShell>
  );
}
