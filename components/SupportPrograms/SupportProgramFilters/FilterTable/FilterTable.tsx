import { ReactNode } from 'react';

import * as Styled from './FilterTable.styled';
import { Responsive } from '../SupportProgramFilters.styled';

type Props = {
  ages: ReactNode;
  areas: ReactNode;
  hosts: ReactNode;
};

function FilterTable({ ages, areas, hosts }: Props) {
  return (
    <Responsive>
      <Styled.TableWrapper className="main-filter">
        {ages}
        {areas}
        {hosts}
      </Styled.TableWrapper>
    </Responsive>
  );
}
export default FilterTable;
