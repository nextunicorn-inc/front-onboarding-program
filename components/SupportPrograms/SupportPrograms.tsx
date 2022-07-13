import { ReactNode } from 'react';
import { dequal } from 'dequal';
import Icons from '../../commonUi/Icons';

import { useModal, Backdrop } from '../../commonUi/Modal';

import TypeFilters from './SupportProgramFilters/TypeFilters';
import FilterDetail from './SupportProgramFilters/FilterDetail/FilterDetail';
import * as FilterStyled from './SupportProgramFilters/SupportProgramFilters.styled';

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

  const [activeTypes, toggleTypes, filteredActiveTypes, setActiveTypes] =
    useClientFilter<SupportProgramTypeEnum>({
      multiple: false,
    });

  const [activeAges, toggleAges, filteredActiveAges, areActiveAgesNotSelected, setActiveAges] =
    useClientFilter<TargetCompanyAgeEnum>({
      multiple: true,
    });

  const [activeAreas, toggleAreas, filteredActiveAreas, areActiveAreasNotSelected, setActiveAreas] =
    useClientFilter<AreaEnum>({
      multiple: true,
    });

  const [activeHosts, toggleHosts, filteredActiveHosts, areActiveHostsNotSelected, setActiveHosts] =
    useClientFilter<FilterOptionsQuery['filterOptions']['hosts'][number]>({
      multiple: true,
    });

  const showWithBackdrop = (Comp: ReactNode) => () => {
    show(
      <Backdrop closable onClick={hide}>
        {Comp}
      </Backdrop>,
    );
  };

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
                  selected={activeAges.find((age) => dequal(age, data)) !== undefined}
                  onClick={toggleAges(data)}
                >
                  <Icons.Check20Selected />
                  {TARGET_COMPANY_AGE_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
              MoreButton={
                <FilterStyled.MoreButtonWrapper>
                  <FilterStyled.MoreButton
                    role="button"
                    onClick={showWithBackdrop(
                      <FilterDetail
                        title="test"
                        idExtractor={(item) => item}
                        data={filterQuery.data.targetCompanyAges}
                        renderItemTitle={(item) => TARGET_COMPANY_AGE_TEXTS[item]}
                        onClose={hide}
                        onApply={(state) => setActiveAges(state)}
                        defaultValue={activeAges}
                      />,
                    )}
                  />
                </FilterStyled.MoreButtonWrapper>
              }
            />
          }
          areas={
            <MultipleSelectionFilters
              title="지원 분야"
              resetFilter={toggleAreas('all')}
              notSelected={areActiveAreasNotSelected}
              keyExtractor={(data) => data}
              data={[...filterQuery.data.areas, ...filterQuery.data.areas]}
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeAreas.find((area) => dequal(area, data)) !== undefined}
                  onClick={toggleAreas(data)}
                >
                  <Icons.Check20Selected />
                  {AREA_TEXTS[data]}
                </FilterStyled.FilterItem>
              )}
              MoreButton={
                <FilterStyled.MoreButtonWrapper>
                  <FilterStyled.MoreButton
                    role="button"
                    onClick={showWithBackdrop(
                      <FilterDetail
                        title="test"
                        data={filterQuery.data.areas}
                        idExtractor={(item) => item}
                        renderItemTitle={(item) => AREA_TEXTS[item]}
                        onClose={hide}
                        onApply={(state) => setActiveAreas(state)}
                        defaultValue={activeAreas}
                      />,
                    )}
                  />
                </FilterStyled.MoreButtonWrapper>
              }
            />
          }
          hosts={
            <MultipleSelectionFilters
              title="주관 기관"
              resetFilter={toggleHosts('all')}
              notSelected={areActiveHostsNotSelected}
              keyExtractor={(data) => data.id}
              // data={filterQuery.data.hosts}
              data={[
                ...filterQuery.data.hosts,
                ...filterQuery.data.hosts,
                ...filterQuery.data.hosts,
              ]}
              renderItem={(data) => (
                <FilterStyled.FilterItem
                  selected={activeHosts.find((host) => dequal(host, data)) !== undefined}
                  onClick={toggleHosts(data)}
                >
                  <Icons.Check20Selected />
                  {data.meta.name}
                </FilterStyled.FilterItem>
              )}
              MoreButton={
                <FilterStyled.MoreButtonWrapper>
                  <FilterStyled.MoreButton
                    role="button"
                    onClick={showWithBackdrop(
                      <FilterDetail
                        idExtractor={(data) => data.id}
                        title="test"
                        data={filterQuery.data.hosts}
                        renderItemTitle={(item) => item.meta.name}
                        onClose={hide}
                        onApply={(state) => setActiveHosts(state)}
                        defaultValue={activeHosts}
                      />,
                    )}
                  />
                </FilterStyled.MoreButtonWrapper>
              }
            />
          }
        />
      )}
    </div>
  );
}

export default SupportPrograms;
