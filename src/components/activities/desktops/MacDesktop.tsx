import styles from './Desktop.module.css';

interface DesktopProps {
  onTarget: (targetId: string, label: string) => void;
  highlightId?: string;
  disabled: boolean;
}

export default function MacDesktop({ onTarget, highlightId, disabled }: DesktopProps) {
  const hit = (id: string, label: string) => ({
    type: 'button' as const,
    disabled,
    'data-seek': highlightId === id ? 'true' : undefined,
    onClick: () => onTarget(id, label),
  });

  return (
    <div className={styles.screen} data-flavor="mac">
      <div className={styles.wallpaperMac} aria-hidden="true" />

      <div className={styles.menuBar}>
        <button className={styles.appleButton} {...hit('apple', 'the Apple menu')}>
          <span className="visually-hidden">Apple menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.6 12.6c0-2.1 1.7-3.1 1.8-3.2a4 4 0 0 0-3.1-1.7c-1.4 0-2 .8-3 .8s-1.7-.8-3-.8a4.3 4.3 0 0 0-3.6 2.2c-1.1 1.9-.3 5.2 1.2 7.2.7 1 1.5 2.1 2.7 2.1s1.5-.7 2.8-.7 1.6.7 2.7.7 1.9-1 2.6-2.1a9.3 9.3 0 0 0 1-1.8 3.8 3.8 0 0 1-2.1-2.7Z"
              fill="currentColor"
            />
            <path
              d="M13.4 5.7A3.4 3.4 0 0 0 14.2 3a3.6 3.6 0 0 0-2.3 1.2 3.2 3.2 0 0 0-.8 2.6 3 3 0 0 0 2.3-1.1Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <span className={styles.menuItem}>Finder</span>
        <span className={styles.menuItem}>File</span>
        <span className={styles.menuItem}>Edit</span>
        <span className={styles.menuItem}>View</span>
        <span className={styles.menuItem}>Window</span>
        <span className={styles.menuItem}>Help</span>

        <div className={styles.menuRight}>
          <button className={styles.trayItem} {...hit('wifi', 'the wi-fi menu')}>
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
          <button className={styles.spotlightButton} {...hit('spotlight', 'Spotlight search')}>
            <span className="visually-hidden">Spotlight search</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <span className={styles.macClock}>Sat 10:42 AM</span>
        </div>
      </div>

      <div className={styles.macWindow}>
        <div className={styles.macWindowBar}>
          <button className={styles.dotClose} {...hit('close', 'the red close button')}>
            <span className="visually-hidden">Close window</span>
          </button>
          <button className={styles.dotMin} {...hit('minimize', 'the yellow minimise button')}>
            <span className="visually-hidden">Minimise window</span>
          </button>
          <button className={styles.dotMax} {...hit('maximize', 'the green full screen button')}>
            <span className="visually-hidden">Full screen</span>
          </button>
          <span className={styles.macWindowTitle}>Documents</span>
        </div>
        <div className={styles.macWindowBody}>
          <div className={styles.macSidebar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.macFiles}>
            <span className={styles.fileChip}>Resume.docx</span>
            <span className={styles.fileChip}>Budget.xlsx</span>
            <span className={styles.fileChip}>Notes.pdf</span>
          </div>
        </div>
      </div>

      <div className={styles.dock}>
        <button className={styles.dockIcon} {...hit('finder', 'Finder')}>
          <span className="visually-hidden">Finder</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="3" y="3" width="26" height="26" rx="6" fill="#3aa0d8" />
            <path d="M16 3h13v26H16Z" fill="#bfe3ec" />
            <path
              d="M10 12v4M22 12v4M10.5 22c1.6 1.4 9.4 1.4 11 0"
              fill="none"
              stroke="#12475e"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button className={styles.dockIcon} {...hit('safari', 'the Safari web browser')}>
          <span className="visually-hidden">Safari browser</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="3" y="3" width="26" height="26" rx="6" fill="#e8f4f8" />
            <circle cx="16" cy="16" r="10" fill="#2f8ec4" />
            <path d="M21 11l-3.4 7.6L10 21l3.4-7.6Z" fill="#fff" />
            <path d="M21 11l-3.4 7.6L16 16Z" fill="#e85d4c" />
          </svg>
        </button>

        <button className={styles.dockIcon} {...hit('mail', 'the Mail app')}>
          <span className="visually-hidden">Mail</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="3" y="3" width="26" height="26" rx="6" fill="#4aa3d8" />
            <path
              d="M8 12h16v9H8Z"
              fill="#fff"
            />
            <path d="m8 12 8 5.5L24 12" fill="none" stroke="#2f6f92" strokeWidth="1.6" />
          </svg>
        </button>

        <span className={styles.dockDivider} aria-hidden="true" />

        <button className={styles.dockIcon} {...hit('trash', 'the Trash')}>
          <span className="visually-hidden">Trash</span>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M9 11h14l-1.2 15.3a2 2 0 0 1-2 1.7h-7.6a2 2 0 0 1-2-1.7Z"
              fill="#c3d5dd"
              stroke="#7794a2"
              strokeWidth="1.3"
            />
            <path d="M14 15v9M18 15v9" stroke="#7794a2" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M7 9h18M13 9V7a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 19 7v2"
              fill="none"
              stroke="#7794a2"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
