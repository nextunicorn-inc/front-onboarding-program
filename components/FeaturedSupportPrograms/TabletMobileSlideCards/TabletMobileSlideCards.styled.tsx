import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from '../../../utils';

export const SlideCardWrapper = styled.div`
  display: none;

  ${MediaQuery.tablet} {
    display: flex;
    margin-top: 16px;
    padding-left: 32px;

    width: 100%;
    height: 428px;

    position: relative;
    overflow: auto;
    scroll-snap-type: x mandatory;
    background-color: yellow;
  }

  ${MediaQuery.mobile} {
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: 428px;

    position: relative;
    overflow: auto;
    scroll-snap-type: x mandatory;
    background-color: yellow;
  }
`;

export const SlideCards = styled.div``;
