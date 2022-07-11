import { QueryClient, dehydrate } from 'react-query';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection/CTASection';

import {
  SupportProgramBanners,
  useSupportProgramBanners,
} from '../components/SupportProgramBanners';

import { FeaturedSupportPrograms } from '../components/FeaturedSupportPrograms';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useSupportProgramBanners.getKeys(),
    useSupportProgramBanners.fetcher,
  );

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
      <CTASection />
      <Footer />
    </>
  );
}
export default Home;
