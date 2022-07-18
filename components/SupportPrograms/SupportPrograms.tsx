import { useState } from 'react';
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

import useSupportProgramResults from './SupportProgramResults/SupportProgramResults.hooks';
import { ResultSupportPrograms } from './SupportProgramResults';

import { PageNavigation } from './PageNavigation';
import { getQueryStringValues } from '../../lib';

function SupportPrograms() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    query: { areas, targetCompanyAges, type, hosts },
  } = useRouter();

  const handleClickPageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const gqlAreas = getQueryStringValues<Area>(areas);
  const gqlTargetCompanyAges = getQueryStringValues<TargetCompanyAge>(targetCompanyAges);
  const gqlType = getQueryStringValues<Type>(type);
  const gqlHosts = getQueryStringValues<string>(hosts);

  const filterQuery = useSupportProgramFilters();

  const selectedFilter = {
    filter: {
      type: gqlType?.[0] ?? null,
      targetCompanyAges: gqlTargetCompanyAges,
      areas: gqlAreas,
      hosts: gqlHosts,
      page: pageNumber,
    },
  } as unknown as SupportProgramsQueryVariables;

  const { data: selectedSupportProgramsResultData } = useSupportProgramResults(selectedFilter);

  return (
    <div>
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
      {/* <ResultSupportPrograms data={selectedSupportProgramsResultData} /> */}
      <PageNavigation data={selectedSupportProgramsResultData} onClick={handleClickPageNumber} />
    </div>
  );
}

export default SupportPrograms;
