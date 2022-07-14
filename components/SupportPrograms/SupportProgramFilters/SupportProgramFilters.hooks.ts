import { useState } from 'react';
import { useQuery } from 'react-query';
import { dequal } from 'dequal';

import { client, FILTER_OPTIONS } from '../../../graphql';

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
  let filteredValue: T[] | null;

  if (internalFilteredState.length === 0) {
    filteredValue = showNullWhenEmpty ? null : [];
  } else {
    filteredValue = internalFilteredState;
  }

  return [state, toggle, filteredValue] as const;
}
