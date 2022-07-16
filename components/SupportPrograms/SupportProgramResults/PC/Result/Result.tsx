import React from 'react';
import * as Styled from './Result.styled';
import { ProgressStatus } from '../../../../../commonUi/Badges/ProgressStatus';
import { ApplyAreas } from '../ApplyAreas';
import { CompanyAgeTitle } from '../CompanyAgeTitle';
import { EndDate } from '../EndDate';
import { ApplyWays } from '../ApplyWays';
import { Title } from '../Title';

function Result({ data }) {
  if (!data) {
    return <b>아직 데이터를 불러오고 있어요</b>;
  }

  return (
    <>
      {data.data.map((supportProgram: any) => (
        <Styled.ResultWrapper href={supportProgram.outerApplyLink} key={supportProgram.name}>
          <ProgressStatus dateData={{ endAt: supportProgram.endAt }} />
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
