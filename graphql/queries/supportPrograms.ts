import { gql } from 'graphql-request';

export const SUPPORT_PROGRAMS = gql`
  query SupportPrograms($filter: SupportProgramsFilterType) {
    supportPrograms(filter: $filter) {
      data {
        startAt
        endAt
        areas
        name
        targetCompanyAges
        type
        outerApplyLink
      }
    }
  }
`;
