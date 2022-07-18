import { gql } from 'graphql-request';

export const FILTER_OPTIONS = gql`
  query FilterOptions {
    filterOptions {
      areas
      hosts {
        id: companyId
        meta: hostCompany {
          name
        }
      }
      targetCompanyAges
      types
    }
  }
`;

export const FILTER_OPTIONS_RAW = `
  query FilterOptions {
    filterOptions {
      areas
      hosts {
        id: companyId
        meta: hostCompany {
          name
        }
      }
      targetCompanyAges
      types
    }
  }
`;
