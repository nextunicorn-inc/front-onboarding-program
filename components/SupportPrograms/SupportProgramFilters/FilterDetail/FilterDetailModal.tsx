import { ReactNode } from 'react';
import { Close } from 'commonUi/Icons';
import { useModal } from 'commonUi/Modal';
import { useMediaQuery } from 'hooks';

import * as Styled from './FilterDetail.styled';

type Props = {
  title: string;
  onApply: () => void;
  children: ReactNode;
  resetItems?: () => void;
};

function FilterDetailModal({ title, onApply, resetItems, children }: Props) {
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
                <Close size={24} />
              </Styled.CloseButton>
            )}
          </Styled.HeadingSection>
        </Styled.Xpadding>
        {children}
        <Styled.ApplyButtonWrapper>
          <Styled.ApplyButton onClick={handleApplyButtonClick}>필터 적용</Styled.ApplyButton>
        </Styled.ApplyButtonWrapper>
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

// <Styled.Xpadding>{searchable && isValidElement(Search) && Search}</Styled.Xpadding>
// <Styled.FilterListWrapper>
//   <FilterList $wrap>
//     <li>
//       <FilterItem opacity={0.6} onClick={resetItems} selected={totalSelectedItems === 0}>
//         전체
//       </FilterItem>
//     </li>
//     {children}
//   </FilterList>
// </Styled.FilterListWrapper>
