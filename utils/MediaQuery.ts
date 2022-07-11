const sizes = {
  mobile: 767,
  tablet: 1239,
};

type MediaQuery = Record<keyof typeof sizes, string>;
const MediaQuery: MediaQuery = {
  mobile: `@media screen and (max-width: ${sizes.mobile}px)`,
  tablet: `@media screen and (max-width: ${sizes.tablet}px)`,
};

export { MediaQuery };
