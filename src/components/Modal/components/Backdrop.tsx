import { createPortal } from "react-dom";
import { BackdropProps } from "../types";
import { useModalContext } from "./Root";
import { ModalBackdropBaseCls } from "../../../consts/className";
import { useMemo } from "react";

const Backdrop = ({ children, className }: BackdropProps) => {
  const { handleTriggerModal, onCloseModal, isOpen } = useModalContext();
  const baseCls = useMemo(
    () =>
      className
        ? `${ModalBackdropBaseCls} ${className}`
        : `${ModalBackdropBaseCls}`,
    [className]
  );

  return (
    isOpen &&
    createPortal(
      <section
        className={baseCls}
        onClick={() => {
          onCloseModal?.();
          handleTriggerModal(false);
        }}
      >
        {children}
      </section>,
      document.body
    )
  );
};

export default Backdrop;
