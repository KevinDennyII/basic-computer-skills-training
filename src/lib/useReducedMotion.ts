import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(
    () => window.matchMedia?.(QUERY).matches ?? false,
  );

  useEffect(() => {
    const list = window.matchMedia(QUERY);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    list.addEventListener('change', handleChange);
    return () => list.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}
