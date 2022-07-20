import React from 'react';
import { ProgressStatus } from 'commonUi/Badges/ProgressStatus';
import { ApplyAreas } from './ApplyAreas';
import { CompanyAgeTitle } from './CompanyAgeTitle';
import { EndDate } from '../../utils/EndDate';
import { ApplyWays } from '../../utils/ApplyWays';
import { Title } from './Title';
import { SupportProgramsQuery, SupportProgramDataType } from '../../SupportProgramResults.type';
import * as Styled from './Result.styled';

function Result({ data }: { data: SupportProgramsQuery['supportPrograms'] | undefined }) {
  if (!data) {
    return <b>아직 데이터를 불러오고 있어요</b>;
  }

  return (
    <>
      {data.data.map((supportProgram: SupportProgramDataType) => (
        <Styled.ResultWrapper href={supportProgram.outerApplyLink} key={supportProgram.name}>
          <ProgressStatus endAtData={supportProgram.endAt} />
          <ApplyAreas applyAreasData={supportProgram.areas} />
          <Title
            titleData={{
              title: supportProgram.name,
              companyName: supportProgram.supportProgramCompany.name,
            }}
          />

          <CompanyAgeTitle companyAgeTitleData={supportProgram.targetCompanyAges} />
          <EndDate endDate={supportProgram.endAt} />
          <ApplyWays applyWaysData={supportProgram.type} />
        </Styled.ResultWrapper>
      ))}
    </>
  );
}

export default Result;
