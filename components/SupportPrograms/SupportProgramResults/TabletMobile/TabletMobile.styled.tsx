import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../../../utils';

export const Wrapper = styled.div`
  display: none;

  ${MediaQuery.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 0 32px;
`;

export const Title = styled.h1`
  ${FontSize.size12};
  ${FontWeight.medium};
  color: rgb(89, 89, 89);
`;

export const ResultWrapper = styled.div`
  background-color: var(--color-naturalgray0);
`;

export const ResultContainer = styled.div`
  width: 100%;
  padding: 0 32px 8px;
`;
