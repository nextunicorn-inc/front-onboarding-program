import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const MenuTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 105px 128px auto 93px 112px 130px;
  width: 100%;
  min-height: 64px;
  padding: 24px 20px;
`;

export const MenuTitle = styled.div`
  ${FontSize.size14}
  ${FontWeight.medium}
  color: rgb(51, 51, 51);
`;

export const ProgramTitle = styled.div`
  ${FontSize.size14}
  ${FontWeight.medium}
  color: rgb(51, 51, 51);
  flex: 1 1 0;
`;
