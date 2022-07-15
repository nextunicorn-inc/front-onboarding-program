import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../../../utils';

export const Wrapper = styled.div`
  display: none;
  ${MediaQuery.mobile || MediaQuery.tablet} {
    display: flex;
  }
`;
