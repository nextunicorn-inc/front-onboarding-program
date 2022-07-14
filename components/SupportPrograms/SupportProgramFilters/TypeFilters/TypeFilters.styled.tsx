import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../utils';

export const TypeFilterList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 28px;
`;

export const TypeFilterItem = styled.li<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow-x: hidden;

  & > button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: hsla(var(--base-naturalgray9), ${({ $active }) => ($active ? 1 : 0.4)});
    ${FontWeight.bold};
    ${FontSize.size24};
    letter-spacing: 0.2px;
  }

  &:hover {
    & > button {
      color: var(--color-naturalgray9);
    }
    & > div {
      transform: translateX(0%);
    }
  }
`;

export const TypeFilterNoticeLine = styled.div<{ $active: boolean }>`
  position: relative;
  margin-top: 8px;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: var(--color-naturalgray9);

  transition: all 250ms linear;
  transform: translateX(${({ $active }) => ($active ? 0 : -101)}%);
`;
