import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';
import { useMediaQuery } from '../../../../../hooks';

const EndDateTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 28px;
  width: 84px;

  ${MediaQuery.tablet} {
    width: auto;
    margin-left: 0;
  }
`;

const EndDateText = styled.h5`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: var(--color-naturalgray6);

  ${MediaQuery.tablet} {
    ${FontSize.size12}
    ${FontWeight.regular}
    line-height: 18px;
    color: var(--color-naturalgray6);

    ::after {
      margin-left: 4px;
      content: '|';
      color: var(--color-naturalgray6);
    }
  }
`;

function EndDate({ endDate }: { endDate: string | undefined }) {
  const isTablet = useMediaQuery('(max-width: 1023px)');

  if (!endDate) {
    return (
      <EndDateTextWrapper>
        <EndDateText>상시</EndDateText>
      </EndDateTextWrapper>
    );
  }

  const [year, month, dayList] = endDate.split('-');
  const [day] = dayList.split('T');

  return (
    <EndDateTextWrapper>
      {isTablet ? (
        <EndDateText>{`${year}.${month}.${day}까지 `}</EndDateText>
      ) : (
        <EndDateText>{`${year}.${month}.${day} `}</EndDateText>
      )}
    </EndDateTextWrapper>
  );
}

export default EndDate;
