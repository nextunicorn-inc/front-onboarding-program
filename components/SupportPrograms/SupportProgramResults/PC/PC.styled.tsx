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
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  ${FontSize.size18};
  ${FontWeight.medium};
  color: #3a4a4a;
`;

export const ResultWrapper = styled.div`
  background-color: var(--color-naturalgray0);
`;

export const ResultContainer = styled.div`
  width: 100%;
  padding: 0 16px 8px;
`;
