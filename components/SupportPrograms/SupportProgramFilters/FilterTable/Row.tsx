import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import { useMediaQuery } from 'hooks';
import { Backdrop, useModal } from 'commonUi/Modal';
import { Plus } from 'commonUi/Icons';

import FilterItem from '../FilterItem';
import * as Styled from './FilterTable.styled';
import { useThrottle } from './FilterTable.hooks';
import { FilterList } from '../SupportProgramFilters.styled';

type Props = {
  title: string;
  children: ReactNode;
  totalSelectedColumns: number;
  resetColumns: () => void;
  RowDetail: ReactNode;
};

function Row({ title, children, totalSelectedColumns, resetColumns, RowDetail }: Props) {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const lastItemRef = useRef<HTMLLIElement>(null);

  const { show, hide } = useModal();
  const isAnyColumnNotSelected = totalSelectedColumns === 0;

  const showWithBackdrop = (Comp?: ReactNode) => () => {
    if (!Comp) {
      return;
    }

    show(
      <Backdrop closable onClick={hide}>
        {Comp}
      </Backdrop>,
    );
  };

  const totalChildren = Children.count(children);
  const childrenWithRef = Children.map<ReactNode, ReactNode>(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ref: index + 1 === totalChildren ? lastItemRef : null,
      });
    }
    return child;
  });

  function isRowOverflowed() {
    const { current: lastItem } = lastItemRef;
    const wrapper = document.querySelector('.main-filter');

    if (!lastItem || !wrapper) {
      return false;
    }

    const wrapperRight = wrapper.getBoundingClientRect().right;
    const lastItemRight = lastItem.getBoundingClientRect().right;
    const OFFSET = 20;
    return wrapperRight - OFFSET < lastItemRight;
  }

  const changeShowMoreButton = useThrottle(() => {
    if (isMobile) {
      return;
    }
    setShowMoreButton(isRowOverflowed());
  }, 200);

  useEffect(() => {
    changeShowMoreButton();
    window.addEventListener('resize', changeShowMoreButton);
    return () => {
      window.removeEventListener('resize', changeShowMoreButton);
    };
  }, [changeShowMoreButton]);

  return isMobile ? (
    <Styled.MobileToggleButton onClick={showWithBackdrop(RowDetail)}>
      <span>{title}</span>
      {isAnyColumnNotSelected ? (
        <Plus />
      ) : (
        <Styled.CurrentTotalActiveItems>{totalSelectedColumns}</Styled.CurrentTotalActiveItems>
      )}
    </Styled.MobileToggleButton>
  ) : (
    <Styled.RowWrapper>
      <Styled.RowTitle>{title}</Styled.RowTitle>
      <Styled.Separator aria-hidden />
      <FilterList>
        <li style={{ marginLeft: 0 }}>
          <FilterItem opacity={0.6} onClick={resetColumns} selected={isAnyColumnNotSelected}>
            전체
          </FilterItem>
        </li>
        {childrenWithRef}
        {showMoreButton && (
          <Styled.MoreButtonWrapper>
            <Styled.MoreButton role="button" onClick={showWithBackdrop(RowDetail)} />
          </Styled.MoreButtonWrapper>
        )}
      </FilterList>
    </Styled.RowWrapper>
  );
}
export default Row;
