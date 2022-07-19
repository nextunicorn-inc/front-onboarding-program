import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const IndicatorOuter = styled.div`
  position: relative;
  height: 41px;
  /* buttonHeight(41px) bottomPadding(32px) */
  bottom: 73px;
  max-width: 1240px;
  margin: 0 auto;

  ${MediaQuery.tablet} {
    padding-left: 32px;
  }

  @media screen and (max-width: 1023px) {
    height: 21px;
    /*buttonHeight(21px) bottomPadding(20px)*/
    bottom: 41px;
  }

  ${MediaQuery.mobile} {
    padding-left: 20px;
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
  gap: 12px;

  background-color: white;
  border-radius: 2px 2px 0 0;

  @media screen and (max-width: 1023px) {
    gap: 0;
    background-color: hsla(var(--base-naturalgray9), 0.5);
    border-radius: 1px 1px 0 0;
    padding: 3px 8px;
  }

  & > button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 20px;

    @media screen and (max-width: 1023px) {
      display: none;
    }
  }

  & > span {
    ${FontSize.size12};
    ${FontWeight.regular};
    color: var(--color-naturalgray7);

    @media screen and (max-width: 1023px) {
      color: #fefefe;
      font-size: 8px;
      line-height: 14px;
    }

    & > b {
      ${FontWeight.medium};
      @media screen and (max-width: 1023px) {
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

  @media screen and (max-width: 1023px) {
    background-color: hsla(var(--base-naturalgray9), 0.7);
    border-radius: 0 0 2px 2px;
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  position: absolute;
  inset: 0;
  background-color: var(--color-bluegray7);
  border-radius: 0 0 0 5px;

  transition: all 250ms linear;
  transform: translateX(${({ progress }) => -100 + progress}%);

  @media screen and (max-width: 1023px) {
    background-color: #ffffff;
    border-radius: 0 0 0 2px;
  }
`;
