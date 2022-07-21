import styled from '@emotion/styled';
import { MediaQuery } from '../../utils';

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--color-bluegray0);

  ${MediaQuery.tablet} {
    background-color: var(--color-naturalgray0);
  }
`;
