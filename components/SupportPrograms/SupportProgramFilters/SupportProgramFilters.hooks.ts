import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { dequal } from 'dequal';

import { client, FILTER_OPTIONS } from '@/graphql';

import type { WithAll, FilterOptionsQuery } from './SupportProgramFilters.types';

export function useSupportProgramFilters() {
  return useQuery<FilterOptionsQuery, Error, FilterOptionsQuery['filterOptions']>(
    useSupportProgramFilters.getKeys(),
    useSupportProgramFilters.fetcher,
    {
      select: (data) => data.filterOptions,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  );
}

useSupportProgramFilters.getKeys = () => ['supportProgramFilters'];
useSupportProgramFilters.fetcher = () => client.request<FilterOptionsQuery>(FILTER_OPTIONS);

type Options<T> = {
  /* 다중선택 필터 */
  multiple?: boolean;
  /* T[]의 길이가 0일 때 보여주는 값. true으로 설정할 경우 null을 할당하게 됨 */
  showNullWhenEmpty?: boolean;
  defaultValue?: WithAll<T>[];
};

export function useClientFilter<T>({
  multiple = false,
  showNullWhenEmpty = true,
  defaultValue,
}: Options<T> = {}) {
  type State = WithAll<T>[];

  const [state, setState] = useState<State>(() => {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    return ['all'];
  });

  const toggle = (next: State[number]) => () => {
    setState((prev) => {
      if (next === 'all') {
        return ['all'];
      }

      const shouldPopout = prev.find((item) => dequal(item, next)) !== undefined;

      if (shouldPopout && multiple) {
        const poppedData = prev.filter((item) => item !== next);
        return poppedData.length === 0 ? ['all'] : poppedData;
      }

      if (shouldPopout) {
        return ['all'];
      }

      if (multiple) {
        return prev.filter((item) => item !== 'all').concat(next);
      }

      return [next];
    });
  };

  const internalFilteredState = state.filter((item) => item !== 'all') as T[];
  let filteredValue: T[] | T | null;

  if (internalFilteredState.length === 0) {
    filteredValue = showNullWhenEmpty ? null : [];
  } else {
    filteredValue = internalFilteredState;

    if (!multiple) {
      const [val] = internalFilteredState;
      filteredValue = val;
    }
  }

  return [state, toggle, filteredValue] as const;
}

export function useFilterByQueryString<T>(
  // The list with which you want to match for query parameters to get active items
  list: T[],
  // The Query key
  queryKey: string,
  // MatcherFunction
  // When you just compare list to queryValue with reference equality,
  // the filter logic is constrainted to item === string.
  // The example is: list.filter(item => item === queryValue)
  // But We want to react dynamic case to match with queryValue.
  // For example, When T is { id: string, [idontknow: string]: unknown }
  // we should filter via T.id === queryValue
  // In this case, we should pass (item) => item.id.
  matcher: (val: T) => string,
) {
  const router = useRouter();
  const queryValue = router.query[queryKey];

  const toggle = (nextQueryValue: string | string[]) => () => {
    if (nextQueryValue === 'all') {
      delete router.query[queryKey];
      router.replace(
        {
          pathname: router.pathname,
          // query: router.query,
          query: { ...router.query, [queryKey]: undefined },
        },
        undefined,
        { shallow: true, scroll: false },
      );
      return;
    }

    if (!queryValue) {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: nextQueryValue },
        },
        undefined,
        { shallow: true, scroll: false },
      );

      return;
    }

    if (Array.isArray(nextQueryValue)) {
      console.log(nextQueryValue);
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: nextQueryValue },
        },
        undefined,
        {
          shallow: true,
          scroll: false,
        },
      );
      return;
    }

    const shouldDelete =
      typeof queryValue === 'string'
        ? queryValue === nextQueryValue
        : queryValue.includes(nextQueryValue);
    const copyOfQueryValue = typeof queryValue === 'string' ? [queryValue] : queryValue.slice();

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          [queryKey]: shouldDelete
            ? copyOfQueryValue.filter((v) => v !== nextQueryValue)
            : copyOfQueryValue.concat([nextQueryValue]),
        },
      },
      undefined,
      { shallow: true, scroll: false },
    );
  };

  let activeState: T[] | null;

  if (!queryValue) {
    activeState = [];
  } else if (typeof queryValue === 'string') {
    activeState = list.filter((item) => matcher(item) === queryValue);
  } else {
    activeState = list.filter((item) => queryValue.includes(matcher(item)));
  }

  return [activeState, toggle] as const;
}
