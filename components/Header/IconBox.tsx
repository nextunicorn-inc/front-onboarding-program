import React from 'react';
import * as Styled from './Header.styled';

// TODO: IconElement, onClick 타입 수정 및 추가
export const IconBox = ({
  IconElement,
  onClick,
}: {
  IconElement: React.FunctionComponent;
  onClick: () => void;
}) => {
  return (
    <Styled.ResponsiveIcon onClick={onClick}>
      <IconElement />
    </Styled.ResponsiveIcon>
  );
};
