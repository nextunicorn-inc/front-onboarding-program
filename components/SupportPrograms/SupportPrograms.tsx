import { useState } from 'react';
import { useSupportProgramFilters, SupportProgramFilters } from './SupportProgramFilters';
import * as FilterStyled from './SupportProgramFilters/SupportProgramFilters.styled';

import type { SupportProgramTypes, Areas, TargetCompanyAges } from './SupportProgramFilters';
import TypeFilters from './SupportProgramFilters/TypeFilters';
import MultipleSelectionFilters from './SupportProgramFilters/MultipleSelectionFilters';

import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, setActiveTypes] = useState<SupportProgramTypes>(['all']);
  const toggleTypes = (nextType: SupportProgramTypes[number]) => () => {
    setActiveTypes((prev) => {
      if (prev.includes(nextType)) {
        return prev;
      }
      return [nextType];
    });
  };

  const [activeAges, setActiveAges] = useState<TargetCompanyAges>(['all']);
  const toggleAges = (nextAge: TargetCompanyAges[number]) => () => {
    setActiveAges((prev) => {
      if (nextAge === 'all') {
        return ['all'];
      }
      return [...prev.filter((age) => age !== 'all'), nextAge];
    });
  };

  const [activeAreas, setActiveAreas] = useState<Areas>(['all']);
  const toggleArea = (nextArea: Areas[number]) => () => {
    setActiveAreas((prev) => {
      if (nextArea === 'all') {
        return ['all'];
      }
      return [...prev.filter((area) => area !== 'all'), nextArea];
    });
  };

  const [activeHosts, setActiveHosts] = useState<string[]>(['all']);
  const toggleHosts = (nextHost: string) => () => {
    setActiveHosts((prev) => {
      if (nextHost === 'all') {
        return ['all'];
      }
      return prev.filter((item) => item !== 'all').concat(nextHost);
    });
  };

  const filteredActiveTypes = activeTypes.filter((item) => item !== 'all');
  const filteredAges = activeTypes.filter((item) => item !== 'all');
  const filteredAreas = activeTypes.filter((item) => item !== 'all');
  const filteredHosts = activeTypes.filter((item) => item !== 'all');

  const typesField = filteredActiveTypes.length > 0 ? filteredActiveTypes : null;
  const agesField = filteredAges.length > 0 ? filteredAges : null;
  const areasField = filteredAreas.length > 0 ? filteredAreas : null;
  const hostsField = filteredHosts.length > 0 ? filteredHosts : null;

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
                  onClick={toggleArea(data)}
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
