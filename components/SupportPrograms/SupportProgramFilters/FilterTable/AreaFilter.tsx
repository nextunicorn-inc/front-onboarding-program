import { identity } from 'components/SupportPrograms/SupportPrograms.utils';
import { AREA_TEXTS } from 'constants/supportPrograms';

import Row from './Row';
import FilterItem from '../FilterItem';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { Area } from '../SupportProgramFilters.types';

function AreaFilter() {
  const query = useSupportProgramFilters();
  const [activeAreas, toggle] = useFilterByQueryString<Area>(
    query.data?.areas ?? [],
    'areas',
    identity,
  );
  const reset = toggle('all');

  return (
    <Row resetColumns={reset} totalSelectedColumns={activeAreas.length} title="창업 기간">
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
