import { createPortal } from "react-dom";
import { ContentProps } from "../types";
import { useModalContext } from "./Root";
import { useMemo } from "react";
import { ModalContentBaseCls } from "@consts/className";

const Content = ({ children, className }: ContentProps) => {
  const { isOpen } = useModalContext();
  const baseCls = useMemo(
    () =>
      className
        ? `${ModalContentBaseCls} ${className}`
        : `${ModalContentBaseCls}`,
    [className]
  );
  return (
    isOpen &&
    createPortal(
      <section
        className={baseCls}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          zIndex: 1001,
        }}
      >
        {children}
      </section>,
      document.body
    )
  );
};

export default Content;
