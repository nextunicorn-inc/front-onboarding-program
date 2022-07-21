import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const Title = styled.h3`
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

export const CompanyName = styled.h5`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray6);
`;
