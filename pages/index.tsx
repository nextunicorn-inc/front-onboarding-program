import { QueryClient, dehydrate } from 'react-query';

import {
  CTASection,
  Footer,
  SupportProgramBanners,
  useSupportProgramBanners,
  useSupportProgramFilters,
  FeaturedSupportPrograms,
  SupportPrograms,
  Header,
} from 'components';

import { useSupportProgramResults } from '../components/SupportPrograms/SupportProgramResults/SupportProgramResults.hooks';

export async function getServerSideProps(context) {
  const {
    query: { type, targetCompanyAges, areas, hosts, page },
  } = context;

  const selectedType = !type ? null : type;
  const selectedCompanyAges = !targetCompanyAges?.length ? null : targetCompanyAges;
  const selectedAreas = !areas?.length ? null : areas;
  const selectedHosts = !hosts?.length ? null : hosts;
  const selectedPage = !page ? 1 : parseInt(page, 10);

  const selectedFilter = {
    filter: {
      type: selectedType,
      targetCompanyAges: selectedCompanyAges,
      areas: selectedAreas,
      hosts: selectedHosts,
      page: selectedPage,
    },
  };

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(useSupportProgramBanners.getKeys(), useSupportProgramBanners.fetcher),
    queryClient.prefetchQuery(useSupportProgramFilters.getKeys(), useSupportProgramFilters.fetcher),
    queryClient.prefetchQuery(useSupportProgramResults.getKeys(selectedFilter.filter), () =>
      useSupportProgramResults.fetcher(selectedFilter),
    ),
  ]);

  return {
    props: {
      reactQueryData: dehydrate(queryClient),
    },
  };
}

function Home() {
  return (
    <>
      <Header />
      <SupportProgramBanners />
      <FeaturedSupportPrograms />
      <SupportPrograms />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
