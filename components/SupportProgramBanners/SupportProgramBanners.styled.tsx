import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from 'utils';

export const Contatiner = styled.section`
  margin-bottom: 60px;
`;

export const InnerContainerLink = styled.a<{ $backgroundColor?: string }>`
  display: block;
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'transparent'};
`;

export const ResponsiveSection = styled.div`
  max-width: 1240px;
  height: 306px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  ${MediaQuery.tablet} {
    height: 202px;
    padding: 0 32px;
  }
  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const Description = styled.div`
  flex-basis: 100%;
  padding-top: 56px;
  height: 100%;
  text-align: left;

  ${MediaQuery.tablet} {
    padding-top: 60px;
    padding-bottom: 20px;
  }

  ${MediaQuery.mobile} {
    z-index: 2;
    padding-bottom: 24px;
  }
`;

export const SubTitle = styled.p<{ $color: string }>`
  color: ${({ $color }) => $color};
  margin-bottom: 8px;
  ${FontWeight.medium};
  ${FontSize.size18};

  ${MediaQuery.tablet} {
    ${FontSize.size14};
  }
`;

export const Title = styled.p<{ $color: string }>`
  color: ${({ $color }) => $color};
  letter-spacing: -0.002em;
  ${FontWeight.bold};
  ${FontSize.size24};

  ${MediaQuery.tablet} {
    ${FontSize.size18};
  }
`;

export const BannerImage = styled.img`
  display: block;
  max-width: 610px;
  height: 306px;
  object-fit: cover;

  ${MediaQuery.tablet} {
    max-width: 402px;
    height: 202px;
  }

  @media screen and (max-width: 625px) {
    display: none !important;
  }
`;

export const IndicatorOuter = styled.div`
  position: relative;
  bottom: 72px;
  max-width: 1240px;
  margin: 0 auto;

  ${MediaQuery.tablet} {
    padding-left: 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 20px;
    bottom: 40px;
  }
`;

export const IndicatorInner = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 8px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  & > svg {
    cursor: pointer;
  }

  & > span {
    ${FontSize.size12};
    ${FontWeight.regular};

    & > b {
      ${FontWeight.medium}
    }
  }

  ${MediaQuery.mobile} {
    gap: 0;
    padding: 3px 8px;
    background-color: hsla(var(--base-naturalgray9), 0.5);
    color: #fefefe;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    & > svg {
      display: none;
    }
    & > span {
      font-size: 8px;
      line-height: 14px;
    }
  }
`;

export const ProgressbarWrapper = styled.div`
  width: 100%;
  height: 2px;
  position: relative;
  background-color: var(--color-bluegray1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  overflow: hidden;

  ${MediaQuery.mobile} {
    background-color: hsla(var(--base-naturalgray9), 0.7);
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  position: absolute;
  inset: 0;
  background-color: var(--color-bluegray7);
  border-bottom-left-radius: 2px;
  transition: all 250ms linear;
  transform: translateX(${({ progress }) => -100 + progress}%);

  ${MediaQuery.mobile} {
    background-color: white;
  }
`;
