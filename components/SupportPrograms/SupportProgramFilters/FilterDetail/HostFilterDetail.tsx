import { Host } from '../SupportProgramFilters.types';
import { useClientFilter, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { contain } from '../../SupportPrograms.utils';
import FilterDetail from './FilterDetailRefactor';
import FilterItem from '../FilterItem';

type Props = {
  title: string;
  list: Host[];
};

function HostFilterDetail({ title, list }: Props) {
  const [activeHosts, toggle] = useFilterByQueryString<Host>(
    list,
    'hosts',
    (data) => data.meta.name,
  );

  const [state, toggleState] = useClientFilter<Host>({
    multiple: true,
    defaultValue: activeHosts,
  });
  const totalActiveState = state.length === 1 && state[0] === 'all' ? 0 : state.length;

  const onApply = () => {
    if (state.includes('all')) {
      return toggle('all')();
    }
    //TODO: Refactor to enforce type safety
    const filteredValues = state.filter((item) => item !== 'all') as Host[];
    return toggle(filteredValues.map((item) => item.meta.name));
  };

  return (
    <FilterDetail
      resetItems={toggleState('all')}
      title={title}
      onApply={onApply}
      totalSelectedItems={totalActiveState}
    >
      {list.map((item) => (
        <li key={item.id}>
          <FilterItem onClick={toggleState(item)} selected={contain(state, item)}>
            {item.meta.name}
          </FilterItem>
        </li>
      ))}
    </FilterDetail>
  );
}

export default HostFilterDetail;
