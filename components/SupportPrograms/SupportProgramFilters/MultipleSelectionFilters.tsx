import { useState, useRef, ReactNode, useEffect } from 'react';

import * as Styled from './SupportProgramFilters.styled';

import Icons from '../../../commonUi/Icons';
import { contain, isNotSelected } from '../SupportPrograms.utils';
import { WithAll } from './SupportProgramFilters.types';
import { Backdrop, useModal } from '../../../commonUi/Modal';
import FilterDetail from './FilterDetail/FilterDetail';

type Props<T> = {
  title: string;
  renderItemText: (item: T) => string;
  keyExtractor: (item: T) => string;
  data: T[];
  activeData: WithAll<T>[];
  toggle: (next: WithAll<T>) => () => void;
  showAllButton?: boolean;
};

function MultipleSelectionFilters<T>({
  title,
  renderItemText,
  keyExtractor,
  data,
  activeData,
  toggle,
  showAllButton = true,
}: Props<T>) {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const reset = toggle('all');
  const { show, hide } = useModal();
  const showWithBackdrop = (Comp: ReactNode) => () => {
    show(
      <Backdrop closable onClick={hide}>
        {Comp}
      </Backdrop>,
    );
  };

  const lastItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <Styled.MultipleFiltersRow>
      <Styled.MultipleFilterTitle>{title}</Styled.MultipleFilterTitle>
      <Styled.Separator />
      <Styled.FilterList>
        {showAllButton && (
          <li>
            <Styled.FilterItem onClick={reset} selected={isNotSelected(activeData)}>
              <Icons.Check20Selected />
              전체
            </Styled.FilterItem>
          </li>
        )}
        {data.map((item, index, { length }) => (
          <li key={keyExtractor(item)} ref={index + 1 === length ? lastItemRef : null}>
            <Styled.FilterItem onClick={toggle(item)} selected={contain(activeData, item)}>
              <Icons.Check20Selected />
              {renderItemText(item)}
            </Styled.FilterItem>
          </li>
        ))}
        {showMoreButton && (
          <Styled.MoreButtonWrapper>
            <Styled.MoreButton
              role="button"
              onClick={showWithBackdrop(
                <FilterDetail
                  toggle={toggle}
                  title={title}
                  data={data}
                  keyExtractor={keyExtractor}
                  renderItemText={renderItemText}
                  onClose={hide}
                  activeData={activeData}
                />,
              )}
            />
          </Styled.MoreButtonWrapper>
        )}
      </Styled.FilterList>
    </Styled.MultipleFiltersRow>
  );
}

export default MultipleSelectionFilters;
