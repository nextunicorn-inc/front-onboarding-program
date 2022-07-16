import React from 'react';
import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../../utils';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from '../../../../../constants/supportPrograms';

const Text = styled.span`
  ${FontSize.size16}
  ${FontWeight.regular}
  line-height: 24px;
  color: var(--color-naturalgray7);
`;

function ApplyWays({ applyWaysData }) {
  const applyWayText = SUPPORT_PROGRAM_TYPE_TEXTS[applyWaysData];
  return <Text>{applyWayText}</Text>;
}

export default ApplyWays;
