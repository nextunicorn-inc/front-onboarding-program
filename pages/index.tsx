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
} from 'components/';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(useSupportProgramBanners.getKeys(), useSupportProgramBanners.fetcher),
    queryClient.prefetchQuery(useSupportProgramFilters.getKeys(), useSupportProgramFilters.fetcher),
  ]);

  return {
    props: {
      reactQueryData: dehydrate(queryClient),
    },
    revalidate: 60,
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
