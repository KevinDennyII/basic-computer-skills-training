import { useCallback, useEffect, useRef, useState } from 'react';
import type { Activity, ShortcutDrill } from '../../content/types';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import styles from './ShortcutTrainer.module.css';

type ShortcutActivity = Extract<Activity, { kind: 'shortcut-trainer' }>;

function keyLabel(key: string, flavor: 'windows' | 'mac'): string {
  if (key === 'Control') return 'Ctrl';
  if (key === 'Meta') return flavor === 'mac' ? 'Command' : 'Windows';
  return key.toUpperCase();
}

/**
 * Either modifier is accepted for every drill, so someone on a Windows PC can still
 * rehearse the Mac lesson and vice versa.
 */
function matches(drill: ShortcutDrill, event: KeyboardEvent): boolean {
  const letter = drill.keys.find((key) => key.length === 1);
  if (!letter) return false;
  if (event.key.toLowerCase() !== letter.toLowerCase()) return false;
  return event.ctrlKey || event.metaKey;
}

export default function ShortcutTrainer({ activity }: { activity: ShortcutActivity }) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [lastHit, setLastHit] = useState<string | null>(null);
  const [burst, setBurst] = useState(0);
  const [listening, setListening] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const remaining = activity.drills.filter((drill) => !done.has(drill.id));
  const target = remaining[0];
  const allDone = remaining.length === 0;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!target) return;
      if (!(event.ctrlKey || event.metaKey)) return;

      // Stop the browser from actually saving the page or opening its own dialogs.
      if (['s', 'f', 'p', 'o'].includes(event.key.toLowerCase())) event.preventDefault();

      if (matches(target, event)) {
        event.preventDefault();
        setDone((current) => new Set(current).add(target.id));
        setLastHit(target.id);
        setBurst((count) => count + 1);
      }
    },
    [target],
  );

  useEffect(() => {
    if (!listening) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listening, handleKeyDown]);

  const start = () => {
    setListening(true);
    regionRef.current?.focus();
  };

  const restart = () => {
    setDone(new Set());
    setLastHit(null);
    setListening(true);
    regionRef.current?.focus();
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <div className={styles.footerRow}>
          <p className={styles.counter} role="status">
            {allDone
              ? 'Every shortcut in your fingers. These are the ones you will use daily.'
              : `${done.size} of ${activity.drills.length} practised`}
          </p>
          {allDone && (
            <button type="button" className={styles.restart} onClick={restart}>
              Practice again
            </button>
          )}
        </div>
      }
    >
      <div
        className={styles.stage}
        ref={regionRef}
        tabIndex={-1}
        onFocus={() => setListening(true)}
        onBlur={() => setListening(false)}
      >
        {!listening && !allDone && (
          <button type="button" className={styles.armButton} onClick={start}>
            Select here, then press the keys
          </button>
        )}

        {listening && !allDone && target && (
          <div className={styles.prompt}>
            <p className={styles.promptLabel}>Press this now</p>
            <p className={styles.promptCombo}>
              {target.keys.map((key, index) => (
                <span key={key} className={styles.keyGroup}>
                  <kbd className={styles.kbd}>{keyLabel(key, activity.flavor)}</kbd>
                  {index < target.keys.length - 1 && (
                    <span className={styles.plus} aria-hidden="true">
                      +
                    </span>
                  )}
                </span>
              ))}
            </p>
            <p className={styles.promptMeaning}>{target.meaning}</p>
          </div>
        )}

        {allDone && (
          <p className={styles.allDone}>
            <span aria-hidden="true" className={styles.allDoneIcon}>
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
            </span>
            All done
          </p>
        )}

        <SparkleBurst trigger={burst} count={16} spreadWidth={300} />
      </div>

      <ul className={styles.drillList}>
        {activity.drills.map((drill) => {
          const complete = done.has(drill.id);
          return (
            <li
              key={drill.id}
              className={styles.drill}
              data-complete={complete}
              data-just-hit={lastHit === drill.id}
            >
              <span className={styles.drillKeys}>
                {drill.keys.map((key, index) => (
                  <span key={key} className={styles.keyGroup}>
                    <kbd className={styles.kbdSmall}>{keyLabel(key, activity.flavor)}</kbd>
                    {index < drill.keys.length - 1 && (
                      <span className={styles.plusSmall} aria-hidden="true">
                        +
                      </span>
                    )}
                  </span>
                ))}
              </span>
              <span className={styles.drillLabel}>{drill.label}</span>
              <span className={styles.drillState} aria-hidden="true">
                {complete ? '✓' : ''}
              </span>
            </li>
          );
        })}
      </ul>

      <details className={styles.helper}>
        <summary>Cannot press two keys at once?</summary>
        <p>
          Hold the first key down, tap the second, then release both — you do not have to hit them at
          the same instant. If holding two keys is painful or not possible, both Windows and macOS
          have a setting called Sticky Keys that lets you press them one after the other. Look for it
          under Accessibility, then Keyboard.
        </p>
        <button
          type="button"
          className={styles.skip}
          disabled={allDone}
          onClick={() => {
            if (target) {
              setDone((current) => new Set(current).add(target.id));
              setLastHit(target.id);
            }
          }}
        >
          Mark this one done
        </button>
      </details>
    </ActivityShell>
  );
}
