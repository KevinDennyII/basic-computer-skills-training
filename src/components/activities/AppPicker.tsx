import { useState } from 'react';
import type { Activity } from '../../content/types';
import { useProgress } from '../../lib/ProgressContext';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import styles from './AppPicker.module.css';

type AppPickerActivity = Extract<Activity, { kind: 'app-picker' }>;

interface AppPickerProps {
  activity: AppPickerActivity;
  activityId: string;
}

export default function AppPicker({ activity, activityId }: AppPickerProps) {
  const { recordQuiz } = useProgress();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [burst, setBurst] = useState(0);

  const scenario = activity.scenarios[index];
  const finished = index >= activity.scenarios.length;
  const answered = picked !== null;
  const gotItRight = answered && picked === scenario?.correctAppId;

  const choose = (appId: string) => {
    if (answered || !scenario) return;
    setPicked(appId);
    if (appId === scenario.correctAppId) {
      setCorrectCount((count) => count + 1);
      setBurst((count) => count + 1);
    }
  };

  const advance = () => {
    const nextIndex = index + 1;
    setPicked(null);
    setIndex(nextIndex);
    if (nextIndex >= activity.scenarios.length) {
      recordQuiz(activityId, correctCount, activity.scenarios.length);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setCorrectCount(0);
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <div className={styles.footerRow}>
          <p className={styles.counter} role="status">
            {finished
              ? `You matched ${correctCount} of ${activity.scenarios.length} to the right tool.`
              : `Situation ${index + 1} of ${activity.scenarios.length}`}
          </p>
          {finished && (
            <button type="button" className={styles.restart} onClick={restart}>
              Go through them again
            </button>
          )}
        </div>
      }
    >
      {finished ? (
        <div className={styles.summary}>
          <p className={styles.summaryHeadline}>
            {correctCount === activity.scenarios.length
              ? 'Every one right. You know which tool to reach for.'
              : 'Good work. Reading the explanations is where this really sinks in.'}
          </p>
          <ul className={styles.recap}>
            {activity.apps.map((app) => (
              <li key={app.id}>
                <strong>{app.job}</strong>
                <span>
                  {app.microsoft} or {app.google}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <p className={styles.scenario} aria-live="polite">
            {scenario?.situation}
          </p>

          <div className={styles.appGrid}>
            {activity.apps.map((app) => {
              const isPicked = picked === app.id;
              const isAnswer = app.id === scenario?.correctAppId;
              let state = 'idle';
              if (answered && isAnswer) state = 'correct';
              else if (answered && isPicked) state = 'wrong';
              else if (answered) state = 'muted';

              return (
                <div key={app.id} className={styles.appWrap}>
                  <button
                    type="button"
                    className={styles.appCard}
                    data-state={state}
                    disabled={answered}
                    onClick={() => choose(app.id)}
                  >
                    <span className={styles.appName}>{app.name}</span>
                    <span className={styles.appPair}>
                      {app.microsoft} · {app.google}
                    </span>
                    <span className={styles.appJob}>{app.job}</span>
                  </button>
                  {isPicked && isAnswer && <SparkleBurst trigger={burst} count={12} />}
                </div>
              );
            })}
          </div>

          {answered && (
            <div className={gotItRight ? styles.resultRight : styles.resultWrong} role="status">
              <p>
                <strong>{gotItRight ? 'Exactly right. ' : 'Close. '}</strong>
                {scenario?.explanation}
              </p>
              <button type="button" className={styles.nextButton} onClick={advance}>
                {index + 1 >= activity.scenarios.length ? 'See the recap' : 'Next situation'}
              </button>
            </div>
          )}
        </>
      )}
    </ActivityShell>
  );
}
