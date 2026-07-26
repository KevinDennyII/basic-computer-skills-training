import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useProgress } from '../../lib/ProgressContext';
import Brandmark from '../brand/Brandmark';
import styles from './SiteLayout.module.css';

export default function SiteLayout() {
  const { pathname } = useLocation();
  const { percentComplete, completedCount, totalLessons } = useProgress();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  const onHome = pathname === '/';

  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#main">
        Skip to the lesson
      </a>

      <header className={onHome ? styles.headerHome : styles.header}>
        <Link to="/" className={styles.brandLink} aria-label="First Steps home">
          <Brandmark />
        </Link>

        <nav className={styles.nav} aria-label="Course sections">
          <NavLink to="/" className={styles.navLink} end>
            All lessons
          </NavLink>
          <NavLink to="/certificate" className={styles.navLink}>
            Certificate
          </NavLink>
        </nav>

        <div className={styles.progressReadout}>
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressFill} style={{ width: `${percentComplete}%` }} />
          </div>
          <p className={styles.progressText}>
            {completedCount} of {totalLessons} done
          </p>
        </div>
      </header>

      <main id="main" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>
          Basic Computer Skills Workshop — originally written in 2019 for a women's shelter, rebuilt
          and updated for 2026.
        </p>
        <p className={styles.footerBrand}>By OhhDenny Services, LLC</p>
      </footer>
    </div>
  );
}
