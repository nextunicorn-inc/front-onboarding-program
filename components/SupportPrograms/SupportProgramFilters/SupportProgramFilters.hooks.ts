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

export function useClientFilter<T>(defaultValues: T[]) {
  const [state, setState] = useState<T[] | null>(() => {
    if (defaultValues !== undefined && defaultValues.length > 0) {
      return defaultValues;
    }
    return null;
  });

  const toggle = (nextValue: T[] | T | null) => () => {
    setState((prev) => {
      if (nextValue === null) {
        return null;
      }

      if (prev === null) {
        return Array.isArray(nextValue) ? nextValue : [nextValue];
      }

      const shouldPopOut = prev.find((item) => dequal(item, nextValue)) !== undefined;

      if (shouldPopOut) {
        const filteredState = prev.filter((item) => !dequal(item, nextValue));
        return filteredState.length === 0 ? null : filteredState;
      }

      return prev.concat(nextValue);
    });
  };

  return { state, toggle } as const;
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

  const unstableChoose = (nextQueryValue: string) => () => {
    if (nextQueryValue === 'all') {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: undefined },
        },
        undefined,
        {
          shallow: true,
          scroll: false,
        },
      );
      return;
    }

    delete router.query[queryKey];
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
  };

  let activeState: T[] | null;

  if (!queryValue) {
    activeState = [];
  } else if (typeof queryValue === 'string') {
    activeState = list.filter((item) => matcher(item) === queryValue);
  } else {
    activeState = list.filter((item) => queryValue.includes(matcher(item)));
  }

  return [activeState, toggle, unstableChoose] as const;
}
