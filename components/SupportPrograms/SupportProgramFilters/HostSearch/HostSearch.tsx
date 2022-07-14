import { useState } from 'react';
import Search24 from 'commonUi/Icons/Search24/search24.svg';
import * as Styled from './HostSearch.styled';

import { contain } from '../../SupportPrograms.utils';

import type { Host, WithAll } from '../SupportProgramFilters.types';

type Props = {
  data: Host[];
  onItemClick: (val: Host) => () => void;
  selectedData: WithAll<Host>[];
};

function HostSearch({ data, selectedData = [], onItemClick }: Props) {
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
          {filteredState.length > 0 ? (
            filteredState.map((item) => (
              <li key={item.id}>
                <Styled.SearchResultWrapper
                  role="button"
                  onClick={() => {
                    setValue('');
                    onItemClick(item)();
                  }}
                >
                  <Styled.CheckboxContainer>
                    <Styled.Checkbox
                      type="checkbox"
                      checked={contain(selectedData, item)}
                      readOnly
                    />
                  </Styled.CheckboxContainer>
                  <Styled.SearchResultTitle>{item.meta.name}</Styled.SearchResultTitle>
                </Styled.SearchResultWrapper>
              </li>
            ))
          ) : (
            <Styled.NotFoundWrapper>
              <h3>찾으시는 검색 결과가 없어요.</h3>
              <span>다른 키워드를 검색하거나 아래 선택지를 이용해보세요.</span>
            </Styled.NotFoundWrapper>
          )}
        </Styled.SearchResults>
      )}
    </Styled.Wrapper>
  );
}

export default HostSearch;
