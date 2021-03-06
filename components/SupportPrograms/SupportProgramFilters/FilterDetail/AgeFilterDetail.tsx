import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { TargetCompanyAge } from '../SupportProgramFilters.types';
import { useClientFilter, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';

import FilterDetailModal from './FilterDetailModal';
import FilterItem from '../FilterItem';

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
      totalSelectedItems={totalSelectedAges}
    >
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
    </FilterDetailModal>
  );
}

export default AgeFilterDetail;
