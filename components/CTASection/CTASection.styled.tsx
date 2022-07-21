import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FontWeight, FontSize, MediaQuery } from 'utils';

export const Container = styled.div`
  background-color: var(--color-bluegray0);
  padding-bottom: 100px;

  @media screen and (max-width: 1239px) {
    background-color: var(--color-naturalgray0);
  }

  ${MediaQuery.tablet} {
    padding-bottom: 80px;
  }

  ${MediaQuery.mobile} {
    padding-bottom: 24px;
  }
`;

export const ResposiveContainer = styled.div`
  max-width: 1240px;

  margin: 0 auto;

  @media screen and (max-width: 1239px) {
    max-width: 100%;
    width: 100%;
    padding: 0 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: 88px;
  padding: 20px 36px;

  display: flex;
  align-items: center;

  background-color: var(--color-unicornblue6);
  border-radius: 5px;

  overflow: hidden;

  ${MediaQuery.tablet} {
    justify-content: space-between;
  }

  ${MediaQuery.mobile} {
    height: auto;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const Description = styled.section`
  margin-right: 50px;
  color: var(--color-naturalgray0);

  & > p {
    ${FontSize.size18};
    ${FontWeight.medium};
  }

  & > span {
    ${FontSize.size14};
    ${FontWeight.regular};
  }

  ${MediaQuery.mobile} {
    text-align: center;
    margin-bottom: 12px;
    margin-right: 0;

    & > p {
      ${FontSize.size16};
      margin-bottom: 2px;
    }
  }
`;

export const CTA = styled.a`
  padding: 14px 20px;

  color: var(--color-unicornblue6);
  background-color: var(--color-naturalgray0);

  border: 1px solid var(--color-unicornblue6);
  border-radius: 5px;

  &:visited {
    color: var(--color-unicornblue6);
  }
`;

export const SemiCircle = styled.div<{ $upward: boolean }>`
  width: 227px;
  height: 227px;

  background-color: var(--color-naturalgray0);
  mix-blend-mode: normal;
  opacity: 0.2;

  border-radius: 9999px;

  position: absolute;

  ${({ $upward }) => {
    if ($upward) {
      return css`
        right: 142px;
        top: 20%;
      `;
    }
    return css`
      right: 68px;
      bottom: 20%;
    `;
  }};

  ${MediaQuery.tablet} {
    display: none;
  }
`;
