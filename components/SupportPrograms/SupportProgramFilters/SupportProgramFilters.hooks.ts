import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
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
  const isMountedRef = useRef(false);

  const [state, setState] = useState<T[] | null>(() => {
    if (!queryValue) {
      return null;
    }

    return list.filter((item) => {
      if (typeof item === 'string') {
        return matcher(item) === queryValue;
      }
      return queryValue.includes(matcher(item));
    });
  });

  useEffect(() => {
    if (!router.isReady || isMountedRef.current) {
      return;
    }
    isMountedRef.current = true;

    setState(() => {
      if (!queryValue) {
        return null;
      }

      return list.filter((item) => queryValue.includes(matcher(item)));
    });
  }, [queryValue, list, matcher, router.isReady]);

  const toggle = (nextQueryValue: T | T[] | null) => () => {
    if (nextQueryValue === null) {
      delete router.query[queryKey];
      if (state === null) {
        return;
      }

      setState(null);
      return router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query },
        },
        undefined,
        OPTIONS,
      );
    }

    const isNextValueArray = Array.isArray(nextQueryValue);

    const mappedQueryStringList = isNextValueArray
      ? nextQueryValue.map(matcher)
      : [matcher(nextQueryValue)];

    if (onlySingleValue || state === null) {
      setState(Array.isArray(nextQueryValue) ? nextQueryValue : [nextQueryValue]);
      return router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: mappedQueryStringList },
        },
        undefined,
        OPTIONS,
      );
    }

    if (isNextValueArray) {
      const filteredState = state.filter((item) => !mappedQueryStringList.includes(matcher(item)));
      const filteredNextValue = nextQueryValue.filter(
        (item) => !state.map(matcher).includes(matcher(item)),
      );

      const nextState = filteredState.concat(filteredNextValue);
      setState(nextState);
      return router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, [queryKey]: nextState.map(matcher) },
        },
        undefined,
        OPTIONS,
      );
    }

    const filteredState = state.filter((item) => matcher(item) !== matcher(nextQueryValue));
    let nextState: T[];
    if (state.length === filteredState.length) {
      nextState = state.concat(nextQueryValue);
    } else {
      nextState = filteredState;
    }

    setState(nextState);
    return router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, [queryKey]: nextState.map(matcher) },
      },
      undefined,
      OPTIONS,
    );
  };

  return [state, toggle] as const;
}
