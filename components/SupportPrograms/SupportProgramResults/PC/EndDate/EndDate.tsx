import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../../utils';

const EndDateText = styled.span`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: var(--color-naturalgray7);
`;

function EndDate({ endDate }: { endDate: string }) {
  const [year, month, dayList] = endDate.split('-');
  const [day] = dayList.split('T');

  return <EndDateText>{`${year}.${month}.${day} `}</EndDateText>;
}

export default EndDate;
