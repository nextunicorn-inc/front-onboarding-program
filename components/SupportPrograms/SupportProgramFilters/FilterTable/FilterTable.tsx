import { ReactNode } from 'react';

import * as Styled from './FilterTable.styled';
import { Responsive } from '../SupportProgramFilters.styled';

type Props = {
  children: ReactNode;
};

function FilterTable({ children }: Props) {
  return (
    <Responsive>
      <Styled.TableWrapper className="main-filter">{children}</Styled.TableWrapper>
    </Responsive>
  );
}
export default FilterTable;
