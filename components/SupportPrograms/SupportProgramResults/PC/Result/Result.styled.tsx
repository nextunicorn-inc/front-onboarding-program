import styled from '@emotion/styled';

export const ResultWrapper = styled.a`
  width: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: 105px 128px auto 93px 112px 63px;
  padding: 24px 20px;
  border-bottom: 1px solid var(--color-bluegray0);

  &:hover {
    border-radius: 5px;
    background-color: rgba(244, 245, 247, 0.6);
  }
`;

export const TestWrapper = styled.a`
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
`;

export const TestLeftContentsWrapper = styled.div`
  display: flex;
`;

export const TestStatusWrapper = styled.div`
  width: 50px;
`;

export const ApplyAreasWrapper = styled.div`
  width: 128px;
  flex-direction: column;
  margin-left: 28px;
`;

export const TestRightContentsWrapper = styled.div`
  flex: 1 1 0;
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
