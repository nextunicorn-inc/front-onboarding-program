import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../../utils';

export const SlideCardWrapper = styled.div`
  display: none;

  ${MediaQuery.tablet} {
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: auto;
    position: relative;
  }

  ${MediaQuery.mobile} {
    display: flex;
    margin-top: 16px;
    width: 100%;
    position: relative;
  }
`;

export const SlideCards = styled.div`
  width: 100%;
  display: flex;
  overflow: visible auto;
  scroll-snap-type: x mandatory;

  ${MediaQuery.tablet} {
    padding-right: 16px;
  }

  ${MediaQuery.mobile} {
    padding-right: 0;
  }
`;

export const SlideCard = styled.article`
  height: auto;
  border-radius: 5px;

  ${MediaQuery.tablet} {
    width: 254px;
    margin-right: 16px;
  }

  ${MediaQuery.mobile} {
    width: 208px;
    margin-right: 20px;

    :nth-last-of-type(1) {
      margin-right: 0;
    }
  }
`;

export const SlideCardImg = styled.img`
  border-radius: 5px;
  display: block;
  object-fit: cover;
  cursor: pointer;

  ${MediaQuery.tablet} {
    width: 254px;
    height: 360px;
    background-color: aliceblue;
  }

  ${MediaQuery.mobile} {
    width: 208px;
    height: 294px;
    background-color: aliceblue;
  }
`;

export const SlideTagWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;

  ${MediaQuery.tablet} {
    margin-top: 8px;
  }

  ${MediaQuery.mobile} {
    margin-top: 12px;
  }
`;

export const SlideCardTitle = styled.h3`
  display: block;
  height: 40px;
  margin-top: 4px;
  ${FontSize.size14}
  ${FontWeight.regular}
  color:var(--color-naturalgray8);
  cursor: pointer;
`;

export const SlideCardCompanyName = styled.h5`
  display: block;
  margin-top: 8px;
  ${FontSize.size12};
  ${FontWeight.regular};
  color: rgb(115, 115, 115);
`;
