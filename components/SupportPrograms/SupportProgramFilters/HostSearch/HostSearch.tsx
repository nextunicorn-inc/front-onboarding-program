import { useState, useRef, useEffect } from 'react';

import { Search } from 'commonUi/Icons';
import * as Styled from './HostSearch.styled';
import { base64Id, pureSearchValue } from './HostSearch.utils';
import { contain } from '../../SupportPrograms.utils';
import { SEPARATOR } from './HostSearch.constants';
import type { Host } from '../SupportProgramFilters.types';
import type { SearchResult } from './HostSearch.types';

type Props = {
  data: Host[];
  onItemClick: (val: Host | Host[] | null) => () => void;
  selectedData: Host[];
};

function HostSearch({ data, selectedData = [], onItemClick }: Props) {
  const [value, setValue] = useState('');

  /*
   * Sometimes user can type characters which can throw invalid regExp Error.
   *   - Possible case: the word "(" should be wrapped within backslash.
   *   - I don't want to hard code every edge case because regex sucks.
   * */
  const pureWord = pureSearchValue(value);
  const searchValueRegex = new RegExp(pureWord, 'g');

  const filteredResult = data.reduce<SearchResult[]>((acc, cur) => {
    const { name } = cur.meta;
    const nameWithSeparator =
      value === ' ' ? null : name.replace(searchValueRegex, `${SEPARATOR}$&${SEPARATOR}`);

    if (!name.includes(value) || !nameWithSeparator) {
      return acc;
    }

    const searchResult = {
      text: nameWithSeparator,
      ref: cur,
    };

    acc.push(searchResult);
    return acc;
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  const open = value.length > 0;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.InputContainer>
        <Styled.Input
          placeholder="주관 기관을 검색해보세요."
          type="text"
          value={value}
          ref={inputRef}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Search />
      </Styled.InputContainer>

      {open && (
        <Styled.SearchResults>
          {filteredResult.length > 0 ? (
            filteredResult.map((item) => (
              <li key={item.ref.id}>
                <Styled.SearchResultWrapper
                  role="button"
                  onClick={() => {
                    setValue('');
                    onItemClick(item.ref)();
                  }}
                >
                  <Styled.CheckboxContainer>
                    <Styled.Checkbox
                      type="checkbox"
                      checked={contain(selectedData, item.ref)}
                      readOnly
                    />
                  </Styled.CheckboxContainer>
                  <div>
                    {item.text
                      .split(SEPARATOR)
                      .filter(Boolean)
                      .map((name) => {
                        if (searchValueRegex.test(name)) {
                          return (
                            <Styled.MatchedKeyword key={base64Id()}>{name}</Styled.MatchedKeyword>
                          );
                        }
                        return name;
                      })}
                  </div>
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
