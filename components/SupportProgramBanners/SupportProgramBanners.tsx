import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { Indicator } from './Indicator';
import * as Styled from './SupportProgramBanners.styled';
import useSupportProgramBanners from './SupportProgramBanners.hooks';

import { SLIDER_SETTINGS } from './SupportProgramBanners.constants';

function SupportProgramBanners() {
  const query = useSupportProgramBanners();
  const sliderRef = useRef<Slider | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const onSlide = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
  };

  const onClick = (type: 'next' | 'prev') => {
    if (type === 'next') {
      sliderRef.current?.slickNext();
    } else {
      sliderRef.current?.slickPrev();
    }
  };

  return (
    <Styled.Container>
      <Slider ref={sliderRef} {...SLIDER_SETTINGS} afterChange={onSlide}>
        {query.data?.map((supportProgramBanner) => (
          <Styled.InnerContainerLink
            key={supportProgramBanner.title}
            $backgroundColor={supportProgramBanner.backgroundColor}
            href={supportProgramBanner.link ?? '#'}
            target="_blank"
            rel="noreferrer"
          >
            <Styled.ResponsiveSection>
              <Styled.Description>
                <Styled.SubTitle $color={supportProgramBanner.subTitleColor}>
                  {supportProgramBanner.subTitle}
                </Styled.SubTitle>
                <Styled.Title
                  aria-label="지원프로그램 배너 타이틀"
                  $color={supportProgramBanner.titleColor}
                >
                  {supportProgramBanner.title}
                </Styled.Title>
              </Styled.Description>
              <Styled.ImageWrapper>
                <Image
                  src={supportProgramBanner.desktopImageUrl}
                  alt={supportProgramBanner.title}
                  quality={100}
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </Styled.ImageWrapper>
            </Styled.ResponsiveSection>
          </Styled.InnerContainerLink>
        ))}
      </Slider>
      <Indicator
        currentIndex={currentIndex}
        onClick={onClick}
        totalSlides={query.data?.length ?? 0}
      />
    </Styled.Container>
  );
}

export default SupportProgramBanners;
