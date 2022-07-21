import React from 'react';
import * as Styled from './ApplyAreas.styled';
import { AREA_TEXTS } from '../../../../../../constants/supportPrograms';
import { AreaEnum } from '../../../../../../graphql';

function ApplyAreas({ applyAreasData }: { applyAreasData: Array<AreaEnum> }) {
  return (
    <>
      {applyAreasData.map((areaData) => (
        <Styled.Text key={areaData}>{AREA_TEXTS[areaData]}</Styled.Text>
      ))}
    </>
  );
}

export default ApplyAreas;
