import { Host } from '../SupportProgramFilters.types';
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
  const [activeHosts, toggle] = useFilterByQueryString<Host>({
    list,
    queryKey: 'hosts',
    matcher: (data) => data.id,
  });

  const { state, toggle: toggleState } = useClientFilter<Host>(activeHosts ?? []);
  const totalSelectedHosts = state?.length || 0;

  return (
    <FilterDetailModal
      resetItems={toggleState(null)}
      title={title}
      onApply={state ? toggle(state) : toggle(null)}
      totalSelectedItems={totalSelectedHosts}
      searchable
      Search={<HostSearch data={list} onItemClick={toggleState} selectedData={state ?? []} />}
    >
      {list.map((item) => (
        <li key={item.id}>
          <FilterItem
            opacity={0.6}
            onClick={toggleState(item)}
            selected={contain(state ?? [], item)}
          >
            {item.meta.name}
          </FilterItem>
        </li>
      ))}
    </FilterDetailModal>
  );
}

export default HostFilterDetail;
