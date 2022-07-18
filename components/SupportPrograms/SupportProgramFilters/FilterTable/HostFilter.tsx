import Row from './Row';
import FilterItem from '../FilterItem';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { Host } from '../SupportProgramFilters.types';
import { HostFilterDetail } from '../FilterDetail';

function HostFilter() {
  const query = useSupportProgramFilters();
  const [activeHostInfo, toggle] = useFilterByQueryString<Host>(
    query.data?.hosts ?? [],
    'hosts',
    (data) => data.meta.name,
  );

  const activeHostNames = activeHostInfo.map((v) => v.meta.name);
  const reset = toggle('all');
  return (
    <Row
      RowDetail={<HostFilterDetail title="주관 기관" list={query.data?.hosts ?? []} />}
      resetColumns={reset}
      totalSelectedColumns={activeHostNames.length}
      title="주관 기관"
    >
      {query.data?.hosts.map(({ id, meta: { name } }) => (
        <li key={id}>
          <FilterItem onClick={toggle(name)} selected={activeHostNames.includes(name)}>
            {name}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default HostFilter;
