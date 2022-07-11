import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../utils';
import { css } from '@emotion/react';

export const Container = styled.section`
  width: 100%;
  height: 754px;
  display: flex;
  justify-content: center;
  background-color: aqua;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1304px;
  padding: 0 32px;
  margin: 0 auto;
  position: relative;
  //--gutterWidth: 20px;
`;

export const NoticeHeaderTitle = styled.h3`
  margin: 0;
  ${FontSize.size14}
  ${FontWeight.regular}

  color: var(--color-naturalgray8);
`;

export const SupportProgramsTitle = styled.h2`
  margin: 2px 0 0;
  padding-left: 8px;
  ${FontWeight.bold}
  ${FontSize.size24}
  color: var(--color-naturalgray9);
`;

export const SlideWrapper = styled.div`
  position: relative;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

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
`;

export const ButtonWrapper = styled.div<{ $direction: string }>`
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

export const ContentsArticle = styled.article`
  width: 295px;
  height: 564px;
  background-color: bisque;
`;

export const ContentsImgLink = styled.a`
  cursor: pointer;
`;

export const ContentsImg = styled.img`
  width: 295px;
  height: 417px;
  background-color: yellow;
`;
