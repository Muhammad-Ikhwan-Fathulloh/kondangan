import { useEffect, useState } from 'react';

export type AppRoute = '/' | '/editor' | '/templates';

export function getInitialRoute(): { route: AppRoute; query: URLSearchParams } {
  if (typeof window === 'undefined') {
    return { route: '/', query: new URLSearchParams() };
  }
  const pathname = window.location.pathname;
  const query = new URLSearchParams(window.location.search);
  if (pathname === '/editor') return { route: '/editor', query };
  if (pathname === '/templates') return { route: '/templates', query };
  return { route: '/', query };
}

export function navigateTo(path: string) {
  if (typeof window === 'undefined') return;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  if (!path.includes('#')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function useAppRoute() {
  const [locationState, setLocationState] = useState(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setLocationState(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return locationState;
}
