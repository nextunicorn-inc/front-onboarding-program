import { dequal } from 'dequal';

import { useClientFilter } from '../SupportProgramFilters.hooks';

import Icons from '../../../../commonUi/Icons';
import * as Styled from './FilterDetail.styled';
import { FilterList, FilterItem } from '../SupportProgramFilters.styled';
import CloseMenu from '../../../../commonUi/Icons/CloseMenu/closeMenu.svg';

import { WithAll } from '../SupportProgramFilters.types';

type Props<T> = {
  title: string;
  searchable?: boolean;
  data: T[];
  idExtractor: (item: T) => string;
  renderItemTitle: (item: T) => string;
  onClose: () => void;
  onApply: (args: WithAll<T>[]) => void;
  defaultValue?: WithAll<T>[];
};

function FilterDetail<T>({
  title,
  searchable = false,
  data,
  renderItemTitle,
  idExtractor,
  onClose,
  onApply,
  defaultValue,
}: Props<T>) {
  const [state, toggle] = useClientFilter<T>({ multiple: true, defaultValue });

  const handleClose = () => {
    onApply(state);
    onClose();
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentsWrapper>
        <Styled.HeadingSection>
          <Styled.Heading>{title}</Styled.Heading>
        </Styled.HeadingSection>

        <FilterList $wrap>
          <li>
            <FilterItem
              onClick={toggle('all')}
              selected={state.find((value) => dequal(value, 'all')) !== undefined}
            >
              <Icons.Check20Selected />
              전체
            </FilterItem>
          </li>
          {data.map((item, index) => (
            <li key={idExtractor(item) + String(index)}>
              <FilterItem
                selected={state.find((value) => dequal(value, item)) !== undefined}
                onClick={toggle(item)}
              >
                <Icons.Check20Selected />
                {renderItemTitle(item)}
              </FilterItem>
            </li>
          ))}
        </FilterList>
        <Styled.ApplyButton onClick={handleClose}>필터 적용</Styled.ApplyButton>
      </Styled.ContentsWrapper>
      <Styled.CloseButton onClick={onClose}>
        <CloseMenu />
      </Styled.CloseButton>
    </Styled.Wrapper>
  );
}

export default FilterDetail;
