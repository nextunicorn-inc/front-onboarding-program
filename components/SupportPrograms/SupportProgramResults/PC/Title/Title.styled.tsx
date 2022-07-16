import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../../utils';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${FontSize.size16};
  ${FontWeight.medium};
  margin-bottom: 4px;
  line-height: 24px;
  color: var(--color-naturalgray7);
`;

export const CompanyName = styled.span`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray6);
`;
