import { useMemo, useState } from 'react';
import type { Activity } from '../../content/types';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import styles from './MatchGame.module.css';

type MatchActivity = Extract<Activity, { kind: 'match-game' }>;

/** Deterministic shuffle so the right-hand column order is stable across re-renders. */
function shuffled<T>(items: T[], seed: number): T[] {
  const copy = [...items];
  let current = seed;
  for (let i = copy.length - 1; i > 0; i -= 1) {
    current = (current * 1103515245 + 12345) % 2147483648;
    const j = current % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function MatchGame({ activity }: { activity: MatchActivity }) {
  const [round, setRound] = useState(1);
  const [activeLeft, setActiveLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [burst, setBurst] = useState(0);
  // Only the pair that just matched should sparkle, not every pair matched so far.
  const [burstPairId, setBurstPairId] = useState<string | null>(null);

  const rightColumn = useMemo(() => shuffled(activity.pairs, round * 7919), [activity.pairs, round]);
  const allMatched = matched.size === activity.pairs.length;

  const pickRight = (pairId: string) => {
    if (!activeLeft || matched.has(pairId)) return;

    if (pairId === activeLeft) {
      setMatched((current) => new Set(current).add(pairId));
      setActiveLeft(null);
      setWrongId(null);
      setBurstPairId(pairId);
      setBurst((count) => count + 1);
    } else {
      setWrongId(pairId);
      window.setTimeout(() => setWrongId(null), 500);
    }
  };

  const reset = () => {
    setMatched(new Set());
    setActiveLeft(null);
    setWrongId(null);
    setBurstPairId(null);
    setRound((value) => value + 1);
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <div className={styles.footerRow}>
          <p className={styles.counter} role="status">
            {allMatched
              ? 'Every pair matched. That is the whole set.'
              : `${matched.size} of ${activity.pairs.length} matched`}
          </p>
          {allMatched && (
            <button type="button" className={styles.restart} onClick={reset}>
              Shuffle and try again
            </button>
          )}
        </div>
      }
    >
      <div className={styles.board}>
        <div className={styles.column}>
          <p className={styles.columnHead}>Select one</p>
          <ul className={styles.list}>
            {activity.pairs.map((pair) => {
              const isMatched = matched.has(pair.id);
              return (
                <li key={pair.id}>
                  <button
                    type="button"
                    className={styles.leftCard}
                    data-state={
                      isMatched ? 'matched' : activeLeft === pair.id ? 'active' : 'idle'
                    }
                    disabled={isMatched}
                    aria-pressed={activeLeft === pair.id}
                    onClick={() => setActiveLeft(pair.id)}
                  >
                    {pair.left}
                    {isMatched && (
                      <span className={styles.tick} aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.columnHead}>Then its partner</p>
          <ul className={styles.list}>
            {rightColumn.map((pair) => {
              const isMatched = matched.has(pair.id);
              return (
                <li key={pair.id} className={styles.rightWrap}>
                  <button
                    type="button"
                    className={styles.rightCard}
                    data-state={
                      isMatched ? 'matched' : wrongId === pair.id ? 'wrong' : 'idle'
                    }
                    disabled={isMatched || !activeLeft}
                    onClick={() => pickRight(pair.id)}
                  >
                    {pair.right}
                    {isMatched && (
                      <span className={styles.tick} aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                  {burstPairId === pair.id && <SparkleBurst trigger={burst} count={10} />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {!activeLeft && !allMatched && (
        <p className={styles.hint}>Start by selecting something in the left column.</p>
      )}
    </ActivityShell>
  );
}
