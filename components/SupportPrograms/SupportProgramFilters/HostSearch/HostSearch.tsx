import { useState } from 'react';
import * as Styled from './HostSearch.styled';
import { FilterOptionsQuery } from '../SupportProgramFilters.hooks';

import Search24 from '../../../../commonUi/Icons/Search24/search24.svg';
import { WithAll } from '../SupportProgramFilters.types';

type Props = {
  data: FilterOptionsQuery['filterOptions']['hosts'];
  onItemClick?: (val: FilterOptionsQuery['filterOptions']['hosts'][number]) => void;
  selectedData?: WithAll<FilterOptionsQuery['filterOptions']['hosts'][number]>[];
};

function HostSearch({ data, selectedData = [], onItemClick = () => undefined }: Props) {
  const [value, setValue] = useState('');
  const filteredState = data.filter(({ meta: { name } }) => name.includes(value));
  const open = value.length > 0;

  return (
    <Styled.Wrapper>
      <Styled.InputContainer>
        <Styled.Input
          placeholder="주관 기관을 검색해보세요."
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Search24 />
      </Styled.InputContainer>

      {open && (
        <Styled.SearchResults>
          {filteredState.map((item) => (
            <li key={item.id}>
              <Styled.SearchResultWrapper
                role="button"
                onClick={() => {
                  setValue('');
                  onItemClick(item);
                }}
              >
                <Styled.CheckboxContainer>
                  <Styled.Checkbox
                    type="checkbox"
                    checked={
                      selectedData.find((v) => v !== 'all' && v.id === item.id) !== undefined
                    }
                  />
                </Styled.CheckboxContainer>
                <Styled.SearchResultTitle>{item.meta.name}</Styled.SearchResultTitle>
              </Styled.SearchResultWrapper>
            </li>
          ))}
        </Styled.SearchResults>
      )}
    </Styled.Wrapper>
  );
}

export default HostSearch;
