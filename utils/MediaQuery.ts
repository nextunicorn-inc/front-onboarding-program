import { css } from "@emotion/react";

const sizes = {
  mobile: 767,
  tablet: 1239,
};



type MediaQueryOne = Record<keyof typeof sizes, typeof css>;
const MediaQueryOne: MediaQueryOne = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media screen and (max-width:${sizes[size]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as MediaQueryOne);



type MediaQueryTwo = Record<keyof typeof sizes, string>;
const MediaQueryTwo: MediaQueryTwo = {
  mobile: `@media screen and (max-width: ${sizes.mobile}px)`,
  tablet: `@media screen and (max-width: ${sizes.tablet}px)`,
};

export {
  MediaQueryOne,
  MediaQueryTwo
}
