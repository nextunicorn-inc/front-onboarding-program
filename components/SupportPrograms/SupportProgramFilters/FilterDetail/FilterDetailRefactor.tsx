import { ReactNode } from 'react';
import { Close, Check } from 'commonUi/Icons';
import { useModal } from 'commonUi/Modal';

import { useMediaQuery } from 'hooks';
import * as Styled from './FilterDetail.styled';
import { FilterList } from '../SupportProgramFilters.styled';
import FilterItem from '../FilterItem';

type Props = {
  title: string;
  onApply: () => void;
  children: ReactNode;
  resetItems: () => void;
  totalSelectedItems: number;
};

function FilterDetailModal({ title, onApply, resetItems, totalSelectedItems, children }: Props) {
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const { hide } = useModal();
  const handleApplyButtonClick = () => {
    onApply();
    hide();
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentsWrapper>
        <Styled.Xpadding>
          <Styled.HeadingSection>
            {!isDesktop && <Styled.ResetButton onClick={resetItems}>초기화</Styled.ResetButton>}
            <Styled.Heading>{`${title} 선택`}</Styled.Heading>
            {!isDesktop && (
              <Styled.CloseButton onClick={hide}>
                <Close size={24} color="var(--color-naturalgray7)" />
              </Styled.CloseButton>
            )}
          </Styled.HeadingSection>
        </Styled.Xpadding>
        <Styled.FilterListWrapper>
          <FilterList $wrap>
            <li>
              <FilterItem onClick={resetItems} selected={totalSelectedItems === 0}>
                전체
              </FilterItem>
            </li>
            {children}
          </FilterList>
        </Styled.FilterListWrapper>
        <Styled.Xpadding>
          <Styled.ApplyButton onClick={handleApplyButtonClick}>필터 적용</Styled.ApplyButton>
        </Styled.Xpadding>
      </Styled.ContentsWrapper>
      {isDesktop && (
        <Styled.CloseButton onClick={hide}>
          <Close size={24} color="var(--color-naturalgray0)" />
        </Styled.CloseButton>
      )}
    </Styled.Wrapper>
  );
}

export default FilterDetailModal;
