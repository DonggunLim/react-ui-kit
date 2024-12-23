import { createContext, useContext } from "react";
import { PopoverContextProps, PopoverProviderProps } from "../types/types";
import { usePopover } from "../hooks/usePopover";
import { DEFAULT_TRIGGER_RECT } from "../consts";

const PopoverContext = createContext<PopoverContextProps>({
  isPopoverOpen: false,
  triggerRect: DEFAULT_TRIGGER_RECT,
  contentPosition: "bottom-center",
  handlePopoverVisible: () => {},
  handleTriggerRect: () => {},
  triggerRef: { current: null },
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error(
      "usePopoverContext should be used within PopoverConetext.Privoder"
    );
  }
  return context;
};

const PopoverProvider = ({
  children,
  position: contentPosition,
}: PopoverProviderProps) => {
  const {
    triggerRef,
    isPopoverOpen,
    triggerRect,
    handlePopoverVisible,
    handleTriggerRect,
  } = usePopover();

  const popoverContextValue = {
    triggerRef,
    isPopoverOpen,
    triggerRect,
    contentPosition,
    handlePopoverVisible,
    handleTriggerRect,
  };

  return (
    <PopoverContext.Provider value={popoverContextValue}>
      {children}
    </PopoverContext.Provider>
  );
};

export default PopoverProvider;
