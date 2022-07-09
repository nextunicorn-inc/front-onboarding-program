import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../utils';

export const Contatiner = styled.section`
  height: 306px;
  ${MediaQuery.tablet} {
    height: 202px;
  }
  margin-bottom: 60px;
`;

export const InnerContainerLink = styled.a<{ $backgroundColor?: string }>`
  display: block;
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'transparent'};
`;

export const ResponsiveSection = styled.div<{ $backgroundImageUrl: string }>`
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
  /* ${MediaQuery.mobile} {
    background-image: url(${({ $backgroundImageUrl }) => $backgroundImageUrl});
    background-size: cover;
    background-position: bottom 0px right 0px;
    padding: 0 20px;
  } */
`;

export const Description = styled.div`
  flex-basis: 100%;
  padding-top: 56px;
  padding-bottom: 36px;
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
    z-index: 1;
    max-width: 75%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

// ${MediaQuery.mobile} {
//   background-image: url(${({ $backgroundImageUrl }) => $backgroundImageUrl});
//   background-size: cover;
//   background-position: bottom 0px right 0px;
//   padding: 0 20px;
// }
