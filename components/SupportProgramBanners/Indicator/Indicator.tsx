import { useEffect, useState, useRef } from 'react';

import { Chevron } from 'commonUi/Icons';
import * as Styled from './Indicator.styled';

import { useInterval } from '../SupportProgramBanners.hooks';

import { INTERVAL_DELAY, MAXIMUM_PROGRESS } from '../SupportProgramBanners.constants';

type Props = {
  currentIndex: number;
  totalSlides: number;
  onClick: (type: 'next' | 'prev') => void;
};

function Indicator({ currentIndex, onClick, totalSlides }: Props) {
  const [progress, setProgress] = useState(0);
  const previousIndexRef = useRef(currentIndex);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (previousIndexRef.current !== currentIndex) {
      previousIndexRef.current = currentIndex;
      setStop(false);
    }
  }, [currentIndex]);

  useInterval(
    () => {
      if (progress === MAXIMUM_PROGRESS) {
        setStop(true);
        setProgress(0);
        onClick('next');
      } else {
        setProgress((prev) => prev + 1);
      }
    },
    stop ? null : INTERVAL_DELAY,
  );

  if (totalSlides === 0) {
    return null;
  }

  return (
    <Styled.IndicatorOuter>
      <Styled.IndicatorInner>
        <Styled.ButtonWrapper aria-label="지원프로그램 배너 현황">
          <button
            aria-label="이전 지원프로그램 배너 보기"
            type="button"
            onClick={() => onClick('prev')}
          >
            <Chevron direction="Left" size={20} />
          </button>
          <span>
            <b>{currentIndex + 1}</b> / {totalSlides}
          </span>
          <button
            aria-label="다음 지원프로그램 배너 보기"
            type="button"
            onClick={() => onClick('next')}
          >
            <Chevron direction="Right" size={20} />
          </button>
        </Styled.ButtonWrapper>
        <Styled.ProgressbarWrapper>
          <Styled.ProgressBar
            style={{
              transform: `translateX(${-100 + progress}%)`,
            }}
          />
        </Styled.ProgressbarWrapper>
      </Styled.IndicatorInner>
    </Styled.IndicatorOuter>
  );
}

export default Indicator;
