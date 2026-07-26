import styles from './Callout.module.css';

interface CalloutProps {
  tone: 'tip' | 'warning' | 'note';
  children: React.ReactNode;
}

const labels: Record<CalloutProps['tone'], string> = {
  tip: 'Helpful tip',
  warning: 'Be careful',
  note: 'Good to know',
};

export default function Callout({ tone, children }: CalloutProps) {
  return (
    <aside className={`${styles.callout} ${styles[tone]}`}>
      <p className={styles.label}>
        <span className={styles.icon} aria-hidden="true">
          {tone === 'tip' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="M9 18h6M10 21h4" strokeLinecap="round" />
              <path
                d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {tone === 'warning' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path
                d="M12 4.5 3 19.5h18L12 4.5Z"
                strokeLinejoin="round"
              />
              <path d="M12 10v4.2M12 17.2v.2" strokeLinecap="round" />
            </svg>
          )}
          {tone === 'note' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 11v5.5M12 7.8v.2" strokeLinecap="round" />
            </svg>
          )}
        </span>
        {labels[tone]}
      </p>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}
