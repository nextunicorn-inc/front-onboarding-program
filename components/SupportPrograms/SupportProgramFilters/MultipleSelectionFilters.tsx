import { ReactNode } from 'react';

import * as Styled from './SupportProgramFilters.styled';

import Icons from '../../../commonUi/Icons';

type Props<T> = {
  title: string;
  renderItem: (item: T, index?: number) => ReactNode;
  resetFilter: () => void;
  notSelected: boolean;
  keyExtractor: (item: T) => string;
  data: T[];
};

function MultipleSelectionFilters<T>({
  title,
  renderItem,
  keyExtractor,
  data,
  resetFilter = () => undefined,
  notSelected = false,
}: Props<T>) {
  const showAllButton = typeof resetFilter === 'function';
  return (
    <Styled.MultipleFiltersRow>
      <Styled.MultipleFilterTitle>{title}</Styled.MultipleFilterTitle>
      <Styled.Separator />
      <Styled.FilterList>
        {showAllButton && (
          <li>
            <Styled.FilterItem onClick={resetFilter} selected={notSelected}>
              <Icons.Check20Selected />
              전체
            </Styled.FilterItem>
          </li>
        )}
        {data.map((item) => (
          <li key={keyExtractor(item)}>{renderItem(item)}</li>
        ))}
        <Styled.MoreButtonWrapper>
          <Styled.MoreButton role="button" />
        </Styled.MoreButtonWrapper>
      </Styled.FilterList>
    </Styled.MultipleFiltersRow>
  );
}

export default MultipleSelectionFilters;
