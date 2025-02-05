import { PropsWithChildren } from "react";

interface ModalBaseProps extends PropsWithChildren {
  className?: string;
}
/* Modal component */
export interface RootProps extends ModalBaseProps {
  onCloseModal?: () => void;
  onOpenModal?: () => void;
  open: boolean;
}

/* Backdrop component */
export interface BackdropProps extends ModalBaseProps {}

/* Content component */
export interface ContentProps extends ModalBaseProps {}

/* Trigger component */
export interface TriggerProps extends ModalBaseProps {}

/* Close component */
export interface CloseProps extends ModalBaseProps {}

/* context */
export interface ModalContextProps {
  isOpen: boolean;
  handleTriggerModal: (activeStatus: boolean) => void;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
  open?: boolean;
}
