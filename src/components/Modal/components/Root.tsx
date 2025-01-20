import { createContext, useContext, useState } from "react";
import { ModalContextProps, RootProps } from "../types";

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  handleTriggerModal: () => {},
});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(`ModalContext should be used within ModalContext.Provider`);
  }
  return context;
};

const Root = ({ children, onCloseModal, onOpenModal, open }: RootProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const handleTriggerModal = (activeStatus: boolean) => {
    setIsOpen(activeStatus);
  };
  return (
    <ModalContext.Provider
      value={{ isOpen, handleTriggerModal, onCloseModal, onOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Root;
