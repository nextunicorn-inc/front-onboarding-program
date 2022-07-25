import { graphql } from 'msw';
import type { BeforeRefactoredType } from 'components/SupportProgramBanners/SupportProgramBanners.hooks';
import supportProgramBanners from './db/supportProgramBanners.json';
import supportProgramFilters from './db/supportProgramFilters.json';
import { FilterOptionsQuery } from '../../components';

export const handlers = [
  graphql.query<BeforeRefactoredType, never>('SupportProgramBanners', (req, res, ctx) => {
    return res(
      ctx.data({
        supportProgramBanners,
      }),
    );
  }),
  graphql.query<FilterOptionsQuery, never>('FilterOptions', (req, res, ctx) => {
    return res(
      ctx.data({
        filterOptions:
          supportProgramFilters.filterOptions as unknown as FilterOptionsQuery['filterOptions'],
      }),
    );
  }),
];
