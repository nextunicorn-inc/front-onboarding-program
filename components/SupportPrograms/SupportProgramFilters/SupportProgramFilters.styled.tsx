import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../utils';

export const Responsive = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

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

export const MultipleFiltersWrapper = styled.section`
  background-color: var(--color-naturalgray0);
  border: 1px solid var(--color-bluegray1);
  border-radius: 5px;
  padding: 20px 0 20px 24px;
  margin-bottom: 20px;
`;

export const MultipleFiltersRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MultipleFilterTitle = styled.p`
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

export const FilterList = styled.ul<{ $wrap?: boolean }>`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  gap: 12px;
  width: 100%;
  overflow-x: hidden;

  & > li {
    flex-shrink: 0;
  }

  & > button {
    flex-shrink: 0;
    border: none;
  }
`;

export const FilterItem = styled.button<{ selected: boolean }>`
  cursor: pointer;
  position: relative;
  padding: 10px 16px;
  ${FontSize.size16};
  ${FontWeight.medium};

  color: var(${({ selected }) => (selected ? '--color-unicornblue6' : '--color-naturalgray7')});
  background-color: var(
    ${({ selected }) => (selected ? '--color-unicornblue1' : '--color-bluegray0')}
  );
  border: none;
  border-radius: 25px;

  transition: all 150ms linear;

  & > svg {
    transition: all 150ms linear;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    position: absolute;
    top: 0;
    right: -5px;
  }
  &:hover {
    color: var(--color-unicornblue6);
    background-color: var(--color-unicornblue1);
  }
`;

export const MoreButtonWrapper = styled.div`
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
