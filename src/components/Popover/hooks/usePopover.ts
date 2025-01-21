import { useRef, useState } from "react";
import { TriggerRect } from "../types";
import { DEFAULT_TRIGGER_RECT } from "../consts";

export const usePopover = () => {
  const triggerRef = useRef<HTMLElement & HTMLDivElement & HTMLButtonElement>(
    null
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState(DEFAULT_TRIGGER_RECT);

  const handlePopoverVisible = () => setIsPopoverOpen(!isPopoverOpen);
  const handleClosePopover = () => setIsPopoverOpen(false);
  const handleTriggerRect = (position: TriggerRect) => setTriggerRect(position);

  return {
    triggerRef,
    isPopoverOpen,
    triggerRect,
    handlePopoverVisible,
    handleTriggerRect,
    handleClosePopover,
  };
};
