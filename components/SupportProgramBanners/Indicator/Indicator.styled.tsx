import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const IndicatorOuter = styled.div`
  position: relative;
  height: 41px;
  /* buttonHeight(41px) bottomPadding(32px) */
  bottom: 73px;
  max-width: 1240px;
  margin: 0 auto;

  @media screen and (max-width: 1239px) {
    padding: 0 32px;
  }

  ${MediaQuery.tablet} {
    height: 21px;
    /*buttonHeight(21px) bottomPadding(20px)*/
    bottom: 41px;
  }

  ${MediaQuery.mobile} {
    paddingm: 0 20px;
  }
`;

export const IndicatorInner = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-radius: 2px 2px 0 0;

  ${MediaQuery.tablet} {
    padding: 3px 8px;
    background-color: hsla(var(--base-naturalgray9), 0.5);
    border-radius: 1px 1px 0 0;
  }

  & > button {
    cursor: pointer;
    height: 20px;

    ${MediaQuery.tablet} {
      display: none;
    }
  }

  & > span {
    display: block;
    margin: 0 12px;
    ${FontSize.size12};
    ${FontWeight.regular};
    color: var(--color-naturalgray7);

    ${MediaQuery.tablet} {
      margin: 0;
      color: var(--color-naturalgray0);
      font-size: 8px;
      line-height: 14px;
    }

    & > b {
      ${FontWeight.medium};
      ${MediaQuery.tablet} {
        ${FontWeight.bold};
      }
    }
  }
`;

export const ProgressbarWrapper = styled.div`
  width: 100%;
  height: 2px;
  position: relative;
  background-color: var(--color-bluegray1);
  border-radius: 0 0 5px 5px;
  overflow: hidden;

  ${MediaQuery.tablet} {
    background-color: hsla(var(--base-naturalgray9), 0.7);
    border-radius: 0 0 2px 2px;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--color-bluegray7);
  border-radius: 0 0 0 5px;

  transition: all 250ms linear;

  ${MediaQuery.tablet} {
    background-color: #ffffff;
    border-radius: 0 0 0 2px;
  }
`;
