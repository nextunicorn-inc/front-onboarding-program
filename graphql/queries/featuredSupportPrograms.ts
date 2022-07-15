import { gql } from 'graphql-request';

export const FEATURED_SUPPORT_PROGRAMS = gql`
  query FeaturedSupportPrograms {
    featuredSupportPrograms {
      supportPrograms {
        type
        id
        bannerImgUrl
        outerApplyLink
        targetCompanyAges
        name
        endAt
        supportProgramCompany {
          name
        }
      }
    }
  }
`;
