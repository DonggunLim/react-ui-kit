import { cloneElement, ReactElement, useMemo } from "react";
import { TriggerProps } from "../types";
import { useModalContext } from "./Root";
import { ModalTriggerBaseCls } from "@consts/className";

const Trigger = ({ children, className }: TriggerProps) => {
  const { handleTriggerModal, onOpenModal } = useModalContext();
  const baseCls = useMemo(
    () =>
      className
        ? `${ModalTriggerBaseCls} ${className}`
        : `${ModalTriggerBaseCls}`,
    [className]
  );

  if (children) {
    const customTrigger = cloneElement(children as ReactElement, {
      onClick: () => {
        onOpenModal?.();
        handleTriggerModal(true);
      },
    });
    return customTrigger;
  }
  return (
    <>
      <button onClick={() => handleTriggerModal(true)} className={baseCls}>
        trigger
      </button>
    </>
  );
};

export default Trigger;
