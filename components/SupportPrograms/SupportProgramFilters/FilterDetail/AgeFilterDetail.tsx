import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { TargetCompanyAge } from '../SupportProgramFilters.types';
import * as Styled from './FilterDetail.styled';
import { useClientFilter, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';

import FilterDetailModal from './FilterDetailModal';
import FilterItem from '../FilterItem';
import { FilterList } from '../SupportProgramFilters.styled';

type Props = {
  title: string;
  list: TargetCompanyAge[];
};

function AgeFilterDetail({ title, list }: Props) {
  const [activeAges, toggle] = useFilterByQueryString<TargetCompanyAge>({
    list,
    queryKey: 'targetCompanyAges',
    matcher: identity,
  });

  const { state, toggle: toggleState } = useClientFilter<TargetCompanyAge>(activeAges ?? []);

  const totalSelectedAges = state?.length || 0;

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
              selected={totalSelectedAges === 0}
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
                {TARGET_COMPANY_AGE_TEXTS[item]}
              </FilterItem>
            </li>
          ))}
        </FilterList>
      </Styled.FilterListWrapper>
    </FilterDetailModal>
  );
}

export default AgeFilterDetail;
