import { QueryClient, dehydrate } from 'react-query';
import Head from 'next/head';

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

import { AreaEnum, Scalars, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '@/graphql';

import { useSupportProgramResults } from '../components/SupportPrograms/SupportProgramResults/SupportProgramResults.hooks';

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
      <Head>
        <title>지원 프로그램</title>
        <meta name="keywords" content="지원프로그램, 스타트업지원, 정부지원사업" />
        <meta
          name="description"
          content="스타트업을 위한 지원사업부터 데모데이 신청까지! 지원 프로그램 확인하기"
        />
        <meta name="author" content="주식회사 넥스트 유니콘" />
      </Head>
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
