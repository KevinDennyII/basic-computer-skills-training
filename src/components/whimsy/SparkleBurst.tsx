import { useEffect, useMemo, useState } from 'react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';
import styles from './SparkleBurst.module.css';

interface SparkleBurstProps {
  /** Increment this to fire a new burst. */
  trigger: number;
  count?: number;
  /** Centre of the cone, in degrees. 0 points straight up. */
  spreadCenter?: number;
  /** Width of the cone the particles travel within. */
  spreadWidth?: number;
}

interface Particle {
  id: string;
  angle: number;
  distance: number;
  size: number;
  delay: number;
  hue: string;
  spin: number;
}

const HUES = ['var(--sun-500)', 'var(--coral-500)', 'var(--teal-500)', 'var(--leaf-500)'];

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

/**
 * Particles are placed with polar coordinates — an angle and a distance — which is far
 * easier to reason about than picking X/Y pairs by hand. CSS does the trigonometry.
 */
export default function SparkleBurst({
  trigger,
  count = 14,
  spreadCenter = 0,
  spreadWidth = 150,
}: SparkleBurstProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [burstId, setBurstId] = useState(0);

  useEffect(() => {
    if (trigger > 0) setBurstId(trigger);
  }, [trigger]);

  const particles = useMemo<Particle[]>(() => {
    if (burstId === 0 || prefersReducedMotion) return [];
    const half = spreadWidth / 2;
    return Array.from({ length: count }, (_, index) => ({
      id: `${burstId}-${index}`,
      angle: random(spreadCenter - half, spreadCenter + half),
      distance: random(38, 104),
      size: random(6, 13),
      delay: random(0, 90),
      hue: HUES[index % HUES.length],
      spin: random(-220, 220),
    }));
  }, [burstId, count, spreadCenter, spreadWidth, prefersReducedMotion]);

  if (particles.length === 0) return null;

  return (
    <span className={styles.field} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={styles.particle}
          style={
            {
              '--angle': `${particle.angle}deg`,
              '--distance': `${particle.distance}px`,
              '--size': `${particle.size}px`,
              '--delay': `${particle.delay}ms`,
              '--hue': particle.hue,
              '--spin': `${particle.spin}deg`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 20 20" focusable="false">
            <path
              d="M10 0 C11.2 6 14 8.8 20 10 C14 11.2 11.2 14 10 20 C8.8 14 6 11.2 0 10 C6 8.8 8.8 6 10 0 Z"
              fill="var(--hue)"
            />
          </svg>
        </span>
      ))}
    </span>
  );
}
