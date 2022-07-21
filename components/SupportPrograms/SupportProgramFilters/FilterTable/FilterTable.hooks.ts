/* eslint space-before-function-paren: "off" */
import { useRef, useEffect, useMemo } from 'react';
import { throttle } from './FilterTable.utils';

export function useThrottle<Arg, Callback extends (...args: Array<Arg>) => void>(
  callback: Callback,
  delay = 400,
) {
  const callbackRef = useRef<Callback>(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => throttle((...args: Array<Arg>) => callbackRef.current(...args), delay),
    [delay],
  );
}
