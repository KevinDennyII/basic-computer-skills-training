import { useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { Activity } from '../../content/types';
import ActivityShell from './ActivityShell';
import SparkleBurst from '../whimsy/SparkleBurst';
import styles from './MouseTrainer.module.css';

type MouseActivity = Extract<Activity, { kind: 'mouse-trainer' }>;

export default function MouseTrainer({ activity }: { activity: MouseActivity }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ tone: 'right' | 'wrong'; text: string } | null>(null);
  const [burst, setBurst] = useState(0);
  const [contextOpen, setContextOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [opened, setOpened] = useState(false);
  const singleClickTimer = useRef<number | null>(null);

  const current = activity.challenges[index];
  const finished = index >= activity.challenges.length;

  const succeed = (note: string) => {
    setFeedback({ tone: 'right', text: note });
    setBurst((count) => count + 1);
    setIndex((value) => value + 1);
  };

  const miss = (text: string) => setFeedback({ tone: 'wrong', text });

  const clearPendingSingle = () => {
    if (singleClickTimer.current !== null) {
      window.clearTimeout(singleClickTimer.current);
      singleClickTimer.current = null;
    }
  };

  const handleClick = () => {
    if (finished || !current) return;
    setContextOpen(false);

    // A second click arriving while the first is still pending counts as a double
    // click. Handling it here rather than relying on the dblclick event means two
    // quick presses of Enter work for keyboard users as well.
    if (singleClickTimer.current !== null) {
      clearPendingSingle();
      handleDoubleClick();
      return;
    }

    singleClickTimer.current = window.setTimeout(() => {
      singleClickTimer.current = null;
      setSelected(true);
      setOpened(false);
      if (current.action === 'left-click') succeed(current.successNote);
      else if (current.action === 'double-click')
        miss('That was one click, which selects. Try two quick clicks in a row.');
      else miss('That was a left click. This time use the right click.');
    }, 280);
  };

  const handleDoubleClick = () => {
    if (finished || !current) return;
    clearPendingSingle();
    setContextOpen(false);
    setSelected(true);

    if (current.action === 'double-click') {
      setOpened(true);
      succeed(current.successNote);
    } else if (current.action === 'left-click') {
      succeed('That was a double click, which also counts as clicking. On to the next one.');
    } else {
      miss('That was a double click. This time use the right click.');
    }
  };

  const handleContextMenu = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (finished || !current) return;
    clearPendingSingle();
    setContextOpen(true);

    if (current.action === 'right-click') succeed(current.successNote);
    else miss('That was a right click. This one needs a normal left click.');
  };

  const restart = () => {
    setIndex(0);
    setFeedback(null);
    setContextOpen(false);
    setSelected(false);
    setOpened(false);
  };

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <div className={styles.footerRow}>
          <p className={styles.counter} role="status">
            {finished
              ? 'All three kinds of click, done.'
              : `Step ${index + 1} of ${activity.challenges.length}`}
          </p>
          {finished && (
            <button type="button" className={styles.restart} onClick={restart}>
              Practice again
            </button>
          )}
        </div>
      }
    >
      <p className={styles.instruction} aria-live="polite">
        {finished ? 'You have got the hang of clicking.' : current?.instruction}
      </p>

      <div className={styles.pad} data-flavor={activity.flavor}>
        <div className={styles.padInner}>
          <button
            type="button"
            className={styles.file}
            data-selected={selected}
            data-opened={opened}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleContextMenu}
            aria-label="Practice file called Resume. Click, double click or right click it."
          >
            <span className={styles.fileArt} aria-hidden="true">
              <svg viewBox="0 0 40 48">
                <path
                  d="M6 3h20l8 8v34a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"
                  fill="#ffffff"
                  stroke="#9db3bd"
                  strokeWidth="1.6"
                />
                <path d="M26 3v8h8" fill="none" stroke="#9db3bd" strokeWidth="1.6" />
                <path
                  d="M12 22h16M12 28h16M12 34h10"
                  stroke="#c3d3da"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className={styles.fileName}>Resume.docx</span>
          </button>

          {contextOpen && (
            <ul className={styles.contextMenu} role="presentation">
              <li>Open</li>
              <li>Rename</li>
              <li>Copy</li>
              <li>{activity.flavor === 'mac' ? 'Move to Trash' : 'Delete'}</li>
              <li>{activity.flavor === 'mac' ? 'Get Info' : 'Properties'}</li>
            </ul>
          )}

          {opened && (
            <div className={styles.openedWindow} role="presentation">
              <div className={styles.openedBar}>
                <span />
                <span />
                <span />
              </div>
              <p className={styles.openedText}>The file opened. That is what a double click does.</p>
            </div>
          )}

          <SparkleBurst trigger={burst} count={14} spreadWidth={220} />
        </div>
      </div>

      {feedback && (
        <p
          className={feedback.tone === 'right' ? styles.feedbackRight : styles.feedbackWrong}
          role="status"
        >
          {feedback.text}
        </p>
      )}

      <details className={styles.helper}>
        <summary>Using a keyboard, or clicking is difficult?</summary>
        <p>
          Move to the practice file with the Tab key. Press Enter or the spacebar for a left click,
          press it twice quickly for a double click, and use the menu key — or Shift and F10 together
          — for a right click. On a Mac trackpad, tap with two fingers to right click, or hold
          Control while you click.
        </p>
        <button
          type="button"
          className={styles.skip}
          onClick={() => {
            if (current) succeed('Skipped ahead. You can always come back to this.');
          }}
          disabled={finished}
        >
          Skip this step
        </button>
      </details>
    </ActivityShell>
  );
}
