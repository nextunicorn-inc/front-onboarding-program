import React, { useEffect, useRef, useState } from 'react';

import Icons from '../../commonUi/Icons';
import * as Styled from './SupportProgramBanners.styled';

import { useInterval } from './SupportProgramBanners.hooks';

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

  const move = (type: 'prev' | 'next', delay = 500) => {
    resetProgress();
    setTimeout(() => {
      onClick(type);
    }, delay);
  };

  useInterval(
    () => {
      if (progress === 100) {
        move('next');
        return;
      }
      setProgress((prev) => prev + 1);
    },
    stop ? null : 50,
  );

  useEffect(() => {
    if (previousIndexRef.current !== currentIndex) {
      previousIndexRef.current = currentIndex;
      resetProgress();
      setTimeout(() => {
        setStart(true);
      }, 500);
    }
  }, [progress, currentIndex]);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <Styled.IndicatorOuter>
      <Styled.IndicatorInner>
        <Styled.ButtonWrapper>
          <Icons.CharbonLeft20 onClick={() => move('prev', 0)} />
          <span>
            <b>{currentIndex + 1}</b> / {totalSlides}
          </span>
          <Icons.CharbonRight20 onClick={() => move('next', 0)} />
        </Styled.ButtonWrapper>
        <Styled.ProgressbarWrapper>
          <Styled.ProgressBar progress={progress} />
        </Styled.ProgressbarWrapper>
      </Styled.IndicatorInner>
    </Styled.IndicatorOuter>
  );
}

export default Indicator;
