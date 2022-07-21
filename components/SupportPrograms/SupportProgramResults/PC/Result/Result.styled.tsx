import styled from '@emotion/styled';
import { MediaQuery } from '../../../../../utils';

export const Wrapper = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 64px;
  padding: 24px 20px;
  border-bottom: 1px solid var(--color-bluegray0);
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background-color: rgba(244, 245, 247, 0.6);
  }

  &:last-child {
    border-bottom: unset;
  }
`;

export const LeftContentsWrapper = styled.div`
  display: flex;
`;

export const StatusWrapper = styled.div`
  width: 55px;
`;

export const ApplyAreasWrapper = styled.div`
  width: 128px;
  flex-direction: column;
  margin-left: 28px;
`;

export const RightContentsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ProgramNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 28px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 345px;
  flex-basis: 345px;
  flex-shrink: 0;
`;

export const DetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
