import { useSupportProgramFilters, SupportProgramFilters } from './SupportProgramFilters';
import * as FilterStyled from './SupportProgramFilters/SupportProgramFilters.styled';

import TypeFilters from './SupportProgramFilters/TypeFilters';
import MultipleSelectionFilters from './SupportProgramFilters/MultipleSelectionFilters';

import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';
import { useClientFilter } from './SupportProgramFilters/SupportProgramFilters.hooks';
import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../graphql';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<SupportProgramTypeEnum>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAgeEnum>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<AreaEnum>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<string>({
    multiple: true,
  });

  return (
    <div>
      {filterQuery.isSuccess && (
        <SupportProgramFilters
          top={
            <TypeFilters
              allTypes={filterQuery.data.types}
              activeTypes={activeTypes}
              onClick={toggleTypes}
            />
          }
          ages={
            <MultipleSelectionFilters
              title="창업 기간"
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeAges.includes(data)}
                  onClick={toggleAges(data)}
                >
                  {TARGET_COMPANY_AGE_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
              keyExtractor={(data) => data}
              data={filterQuery.data.targetCompanyAges}
            />
          }
          areas={
            <MultipleSelectionFilters
              title="지원 분야"
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeAreas.includes(data)}
                  onClick={toggleAreas(data)}
                >
                  {AREA_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
              keyExtractor={(data) => data}
              data={filterQuery.data.areas}
            />
          }
          hosts={
            <MultipleSelectionFilters
              title="주관 기관"
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeHosts.includes(data.id)}
                  onClick={toggleHosts(data.id)}
                >
                  {data.meta.name}
                </FilterStyled.FilterItem>
              )}
              keyExtractor={(data) => data.id}
              data={filterQuery.data.hosts}
            />
          }
        />
      )}
    </div>
  );
}

export default SupportPrograms;
