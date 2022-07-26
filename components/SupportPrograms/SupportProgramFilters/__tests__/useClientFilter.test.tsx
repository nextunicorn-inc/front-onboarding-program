import { dequal } from 'dequal';
import { renderHook, act } from '@testing-library/react';
import { useClientFilter } from '../SupportProgramFilters.hooks';

const PRIMITIVES = Array.from({ length: 10 }, (_, index) => index + 1);
const OBJECTS = [
  {
    id: '7595f2ed0e48c3e8',
    meta: {
      name: 'STEVEN001',
    },
  },
  {
    id: '598d8da20f86c137',
    meta: {
      name: 'STEVEN002',
    },
  },
  {
    id: '76a83155b1c71149',
    meta: {
      name: 'STEVEN003',
    },
  },
  {
    id: '828cdc25794191b2',
    meta: {
      name: 'STEVEN004',
    },
  },
];

describe("useClientFilter's common case", () => {
  it('returns null when pass to empty array', () => {
    const { result } = renderHook(() => useClientFilter([]));
    expect(result.current.state).toBeNull();
  });

  it('set states to null when toggle with null', () => {
    const { result } = renderHook(() => useClientFilter([1, 2]));
    expect(result.current.state).toEqual([1, 2]);
    act(() => result.current.toggle(null)());
    expect(result.current.state).toBeNull();
  });
});

describe('useClientFilter with primitive Values', () => {
  it('returns default values', () => {
    const { result } = renderHook(() => useClientFilter(PRIMITIVES));
    expect(result.current.state).toEqual(PRIMITIVES);
  });

  it('sets state to element(s) of default values or null when toggle with null or that value(s)', () => {
    const { result } = renderHook(() => useClientFilter(PRIMITIVES));

    act(() => result.current.toggle(null)());
    expect(result.current.state).toBeNull();
    act(() => result.current.toggle(PRIMITIVES)());
    expect(result.current.state).toEqual(PRIMITIVES);

    const randomValue = PRIMITIVES[Math.floor(Math.random() * PRIMITIVES.length)];
    act(() => result.current.toggle(randomValue)());
    expect(result.current.state).toEqual(PRIMITIVES.filter((v) => v !== randomValue));

    act(() => result.current.toggle(randomValue)());
    expect(result.current.state?.sort()).toEqual(PRIMITIVES.sort());
  });
});

describe('useClientFilter With object values', () => {
  it('is same context as above', () => {
    const { result } = renderHook(() => useClientFilter(OBJECTS));
    expect(result.current.state).toEqual(OBJECTS);
    act(() => result.current.toggle(null)());
    expect(result.current.state).toBeNull();
    act(() => result.current.toggle(OBJECTS)());
    const randomValue = OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
    act(() => result.current.toggle(randomValue)());
    expect(result.current.state).toEqual(OBJECTS.filter((v) => !dequal(v, randomValue)));
    act(() => result.current.toggle(randomValue)());
    expect(result.current.state).toEqual(expect.arrayContaining(OBJECTS));
  });
});
