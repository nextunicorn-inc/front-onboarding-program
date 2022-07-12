import { useSupportProgramFilters, SupportProgramFilters } from './SupportProgramFilters';
import * as FilterStyled from './SupportProgramFilters/SupportProgramFilters.styled';

import TypeFilters from './SupportProgramFilters/TypeFilters';
import MultipleSelectionFilters from './SupportProgramFilters/MultipleSelectionFilters';

import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';
import { useClientFilter } from './SupportProgramFilters/SupportProgramFilters.hooks';
import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../graphql';

import Icons from '../../commonUi/Icons';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<SupportProgramTypeEnum>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges, areActiveAgesNotSelected] =
    useClientFilter<TargetCompanyAgeEnum>({
      multiple: true,
    });

  const [activeAreas, toggleAreas, filteredActiveAreas, areActiveAreasNotSelected] =
    useClientFilter<AreaEnum>({
      multiple: true,
    });

  const [activeHosts, toggleHosts, filteredActiveHosts, areActiveHostsNotSelected] =
    useClientFilter<string>({
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
              resetFilter={toggleAges('all')}
              notSelected={areActiveAgesNotSelected}
              keyExtractor={(data) => data}
              data={filterQuery.data.targetCompanyAges}
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeAges.includes(data)}
                  onClick={toggleAges(data)}
                >
                  <Icons.Check20Selected />
                  {TARGET_COMPANY_AGE_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
            />
          }
          areas={
            <MultipleSelectionFilters
              title="지원 분야"
              resetFilter={toggleAreas('all')}
              notSelected={areActiveAreasNotSelected}
              keyExtractor={(data) => data}
              data={filterQuery.data.areas}
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeAreas.includes(data)}
                  onClick={toggleAreas(data)}
                >
                  <Icons.Check20Selected />
                  {AREA_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
            />
          }
          hosts={
            <MultipleSelectionFilters
              title="주관 기관"
              resetFilter={toggleHosts('all')}
              notSelected={areActiveHostsNotSelected}
              keyExtractor={(data) => data.id}
              data={filterQuery.data.hosts}
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeHosts.includes(data.id)}
                  onClick={toggleHosts(data.id)}
                >
                  <Icons.Check20Selected />
                  {data.meta.name}
                </FilterStyled.FilterItem>
              )}
            />
          }
        />
      )}
    </div>
  );
}

export default SupportPrograms;
