import { useQuery } from 'react-query';

import {
  client,
  FEATURED_SUPPORT_PROGRAMS,
  RecursivelyExcludeNull,
  FeaturedSupportProgramsQuery,
} from '@/graphql';

type BeforeRefactoredType = RecursivelyExcludeNull<FeaturedSupportProgramsQuery, 'outerApplyLink'>;

export default function useFeaturedSupportPrograms() {
  return useQuery<BeforeRefactoredType, Error, BeforeRefactoredType['featuredSupportPrograms']>(
    useFeaturedSupportPrograms.getKeys(),
    useFeaturedSupportPrograms.fetcher,
    {
      select: (data) => data.featuredSupportPrograms,
    },
  );
}

useFeaturedSupportPrograms.getKeys = () => ['featuredSupportPrograms'];
useFeaturedSupportPrograms.fetcher = () => client.request(FEATURED_SUPPORT_PROGRAMS);
