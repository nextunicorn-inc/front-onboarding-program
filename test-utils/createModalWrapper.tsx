import { ReactNode } from 'react';

import { ModalProvider } from 'commonUi/Modal';

export const createModalWrapper = () => {
  return ({ children }: { children: ReactNode }) => <ModalProvider>{children}</ModalProvider>;
};
