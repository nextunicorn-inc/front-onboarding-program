import { ReactNode } from 'react';
import { dequal } from 'dequal';
import Icons from '../../commonUi/Icons';

import { useModal, Backdrop } from '../../commonUi/Modal';

import TypeFilters from './SupportProgramFilters/TypeFilters';

import { useSupportProgramFilters, SupportProgramFilters } from './SupportProgramFilters';
import MultipleSelectionFilters from './SupportProgramFilters/MultipleSelectionFilters';

import {
  useClientFilter,
  FilterOptionsQuery,
} from './SupportProgramFilters/SupportProgramFilters.hooks';
import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../graphql';
import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();
  const { show, hide } = useModal();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<SupportProgramTypeEnum>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAgeEnum>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<AreaEnum>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<
    FilterOptionsQuery['filterOptions']['hosts'][number]
  >({
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
              toggle={toggleAges}
              keyExtractor={(data) => data}
              data={filterQuery.data.targetCompanyAges}
              activeData={activeAges}
              renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
            />
          }
          areas={
            <MultipleSelectionFilters
              title="지원 분야"
              toggle={toggleAreas}
              keyExtractor={(data) => data}
              data={filterQuery.data.areas}
              activeData={activeAreas}
              renderItemText={(data) => AREA_TEXTS[data]}
            />
          }
          hosts={
            <MultipleSelectionFilters
              title="주관 기관"
              toggle={toggleHosts}
              keyExtractor={(data) => data.id}
              data={filterQuery.data.hosts}
              activeData={activeHosts}
              renderItemText={(data) => data.meta.name}
            />
          }
        />
      )}
    </div>
  );
}

export default SupportPrograms;
