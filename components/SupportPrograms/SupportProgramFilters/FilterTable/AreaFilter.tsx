import { identity } from 'components/SupportPrograms/SupportPrograms.utils';
import { AREA_TEXTS } from 'constants/supportPrograms';

import Row from './Row';
import FilterItem from '../FilterItem';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { Area } from '../SupportProgramFilters.types';
import { AreaFilterDetail } from '../FilterDetail';

function AreaFilter() {
  const query = useSupportProgramFilters();
  const [activeAreas, toggle] = useFilterByQueryString<Area>(
    query.data?.areas ?? [],
    'areas',
    identity,
  );

  return (
    <Row
      RowDetail={<AreaFilterDetail title="지원 분야" list={query.data?.areas ?? []} />}
      resetColumns={toggle('all')}
      totalSelectedColumns={activeAreas.length}
      title="지원 분야"
    >
      {query.data?.areas.map((item) => (
        <li key={item}>
          <FilterItem onClick={toggle(item)} selected={activeAreas.includes(item)}>
            {AREA_TEXTS[item]}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default AreaFilter;
