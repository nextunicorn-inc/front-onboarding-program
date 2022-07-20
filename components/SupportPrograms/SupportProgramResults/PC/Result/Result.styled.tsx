import styled from '@emotion/styled';

export const ResultWrapper = styled.a`
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
