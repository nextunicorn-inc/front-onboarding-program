import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  width: 100%;
  max-height: 24px;
  ${FontSize.size16};
  ${FontWeight.medium};
  margin-bottom: 4px;
  padding-right: 28px;
  color: var(--color-naturalgray7);

  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TestWrapper = styled.p`
  width: 100%;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CompanyName = styled.p`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray6);
`;
