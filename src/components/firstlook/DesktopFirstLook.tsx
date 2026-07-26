import { useEffect, useRef, useState } from 'react';
import type { Track } from '../../content/types';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';
import styles from './DesktopFirstLook.module.css';

interface Step {
  id: string;
  caption: string;
}

const WINDOWS_STEPS: Step[] = [
  { id: 'wallpaper', caption: 'This is the desktop — the home screen you always come back to.' },
  { id: 'taskbar', caption: 'The taskbar sits along the bottom. It never disappears.' },
  { id: 'start', caption: 'The Start button, in the middle, is your way in to everything.' },
  { id: 'apps', caption: 'Your open and pinned programs live here, next to Search.' },
  { id: 'tray', caption: 'The far corner shows the time, wi-fi, sound and battery.' },
];

const MAC_STEPS: Step[] = [
  { id: 'wallpaper', caption: 'This is the Mac desktop — calm, with almost nothing on it.' },
  { id: 'menubar', caption: 'The menu bar runs across the very top, for whatever app you are in.' },
  { id: 'apple', caption: 'The Apple menu, top-left, is where Shut Down lives.' },
  { id: 'dock', caption: 'The Dock floats at the bottom, holding your favourite apps.' },
  { id: 'finder', caption: 'Finder, the blue smiling face, is how you browse your files.' },
];

const STEP_MS = 1750;

interface DesktopFirstLookProps {
  flavor: Track;
}

/**
 * A calm, auto-playing "first look" that assembles the desktop one piece at a time
 * with a caption for each, so someone who has never seen the system gets a feel for
 * where things live. Under reduced-motion it renders the whole desktop at once.
 */
export default function DesktopFirstLook({ flavor }: DesktopFirstLookProps) {
  const steps = flavor === 'windows' ? WINDOWS_STEPS : MAC_STEPS;
  const prefersReducedMotion = usePrefersReducedMotion();
  // `cursor` walks 0..steps.length. Each real step is shown while cursor sits on it;
  // the final value (steps.length) means "all done", with nothing spotlighted.
  const [cursor, setCursor] = useState(prefersReducedMotion ? steps.length : 0);
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const timer = useRef<number | null>(null);

  const done = cursor >= steps.length;
  const activeIndex = Math.min(cursor, steps.length - 1);
  const activeStep = steps[activeIndex];
  // Keep the last caption when finished, but stop the pulsing highlight.
  const spotlightId = done ? undefined : activeStep?.id;

  useEffect(() => {
    if (prefersReducedMotion || !playing || done) return;
    timer.current = window.setTimeout(() => setCursor((count) => count + 1), STEP_MS);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [playing, cursor, done, prefersReducedMotion]);

  const shown = (stepId: string) => {
    if (prefersReducedMotion) return true;
    const index = steps.findIndex((step) => step.id === stepId);
    return index <= cursor;
  };

  const replay = () => {
    setCursor(0);
    setPlaying(true);
  };

  return (
    <figure className={styles.wrap}>
      <div className={styles.frame}>
        <div className={styles.bezel}>
          {flavor === 'windows' ? (
            <WindowsScene shown={shown} activeId={spotlightId} />
          ) : (
            <MacScene shown={shown} activeId={spotlightId} />
          )}
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.captionDot} data-flavor={flavor} aria-hidden="true" />
        <p className={styles.captionText} aria-live="polite">
          {activeStep?.caption}
        </p>
      </figcaption>

      {!prefersReducedMotion && (
        <div className={styles.controls}>
          <div className={styles.dots} role="presentation">
            {steps.map((step, index) => (
              <span
                key={step.id}
                className={styles.dot}
                data-state={
                  done || index < activeIndex
                    ? 'seen'
                    : index === activeIndex
                      ? 'active'
                      : 'idle'
                }
              />
            ))}
          </div>
          {done ? (
            <button type="button" className={styles.replay} onClick={replay}>
              Watch again
            </button>
          ) : (
            <button
              type="button"
              className={styles.replay}
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? 'Pause' : 'Play'}
            </button>
          )}
        </div>
      )}
    </figure>
  );
}

interface SceneProps {
  shown: (stepId: string) => boolean;
  activeId?: string;
}

function WindowsScene({ shown, activeId }: SceneProps) {
  return (
    <div className={styles.screen} data-flavor="windows">
      <div className={styles.winWallpaper} data-shown={shown('wallpaper')} />

      <div className={styles.winIcons} data-shown={shown('wallpaper')}>
        <span className={styles.winIcon} />
        <span className={styles.winIcon} />
      </div>

      <div className={styles.winTaskbar} data-shown={shown('taskbar')} data-active={activeId === 'taskbar'}>
        <span
          className={styles.winStart}
          data-shown={shown('start')}
          data-active={activeId === 'start'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="9" height="9" rx="1" />
            <rect x="13" y="2" width="9" height="9" rx="1" />
            <rect x="2" y="13" width="9" height="9" rx="1" />
            <rect x="13" y="13" width="9" height="9" rx="1" />
          </svg>
        </span>

        <span className={styles.winApps} data-shown={shown('apps')} data-active={activeId === 'apps'}>
          <span className={styles.winSearch} />
          <span className={styles.winApp} />
          <span className={styles.winApp} />
          <span className={styles.winApp} />
        </span>

        <span className={styles.winTray} data-shown={shown('tray')} data-active={activeId === 'tray'}>
          <span className={styles.winGlyph} />
          <span className={styles.winGlyph} />
          <span className={styles.winClock} />
        </span>
      </div>
    </div>
  );
}

function MacScene({ shown, activeId }: SceneProps) {
  return (
    <div className={styles.screen} data-flavor="mac">
      <div className={styles.macWallpaper} data-shown={shown('wallpaper')} />

      <div className={styles.macMenubar} data-shown={shown('menubar')} data-active={activeId === 'menubar'}>
        <span className={styles.macApple} data-shown={shown('apple')} data-active={activeId === 'apple'}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.6 12.6c0-2.1 1.7-3.1 1.8-3.2a4 4 0 0 0-3.1-1.7c-1.4 0-2 .8-3 .8s-1.7-.8-3-.8a4.3 4.3 0 0 0-3.6 2.2c-1.1 1.9-.3 5.2 1.2 7.2.7 1 1.5 2.1 2.7 2.1s1.5-.7 2.8-.7 1.6.7 2.7.7 1.9-1 2.6-2.1a9.3 9.3 0 0 0 1-1.8 3.8 3.8 0 0 1-2.1-2.7Z" />
            <path d="M13.4 5.7A3.4 3.4 0 0 0 14.2 3a3.6 3.6 0 0 0-2.3 1.2 3.2 3.2 0 0 0-.8 2.6 3 3 0 0 0 2.3-1.1Z" />
          </svg>
        </span>
        <span className={styles.macMenuItems}>
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className={styles.macDock} data-shown={shown('dock')} data-active={activeId === 'dock'}>
        <span
          className={styles.macFinder}
          data-shown={shown('finder')}
          data-active={activeId === 'finder'}
        />
        <span className={styles.macDockIcon} data-tone="teal" />
        <span className={styles.macDockIcon} data-tone="coral" />
        <span className={styles.macDockIcon} data-tone="sun" />
        <span className={styles.macDockIcon} data-tone="leaf" />
      </div>
    </div>
  );
}
