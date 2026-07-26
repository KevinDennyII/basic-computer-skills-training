import heroImage from '../../assets/hero-learning-space.jpg';
import styles from './HeroScene.module.css';

/**
 * Full-bleed hero plane. The scrim keeps the headline legible over the photograph,
 * and the image drifts very slowly to give the page a pulse.
 */
export default function HeroScene() {
  return (
    <div className={styles.plane} aria-hidden="true">
      <img className={styles.image} src={heroImage} alt="" decoding="async" />
      <div className={styles.scrim} />
    </div>
  );
}
