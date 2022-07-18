import { Close, Check } from 'commonUi/Icons';

import { useMediaQuery } from 'hooks';

import * as Styled from './FilterDetail.styled';
import { FilterList, FilterItem } from '../SupportProgramFilters.styled';

import { useClientFilter } from '../SupportProgramFilters.hooks';

import HostPredicateWrapper from './HostPredicateWrapper';

import { contain, isNotSelected } from '../../SupportPrograms.utils';

import { WithAll } from '../SupportProgramFilters.types';

type Props<T> = {
  title: string;
  data: T[];
  keyExtractor: (item: T) => string;
  renderItemText: (item: T) => string;
  toggle: (next: WithAll<T>) => () => void;
  onClose: () => void;
  activeData: WithAll<T>[];
};

function FilterDetail<T>({
  title,
  data,
  renderItemText,
  keyExtractor,
  onClose,
  activeData,
  toggle,
}: Props<T>) {
  const [state, toggleState] = useClientFilter<T>({ multiple: true, defaultValue: activeData });
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  const reset = () => {
    toggleState('all')();
    toggle('all')();
  };

  const handleClick = (item: WithAll<T>) => () => {
    toggle(item)();
    toggleState(item)();
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentsWrapper>
        <Styled.Xpadding>
          <Styled.HeadingSection>
            {!isDesktop && <Styled.ResetButton onClick={reset}>초기화</Styled.ResetButton>}
            <Styled.Heading>{`${title} 선택`}</Styled.Heading>
            {!isDesktop && (
              <Styled.CloseButton onClick={onClose}>
                <Close size={24} color="var(--color-naturalgray7)" />
              </Styled.CloseButton>
            )}
          </Styled.HeadingSection>
        </Styled.Xpadding>
        <Styled.Xpadding>
          <HostPredicateWrapper data={data} activeData={state} onItemClick={handleClick} />
        </Styled.Xpadding>
        <Styled.FilterListWrapper>
          <FilterList $wrap>
            <li>
              <FilterItem onClick={reset} selected={isNotSelected(state)}>
                <Check active color="var(--color-unicornblue7)" />
                전체
              </FilterItem>
            </li>
            {data.map((item) => (
              <li key={keyExtractor(item)}>
                <FilterItem selected={contain(state, item)} onClick={handleClick(item)}>
                  <Check active color="var(--color-unicornblue7)" />
                  {renderItemText(item)}
                </FilterItem>
              </li>
            ))}
          </FilterList>
        </Styled.FilterListWrapper>
        <Styled.Xpadding>
          <Styled.ApplyButton onClick={onClose}>필터 적용</Styled.ApplyButton>
        </Styled.Xpadding>
      </Styled.ContentsWrapper>
      {isDesktop && (
        <Styled.CloseButton onClick={onClose}>
          <Close size={24} color="var(--color-naturalgray0)" />
        </Styled.CloseButton>
      )}
    </Styled.Wrapper>
  );
}

export default FilterDetail;
