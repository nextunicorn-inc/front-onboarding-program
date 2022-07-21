import { ProgressStatus } from 'commonUi/Badges/ProgressStatus';
import { ApplyAreas } from './ApplyAreas';
import { CompanyAgeTitle } from './CompanyAgeTitle';
import { EndDate } from '../../utils/EndDate';
import { ApplyWays } from '../../utils/ApplyWays';
import { SupportProgramsQuery } from '../../SupportProgramResults.type';
import * as Styled from './Result.styled';

function Result({ data }: { data: SupportProgramsQuery['supportPrograms'] | undefined }) {
  if (!data) {
    return <b>아직 데이터를 불러오고 있어요</b>;
  }

  return (
    <Styled.Container>
      {data.data.map((supportProgram) => (
        <Styled.Wrapper href={supportProgram.outerApplyLink ?? '#'} key={supportProgram.name}>
          <Styled.StatusAndApplyAreasWrapper>
            <ProgressStatus endAtData={supportProgram.endAt} />
            <ApplyAreas applyAreasData={supportProgram.areas} />
          </Styled.StatusAndApplyAreasWrapper>

          <Styled.Title>{supportProgram.name}</Styled.Title>

          <Styled.CompanyName>{supportProgram.supportProgramCompany.name}</Styled.CompanyName>

          <Styled.DetailInfoWrapper>
            <CompanyAgeTitle companyAgeTitleData={supportProgram.targetCompanyAges} />
            <EndDate endDate={supportProgram.endAt} />
            <ApplyWays applyWaysData={supportProgram.type} endDate={supportProgram.endAt} />
          </Styled.DetailInfoWrapper>
        </Styled.Wrapper>
      ))}
    </Styled.Container>
  );
}

export default Result;
