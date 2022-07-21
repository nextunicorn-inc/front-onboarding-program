import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const TypeFilterList = styled.ul`
  display: flex;
  margin-bottom: 28px;
  ${MediaQuery.tablet} {
    margin-bottom: 24px;
  }
  ${MediaQuery.mobile} {
    margin-bottom: 16px;
  }
`;

export const TypeFilterItem = styled.li<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow-x: hidden;

  &:not(:first-of-type) {
    margin-left: 28px;
    ${MediaQuery.tablet} {
      margin-left: 16px;
    }
  }

  & > button {
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    padding: 0;

    background-color: transparent;
    color: hsla(var(--base-naturalgray9), ${({ $active }) => ($active ? 1 : 0.4)});
    mix-blend-mode: normal;

    ${FontSize.size24};
    ${FontWeight.bold};
    letter-spacing: -0.2px;

    & > svg {
      margin-left: 2px;
    }

    &:hover {
      & > svg {
        opacity: 1;
      }
    }

    ${MediaQuery.tablet} {
      ${FontSize.size16};
    }
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

  ${MediaQuery.tablet} {
    margin-top: 6px;
  }
`;
