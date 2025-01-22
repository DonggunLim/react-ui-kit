import { createPortal } from "react-dom";
import { BackdropProps } from "../types";
import { useModalContext } from "./Root";
import { useMemo } from "react";
import { ModalBackdropBaseCls } from "@consts/className";

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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
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
