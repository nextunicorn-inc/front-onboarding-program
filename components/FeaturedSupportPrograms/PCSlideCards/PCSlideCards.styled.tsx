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
    display: flex;
  }

  .slick-slide {
    width: 100% !important;
    box-sizing: border-box;
    padding: 0 10px;
  }

  ${MediaQuery.tablet} {
    display: none;
  }
`;

export const EmptySlideCards = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;

export const EmptySlideCard = styled.div`
  width: 295px;
  height: 417px;
  border-radius: 5px;
  background-color: #f4f5f7;
`;

export const SlideCard = styled.article`
  width: 295px !important;
  height: 100%;
  border-radius: 5px;
`;

export const SlideCardImg = styled.img`
  width: 100%;
  max-width: 295px;
  height: 417px;
  border-radius: 5px;
  display: block;
  object-fit: cover;
  cursor: pointer;
  background-color: #f8f8f8;
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

export const SlideButtonWrapper = styled.div<{ $isLeftDirection: boolean }>`
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
  background-color: var(--color-naturalgray0);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05);
  ${({ $isLeftDirection }) =>
    $isLeftDirection
      ? css`
          left: -1%;
        `
      : css`
          right: -1%;
        `}
`;
