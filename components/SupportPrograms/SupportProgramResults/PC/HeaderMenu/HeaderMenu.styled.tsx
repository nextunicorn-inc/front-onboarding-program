import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const MenuTitleWrapper = styled.div`
  width: 100%;
  min-height: 64px;
  padding: 24px 20px;
  display: flex;
  flex-direction: row;
`;

export const MenuTitle = styled.div`
  display: flex;
  margin-left: 0;
  ${FontSize.size14}
  ${FontWeight.medium}
  line-height: 20px;
  color: #333333;
`;

export const ApplyAreasTitle = styled.div`
  width: 128px;
  margin-left: 28px;
  ${FontSize.size14}
  ${FontWeight.medium}
  line-height: 20px;
  color: #333333;
`;

export const ProgramTitle = styled.div`
  margin-left: 28px;
  ${FontSize.size14};
  ${FontWeight.medium};
  line-height: 20px;
  color: #333333;
  flex: 1;
`;

export const CompanyAgeTitle = styled.div`
  ${FontSize.size14};
  ${FontWeight.medium};
  margin-left: 28px;
  line-height: 20px;
  color: #333333;
  width: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const EndDataTitle = styled.div`
  ${FontSize.size14};
  ${FontWeight.medium};
  margin-left: 28px;
  line-height: 20px;
  color: #333333;
  width: 84px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ApplyWayTitle = styled.div`
  margin-left: 28px;
  ${FontSize.size14};
  ${FontWeight.medium};
  line-height: 20px;
  color: #333333;
  width: 102px;
`;
