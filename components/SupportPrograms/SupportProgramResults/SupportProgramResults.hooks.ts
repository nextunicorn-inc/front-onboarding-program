import { useQuery } from 'react-query';
import client from '../../../graphql/client';
import { SUPPORT_PROGRAMS } from '../../../graphql/queries/supportPrograms';
import { SupportProgramsQueryVariables } from '../../../graphql';
import { SupportProgramsQuery } from './SupportProgramResults.type';

export default function useSupportProgramResults(filter: SupportProgramsQueryVariables) {
  return useQuery<SupportProgramsQuery, Error, SupportProgramsQuery['supportPrograms']>(
    useSupportProgramResults.getKeys(filter.filter),
    () => useSupportProgramResults.fetcher(filter),
    {
      select: (data) => data.supportPrograms,
    },
  );
}

useSupportProgramResults.getKeys = (options: SupportProgramsQueryVariables['filter']) => [
  'supportPrograms',
  options,
];
useSupportProgramResults.fetcher = (filter: SupportProgramsQueryVariables) =>
  client.request<SupportProgramsQuery, SupportProgramsQueryVariables>(SUPPORT_PROGRAMS, filter);
