import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import { createTinyReplaceRouter } from 'test-utils';
import { useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const PRIMITIVE_SERVER_VALUES = [1, 2, 3].map(String);
const SERVER_VALUES = [
  {
    foo: {
      bar: {
        baz: {
          id: '1',
        },
      },
    },
  },
  {
    foo: {
      bar: {
        baz: {
          id: '2',
        },
      },
    },
  },
  {
    foo: {
      bar: {
        baz: {
          id: '3',
        },
      },
    },
  },
  {
    foo: {
      bar: {
        baz: {
          id: '4',
        },
      },
    },
  },
  {
    foo: {
      bar: {
        baz: {
          id: 'steven',
        },
      },
    },
  },
];

const QUERY_KEY = 'values';
type ServerValue = typeof SERVER_VALUES[number];
const OBJECT_MATCHER = (data: ServerValue) => data.foo.bar.baz.id;

describe('useFilterByQueryString initialization', () => {
  it('should return null when the querystring is empty', () => {
    const mockRouter = createTinyReplaceRouter({});
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result } = renderHook(() =>
      useFilterByQueryString({
        list: PRIMITIVE_SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    expect(result.current[0]).toBeNull();
  });

  it('should return null when the list property is empty array', () => {
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: 'good' });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result } = renderHook(() =>
      useFilterByQueryString({
        list: [],
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    expect(result.current[0]).toBeNull();
  });

  it('should return FILTERED querystring values', () => {
    const invalidQueryValues = [...PRIMITIVE_SERVER_VALUES[0]].concat('steven');
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: invalidQueryValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result } = renderHook(() =>
      useFilterByQueryString({
        list: PRIMITIVE_SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    expect(result.current[0]).toEqual(invalidQueryValues.filter((v) => !Number.isNaN(Number(v))));
  });

  it('should return FILTERED querystring value when list is object[]', () => {
    /*
     * The matcher property is used to map object to string.
     * This string will be matched to query strings to filter out.
     * type A = { id: string }
     * type Matcher = (data: A) => A.id
     * Inside this hook, the A[] is mapped to (A.id)[], and this array will be compared to
     * (query string bound to query Key)[]
     * */

    const queryStringValues = ['steven', 'steven22', '1'];
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: queryStringValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result } = renderHook(() =>
      useFilterByQueryString<ServerValue>({
        list: SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: OBJECT_MATCHER,
      }),
    );

    expect(result.current[0]).toEqual([
      { foo: { bar: { baz: { id: '1' } } } },
      { foo: { bar: { baz: { id: 'steven' } } } },
    ]);
  });
});

describe('useFilterByQueryString toggle', () => {
  it('should append querystring - primitive', () => {
    const queryStringValues = PRIMITIVE_SERVER_VALUES.slice(0, 2);
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: queryStringValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result, rerender } = renderHook(() =>
      useFilterByQueryString({
        list: PRIMITIVE_SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    expect(result.current[0]).toEqual(queryStringValues);

    act(() => result.current[1]('3')() as void);
    rerender();
    expect(mockRouter.query[QUERY_KEY]).toEqual(PRIMITIVE_SERVER_VALUES);
    expect(result.current[0]).toEqual(PRIMITIVE_SERVER_VALUES);

    const THE_VALUE_NOT_INCLUDED_IN_REMOTE_SERVER = '4';

    act(() => result.current[1](THE_VALUE_NOT_INCLUDED_IN_REMOTE_SERVER)() as void);
    rerender();
    expect(mockRouter.query[QUERY_KEY]).toEqual(PRIMITIVE_SERVER_VALUES);
    expect(result.current[0]).toEqual(PRIMITIVE_SERVER_VALUES);
  });

  it('should append querystring - objects', () => {
    const queryStringValues = SERVER_VALUES.slice(0, 2).map((data) => data.foo.bar.baz.id);
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: queryStringValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result, rerender } = renderHook(() =>
      useFilterByQueryString({
        list: SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: OBJECT_MATCHER,
      }),
    );

    expect(result.current[0]).toEqual(SERVER_VALUES.slice(0, 2));
    act(() => result.current[1](SERVER_VALUES[2].foo.bar.baz.id)() as void);
    rerender();
    expect(mockRouter.query[QUERY_KEY]).toEqual(
      SERVER_VALUES.slice(0, 3).map((d) => d.foo.bar.baz.id),
    );
    expect(result.current[0]).toEqual(SERVER_VALUES.slice(0, 3));

    const nextValue = {
      foo: { bar: { baz: { id: 'stevenTwo' } } },
    };
    act(() => result.current[1](nextValue.foo.bar.baz.id)() as void);
    rerender();
    expect(mockRouter.query[QUERY_KEY]).toEqual(SERVER_VALUES.slice(0, 3).map(OBJECT_MATCHER));
    expect(result.current[0]).toEqual(SERVER_VALUES.slice(0, 3));
  });

  it('should toggle value - primitives', () => {
    const primitiveServerValues = [1, 2, 3].map(String);
    const queryStringValues = primitiveServerValues.slice(0, 2);
    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: queryStringValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result, rerender } = renderHook(() =>
      useFilterByQueryString({
        list: primitiveServerValues,
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    const firstValue = primitiveServerValues[0];
    act(() => result.current[1](firstValue)() as void);
    rerender();
    let filteredValue = queryStringValues.filter((v) => v !== firstValue);
    expect(mockRouter.query[QUERY_KEY]).toEqual(filteredValue);
    expect(result.current[0]).toEqual(filteredValue);
    act(() => result.current[1](firstValue)() as void);
    rerender();
    filteredValue = queryStringValues;
    expect(mockRouter.query[QUERY_KEY]).toEqual(expect.arrayContaining(filteredValue));
    expect(result.current[0]).toEqual(expect.arrayContaining(filteredValue));
  });

  it('should toggle value - objects', () => {
    const queryStringValues = SERVER_VALUES.map((d) => d.foo.bar.baz.id);
    const [firstValue] = SERVER_VALUES;
    const firstQueryStringValue = firstValue.foo.bar.baz.id;

    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: queryStringValues });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result, rerender } = renderHook(() =>
      useFilterByQueryString({
        list: SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: OBJECT_MATCHER,
      }),
    );

    act(() => result.current[1](firstQueryStringValue)() as void);
    rerender();

    const filteredValues = queryStringValues.filter((d) => d !== firstQueryStringValue);
    expect(mockRouter.query[QUERY_KEY]).toEqual(filteredValues);
    expect(result.current[0]).toEqual(SERVER_VALUES.slice(1));

    act(() => result.current[1](firstQueryStringValue)() as void);
    rerender();

    expect(mockRouter.query[QUERY_KEY]).toEqual(expect.arrayContaining(queryStringValues));
    expect(result.current[0]).toEqual(expect.arrayContaining(SERVER_VALUES));
  });

  it('should merge querystring values', () => {
    // This case is when user click apply button in the modal
    const BASE_QUERYSTRING = PRIMITIVE_SERVER_VALUES[0];
    const NEXT_QUERYSTRINGS = PRIMITIVE_SERVER_VALUES.slice(1);

    const mockRouter = createTinyReplaceRouter({ [QUERY_KEY]: BASE_QUERYSTRING });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { result, rerender } = renderHook(() =>
      useFilterByQueryString({
        list: PRIMITIVE_SERVER_VALUES,
        queryKey: QUERY_KEY,
        matcher: identity,
      }),
    );

    expect(result.current[0]).toEqual([BASE_QUERYSTRING]);
    act(() => result.current[1](NEXT_QUERYSTRINGS)() as void);
    rerender();
    expect(mockRouter.query[QUERY_KEY]).toEqual(expect.arrayContaining(PRIMITIVE_SERVER_VALUES));
    expect(result.current[0]).toEqual(expect.arrayContaining(PRIMITIVE_SERVER_VALUES));
  });
});
