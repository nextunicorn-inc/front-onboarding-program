import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Responsive = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  @media screen and (max-width: 1239px) {
    padding: 0 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const FilterList = styled.ul<{ $wrap?: boolean }>`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  width: 100%;
  overflow-x: hidden;

  & > li {
    flex-shrink: 0;
    margin-left: 12px;
  }

  & button {
    flex-shrink: 0;
    margin-bottom: ${({ $wrap }) => ($wrap ? '12px' : 0)};
    border: none;
  }

  ${MediaQuery.mobile} {
    justify-content: center;
  }
`;

export const FilterItem = styled.button<{ selected: boolean; opacity: number }>`
  cursor: pointer;
  position: relative;
  padding: 10px 16px;

  ${FontSize.size16};
  ${({ selected }) => FontWeight[selected ? 'medium' : 'regular']};

  color: var(${({ selected }) => (selected ? '--color-unicornblue6' : '--color-naturalgray7')});
  ${({ selected }) => {
    if (selected) {
      return 'background-color: var(--color-unicornblue1);';
    }
    return 'background-color: var(--color-bluegray0);';
  }};

  opacity: ${({ opacity }) => opacity};

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

  @media (hover: hover) {
    &:hover {
      color: var(--color-unicornblue6);
      background-color: var(--color-unicornblue1);
      ${FontWeight.medium};
      opacity: 1;
    }
  }

  ${MediaQuery.tablet} {
    padding: 8px 12px;
    ${FontSize.size14};
  }

  ${MediaQuery.mobile} {
    ${FontSize.size14};
  }
`;
