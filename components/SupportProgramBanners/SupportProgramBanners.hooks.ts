import { useRef, useEffect } from 'react';
import { useQuery } from 'react-query';

import {
  SUPPORT_PROGRAM_BANNERS,
  client,
  RecursivelyExcludeNull,
  SupportProgramBannersQuery,
} from '../../graphql';

type BeforeRefactoredType = RecursivelyExcludeNull<
  SupportProgramBannersQuery,
  'link' | 'mobileImageUrl'
>;

export default function useSupportProgramBanners() {
  return useQuery<BeforeRefactoredType, Error, BeforeRefactoredType['supportProgramBanners']>(
    useSupportProgramBanners.getKeys(),
    useSupportProgramBanners.fetcher,
    {
      select: (data) => data.supportProgramBanners,
    },
  );
}

useSupportProgramBanners.getKeys = () => ['supportProgramBanners'];
useSupportProgramBanners.fetcher = function () {
  return client.request<BeforeRefactoredType>(SUPPORT_PROGRAM_BANNERS);
};

export function useInterval(callback: () => void, delay: number | null) {
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function tick() {
      callbackRef.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
