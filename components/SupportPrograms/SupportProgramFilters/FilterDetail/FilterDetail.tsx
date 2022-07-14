import * as Styled from './FilterDetail.styled';
import { FilterList, FilterItem } from '../SupportProgramFilters.styled';

import { useClientFilter } from '../SupportProgramFilters.hooks';

import HostPredicateWrapper from './PredicateWrapper';
import Icons from '../../../../commonUi/Icons';
import CloseMenu from '../../../../commonUi/Icons/CloseMenu/closeMenu.svg';

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
        <Styled.HeadingSection>
          <Styled.Heading>{title}</Styled.Heading>
        </Styled.HeadingSection>
        <Styled.Xpadding>
          <HostPredicateWrapper data={data} activeData={state} onItemClick={handleClick} />
        </Styled.Xpadding>
        <Styled.FilterListWrapper>
          <FilterList $wrap>
            <li>
              <FilterItem onClick={reset} selected={isNotSelected(state)}>
                <Icons.Check20Selected />
                전체
              </FilterItem>
            </li>
            {data.map((item) => (
              <li key={keyExtractor(item)}>
                <FilterItem selected={contain(state, item)} onClick={handleClick(item)}>
                  <Icons.Check20Selected />
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
      <Styled.CloseButton onClick={onClose}>
        <CloseMenu />
      </Styled.CloseButton>
    </Styled.Wrapper>
  );
}

export default FilterDetail;
