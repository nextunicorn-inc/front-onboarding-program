import { ReactNode } from 'react';

import * as Styled from './SupportProgramFilters.styled';

import Icons from '../../../commonUi/Icons';
import { contain, isNotSelected } from '../SupportPrograms.utils';
import { WithAll } from './SupportProgramFilters.types';
import { Backdrop, useModal } from '../../../commonUi/Modal';
import FilterDetail from './FilterDetail/FilterDetail';
import HostSearch from './HostSearch/HostSearch';

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
  const reset = toggle('all');
  const { show, hide } = useModal();
  const showWithBackdrop = (Comp: ReactNode) => () => {
    show(
      <Backdrop closable onClick={hide}>
        {Comp}
      </Backdrop>,
    );
  };

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
        {data.map((item) => (
          <li key={keyExtractor(item)}>
            <Styled.FilterItem onClick={toggle(item)} selected={contain(activeData, item)}>
              <Icons.Check20Selected />
              {renderItemText(item)}
            </Styled.FilterItem>
          </li>
        ))}
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
      </Styled.FilterList>
    </Styled.MultipleFiltersRow>
  );
}

export default MultipleSelectionFilters;
