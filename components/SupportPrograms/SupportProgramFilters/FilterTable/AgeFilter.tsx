import { identity } from 'components/SupportPrograms/SupportPrograms.utils';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';

import Row from './Row';
import FilterItem from '../FilterItem';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { TargetCompanyAge } from '../SupportProgramFilters.types';
import { AgeFilterDetail } from '../FilterDetail';

function AgeFilter() {
  const query = useSupportProgramFilters();
  const [activeAges, toggle] = useFilterByQueryString<TargetCompanyAge>({
    list: query.data?.targetCompanyAges ?? [],
    queryKey: 'targetCompanyAges',
    matcher: identity,
  });

  return (
    <Row
      RowDetail={<AgeFilterDetail title="창업 기간" list={query.data?.targetCompanyAges ?? []} />}
      resetColumns={toggle(null)}
      totalSelectedColumns={activeAges?.length ?? 0}
      title="창업 기간"
    >
      {query.data?.targetCompanyAges.map((item) => (
        <li key={item}>
          <FilterItem
            opacity={0.4}
            onClick={toggle(item)}
            selected={activeAges?.includes(item) ?? false}
          >
            {TARGET_COMPANY_AGE_TEXTS[item]}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default AgeFilter;
