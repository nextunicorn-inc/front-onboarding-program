import {
  useSupportProgramFilters,
  TypeFilters,
  useClientFilter,
  FilterTable,
  AgeFilter,
  HostFilter,
  AreaFilter,
} from './SupportProgramFilters';

import type { Area, TargetCompanyAge, Host, Type } from './SupportProgramFilters';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<Type>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAge>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<Area>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<Host>({
    multiple: true,
  });

  return (
    <div>
      {filterQuery.isSuccess && (
        <>
          <TypeFilters
            allTypes={filterQuery.data.types}
            activeTypes={activeTypes}
            onClick={toggleTypes}
          />
          <FilterTable>
            <AgeFilter />
            <AreaFilter />
            <HostFilter />
          </FilterTable>
        </>
      )}
    </div>
  );
}

export default SupportPrograms;
