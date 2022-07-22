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
    matcher: (data) => data.id,
  });

  const totalSelectedHost = activeHostInfo?.length ?? 0;

  return (
    <Row
      RowDetail={<HostFilterDetail title="주관 기관" list={query.data?.hosts ?? []} />}
      totalSelectedColumns={totalSelectedHost}
      title="주관 기관"
    >
      <li style={{ marginLeft: 0 }}>
        <FilterItem opacity={0.6} onClick={toggle(null)} selected={totalSelectedHost === 0}>
          전체
        </FilterItem>
      </li>
      {query.data?.hosts.map((item) => (
        <li key={item.id}>
          <FilterItem
            opacity={0.6}
            onClick={toggle(item.id)}
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
