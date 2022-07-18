import styled from '@emotion/styled';
import { MediaQuery } from '../../utils';

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 60px;
  background-color: var(--color-bluegray0);

  ${MediaQuery.tablet} {
    background-color: var(--color-naturalgray0);
  }
`;
