import { useQuery } from 'react-query';
import client from '../../graphql/client';
import { SUPPORT_PROGRAM_BANNERS } from '../../graphql/queries';
import { RecursivelyExcludeNull, SupportProgramBannersQuery } from '../../graphql';

type BeforeRefactoredType = RecursivelyExcludeNull<
  SupportProgramBannersQuery,
  'link' | 'mobileImageUrl'
>;

export default function useSupportProgramBanners() {
  return useQuery<BeforeRefactoredType, Error, BeforeRefactoredType['supportProgramBanners']>(
    useSupportProgramBanners.getKeys(),
    useSupportProgramBanners.fetcher,
    {
      select: (data) => data.supportProgramBanners,
    },
  );
}

useSupportProgramBanners.getKeys = () => ['supportProgramBanners'];
useSupportProgramBanners.fetcher = function () {
  return client.request<BeforeRefactoredType>(SUPPORT_PROGRAM_BANNERS);
};
