import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { dequal } from 'dequal';

import { client, FILTER_OPTIONS } from '@/graphql';

import type { FilterOptionsQuery } from './SupportProgramFilters.types';

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

type Params<T> = {
  list: T[];
  queryKey: string;
  matcher: (val: T) => string;
  onlySingleValue?: boolean;
};

const OPTIONS = { shallow: true, scroll: false };

export function useFilterByQueryString<T>({
  list,
  queryKey,
  matcher,
  onlySingleValue = false,
}: Params<T>) {
  const router = useRouter();
  const queryValue = router.query[queryKey];

  const toggle = (nextQueryValue: string | string[] | null) => () => {
    delete router.query[queryKey];

    if (nextQueryValue === null) {
      return router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: undefined },
        },
        undefined,
        OPTIONS,
      );
    }

    if (queryValue === undefined || onlySingleValue) {
      return router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: nextQueryValue },
        },
        undefined,
        OPTIONS,
      );
    }

    const isQueryValueArray = Array.isArray(queryValue);
    const isNextQueryValueArray = Array.isArray(nextQueryValue);

    // if Two values are primitive
    if (!isQueryValueArray && !isNextQueryValueArray) {
      return router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [queryKey]: queryValue === nextQueryValue ? undefined : [queryValue, nextQueryValue],
          },
        },
        undefined,
        OPTIONS,
      );
    }

    if (isQueryValueArray && isNextQueryValueArray) {
      return router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [queryKey]: Array.from(new Set<string>(queryValue.concat(nextQueryValue))),
          },
        },
        undefined,
        OPTIONS,
      );
    }

    if (isQueryValueArray && !isNextQueryValueArray) {
      return router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [queryKey]: Array.from(new Set<string>(queryValue.concat(nextQueryValue))),
          },
        },
        undefined,
        OPTIONS,
      );
    }

    if (!isQueryValueArray && isNextQueryValueArray) {
      return router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [queryKey]: Array.from(new Set<string>(nextQueryValue.concat(queryValue))),
          },
        },
        undefined,
        OPTIONS,
      );
    }
  };

  let activeState: T[] | null;

  if (!queryValue) {
    activeState = null;
  } else if (typeof queryValue === 'string') {
    activeState = list.filter((item) => matcher(item) === queryValue);
  } else {
    activeState = list.filter((item) => queryValue.includes(matcher(item)));
  }

  return [activeState, toggle] as const;
}
