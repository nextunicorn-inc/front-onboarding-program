import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../utils';

export const TableWrapper = styled.section`
  background-color: var(--color-naturalgray0);
  border: 1px solid var(--color-bluegray1);
  border-radius: 5px;
  padding: 20px 0 20px 24px;
  margin-bottom: 20px;
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
  ${FontSize.size16};
  ${FontWeight.bold};
  color: var(--color-naturalgray8);
  flex-shrink: 0;
`;

export const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: var(--color-naturalgray8);
  margin-left: 16px;
  margin-right: 20px;
`;

export const MoreButtonWrapper = styled.li`
  position: absolute;
  right: 0;
  z-index: 2;
  display: flex;

  align-items: center;
  width: 89px;
  height: 100%;
  padding-right: 18px;

  background: linear-gradient(285.55deg, #fefefe 65.85%, rgba(254, 254, 254, 0) 89.11%);
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
  background-color: transparent;
  border: 1px solid var(--color-unicornblue6);
  border-radius: 9999px;

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