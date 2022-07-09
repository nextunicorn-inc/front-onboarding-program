import { Carousel } from 'react-responsive-carousel';
import * as Styled from './SupportProgramBanners.styled';
import useSupportProgramBanners from './SupportProgramBanners.hooks';

function SupportProgramBanners() {
  const query = useSupportProgramBanners();

  return (
    <Styled.Contatiner>
      <Carousel
        // autoPlay
        infiniteLoop
        swipeable
        emulateTouch
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {query.data?.map((supportProgramBanner) => (
          <Styled.InnerContainerLink
            key={supportProgramBanner.title}
            $backgroundColor={supportProgramBanner.backgroundColor}
            href={supportProgramBanner.link ?? '#'}
          >
            <Styled.ResponsiveSection $backgroundImageUrl={supportProgramBanner.desktopImageUrl}>
              <Styled.Description>
                <Styled.SubTitle $color={supportProgramBanner.subTitleColor}>
                  {supportProgramBanner.subTitle}
                </Styled.SubTitle>
                <Styled.Title $color={supportProgramBanner.titleColor}>
                  {supportProgramBanner.title}
                </Styled.Title>
              </Styled.Description>
              <Styled.BannerImage
                src={supportProgramBanner.desktopImageUrl}
                alt={supportProgramBanner.title}
              />
            </Styled.ResponsiveSection>
          </Styled.InnerContainerLink>
        ))}
      </Carousel>
    </Styled.Contatiner>
  );
}

export default SupportProgramBanners;
