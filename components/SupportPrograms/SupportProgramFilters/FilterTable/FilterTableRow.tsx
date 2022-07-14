import { useState, useRef, ReactNode, useEffect } from 'react';

import * as Styled from './FilterTable.styled';
import Icons from '../../../../commonUi/Icons';
import { Backdrop, useModal } from '../../../../commonUi/Modal';
import { FilterList, FilterItem } from '../SupportProgramFilters.styled';

import { contain, isNotSelected } from '../../SupportPrograms.utils';

import { WithAll } from '../SupportProgramFilters.types';
import { useMediaQuery } from '../../../../hooks';

type Props<T> = {
  title: string;
  renderItemText: (item: T) => string;
  keyExtractor: (item: T) => string;
  data: T[];
  activeData: WithAll<T>[];
  toggle: (next: WithAll<T>) => () => void;
  showAllButton?: boolean;
  Detail?: ReactNode;
};

function FilterTableRow<T>({
  title,
  renderItemText,
  keyExtractor,
  data,
  activeData,
  toggle,
  showAllButton = true,
  Detail,
}: Props<T>) {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const isMobile = useMediaQuery('(max-width: 500px)');

  const { show, hide } = useModal();
  const reset = toggle('all');

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

  const lastItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isMobile) {
      return;
    }
    const { current: lastItem } = lastItemRef;
    const wrapper = document.querySelector('.main-filter');

    if (!lastItem || !wrapper) {
      return undefined;
    }

    const wrapperRight = wrapper.getBoundingClientRect().right;
    const lastItemRight = lastItem.getBoundingClientRect().right;
    const OFFSET = 20;

    if (wrapperRight - OFFSET < lastItemRight) {
      setShowMoreButton(true);
    }
  }, [isMobile]);

  return isMobile ? (
    <Styled.MobileToggleButton onClick={showWithBackdrop(Detail)}>
      <span>{title}</span>
      {isNotSelected(activeData) ? (
        <Icons.Plus20 fill="var(--color-naturalgray7)" />
      ) : (
        <Styled.CurrentTotalActiveItems>{activeData.length}</Styled.CurrentTotalActiveItems>
      )}
    </Styled.MobileToggleButton>
  ) : (
    <Styled.RowWrapper>
      <Styled.RowTitle>{title}</Styled.RowTitle>
      <Styled.Separator />
      <FilterList>
        {showAllButton && (
          <li>
            <FilterItem onClick={reset} selected={isNotSelected(activeData)}>
              <Icons.Check20Selected />
              전체
            </FilterItem>
          </li>
        )}
        {data.map((item, index, { length }) => (
          <li key={keyExtractor(item)} ref={index + 1 === length ? lastItemRef : null}>
            <FilterItem onClick={toggle(item)} selected={contain(activeData, item)}>
              <Icons.Check20Selected />
              {renderItemText(item)}
            </FilterItem>
          </li>
        ))}
        {showMoreButton && (
          <Styled.MoreButtonWrapper>
            <Styled.MoreButton role="button" onClick={showWithBackdrop(Detail)} />
          </Styled.MoreButtonWrapper>
        )}
      </FilterList>
    </Styled.RowWrapper>
  );
}

export default FilterTableRow;
