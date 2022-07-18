import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from '../../../../../utils';

const EndDateText = styled.h5`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: var(--color-naturalgray7);

  ${MediaQuery.tablet} {
    ${FontSize.size12}
    ${FontWeight.regular}
    line-height: 18px;
    color: var(--color-naturalgray7);

    ::after {
      content: '|';
    }
  }
`;

function EndDate({ endDate }: { endDate: string }) {
  if (!endDate) {
    return <EndDateText>2022.08.08</EndDateText>;
  }

  const [year, month, dayList] = endDate.split('-');
  const [day] = dayList.split('T');

  return <EndDateText>{`${year}.${month}.${day} `}</EndDateText>;
}

export default EndDate;
