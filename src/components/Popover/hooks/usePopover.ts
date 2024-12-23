import { useRef, useState } from "react";
import { TriggerRect } from "../types/types";
import { DEFAULT_TRIGGER_RECT } from "../consts";

export const usePopover = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState(DEFAULT_TRIGGER_RECT);

  const handlePopoverVisible = () => setIsPopoverOpen(!isPopoverOpen);
  const handleTriggerRect = (position: TriggerRect) => setTriggerRect(position);

  return {
    triggerRef,
    isPopoverOpen,
    triggerRect,
    handlePopoverVisible,
    handleTriggerRect,
  };
};
