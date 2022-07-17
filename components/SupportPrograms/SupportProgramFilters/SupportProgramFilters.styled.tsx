import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Responsive = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  ${MediaQuery.tablet} {
    padding: 0 32px;
  }

  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
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

  ${MediaQuery.mobile} {
    justify-content: center;
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

  @support (hover:hover) {
    &:hover {
      color: var(--color-unicornblue6);
      background-color: var(--color-unicornblue1);
    }
  }

  ${MediaQuery.mobile} {
    ${FontSize.size14};
  }
`;
