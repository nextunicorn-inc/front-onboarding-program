export function throttle<Arg>(cb: (...args: Array<Arg>) => void, delay: number) {
  let shouldWait = false;

  return function (...args: Array<Arg>) {
    if (shouldWait) {
      return undefined;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
