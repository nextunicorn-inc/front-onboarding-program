import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../utils';

const CardEndDate = styled.h5`
  margin-top: 4px;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray6);
`;

export const EndDate = ({ endDate }: { endDate: string }) => {
  const [year, month, dayList] = endDate.split('-');
  const [day] = dayList.split('T');

  return <CardEndDate>{`${year}.${month}.${day} 까지`}</CardEndDate>;
};
