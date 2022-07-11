import React, { useRef } from 'react';
import Slider from 'react-slick';

import * as Styled from './FeaturedSupportPrograms.styled';
import Icons from '../../commonUi/Icons';

import { SLIDER_SETTINGS } from './FeaturedSupportPrograms.constants';

function FeaturedSupportPrograms() {
  const sliderRef = useRef<Slider | null>(null);

  const nextBtn = () => {
    sliderRef.current?.slickNext();
  };

  const prevBtn = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.NoticeHeaderTitle>👀지금 주목해야할</Styled.NoticeHeaderTitle>
        <Styled.SupportProgramsTitle>지원프로그램 추천</Styled.SupportProgramsTitle>

        <Styled.SlideWrapper>
          <Styled.ButtonWrapper $direction="left" role="button" onClick={prevBtn}>
            <Icons.CharbonLeft20 />
          </Styled.ButtonWrapper>

          <Styled.ButtonWrapper $direction="right" role="button" onClick={nextBtn}>
            <Icons.CharbonRight20 />
          </Styled.ButtonWrapper>

          <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
            <Styled.ContentsArticle>
              <Styled.ContentsImgLink>
                <Styled.ContentsImg></Styled.ContentsImg>
              </Styled.ContentsImgLink>
              <h5>타이틀1</h5>
            </Styled.ContentsArticle>
            <Styled.ContentsArticle>
              <Styled.ContentsImgLink>
                <Styled.ContentsImg></Styled.ContentsImg>
              </Styled.ContentsImgLink>
              <h5>타이틀2</h5>
            </Styled.ContentsArticle>
            <Styled.ContentsArticle>
              <Styled.ContentsImgLink>
                <Styled.ContentsImg></Styled.ContentsImg>
              </Styled.ContentsImgLink>
              <h5>타이틀3</h5>
            </Styled.ContentsArticle>
            <Styled.ContentsArticle>
              <Styled.ContentsImgLink>
                <Styled.ContentsImg></Styled.ContentsImg>
              </Styled.ContentsImgLink>
              <h5>타이틀3</h5>
            </Styled.ContentsArticle>
            <Styled.ContentsArticle>
              <Styled.ContentsImgLink>
                <Styled.ContentsImg></Styled.ContentsImg>
              </Styled.ContentsImgLink>
              <h5>타이틀3</h5>
            </Styled.ContentsArticle>
          </Slider>
        </Styled.SlideWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default FeaturedSupportPrograms;
