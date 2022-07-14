import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MediaQuery, FontSize, FontWeight } from 'utils';

export const SlideCardWrapper = styled.div`
  margin-top: 16px;
  position: relative;

  .slick-slider {
    max-width: 1240px;
    overflow: hidden;
  }

  .slick-list {
    margin-left: -10px;
  }

  .slick-track {
    width: 100% !important;
    display: flex;
  }

  .slick-slide {
    padding: 0 10px;
  }

  ${MediaQuery.mobile} {
    display: none;
  }

  ${MediaQuery.tablet} {
    display: none;
  }
`;

export const SlideCard = styled.article`
  width: 295px !important;
  height: 100%;
  border-radius: 5px;
`;

export const SlideCardImg = styled.img`
  width: 295px;
  height: 417px;
  border-radius: 5px;
  display: block;
  object-fit: cover;
  cursor: pointer;
  background-color: aliceblue;
`;

export const SlideTagWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`;

export const SlideCardTitle = styled.h3`
  display: block;
  margin-top: 4px;
  height: 52px;
  ${FontSize.size18}
  ${FontWeight.regular}
  color:var(--color-naturalgray8);
  cursor: pointer;
`;

export const SlideCardCompanyName = styled.h5`
  display: block;
  margin-top: 4px;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: rgb(115, 115, 115);
`;

export const SlideButtonWrapper = styled.div<{ $direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  border-radius: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #e8ecf2;
  background-color: #fefefe;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05);
  ${({ $direction }) =>
    $direction === 'left'
      ? css`
          left: -1%;
        `
      : css`
          right: -1%;
        `}
`;
