import { FC, MouseEventHandler, useEffect, useMemo } from "react";
import { usePopoverContext } from "./context/PopoverProivder";
import { PopoverTriggerProps } from "./types/types";
import { PopoverTriggerCls } from "../../consts/className";

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className }) => {
  const { handlePopoverVisible, handleTriggerRect, triggerRef } =
    usePopoverContext();

  const hanldeClickButton: MouseEventHandler = (e) => {
    e.stopPropagation();
    handlePopoverVisible();
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

  return (
    <>
      <button
        className={triggerCls}
        onClick={hanldeClickButton}
        ref={triggerRef}
      >
        {children}
      </button>
    </>
  );
};

export default PopoverTrigger;
