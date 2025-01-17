import { cloneElement, ReactElement, useMemo } from "react";
import { CloseProps } from "../types";
import { useModalContext } from "./Root";
import { ModalCLoseBaseCls } from "../../../consts/className";

const Close = ({ children, className }: CloseProps) => {
  const { handleTriggerModal, onCloseModal } = useModalContext();
  const baseCls = useMemo(
    () =>
      className ? `${ModalCLoseBaseCls} ${className}` : `${ModalCLoseBaseCls}`,
    [className]
  );

  if (children) {
    const customClose = cloneElement(children as ReactElement, {
      onClick: () => {
        onCloseModal?.();
        handleTriggerModal(false);
      },
    });
    return customClose;
  }
  return (
    <button onClick={() => handleTriggerModal(false)} className={baseCls}>
      X
    </button>
  );
};

export default Close;
