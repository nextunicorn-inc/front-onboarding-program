import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from 'utils';

export const Container = styled.section`
  margin-bottom: 48px;
  height: 306px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 28px;
    height: 202px;
  }
`;

export const InnerContainerLink = styled.a<{ $backgroundColor?: string }>`
  display: block;
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'transparent'};
`;

export const ResponsiveSection = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  ${MediaQuery.tablet} {
    padding-left: 32px;
  }

  @media screen and (max-width: 1023px) {
    height: 202px;
    padding-right: 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const Description = styled.div`
  height: 100%;
  flex-basis: 100%;
  padding-top: 56px;
  text-align: left;

  @media screen and (max-width: 1023px) {
    padding-top: 60px;
  }

  ${MediaQuery.mobile} {
    padding: 24px 0;
  }
`;

export const SubTitle = styled.p<{ $color: string }>`
  margin-bottom: 8px;
  color: ${({ $color }) => $color};
  ${FontWeight.medium};
  ${FontSize.size18};

  @media screen and (max-width: 1023px) {
    ${FontSize.size14};
    margin-bottom: 4px;
  }
`;

export const Title = styled.p<{ $color: string }>`
  color: ${({ $color }) => $color};
  letter-spacing: -0.002em;
  ${FontWeight.bold};
  ${FontSize.size24};

  @media screen and (max-width: 1023px) {
    ${FontSize.size18};
  }
`;

export const BannerImage = styled.img`
  display: block;
  max-width: 610px;
  height: 306px;
  object-fit: cover;

  @media screen and (max-width: 1023px) {
    max-width: 402px;
    height: 202px;
  }

  ${MediaQuery.mobile} {
    display: none !important;
  }
`;
