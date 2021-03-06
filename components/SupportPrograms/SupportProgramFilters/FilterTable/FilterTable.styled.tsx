import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const TableWrapper = styled.section`
  padding: 20px 0 20px 24px;
  margin-bottom: 20px;
  background-color: var(--color-naturalgray0);
  border: 1px solid var(--color-bluegray1);
  border-radius: 5px;

  ${MediaQuery.tablet} {
    padding: 16px 0 16px 20px;
    margin-bottom: 24px;
  }

  ${MediaQuery.mobile} {
    padding: 0;
    border: none;
    background-color: inherit;
    display: flex;
  }
`;

export const RowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const RowTitle = styled.p`
  flex-shrink: 0;
  ${FontSize.size16};
  ${FontWeight.bold};
  color: var(--color-naturalgray8);

  ${MediaQuery.tablet} {
    ${FontSize.size12};
  }
`;

export const Separator = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 16px;
  background-color: var(--color-naturalgray8);
  margin-left: 16px;
  margin-right: 20px;

  ${MediaQuery.tablet} {
    height: 12px;
    margin-left: 12px;
    margin-right: 16px;
  }
`;

export const MoreButtonWrapper = styled.li`
  position: absolute;
  right: 0;
  z-index: 2;
  display: flex;

  align-items: center;
  width: 89px;
  height: 100%;
  padding-right: 24px;
  background: linear-gradient(285.55deg, #fefefe 65.85%, rgba(254, 254, 254, 0) 89.11%);

  ${MediaQuery.tablet} {
    width: 67px;
    padding-right: 16px;
  }
`;

export const MoreButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 36px;
  height: 36px;
  margin-left: auto;
  background-color: white;
  border: 1px solid var(--color-unicornblue6);
  border-radius: 9999px;

  ${MediaQuery.tablet} {
    width: 28px;
    height: 28px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 1px;
    background-color: var(--color-unicornblue6);
  }

  &::after {
    transform: rotate(90deg);
  }
`;

export const MobileToggleButton = styled.button`
  padding: 8px 12px;
  display: flex;
  align-items: center;

  justify-content: center;
  border-radius: 20px;

  color: var(--color-naturalgray7);
  background-color: var(--color-bluegray0);
  ${FontSize.size14};
  ${FontWeight.medium};

  & > svg {
    margin-left: 2px;
  }

  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

export const CurrentTotalActiveItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 15px;
  padding: 1px 5px 0;
  margin-left: 6px;
  border-radius: 5px;
  color: var(--color-naturalgray0);
  background-color: var(--color-unicornblue6);
  ${FontSize.size10};
  ${FontWeight.bold};
`;
