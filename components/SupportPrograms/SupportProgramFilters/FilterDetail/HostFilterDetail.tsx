import * as Styled from './FilterDetail.styled';

import { Host } from '../SupportProgramFilters.types';
import { useFilterByQueryString, useClientFilter } from '../SupportProgramFilters.hooks';
import { contain } from '../../SupportPrograms.utils';
import FilterDetailModal from './FilterDetailModal';
import FilterItem from '../FilterItem';
import { HostSearch } from '../HostSearch';
import { FilterList } from '../SupportProgramFilters.styled';

type Props = {
  title: string;
  list: Host[];
};

function HostFilterDetail({ title, list }: Props) {
  const [activeHosts, toggle] = useFilterByQueryString<Host>({
    list,
    queryKey: 'hosts',
    matcher: (data) => data.id,
  });

  const { state, toggle: toggleState } = useClientFilter<Host>(activeHosts ?? []);
  const mappedState = state?.map((data) => data.id) ?? [];
  const totalSelectedHosts = state?.length || 0;

  return (
    <FilterDetailModal
      resetItems={toggleState(null)}
      title={title}
      onApply={state ? toggle(mappedState) : toggle(null)}
    >
      <Styled.Xpadding>
        <HostSearch
          key={state?.toString() ?? "We don't have data"}
          data={list}
          onItemClick={toggleState}
          selectedData={state ?? []}
        />
      </Styled.Xpadding>
      <Styled.FilterListWrapper>
        <FilterList $wrap>
          <li>
            <FilterItem
              opacity={0.6}
              onClick={toggleState(null)}
              selected={totalSelectedHosts === 0}
            >
              전체
            </FilterItem>
          </li>
          {list.map((item) => (
            <li key={item.id}>
              <FilterItem
                opacity={0.4}
                onClick={toggleState(item)}
                selected={contain(state ?? [], item)}
              >
                {item.meta.name}
              </FilterItem>
            </li>
          ))}
        </FilterList>
      </Styled.FilterListWrapper>
    </FilterDetailModal>
  );
}

export default HostFilterDetail;
