import { ReactNode } from 'react';
import { createModalWrapper } from './createModalWrapper';
import { createQueryClientWrapper } from './createQueryClientWrapper';

export const createWholeWrapper = () => {
  const ModalWrapper = createModalWrapper();
  const QueryClientWrapper = createQueryClientWrapper();

  return ({ children }: { children: ReactNode }) => (
    <QueryClientWrapper>
      <ModalWrapper>{children}</ModalWrapper>
    </QueryClientWrapper>
  );
};
