import React from 'react';
import * as Styled from './ProgressStatus.styled';

function ProgressStatus({ dateData }) {
  if (!dateData.endAt) {
    const color = '#3389FF';
    const message = '상시 모집';

    return (
      <Styled.TextWrapper $color={color}>
        <Styled.Text>{message}</Styled.Text>
      </Styled.TextWrapper>
    );
  }

  const [endYearString, endMonthString, endDayList] = dateData?.endAt.split('-');
  const [endDayString] = endDayList.split('T');

  const endMonth = parseInt(endMonthString, 10);
  const endDay = parseInt(endDayString, 10);

  const todayDate = new Date();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  let color: string = 'white';
  let message: string = '대기중';

  // 상시 모집(endAta = null)
  if (!dateData.endAt) {
    /* color/primary/blue5 */
    // color = 'var(--color-unicornblue6)';
    color = '#3389FF';
    message = '상시 모집';
  }

  // 오늘 마감
  if (todayMonth === endMonth && todayDay === endDay) {
    /* color/ui/coral */
    color = 'var(--color-coral5)';
    message = '오늘 마감';
  }

  // D-Day
  // 1. T Month = endMonth
  // 2. end day - T Day < 8
  if (todayMonth === endMonth && endDay > todayDay) {
    const dDay = endDay - todayDay;

    if (dDay > 8) {
      // 진행 중
      /* color/primary/blue7 */
      color = '#0057CE';
      message = '진행중';
    } else if (dDay === 0) {
      // 오늘 마감
      /* color/ui/coral */
      color = 'var(--color-coral5)';
      message = '오늘 마감';
    } else {
      // D-Day
      /* color/ui/yellow */
      color = '#FFBE49';
      message = `D-${dDay}`;
    }
  } else if (endMonth > todayMonth) {
    // 진행 중
    /* color/primary/blue7 */
    color = '#0057CE';
    message = '진행중';
  } else {
    // 마감
    /* color/bluegray/bluegray3 */
    color = '#C3C8D2';
    message = '마감';
  }

  return (
    <Styled.TextWrapper $color={color}>
      <Styled.Text>{message}</Styled.Text>
    </Styled.TextWrapper>
  );
}

export default ProgressStatus;
