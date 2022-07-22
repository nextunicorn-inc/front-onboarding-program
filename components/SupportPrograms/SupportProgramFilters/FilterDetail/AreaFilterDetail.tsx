import { AREA_TEXTS } from 'constants/supportPrograms';
import * as Styled from './FilterDetail.styled';
import { Area } from '../SupportProgramFilters.types';
import { useFilterByQueryString, useClientFilter } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';
import FilterDetailModal from './FilterDetailModal';
import FilterItem from '../FilterItem';
import { FilterList } from '../SupportProgramFilters.styled';

type Props = {
  title: string;
  list: Area[];
};

function AreaFilterDetail({ title, list }: Props) {
  const [activeAreas, toggle] = useFilterByQueryString<Area>({
    list,
    queryKey: 'areas',
    matcher: identity,
  });
  const { state, toggle: toggleState } = useClientFilter<Area>(activeAreas ?? []);
  const totalSelectedAreas = state?.length || 0;

  return (
    <FilterDetailModal
      resetItems={toggleState(null)}
      title={title}
      onApply={state ? toggle(state.filter(Boolean)) : toggle(null)}
    >
      <Styled.FilterListWrapper>
        <FilterList $wrap>
          <li>
            <FilterItem
              opacity={0.6}
              onClick={toggleState(null)}
              selected={totalSelectedAreas === 0}
            >
              전체
            </FilterItem>
          </li>
          {list.map((item) => (
            <li key={item}>
              <FilterItem
                opacity={0.4}
                onClick={toggleState(item)}
                selected={state?.includes(item) ?? false}
              >
                {AREA_TEXTS[item]}
              </FilterItem>
            </li>
          ))}
        </FilterList>
      </Styled.FilterListWrapper>
    </FilterDetailModal>
  );
}

export default AreaFilterDetail;
