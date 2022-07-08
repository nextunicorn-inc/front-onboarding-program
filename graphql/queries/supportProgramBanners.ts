import { gql } from 'graphql-request';

export const SUPPORT_PROGRAM_BANNERS = gql`
  query SupportProgramBanners {
    supportProgramBanners {
      amplitudeEvent
      backgroundColor
      desktopImageUrl
      link
      mobileImageUrl
      subTitle
      subTitleColor
      title
      titleColor
    }
  }
`;
