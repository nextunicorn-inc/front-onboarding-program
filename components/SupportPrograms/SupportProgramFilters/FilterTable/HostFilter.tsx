import Row from './Row';
import FilterItem from '../FilterItem';
import { useSupportProgramFilters, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { Host } from '../SupportProgramFilters.types';
import { HostFilterDetail } from '../FilterDetail';

function HostFilter() {
  const query = useSupportProgramFilters();
  const [activeHostInfo, toggle] = useFilterByQueryString<Host>({
    list: query.data?.hosts ?? [],
    queryKey: 'hosts',
    matcher: (data) => data.meta.name,
  });

  return (
    <Row
      RowDetail={<HostFilterDetail title="주관 기관" list={query.data?.hosts ?? []} />}
      resetColumns={toggle(null)}
      totalSelectedColumns={activeHostInfo?.length || 0}
      title="주관 기관"
    >
      {query.data?.hosts.map((item) => (
        <li key={item.id}>
          <FilterItem
            onClick={toggle(item)}
            selected={activeHostInfo?.map((d) => d.meta.name)?.includes(item.meta.name) || false}
          >
            {item.meta.name}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default HostFilter;
