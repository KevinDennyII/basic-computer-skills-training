import type { ReactNode } from 'react';
import styles from './ActivityShell.module.css';

interface ActivityShellProps {
  title: string;
  intro: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function ActivityShell({ title, intro, children, footer }: ActivityShellProps) {
  return (
    <section className={styles.shell} aria-labelledby={`${title.replace(/\s+/g, '-')}-heading`}>
      <p className={styles.eyebrow}>Your turn</p>
      <h2 className={styles.title} id={`${title.replace(/\s+/g, '-')}-heading`}>
        {title}
      </h2>
      <p className={styles.intro}>{intro}</p>
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </section>
  );
}
