import * as Styled from './SupportPrograms.styled';

import {
  useSupportProgramFilters,
  TypeFilters,
  useClientFilter,
  FilterTable,
  FilterTableRow,
  FilterDetail,
} from './SupportProgramFilters';

import { useModal } from '../../commonUi/Modal';

import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';

import type { Area, TargetCompanyAge, Host, Type } from './SupportProgramFilters';
import { ResultSupportPrograms } from './SupportProgramResults';

import useSupportProgramResults from './SupportProgramResults/SupportProgramResults.hooks';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<Type>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAge>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<Area>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<Host>({
    multiple: true,
  });
  const { hide } = useModal();

  const testFilter = {
    filter: {
      type: filteredActiveTypes?.[0] ?? null,
      targetCompanyAges: filteredActiveAges,
      areas: filteredActiveAreas,
      hosts: filteredActiveHosts?.map((host) => host.id) ?? null,
      page: null,
    },
  };

  const { data } = useSupportProgramResults(testFilter);

  console.log(data);

  return (
    <Styled.Wrapper>
      {filterQuery.isSuccess && (
        <>
          <TypeFilters
            allTypes={filterQuery.data.types}
            activeTypes={activeTypes}
            onClick={toggleTypes}
          />
          <FilterTable
            ages={
              <FilterTableRow
                title="창업 기간"
                toggle={toggleAges}
                keyExtractor={(data) => data}
                data={filterQuery.data.targetCompanyAges}
                activeData={activeAges}
                renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="창업 기간"
                    toggle={toggleAges}
                    keyExtractor={(data) => data}
                    data={filterQuery.data.targetCompanyAges}
                    activeData={activeAges}
                    renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            areas={
              <FilterTableRow
                title="지원 분야"
                toggle={toggleAreas}
                keyExtractor={(data) => data}
                data={filterQuery.data.areas}
                activeData={activeAreas}
                renderItemText={(data) => AREA_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="지원 분야"
                    toggle={toggleAreas}
                    keyExtractor={(data) => data}
                    data={filterQuery.data.areas}
                    activeData={activeAreas}
                    renderItemText={(data) => AREA_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            hosts={
              <FilterTableRow
                title="주관 기관"
                toggle={toggleHosts}
                keyExtractor={(data) => data.id}
                data={filterQuery.data.hosts}
                activeData={activeHosts}
                renderItemText={(data) => data.meta.name}
                Detail={
                  <FilterDetail
                    title="주관 기관"
                    toggle={toggleHosts}
                    keyExtractor={(data) => data.id}
                    data={filterQuery.data.hosts}
                    activeData={activeHosts}
                    renderItemText={(data) => data.meta.name}
                    onClose={hide}
                  />
                }
              />
            }
          />
        </>
      )}

      <ResultSupportPrograms />
    </Styled.Wrapper>
  );
}

export default SupportPrograms;
