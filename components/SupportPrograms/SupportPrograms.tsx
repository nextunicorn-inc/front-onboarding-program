import { useRef } from 'react';
import { useRouter } from 'next/router';

import { SupportProgramsQueryVariables } from '@/graphql';
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
  const wrapper = useRef<HTMLLIElement | null>(null);

  const router = useRouter();
  const {
    query: { areas, targetCompanyAges, type, hosts, page },
  } = useRouter();

  const gqlAreas = getQueryStringValues<Area>(areas);
  const gqlTargetCompanyAges = getQueryStringValues<TargetCompanyAge>(targetCompanyAges);
  const gqlType = getQueryStringValues<Type>(type);
  const gqlHosts = getQueryStringValues<string>(hosts);
  const gqlPage = !page ? 1 : parseInt(page, 10);

  const handleClickPageNumber = (pageNumber: number) => {
    wrapper.current?.scrollIntoView({ behavior: 'smooth' });

    router.replace(
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
        <Styled.Wrapper>
          <TypeFilters />
          <FilterTable>
            <AgeFilter />
            <AreaFilter />
            <HostFilter />
          </FilterTable>
        </Styled.Wrapper>
      )}
      <ResultSupportPrograms data={selectedSupportProgramsResultData} />
      <PageNavigation data={selectedSupportProgramsResultData} onClick={handleClickPageNumber} />
    </Styled.Wrapper>
  );
}

export default SupportPrograms;
