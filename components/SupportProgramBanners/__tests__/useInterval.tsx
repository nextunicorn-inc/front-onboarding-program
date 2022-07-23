import { renderHook } from '@testing-library/react';
import { useInterval } from '../SupportProgramBanners.hooks';

type ArgsType = Parameters<typeof useInterval>;

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
afterEach(() => {
  jest.clearAllMocks();
});

describe('useInterval', () => {
  it('should invoke callback function every delay ms', () => {
    const DELAY = 50;
    let count = 0;

    const callback = jest.fn(() => {
      count += 1;
    });

    renderHook(() => useInterval(callback, DELAY));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(DELAY);
    expect(callback).toHaveBeenCalledTimes(count);
    jest.advanceTimersByTime(DELAY);
    expect(callback).toHaveBeenCalledTimes(count);
  });

  it('should not be trigger callback function when the second argument of delay is null', () => {
    const DELAY = null;
    let count = 0;

    const callback = jest.fn(() => {
      count += 1;
    });

    renderHook(() => useInterval(callback, DELAY));
    expect(setInterval).not.toBeCalled();
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(setInterval).not.toBeCalled();
    expect(callback).not.toBeCalled();
  });

  it('should invoke whatever callback function if delay is NOT changed', () => {
    const DELAY = 50;
    const HALF_DELAY = DELAY / 2;
    let count = 0;

    const callback1 = jest.fn(() => {
      count += 1;
    });

    const initialProps = [callback1, DELAY] as ArgsType;

    const { rerender } = renderHook<void, ArgsType>((props) => useInterval(...props), {
      initialProps,
    });

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(callback1).not.toBeCalled();
    jest.advanceTimersByTime(DELAY);
    expect(callback1).toHaveBeenCalledTimes(count);

    const callback2 = jest.fn(() => {
      count = 0;
      count += 2;
    });

    initialProps[0] = callback2;
    const updatedProps = initialProps;
    jest.advanceTimersByTime(HALF_DELAY);
    rerender(updatedProps);
    expect(callback2).not.toBeCalled();
    jest.advanceTimersByTime(HALF_DELAY);

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(count).toBe(2);
  });
});
