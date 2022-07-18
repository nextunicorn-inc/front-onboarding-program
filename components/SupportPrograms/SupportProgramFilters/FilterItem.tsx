import { ReactNode } from 'react';
import { Check } from 'commonUi/Icons';
import * as Styled from './SupportProgramFilters.styled';

type Props = {
  onClick: () => void;
  children: ReactNode;
  selected: boolean;
};

function FilterItem({ children, onClick, selected }: Props) {
  const handleClick = () => onClick();
  return (
    <Styled.FilterItem onClick={handleClick} selected={selected}>
      <Check active color="var(--color-unicornblue7)" />
      {children}
    </Styled.FilterItem>
  );
}
export default FilterItem;
