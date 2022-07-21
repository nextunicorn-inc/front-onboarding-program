import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from 'constants/supportPrograms';
import { SupportProgramTypeEnum } from '@/graphql';
import { Thunder } from 'commonUi/Icons';
import { useMediaQuery } from 'hooks';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 102px;
  margin-left: 28px;

  ${MediaQuery.tablet} {
    width: auto;
    display: flex;
    align-items: center;
    margin-left: 0;
  }
`;

const Text = styled.span<{ $color: string }>`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: ${({ $color }) => $color};
  margin-right: 3px;

  ${MediaQuery.tablet} {
    ${FontSize.size12}
    ${FontWeight.regular}
    margin-right: 0;
    line-height: 18px;
    color: ${({ $color }) => $color};
  }
`;

function ApplyWays({
  applyWaysData,
  endDate,
}: {
  applyWaysData: SupportProgramTypeEnum;
  endDate: string | undefined;
}) {
  const isTablet = useMediaQuery('(max-width: 1023px)');

  const applyWayText = SUPPORT_PROGRAM_TYPE_TEXTS[applyWaysData];

  const today = new Date();

  const resultEndDate =
    endDate ?? `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const resultEndDateMonth = parseInt(resultEndDate?.split('-')[1], 10);
  const resultEndDateDay = parseInt(resultEndDate?.split('-')[2], 10);

  let isPassEndDate;

  if (resultEndDateMonth === today.getMonth() + 1) {
    isPassEndDate = resultEndDateDay < today.getDate();
  } else if (resultEndDateMonth < today.getMonth() + 1) {
    isPassEndDate = true;
  } else if (resultEndDateMonth > today.getMonth() + 1) {
    isPassEndDate = false;
  }

  if (applyWayText === '간편 신청' && isPassEndDate) {
    return (
      <TextWrapper>
        <Text $color="var(--color-naturalgray6)">{applyWayText}</Text>
        <Thunder active={false} size={isTablet ? 13 : 15} />
      </TextWrapper>
    );
  }

  if (applyWayText === '간편 신청' && !isPassEndDate) {
    return (
      <TextWrapper>
        <Text $color="#FF5859">{applyWayText}</Text>
        <Thunder active size={isTablet ? 13 : 15} />
      </TextWrapper>
    );
  }

  return (
    <TextWrapper>
      <Text $color="var(--color-naturalgray6)">{applyWayText}</Text>
    </TextWrapper>
  );
}

export default ApplyWays;
