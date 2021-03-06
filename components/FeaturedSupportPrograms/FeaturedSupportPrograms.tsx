import React from 'react';
import * as Styled from './FeaturedSupportPrograms.styled';

import { TabletMobileSlideCards } from './TabletMobileSlideCards';
import { PCSlideCards } from './PCSlideCards';

function FeaturedSupportPrograms() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.NoticeHeaderTitle>๐์ง๊ธ ์ฃผ๋ชฉํด์ผํ </Styled.NoticeHeaderTitle>
        <Styled.SupportProgramsTitle>์ง์ํ๋ก๊ทธ๋จ ์ถ์ฒ</Styled.SupportProgramsTitle>

        <PCSlideCards />
        <TabletMobileSlideCards />
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default FeaturedSupportPrograms;
