import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from 'utils';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;

  ${MediaQuery.tablet} {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Title = styled.p`
  ${FontSize.size18};
  ${FontWeight.medium};
  color: #3a4a4a;
  margin-left: 20px;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(232, 236, 242);
  border-radius: 5px;
  background-color: var(--color-naturalgray0);
`;

export const ResultContainer = styled.div`
  width: 100%;
  padding: 0 16px 8px;
`;
