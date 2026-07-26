import type { CourseModule } from '../../content/types';

interface ModuleIconProps {
  icon: CourseModule['icon'];
  className?: string;
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function ModuleIcon({ icon, className }: ModuleIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {icon === 'compass' && (
        <g {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.1 5-5 2.1 2.1-5z" />
        </g>
      )}
      {icon === 'chip' && (
        <g {...strokeProps}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
        </g>
      )}
      {icon === 'windows' && (
        <g {...strokeProps}>
          <rect x="3.5" y="4" width="7.5" height="7" rx="1" />
          <rect x="13" y="4" width="7.5" height="7" rx="1" />
          <rect x="3.5" y="13" width="7.5" height="7" rx="1" />
          <rect x="13" y="13" width="7.5" height="7" rx="1" />
        </g>
      )}
      {icon === 'apple' && (
        <g {...strokeProps}>
          <path d="M15.5 12.4c0-2 1.6-3 1.7-3.1a3.9 3.9 0 0 0-3-1.6c-1.3 0-1.9.7-2.9.7s-1.7-.7-2.9-.7A4.2 4.2 0 0 0 4.9 10c-1 1.8-.3 5 1.2 7 .7 1 1.5 2 2.6 2s1.4-.6 2.7-.6 1.5.6 2.6.6 1.9-1 2.6-2a9 9 0 0 0 1-1.8 3.7 3.7 0 0 1-2.1-2.8Z" />
          <path d="M13.4 5.6A3.3 3.3 0 0 0 14.2 3a3.5 3.5 0 0 0-2.3 1.2 3.1 3.1 0 0 0-.8 2.5 2.9 2.9 0 0 0 2.3-1.1Z" />
        </g>
      )}
      {icon === 'docs' && (
        <g {...strokeProps}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </g>
      )}
      {icon === 'star' && (
        <g {...strokeProps}>
          <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" />
        </g>
      )}
    </svg>
  );
}
