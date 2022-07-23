import { graphql } from 'msw';
import type { BeforeRefactoredType } from 'components/SupportProgramBanners/SupportProgramBanners.hooks';
import supportProgramBanners from './db/supportProgramBanners.json';

export const handlers = [
  graphql.query<BeforeRefactoredType, never>('SupportProgramBanners', (req, res, ctx) => {
    return res(
      ctx.data({
        supportProgramBanners,
      }),
    );
  }),
];
