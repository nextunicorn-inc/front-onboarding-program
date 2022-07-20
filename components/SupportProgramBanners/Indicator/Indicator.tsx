import { useEffect, useRef, useState } from 'react';

import { Chevron } from 'commonUi/Icons';
import * as Styled from './Indicator.styled';

import { useInterval } from '../SupportProgramBanners.hooks';

import {
  INTERVAL_DELAY,
  MAXIMUM_PROGRESS,
  TIMEOUT_DELAY,
} from '../SupportProgramBanners.constants';

type Props = {
  currentIndex: number;
  totalSlides: number;
  onClick: (type: 'next' | 'prev') => void;
};

function Indicator({ currentIndex, onClick, totalSlides }: Props) {
  const previousIndexRef = useRef(currentIndex);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(true);
  const stop = totalSlides === 0 || !start;

  const resetProgress = () => {
    setStart(false);
    setProgress(0);
  };

  const move = (type: 'prev' | 'next', delay = TIMEOUT_DELAY) => {
    resetProgress();
    setTimeout(() => {
      onClick(type);
    }, delay);
  };

  useInterval(
    () => {
      if (progress === MAXIMUM_PROGRESS) {
        move('next');
        return;
      }
      setProgress((prev) => prev + 1);
    },
    stop ? null : INTERVAL_DELAY,
  );

  useEffect(() => {
    if (previousIndexRef.current !== currentIndex) {
      previousIndexRef.current = currentIndex;
      resetProgress();
      setTimeout(() => {
        setStart(true);
      }, 0);
    }
  }, [progress, currentIndex]);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <Styled.IndicatorOuter>
      <Styled.IndicatorInner>
        <Styled.ButtonWrapper>
          <button type="button" onClick={() => move('prev')}>
            <Chevron direction="Left" size={20} />
          </button>
          <span>
            <b>{currentIndex + 1}</b> / {totalSlides}
          </span>
          <button type="button" onClick={() => move('next')}>
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
