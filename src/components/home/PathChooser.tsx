import { useProgress } from '../../lib/ProgressContext';
import ModuleIcon from '../ui/ModuleIcon';
import type { LearnerPath } from '../../content/types';
import styles from './PathChooser.module.css';

interface Choice {
  path: LearnerPath;
  eyebrow: string;
  title: string;
  blurb: string;
  icon: 'windows' | 'apple' | 'compass';
  accent: 'teal' | 'coral' | 'sun';
}

const CHOICES: Choice[] = [
  {
    path: 'windows',
    eyebrow: 'Part 1',
    title: 'A Windows PC',
    blurb: 'The blue-and-grey computer most workplaces, libraries and schools hand you.',
    icon: 'windows',
    accent: 'teal',
  },
  {
    path: 'mac',
    eyebrow: 'Part 2',
    title: 'A Mac',
    blurb: 'The silver Apple computer — an iMac on a desk, or a MacBook laptop.',
    icon: 'apple',
    accent: 'coral',
  },
  {
    path: 'both',
    eyebrow: 'Not sure yet',
    title: 'Show me both',
    blurb: 'New to all of this, or want to compare? See everything — the skills carry across.',
    icon: 'compass',
    accent: 'sun',
  },
];

export default function PathChooser() {
  const { state, setPath } = useProgress();
  const chosen = state.path;

  return (
    <div className={styles.grid} role="group" aria-label="Choose the computer you are learning">
      {CHOICES.map((choice) => {
        const selected = chosen === choice.path;
        return (
          <button
            key={choice.path}
            type="button"
            className={styles.card}
            data-accent={choice.accent}
            data-selected={selected}
            aria-pressed={selected}
            onClick={() => {
              setPath(choice.path);
              document
                .getElementById('lessons')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span className={styles.iconWrap}>
              <ModuleIcon icon={choice.icon} className={styles.icon} />
            </span>
            <span className={styles.eyebrow}>{choice.eyebrow}</span>
            <span className={styles.title}>{choice.title}</span>
            <span className={styles.blurb}>{choice.blurb}</span>
            <span className={styles.pick} data-selected={selected}>
              {selected ? (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.check}>
                    <path
                      d="M4 12.5 9 17.5 20 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  This is my path
                </>
              ) : (
                'Choose this'
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
