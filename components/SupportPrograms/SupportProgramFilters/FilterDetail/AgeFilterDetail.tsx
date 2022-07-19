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
  const [activeAges, toggle] = useFilterByQueryString<TargetCompanyAge>(
    list,
    'targetCompanyAges',
    identity,
  );
  const [state, toggleState] = useClientFilter<TargetCompanyAge>({
    multiple: true,
    defaultValue: activeAges,
  });

  const totalActiveState = state.length === 1 && state[0] === 'all' ? 0 : state.length;
  const onApply = () => {
    if (state.includes('all')) {
      return toggle('all')();
    }
    return toggle(state.filter((v) => v !== 'all'))();
  };

  return (
    <FilterDetailModal
      resetItems={toggleState('all')}
      title={title}
      onApply={onApply}
      totalSelectedItems={totalActiveState}
    >
      {list.map((item) => (
        <li key={item}>
          <FilterItem onClick={toggleState(item)} selected={state.includes(item)}>
            {item}
          </FilterItem>
        </li>
      ))}
    </FilterDetailModal>
  );
}

export default AgeFilterDetail;