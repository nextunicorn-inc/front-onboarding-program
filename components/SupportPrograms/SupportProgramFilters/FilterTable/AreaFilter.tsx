import { identity } from 'components/SupportPrograms/SupportPrograms.utils';
import { AREA_TEXTS } from 'constants/supportPrograms';

import Row from './Row';
import FilterItem from '../FilterItem';
import { useSupportProgramFilters, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { Area } from '../SupportProgramFilters.types';
import { AreaFilterDetail } from '../FilterDetail';

function AreaFilter() {
  const query = useSupportProgramFilters();
  const [activeAreas, toggle] = useFilterByQueryString<Area>({
    list: query.data?.areas ?? [],
    queryKey: 'areas',
    matcher: identity,
  });

  const totalSelectedAreas = activeAreas?.length ?? 0;

  return (
    <Row
      totalSelectedColumns={totalSelectedAreas}
      RowDetail={<AreaFilterDetail title="지원 분야" list={query.data?.areas ?? []} />}
      title="지원 분야"
    >
      <li style={{ marginLeft: 0 }}>
        <FilterItem opacity={0.6} onClick={toggle(null)} selected={totalSelectedAreas === 0}>
          전체
        </FilterItem>
      </li>
      {query.data?.areas.map((item) => (
        <li key={item}>
          <FilterItem
            opacity={0.6}
            onClick={toggle(item)}
            selected={activeAreas?.includes(item) ?? false}
          >
            {AREA_TEXTS[item]}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default AreaFilter;
