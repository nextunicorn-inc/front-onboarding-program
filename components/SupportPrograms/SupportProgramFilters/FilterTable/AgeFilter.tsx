import { identity } from 'components/SupportPrograms/SupportPrograms.utils';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';

import Row from './Row';
import FilterItem from '../FilterItem';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { TargetCompanyAge } from '../SupportProgramFilters.types';

function AgeFilter() {
  const query = useSupportProgramFilters();
  const [activeAges, toggle] = useFilterByQueryString<TargetCompanyAge>(
    query.data?.targetCompanyAges ?? [],
    'targetCompanyAges',
    identity,
  );
  const reset = toggle('all');

  return (
    <Row resetColumns={reset} totalSelectedColumns={activeAges.length} title="창업 기간">
      {query.data?.targetCompanyAges.map((item) => (
        <li key={item}>
          <FilterItem onClick={toggle(item)} selected={activeAges.includes(item)}>
            {TARGET_COMPANY_AGE_TEXTS[item]}
          </FilterItem>
        </li>
      ))}
    </Row>
  );
}
export default AgeFilter;