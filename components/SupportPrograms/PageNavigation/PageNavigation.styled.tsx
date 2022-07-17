import styled from '@emotion/styled';
import { FontSize } from '../../../utils';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const pageButton = styled.button`
  ${FontSize.size14}
  border: none;
  outline: none;
  color: var(--color-naturalgray3);
  background: none;
  cursor: pointer;
  margin: 0 10px;
`;
