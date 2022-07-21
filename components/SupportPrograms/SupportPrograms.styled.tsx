import styled from '@emotion/styled';
import { MediaQuery } from '../../utils';

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 68px;
  background-color: var(--color-bluegray0);

  ${MediaQuery.tablet} {
    padding-top: 48px;
    background-color: var(--color-naturalgray0);
  }
`;
