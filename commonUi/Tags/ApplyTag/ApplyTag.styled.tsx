import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../utils';

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`;

export const SimpleApplyTag = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  ${FontSize.size14}
  ${FontWeight.medium}
  padding: 2px 6px 1px;
  border-radius: 5px;
  color: #ff5859;
  background-color: var(--color-bluegray0);
`;

export const TagText = styled.span`
  ${FontSize.size14}
  ${FontWeight.medium}
  padding: 2px 6px 1px;
  border-radius: 5px;
  color: ${(props) => props.color};
  background-color: var(--color-bluegray0);
`;
