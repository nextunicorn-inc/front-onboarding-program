import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Wrapper = styled.div`
  width: 100%;
  padding: 60px 32px 78px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MediaQuery.mobile} {
    padding: 60px 20px 78px;
  }
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  ${FontSize.size14};
  ${FontWeight.regular};
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  margin: 0 15px;
  ${({ $isActive }) =>
    $isActive
      ? css`
          padding: 6px 12px;
          color: var(--color-bluegray0);
          background-color: #005edf;
          border-radius: 5px;
        `
      : css`
          color: var(--color-naturalgray3);
        `}
`;

export const ArrowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
