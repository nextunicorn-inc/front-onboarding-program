import { ReactNode } from 'react';

import * as Styled from './SupportProgramFilters.styled';

type Props<T> = {
  title: string;
  renderItem: (item: T, index?: number) => ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
};

function MultipleSelectionFilters<T>({ title, renderItem, keyExtractor, data }: Props<T>) {
  return (
    <Styled.MultipleFiltersRow>
      <Styled.MultipleFilterTitle>{title}</Styled.MultipleFilterTitle>
      <Styled.Separator />
      <Styled.FilterList>
        {data.map((item) => (
          <li key={keyExtractor(item)}>{renderItem(item)}</li>
        ))}
      </Styled.FilterList>
    </Styled.MultipleFiltersRow>
  );
}

export default MultipleSelectionFilters;
