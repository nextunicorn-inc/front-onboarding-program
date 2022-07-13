import { useMemo, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  parent?: HTMLElement;
  children: ReactNode;
};

function Portal({ children, parent }: Props) {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent?.appendChild ? parent : document.body;
    target.appendChild(element);

    return () => {
      target.removeChild(element);
    };
  }, []);

  return createPortal(children, element);
}

export default Portal;
