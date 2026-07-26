import styles from './Desktop.module.css';

interface DesktopProps {
  onTarget: (targetId: string, label: string) => void;
  highlightId?: string;
  disabled: boolean;
}

export default function WindowsDesktop({ onTarget, highlightId, disabled }: DesktopProps) {
  const hit = (id: string, label: string) => ({
    type: 'button' as const,
    disabled,
    'data-seek': highlightId === id ? 'true' : undefined,
    onClick: () => onTarget(id, label),
  });

  return (
    <div className={styles.screen} data-flavor="windows">
      <div className={styles.wallpaperWindows} aria-hidden="true" />

      <div className={styles.iconGrid}>
        <button className={styles.desktopIcon} {...hit('recycle', 'the Recycle Bin')}>
          <span className={styles.iconArt} aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path
                d="M8 11h16l-1.4 16.2a2 2 0 0 1-2 1.8h-9.2a2 2 0 0 1-2-1.8Z"
                fill="#9fb8c4"
                stroke="#5d7c8a"
                strokeWidth="1.4"
              />
              <path d="M13 15v10M19 15v10" stroke="#5d7c8a" strokeWidth="1.6" strokeLinecap="round" />
              <path
                d="M6 9h20M13 9V6.5A1.5 1.5 0 0 1 14.5 5h3A1.5 1.5 0 0 1 19 6.5V9"
                fill="none"
                stroke="#5d7c8a"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Recycle Bin
        </button>

        <button className={styles.desktopIcon} {...hit('folder', 'a folder on the desktop')}>
          <span className={styles.iconArt} aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M4 9h9l2.5 3H28v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="#f2b134" />
              <path d="M4 13h24v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="#f7c766" />
            </svg>
          </span>
          Documents
        </button>
      </div>

      <div className={styles.taskbarWindows}>
        <button className={styles.startButton} {...hit('start', 'the Start button')}>
          <span className={styles.startGlyph} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="2" width="9" height="9" rx="1" fill="#4aa3d8" />
              <rect x="13" y="2" width="9" height="9" rx="1" fill="#4aa3d8" />
              <rect x="2" y="13" width="9" height="9" rx="1" fill="#4aa3d8" />
              <rect x="13" y="13" width="9" height="9" rx="1" fill="#4aa3d8" />
            </svg>
          </span>
          <span className="visually-hidden">Start</span>
        </button>

        <button className={styles.searchPill} {...hit('search', 'the Search box')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={styles.searchLabel}>Search</span>
        </button>

        <button className={styles.taskIcon} {...hit('explorer', 'File Explorer')}>
          <span className="visually-hidden">File Explorer</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 9h9l2.5 3H28v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="#e0a52c" />
            <path d="M4 13h24v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="#f5c563" />
          </svg>
        </button>

        <button className={styles.taskIcon} {...hit('edge', 'the Edge web browser')}>
          <span className="visually-hidden">Microsoft Edge browser</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="12" fill="#2f8ec4" />
            <path
              d="M8 18c3-8 14-9 16-3-4-2-9 0-10 5-1 4 3 6 6 5-4 3-13 2-12-7Z"
              fill="#bfe3ec"
            />
          </svg>
        </button>

        <button className={styles.taskIcon} {...hit('word', 'Microsoft Word')}>
          <span className="visually-hidden">Microsoft Word</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="6" y="4" width="20" height="24" rx="2" fill="#2b579a" />
            <path
              d="M11 11l2 10 3-7 3 7 2-10"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.trayWindows}>
          <button className={styles.trayItem} {...hit('wifi', 'the wi-fi indicator')}>
            <span className="visually-hidden">Wi-Fi</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3.5 9.5a13 13 0 0 1 17 0M6.5 13a9 9 0 0 1 11 0M9.5 16.4a5 5 0 0 1 5 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <circle cx="12" cy="19.5" r="1.3" fill="currentColor" />
            </svg>
          </button>
          <button className={styles.trayItem} {...hit('battery', 'the battery indicator')}>
            <span className="visually-hidden">Battery</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="2.5"
                y="8"
                width="17"
                height="9"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <rect x="4.5" y="10" width="10" height="5" rx="1" fill="currentColor" />
              <path d="M21 11v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className={styles.clock} {...hit('clock', 'the clock')}>
            <span className={styles.clockTime}>10:42 AM</span>
            <span className={styles.clockDate}>3/14/2026</span>
          </button>
        </div>
      </div>
    </div>
  );
}
