import { ReactElement, ReactNode } from 'react';
import * as Styled from './SupportProgramFilters.styled';

type Props = {
  top: ReactElement;
  ages: ReactNode;
  areas: ReactNode;
  hosts: ReactNode;
};

function SupportProgramFilters({ top, ages, areas, hosts }: Props) {
  return (
    <Styled.Responsive>
      {top}
      <Styled.MultipleFiltersWrapper>
        {ages}
        {areas}
        {hosts}
      </Styled.MultipleFiltersWrapper>
    </Styled.Responsive>
  );
}
export default SupportProgramFilters;
