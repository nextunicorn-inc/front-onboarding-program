import * as Styled from './TabletMobileSlideCards.styled';

import { ApplyTag } from '../../../commonUi/Tags/ApplyTag';
import { CompanyAgeTag } from '../../../commonUi/Tags/CompanyAgeTag';
import { EndDate } from '../utils/EndDate';

import useFeaturedSupportPrograms from '../FeaturedSupportPrograms.hooks';

function TabletMobileSlideCards() {
  const query = useFeaturedSupportPrograms();

  return (
    <Styled.SlideCardWrapper>
      <Styled.SlideCards>
        {query.data?.supportPrograms.map((featuredSupportProgram) => (
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
      </Styled.SlideCards>
    </Styled.SlideCardWrapper>
  );
}

export default TabletMobileSlideCards;
