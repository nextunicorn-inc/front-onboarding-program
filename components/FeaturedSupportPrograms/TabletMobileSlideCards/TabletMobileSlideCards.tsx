import * as Styled from './TabletMobileSlideCards.styled';

import { Apply } from '../../../commonUi/Badges/Apply';
import { CompanyAge } from '../../../commonUi/Badges/CompanyAge';
import { EndDate } from '../utils/EndDate';

import useFeaturedSupportPrograms from '../FeaturedSupportPrograms.hooks';

function TabletMobileSlideCards() {
  const query = useFeaturedSupportPrograms();

  if (!query.data) {
    return (
      <Styled.SlideCardWrapper>
        <Styled.SlideCards>
          <Styled.EmptySlideCard />
          <Styled.EmptySlideCard />
        </Styled.SlideCards>
      </Styled.SlideCardWrapper>
    );
  }

  return (
    <Styled.SlideCardWrapper>
      <Styled.SlideCards>
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
      </Styled.SlideCards>
    </Styled.SlideCardWrapper>
  );
}

export default TabletMobileSlideCards;
