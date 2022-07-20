import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const TextWrapper = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px 1px;
  border-radius: 5px;
  background-color: ${({ $color }) => $color};
  width: max-content;
`;

export const Text = styled.span`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray0);
`;
