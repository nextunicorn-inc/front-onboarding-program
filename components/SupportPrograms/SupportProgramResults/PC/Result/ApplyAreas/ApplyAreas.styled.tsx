import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: var(--color-naturalgray7);
`;
