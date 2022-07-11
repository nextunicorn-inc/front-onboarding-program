import * as Styled from './SupportProgramFilters.styled';

type Props = {
  title: string;
  selected: boolean;
};

function FilterItem({ title, selected }: Props) {
  return <Styled.FilterItem selected={selected}>{title}</Styled.FilterItem>;
}

export default FilterItem;
