import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Text = styled.div<{ $color: string }>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  ${FontSize.size12};
  ${FontWeight.medium};
  padding: 2px 4px 1px;
  border-radius: 5px;
  color: var(--color-naturalgray0);
  background-color: ${({ $color }) => $color};
  white-space: pre;

  ${MediaQuery.tablet} {
    ${FontSize.size12};
  }
`;
