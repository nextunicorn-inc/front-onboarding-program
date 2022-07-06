import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontWeight, FontSize, MediaQuery } from '../../utils';

export const Wrapper = styled.article`
  height: auto;
  padding: 20px 36px;
  margin: 0 20px 92px 20px;
  position: relative;
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: var(--color-unicornblue6);
  border-radius: 5px;
  overflow: hidden;

  ${MediaQuery.tablet} {
    margin-bottom: 80px;
    gap: 0;
    justify-content: space-between;
  }

  ${MediaQuery.mobile} {
    padding: 20px 33px 24px 32px;
    margin-bottom: 28px;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
  }
`;

export const Description = styled.section`
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

    & > p {
      ${FontSize.size16};
    }
  }
`;

export const CTA = styled.a`
  padding: 14px 20px;
  color: var(--color-unicornblue6);
  background-color: var(--color-naturalgray0);
  border-radius: 5px;
  border: 1px solid var(--color-unicornblue6);

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
