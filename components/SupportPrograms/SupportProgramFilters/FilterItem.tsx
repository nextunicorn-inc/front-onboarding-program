import { ReactNode } from 'react';
import { useMediaQuery } from 'hooks';
import { Check } from 'commonUi/Icons';
import * as Styled from './SupportProgramFilters.styled';

type Props = {
  onClick: () => void;
  children: ReactNode;
  selected: boolean;
  opacity?: number;
};

function FilterItem({ children, onClick, selected, opacity = 0.4 }: Props) {
  const handleClick = () => onClick();
  const isTablet = useMediaQuery('(max-width: 1023px)');
  const iconOpacity = selected ? 1 : opacity;
  return (
    <Styled.FilterItem
      aria-pressed={selected ? 'true' : 'false'}
      opacity={iconOpacity}
      onClick={handleClick}
      selected={selected}
    >
      <Check active color="var(--color-unicornblue7)" size={isTablet ? 16 : 20} />
      {children}
    </Styled.FilterItem>
  );
}
export default FilterItem;
