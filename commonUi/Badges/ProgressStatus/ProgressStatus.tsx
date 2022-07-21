import React from 'react';
import * as Styled from './ProgressStatus.styled';

function ProgressStatus({ endAtData }: { endAtData: string | undefined }) {
  if (!endAtData) {
    const color = '#3389FF';
    const message = '상시 모집';

    return <Styled.Text $color={color}>{message}</Styled.Text>;
  }

  const [_, endMonthString, endDayList] = endAtData.split('-');
  const [endDayString] = endDayList.split('T');

  const endMonth = parseInt(endMonthString, 10);
  const endDay = parseInt(endDayString, 10);

  const todayDate = new Date();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  let color = 'white';
  let message = '대기중';

  // 오늘 마감
  if (todayMonth === endMonth && todayDay === endDay) {
    // color/ui/coral 색이 다릅니다.
    color = '#FF5859';
    message = '오늘 마감';
  }

  // D-Day
  if (todayMonth === endMonth && endDay > todayDay) {
    const dDay = endDay - todayDay;

    if (dDay > 8) {
      // 진행 중
      color = 'var(--color-bluegray7)';
      message = '진행중';
    } else if (dDay === 0) {
      // 오늘 마감
      // color/ui/coral 색이 다릅니다.
      color = '#FF5859';
      message = '오늘 마감';
    } else {
      // D-Day
      // color/ui/yellow 가 디자인 시스템에 없습니다.
      color = '#FFBE49';
      message = `D-${dDay}`;
    }
  } else if (endMonth > todayMonth) {
    // 진행 중
    color = 'var(--color-bluegray7)';
    message = '진행중';
  } else {
    // 마감
    // color = '#C3C8D2';
    color = 'var(--color-bluegray3)';
    message = '마감';
  }

  return <Styled.Text $color={color}>{message}</Styled.Text>;
}

export default ProgressStatus;
