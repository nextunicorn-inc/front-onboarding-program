import { useState, useEffect } from 'react';

const canUseDom = () => typeof window?.matchMedia !== 'undefined';

export function useMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!canUseDom()) {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(mediaQuery);
    setMatches(mediaQueryList.matches);
  }, [mediaQuery]);

  useEffect(() => {
    if (!canUseDom()) {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(mediaQuery);
    const onChange = function (e: MediaQueryListEvent) {
      setMatches(e.matches);
    };
    mediaQueryList.addEventListener('change', onChange);

    return () => {
      if (!canUseDom()) {
        return undefined;
      }
      mediaQueryList.removeEventListener('change', onChange);
    };
  }, [mediaQuery]);

  return matches;
}
