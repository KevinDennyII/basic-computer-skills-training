import styles from './Brandmark.module.css';

interface BrandmarkProps {
  size?: 'compact' | 'hero';
}

/**
 * The brand glyph: three ascending steps with a cursor arrow resting on the top one.
 * Steps animate in sequence on the hero, and the arrow gives a small nod on hover.
 */
export default function Brandmark({ size = 'compact' }: BrandmarkProps) {
  const isHero = size === 'hero';

  return (
    <span className={isHero ? styles.hero : styles.compact}>
      <svg
        className={styles.glyph}
        viewBox="0 0 48 44"
        role="img"
        aria-label="First Steps"
        focusable="false"
      >
        <rect className={styles.step1} x="2" y="30" width="14" height="12" rx="3" />
        <rect className={styles.step2} x="14" y="20" width="14" height="22" rx="3" />
        <rect className={styles.step3} x="26" y="10" width="14" height="32" rx="3" />
        <g className={styles.cursor}>
          <path
            d="M30 2 L30 17 L34 13.5 L36.5 19 L39.5 17.5 L37 12 L42 11 Z"
            fill="var(--coral-500)"
            stroke="var(--surface)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <span className={styles.words}>
        <span className={styles.name}>First Steps</span>
        <span className={styles.tagline}>Basic Computer Skills</span>
      </span>
    </span>
  );
}
