import { css } from '@emotion/react';

type Line = 1 | 2 | 3 | 4 | 5 | 6 | null;

const LineClamp = (line: Line) => {
  return css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line || 'none'};
  `;
};

export { LineClamp };
