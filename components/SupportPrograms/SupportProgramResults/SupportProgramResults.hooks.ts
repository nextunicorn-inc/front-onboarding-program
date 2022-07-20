import { useQuery } from 'react-query';
import { SupportProgramsQueryVariables } from '@/graphql';
import client from '../../../graphql/client';
import { SUPPORT_PROGRAMS } from '../../../graphql/queries/supportPrograms';
import { SupportProgramsQuery } from './SupportProgramResults.type';

export function useSupportProgramResults(option: SupportProgramsQueryVariables) {
  return useQuery<SupportProgramsQuery, Error, SupportProgramsQuery['supportPrograms']>(
    useSupportProgramResults.getKeys(option.filter),
    () => useSupportProgramResults.fetcher(option),
    {
      select: (data) => data.supportPrograms,
      keepPreviousData: true,
    },
  );
}

useSupportProgramResults.getKeys = (options: SupportProgramsQueryVariables['filter']) => [
  'supportPrograms',
  options,
];
useSupportProgramResults.fetcher = (option: SupportProgramsQueryVariables) =>
  client.request<SupportProgramsQuery, SupportProgramsQueryVariables>(SUPPORT_PROGRAMS, option);
