import { useState } from 'react';
import type { Activity } from '../../content/types';
import ActivityShell from './ActivityShell';
import styles from './HardwareExplorer.module.css';

type HardwareActivity = Extract<Activity, { kind: 'hardware-explorer' }>;

export default function HardwareExplorer({ activity }: { activity: HardwareActivity }) {
  const [selectedId, setSelectedId] = useState<string>(activity.parts[0]?.id ?? '');
  const [visited, setVisited] = useState<Set<string>>(new Set([activity.parts[0]?.id ?? '']));

  const selected = activity.parts.find((part) => part.id === selectedId);

  const select = (id: string) => {
    setSelectedId(id);
    setVisited((current) => new Set(current).add(id));
  };

  const allVisited = visited.size >= activity.parts.length;

  return (
    <ActivityShell
      title={activity.title}
      intro={activity.intro}
      footer={
        <p className={allVisited ? styles.completeNote : styles.progressNote} role="status">
          {allVisited
            ? 'You have looked at every part. That is the whole machine.'
            : `${visited.size} of ${activity.parts.length} parts explored`}
        </p>
      }
    >
      <div className={styles.layout}>
        <div className={styles.stage}>
          <svg viewBox="0 0 420 260" className={styles.scene} role="presentation">
            <defs>
              <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8fd0e0" />
                <stop offset="100%" stopColor="#3d8ba4" />
              </linearGradient>
              <linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e3c79c" />
                <stop offset="100%" stopColor="#cba873" />
              </linearGradient>
            </defs>

            <rect x="0" y="196" width="420" height="64" fill="url(#deskTop)" />
            <rect x="0" y="196" width="420" height="4" fill="#b8955f" opacity="0.5" />

            {/* Monitor */}
            <g
              className={styles.hotspot}
              data-active={selectedId === 'monitor'}
              onClick={() => select('monitor')}
            >
              <rect x="96" y="34" width="176" height="112" rx="8" fill="#2c3f47" />
              <rect x="104" y="42" width="160" height="96" rx="4" fill="url(#screenGlow)" />
              <rect x="170" y="146" width="28" height="34" fill="#41565e" />
              <rect x="146" y="180" width="76" height="10" rx="5" fill="#35484f" />
            </g>

            {/* Tower with CPU, memory, storage inside */}
            <g>
              <rect x="300" y="76" width="86" height="120" rx="7" fill="#3a4d55" />
              <rect x="300" y="76" width="86" height="120" rx="7" fill="none" stroke="#2b3b42" />

              <g
                className={styles.hotspot}
                data-active={selectedId === 'cpu'}
                onClick={() => select('cpu')}
              >
                <rect x="314" y="90" width="30" height="30" rx="4" fill="#f2b134" />
                <path
                  d="M320 96h18M320 102h18M320 108h18"
                  stroke="#8a6110"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              <g
                className={styles.hotspot}
                data-active={selectedId === 'memory'}
                onClick={() => select('memory')}
              >
                <rect x="352" y="90" width="9" height="42" rx="2" fill="#6fb3c6" />
                <rect x="365" y="90" width="9" height="42" rx="2" fill="#6fb3c6" />
              </g>

              <g
                className={styles.hotspot}
                data-active={selectedId === 'storage'}
                onClick={() => select('storage')}
              >
                <rect x="314" y="142" width="60" height="26" rx="3" fill="#3f9c6a" />
                <circle cx="330" cy="155" r="6" fill="#dcf0e5" />
                <circle cx="330" cy="155" r="2" fill="#2f7d55" />
              </g>

              <g
                className={styles.hotspot}
                data-active={selectedId === 'ports'}
                onClick={() => select('ports')}
              >
                <rect x="314" y="176" width="16" height="7" rx="2" fill="#20303a" />
                <rect x="336" y="176" width="16" height="7" rx="2" fill="#20303a" />
                <rect x="358" y="177" width="14" height="5" rx="2.5" fill="#20303a" />
              </g>
            </g>

            {/* Keyboard */}
            <g
              className={styles.hotspot}
              data-active={selectedId === 'keyboard'}
              onClick={() => select('keyboard')}
            >
              <rect x="86" y="204" width="150" height="40" rx="6" fill="#dfe6e9" />
              <rect x="86" y="204" width="150" height="40" rx="6" fill="none" stroke="#b3c0c6" />
              <g fill="#aebbc2">
                <rect x="94" y="211" width="14" height="7" rx="2" />
                <rect x="112" y="211" width="14" height="7" rx="2" />
                <rect x="130" y="211" width="14" height="7" rx="2" />
                <rect x="148" y="211" width="14" height="7" rx="2" />
                <rect x="166" y="211" width="14" height="7" rx="2" />
                <rect x="184" y="211" width="14" height="7" rx="2" />
                <rect x="202" y="211" width="26" height="7" rx="2" />
                <rect x="94" y="222" width="20" height="7" rx="2" />
                <rect x="118" y="222" width="14" height="7" rx="2" />
                <rect x="136" y="222" width="14" height="7" rx="2" />
                <rect x="154" y="222" width="14" height="7" rx="2" />
                <rect x="172" y="222" width="14" height="7" rx="2" />
                <rect x="190" y="222" width="38" height="7" rx="2" />
                <rect x="118" y="233" width="92" height="7" rx="3" />
              </g>
            </g>

            {/* Mouse */}
            <g
              className={styles.hotspot}
              data-active={selectedId === 'mouse'}
              onClick={() => select('mouse')}
            >
              <rect x="250" y="206" width="34" height="48" rx="16" fill="#e8eef0" />
              <rect x="250" y="206" width="34" height="48" rx="16" fill="none" stroke="#b3c0c6" />
              <path d="M267 208v16" stroke="#b3c0c6" strokeWidth="2" />
              <rect x="264" y="212" width="6" height="10" rx="3" fill="#8fa2ab" />
            </g>

            {/* Laptop with trackpad */}
            <g
              className={styles.hotspot}
              data-active={selectedId === 'trackpad'}
              onClick={() => select('trackpad')}
            >
              <path d="M18 244 L34 206 h44 l16 38 z" fill="#cfd9dd" />
              <rect x="44" y="214" width="24" height="16" rx="3" fill="#9fb0b8" />
              <rect x="30" y="238" width="72" height="6" rx="3" fill="#b3c0c6" />
            </g>
          </svg>
        </div>

        <div className={styles.detail} role="status" aria-live="polite">
          {selected && (
            <>
              <p className={styles.detailPlain}>{selected.plainName}</p>
              <h3 className={styles.detailName}>{selected.name}</h3>
              <p className={styles.detailBody}>{selected.description}</p>
            </>
          )}
        </div>
      </div>

      <ul className={styles.partList}>
        {activity.parts.map((part) => (
          <li key={part.id}>
            <button
              type="button"
              className={styles.partButton}
              data-active={part.id === selectedId}
              data-visited={visited.has(part.id)}
              onClick={() => select(part.id)}
            >
              {part.name}
            </button>
          </li>
        ))}
      </ul>
    </ActivityShell>
  );
}
