import { useRef } from 'react';
import { useRouter } from 'next/router';

import { SupportProgramsQueryVariables } from '@/graphql';
import { SupportProgramsQuery } from './SupportProgramResults/SupportProgramResults.type';

import {
  useSupportProgramFilters,
  TypeFilters,
  FilterTable,
  AgeFilter,
  AreaFilter,
  HostFilter,
} from './SupportProgramFilters';

import * as Styled from './SupportPrograms.styled';

import type { Area, TargetCompanyAge, Type } from './SupportProgramFilters';

import { useSupportProgramResults } from './SupportProgramResults/SupportProgramResults.hooks';
import { ResultSupportPrograms } from './SupportProgramResults';

import { PageNavigation } from './PageNavigation';
import { getQueryStringValues } from '../../lib';

function SupportPrograms() {
  const wrapper = useRef<HTMLElement | null>(null);

  const router = useRouter();
  const {
    query: { areas, targetCompanyAges, type, hosts, page },
  } = useRouter();

  const gqlAreas = getQueryStringValues<Area>(areas);
  const gqlTargetCompanyAges = getQueryStringValues<TargetCompanyAge>(targetCompanyAges);
  const gqlType = getQueryStringValues<Type>(type);
  const gqlHosts = getQueryStringValues<string>(hosts);

  const selectedPage = (page ?? '1') as string;
  const gqlPage = parseInt(selectedPage, 10);

  const handleClickPageNumber = (pageNumber: number) => {
    wrapper.current?.scrollIntoView({ behavior: 'smooth' });

    return router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, page: pageNumber },
      },
      undefined,
      { shallow: true, scroll: false },
    );
  };

  const filterQuery = useSupportProgramFilters();

  const selectedFilter = {
    filter: {
      type: gqlType?.[0] ?? null,
      targetCompanyAges: gqlTargetCompanyAges,
      areas: gqlAreas,
      hosts: gqlHosts,
      page: gqlPage,
    },
  } as unknown as SupportProgramsQueryVariables;

  const { data: selectedSupportProgramsResultData } = useSupportProgramResults(selectedFilter);

  return (
    <Styled.Wrapper ref={wrapper}>
      {filterQuery.isSuccess && (
        <>
          <TypeFilters />
          <FilterTable>
            <AgeFilter />
            <AreaFilter />
            <HostFilter />
          </FilterTable>
        </>
      )}
      <ResultSupportPrograms data={selectedSupportProgramsResultData} />
      <PageNavigation data={selectedSupportProgramsResultData} onClick={handleClickPageNumber} />
    </Styled.Wrapper>
  );
}

export default SupportPrograms;
