import { FC, MouseEventHandler, ReactNode, useEffect, useMemo } from "react";
import { PopoverTriggerProps } from "../types";
import { usePopoverContext } from "./Root";
import { PopoverTriggerCls } from "@consts/className";

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className, onClick, ...restProps }) => {
  const { handlePopoverVisible, handleTriggerRect, triggerRef } =
    usePopoverContext();

  const hanldeClickButton: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    handlePopoverVisible();
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  useEffect(() => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) handleTriggerRect(rect);
  }, []);

  const triggerCls = useMemo(
    () =>
      className ? `${className} ${PopoverTriggerCls}` : `${PopoverTriggerCls}`,
    [className]
  );

  if (typeof children === "function") {
    return children(triggerRef as never, hanldeClickButton);
  }

  return (
    <>
      <button
        className={triggerCls}
        onClick={hanldeClickButton}
        ref={triggerRef as never}
        {...restProps}
      >
        {(children as ReactNode) || "trigger"}
      </button>
    </>
  );
};

export default PopoverTrigger;
