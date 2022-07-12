import { ReactNode, MouseEvent } from 'react';

import * as Styled from './Modal.styled';

type Props = {
  closable: boolean;
  onClick?: () => void;
  children: ReactNode;
};

function Backdrop({ closable, onClick = () => undefined, children }: Props) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!closable) {
      return;
    }
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return <Styled.Backdrop onClick={handleClick}>{children}</Styled.Backdrop>;
}
export default Backdrop;
