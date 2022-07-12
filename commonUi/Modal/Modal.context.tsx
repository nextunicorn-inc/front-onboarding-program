import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  createContext,
  useContext,
  ReactNode,
  ReactElement,
} from 'react';

import { Portal } from '../Portal';

interface ModalAPI {
  show: (Comp: ReactElement) => void;
  hide: () => void;
}

const ModalContext = createContext<ModalAPI | null>(null);

type Props = {
  children: ReactNode;
};

function ModalProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [Component, setComponent] = useState<ReactElement | null>(null);

  const show = useCallback(
    (Comp: ReactElement) => () => {
      setOpen(true);
      setComponent(Comp);
    },
    [],
  );

  const hide = useCallback(() => {
    setOpen(false);
    setComponent(null);
  }, []);

  const contextValue = useMemo(() => ({ show, hide }), [show, hide]);

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      if (!open) {
        return;
      }
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {open && <Portal>{Component}</Portal>}
    </ModalContext.Provider>
  );
}

function useModal() {
  const contextValue = useContext(ModalContext);
  if (contextValue === null) {
    throw new Error('The component consumed useModal should be within ModalProvider');
  }
  return contextValue;
}

export { useModal, ModalProvider };
