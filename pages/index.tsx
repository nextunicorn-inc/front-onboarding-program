import styled from '@emotion/styled';
import { QueryClient, dehydrate } from 'react-query';
import Head from 'next/head';

import {
  CTASection,
  Footer,
  SupportProgramBanners,
  useSupportProgramBanners,
  useSupportProgramFilters,
  useFeaturedSupportPrograms,
  FeaturedSupportPrograms,
  SupportPrograms,
  Header,
} from 'components';

import { AreaEnum, Scalars, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '@/graphql';

import { useSupportProgramResults } from '../components/SupportPrograms/SupportProgramResults/SupportProgramResults.hooks';
import { MediaQuery } from '../utils';

type queryStringType = {
  query: {
    type: SupportProgramTypeEnum;
    targetCompanyAges: Array<TargetCompanyAgeEnum>;
    areas: Array<AreaEnum>;
    hosts: Array<Scalars['String']>;
    page: Scalars['String'];
  };
};

export async function getServerSideProps(context: queryStringType) {
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
    queryClient.prefetchQuery(
      useFeaturedSupportPrograms.getKeys(),
      useFeaturedSupportPrograms.fetcher,
    ),
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

const Between = styled.div`
  padding-top: 68px;
  background-color: var(--color-bluegray0);

  ${MediaQuery.tablet} {
    padding-top: 48px;
    background-color: var(--color-naturalgray0);
  }
`;
function Home() {
  return (
    <>
      <Head>
        <title>?????? ????????????</title>
        <meta name="keywords" content="??????????????????, ??????????????????, ??????????????????" />
        <meta
          name="description"
          content="??????????????? ?????? ?????????????????? ???????????? ????????????! ?????? ???????????? ????????????"
        />
        <meta name="author" content="???????????? ????????? ?????????" />
      </Head>
      <Header />
      <SupportProgramBanners />
      <FeaturedSupportPrograms />
      <Between />
      <SupportPrograms />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
