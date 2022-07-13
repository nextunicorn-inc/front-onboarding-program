import React from 'react';
import * as Styled from './FeaturedSupportPrograms.styled';

import { TabletMobileSlideCards } from './TabletMobileSlideCards';
import { PCSlideCards } from './PCSlideCards';

function FeaturedSupportPrograms() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.NoticeHeaderTitle>👀지금 주목해야할</Styled.NoticeHeaderTitle>
        <Styled.SupportProgramsTitle>지원프로그램 추천</Styled.SupportProgramsTitle>

        <PCSlideCards />
        <TabletMobileSlideCards />
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default FeaturedSupportPrograms;
