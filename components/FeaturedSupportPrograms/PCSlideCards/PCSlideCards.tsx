import React, { useRef } from 'react';

import Slider from 'react-slick';
import { Chevron } from 'commonUi/Icons';
import { Apply } from 'commonUi/Badges/Apply';
import { CompanyAge } from 'commonUi/Badges/CompanyAge';
import { EndDate } from '../utils/EndDate';
import useFeaturedSupportPrograms from '../FeaturedSupportPrograms.hooks';
import { SLIDER_SETTINGS } from '../FeaturedSupportPrograms.constants';
import * as Styled from './PCSlideCards.styled';
import { SROnly } from '../../../commonUi/SROnly';

function PCSlideCards() {
  const query = useFeaturedSupportPrograms();
  const sliderRef = useRef<Slider | null>(null);

  const nextBtn = () => {
    sliderRef.current?.slickNext();
  };

  const prevBtn = () => {
    sliderRef.current?.slickPrev();
  };

  if (!query.data) {
    return (
      <Styled.EmptySlideCards>
        <Styled.EmptySlideCard />
        <Styled.EmptySlideCard />
        <Styled.EmptySlideCard />
      </Styled.EmptySlideCards>
    );
  }

  return (
    <Styled.SlideCardWrapper>
      <Styled.SlideButtonWrapper
        aria-label="이전 지원프로그램 추천 보기"
        $isLeftDirection
        role="button"
        onClick={prevBtn}
      >
        <SROnly>이전 지원프로그램 추천 보기</SROnly>
        <Chevron direction="Left" size={20} />
      </Styled.SlideButtonWrapper>

      <Styled.SlideButtonWrapper
        aria-label="다음 지원프로그램 추천 보기"
        $isLeftDirection={false}
        role="button"
        onClick={nextBtn}
      >
        <SROnly>다음 지원프로그램 추천 보기</SROnly>
        <Chevron direction="Right" size={20} />
      </Styled.SlideButtonWrapper>

      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {query.data.supportPrograms.map((featuredSupportProgram) => (
          <Styled.SlideCard key={featuredSupportProgram.id}>
            <Styled.SlideCardImg
              src={featuredSupportProgram.bannerImgUrl}
              alt={featuredSupportProgram.name}
            />
            <Styled.SlideTagWrapper>
              <Apply applyText={featuredSupportProgram.type} />
              <CompanyAge targetCompanyAges={featuredSupportProgram.targetCompanyAges} />
            </Styled.SlideTagWrapper>

            <Styled.SlideCardTitle>{featuredSupportProgram.name}</Styled.SlideCardTitle>
            <Styled.SlideCardCompanyName>넥스트유니콘</Styled.SlideCardCompanyName>

            <EndDate endDate={featuredSupportProgram.endAt} />
          </Styled.SlideCard>
        ))}
      </Slider>
    </Styled.SlideCardWrapper>
  );
}

export default PCSlideCards;
