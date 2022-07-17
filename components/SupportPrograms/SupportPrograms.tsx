import * as Styled from './SupportPrograms.styled';

import {
  useSupportProgramFilters,
  TypeFilters,
  useClientFilter,
  FilterTable,
  FilterTableRow,
  FilterDetail,
} from './SupportProgramFilters';

import { useModal } from '../../commonUi/Modal';

import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from '../../constants/supportPrograms';

import type { Area, TargetCompanyAge, Host, Type } from './SupportProgramFilters';
import { ResultSupportPrograms } from './SupportProgramResults';

import useSupportProgramResults from './SupportProgramResults/SupportProgramResults.hooks';
import { PageNavigation } from './PageNavigation';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<Type>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAge>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<Area>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<Host>({
    multiple: true,
  });
  const { hide } = useModal();

  const selectedFilter = {
    filter: {
      type: filteredActiveTypes?.[0] ?? null,
      targetCompanyAges: filteredActiveAges,
      areas: filteredActiveAreas,
      hosts: filteredActiveHosts?.map((host) => host.id) ?? null,
      page: null,
    },
  };

  // 504에 때문에 주석처리
  // const { data: selectedSupportProgramsResultData } = useSupportProgramResults(selectedFilter);

  const selectedSupportProgramsResultData = {
    data: [
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-07-29TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-1',
        targetCompanyAges: ['U3'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-06-29TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-2',
        targetCompanyAges: ['U3'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-07-19TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-3',
        targetCompanyAges: ['U3'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-07-29TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-4',
        targetCompanyAges: ['U3'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-07-29TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-5',
        targetCompanyAges: ['U3'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
      {
        startAt: '2022-07-08TXX',
        endAt: '2022-07-29TXX',
        areas: ['CO', 'CZ'],
        name: '2022 NEXEED 투자 상담회 1회 참여기업 모집-6 & 2022 NEXEED 투자 상담회 1회 참여기업 모집-6 & 2022 NEXEED 투자 상담회 1회 참여기업 모집-6',
        targetCompanyAges: ['U3', 'M8'],
        type: ['SNLP'],
        outerApplyLink: 'https://www.nextunicorn.kr/program/0b4507ce38f54c43',
        supportProgramCompany: {
          name: '넥스트유니콘',
        },
      },
    ],
  };

  // 여기서 데이터 갯수 확인후 페이지 네이션에게 전달해서 해야함

  return (
    <Styled.Wrapper>
      {filterQuery.isSuccess && (
        <>
          <TypeFilters
            allTypes={filterQuery.data.types}
            activeTypes={activeTypes}
            onClick={toggleTypes}
          />
          <FilterTable
            ages={
              <FilterTableRow
                title="창업 기간"
                toggle={toggleAges}
                keyExtractor={(data) => data}
                data={filterQuery.data.targetCompanyAges}
                activeData={activeAges}
                renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="창업 기간"
                    toggle={toggleAges}
                    keyExtractor={(data) => data}
                    data={filterQuery.data.targetCompanyAges}
                    activeData={activeAges}
                    renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            areas={
              <FilterTableRow
                title="지원 분야"
                toggle={toggleAreas}
                keyExtractor={(data) => data}
                data={filterQuery.data.areas}
                activeData={activeAreas}
                renderItemText={(data) => AREA_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="지원 분야"
                    toggle={toggleAreas}
                    keyExtractor={(data) => data}
                    data={filterQuery.data.areas}
                    activeData={activeAreas}
                    renderItemText={(data) => AREA_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            hosts={
              <FilterTableRow
                title="주관 기관"
                toggle={toggleHosts}
                keyExtractor={(data) => data.id}
                data={filterQuery.data.hosts}
                activeData={activeHosts}
                renderItemText={(data) => data.meta.name}
                Detail={
                  <FilterDetail
                    title="주관 기관"
                    toggle={toggleHosts}
                    keyExtractor={(data) => data.id}
                    data={filterQuery.data.hosts}
                    activeData={activeHosts}
                    renderItemText={(data) => data.meta.name}
                    onClose={hide}
                  />
                }
              />
            }
          />
        </>
      )}

      <ResultSupportPrograms data={selectedSupportProgramsResultData} />
      <PageNavigation />
    </Styled.Wrapper>
  );
}

export default SupportPrograms;
