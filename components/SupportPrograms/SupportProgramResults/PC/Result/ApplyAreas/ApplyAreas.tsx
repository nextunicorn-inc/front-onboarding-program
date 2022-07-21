import React from 'react';
import { AreaEnum } from 'graphql';
import { AREA_TEXTS } from 'constants/supportPrograms';
import * as Styled from './ApplyAreas.styled';

function ApplyAreas({ applyAreasData }: { applyAreasData: Array<AreaEnum> }) {
  return (
    // <Styled.Wrapper>
    //   {applyAreasData.map((areaData) => (
    //     <Styled.Text key={areaData}>{AREA_TEXTS[areaData]}</Styled.Text>
    //   ))}
    // </Styled.Wrapper>
    <>
      {applyAreasData.map((areaData) => (
        <Styled.Text key={areaData}>{AREA_TEXTS[areaData]}</Styled.Text>
      ))}
    </>
  );
}

export default ApplyAreas;
