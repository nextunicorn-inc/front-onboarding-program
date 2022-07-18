import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontSize } from 'utils';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  ${FontSize.size14}
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  margin: 0 8px;
  ${({ $isActive }) =>
    $isActive
      ? css`
          color: var(--color-naturalgray9);
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
