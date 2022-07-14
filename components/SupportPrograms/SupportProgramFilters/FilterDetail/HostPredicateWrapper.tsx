import type { WithAll, FilterOptionsQuery } from '../SupportProgramFilters.types';

import { HostSearch } from '../HostSearch';

type Props<T> = {
  data: T[];
  activeData: WithAll<T>[];
  onItemClick: (next: WithAll<T>) => () => void;
};

function HostPredicateWrapper<T>({ data, activeData, onItemClick }: Props<T>) {
  type Hosts = FilterOptionsQuery['filterOptions']['hosts'];
  type Host = Hosts[number];

  function predicateHost(data: unknown): data is Host {
    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
      return false;
    }

    const v1 = data as Record<string, unknown>;
    const { meta, id } = v1;

    if (
      typeof id !== 'string' ||
      typeof meta !== 'object' ||
      Array.isArray(meta) ||
      meta === null
    ) {
      return false;
    }

    const v2 = meta as Record<string, unknown>;
    const { name } = v2;

    return typeof name === 'string';
  }

  if (predicateHost(data[0])) {
    return (
      <HostSearch
        onItemClick={onItemClick as unknown as (next: WithAll<Host>) => () => void}
        data={data as unknown as Hosts}
        selectedData={activeData as WithAll<Host>[]}
      />
    );
  }

  return null;
}

export default HostPredicateWrapper;
