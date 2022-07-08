import { gql } from 'graphql-request';

export const SUPPORT_PROGRAM_BANNERS = gql`
  query SupportProgramBanners {
    supportProgramBanners {
      link
    }
  }
`;
