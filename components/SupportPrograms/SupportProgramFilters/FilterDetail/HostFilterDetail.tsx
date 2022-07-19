import { Host, TargetCompanyAge } from '../SupportProgramFilters.types';
import { useFilterByQueryString, useClientFilter } from '../SupportProgramFilters.hooks';
import { contain } from '../../SupportPrograms.utils';
import FilterDetailModal from './FilterDetailModal';
import FilterItem from '../FilterItem';
import { HostSearch } from '../HostSearch';

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

  const { state, toggle: toggleState } = useClientFilter<Host>(activeHosts);
  const totalSelectedHosts = state?.length || 0;

  const onApply = () => {
    if (!state) {
      return toggle('all')();
    }

    return toggle(state.map((item) => item.meta.name))();
  };

  return (
    <FilterDetailModal
      resetItems={toggleState(null)}
      title={title}
      onApply={onApply}
      totalSelectedItems={totalSelectedHosts}
      searchable
      Search={<HostSearch data={list} onItemClick={toggleState} selectedData={state ?? []} />}
    >
      {list.map((item) => (
        <li key={item.id}>
          <FilterItem onClick={toggleState(item)} selected={contain(state ?? [], item)}>
            {item.meta.name}
          </FilterItem>
        </li>
      ))}
    </FilterDetailModal>
  );
}

export default HostFilterDetail;
