import React, { useRef } from 'react';
import Slider from 'react-slick';

import { SLIDER_SETTINGS } from '../FeaturedSupportPrograms.constants';

import * as Styled from './PCSlideCards.styled';

import { ApplyTag } from '../../../commonUi/Tags/ApplyTag';
import { CompanyAgeTag } from '../../../commonUi/Tags/CompanyAgeTag';
import { EndDate } from '../utils/EndDate';
import useFeaturedSupportPrograms from '../FeaturedSupportPrograms.hooks';
import Icons from '../../../commonUi/Icons';

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
      <Styled.SlideButtonWrapper $isLeftDirection={true} role="button" onClick={prevBtn}>
        <Icons.CharbonLeft20 />
      </Styled.SlideButtonWrapper>

      <Styled.SlideButtonWrapper $isLeftDirection={false} role="button" onClick={nextBtn}>
        <Icons.CharbonRight20 />
      </Styled.SlideButtonWrapper>

      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {query.data.supportPrograms.map((featuredSupportProgram) => (
          <Styled.SlideCard key={featuredSupportProgram.id}>
            <Styled.SlideCardImg
              src={featuredSupportProgram.bannerImgUrl}
              alt={featuredSupportProgram.name}
            />

            <Styled.SlideTagWrapper>
              <ApplyTag applyText={featuredSupportProgram.type} />
              <CompanyAgeTag targetCompanyAges={featuredSupportProgram.targetCompanyAges} />
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
