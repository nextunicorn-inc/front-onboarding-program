import { useQuery } from 'react-query';

import client from '../../../graphql/client';
import { FILTER_OPTIONS } from '../../../graphql/queries';
import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../../graphql';

type FilterOptionsQuery = {
  filterOptions: {
    areas: Array<AreaEnum>;
    targetCompanyAges: Array<TargetCompanyAgeEnum>;
    types: Array<SupportProgramTypeEnum>;
    hosts: Array<{ id: string; meta: { name: string } }>;
  };
};

export default function useSupportProgramFilters() {
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
