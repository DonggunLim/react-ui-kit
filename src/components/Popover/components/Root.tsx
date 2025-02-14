import {
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
} from "react";
import { PopoverContextProps, PopoverProps, PopoverRefProps } from "../types";
import { usePopover } from "../hooks/usePopover";

const PopoverContext = createContext<PopoverContextProps | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error(
      "usePopoverContext should be used within PopoverConetext.Privoder"
    );
  }
  return context;
};

const Root = forwardRef<PopoverRefProps, PopoverProps>(
  ({ children, position = "bottom-center" }, ref) => {
    const {
      triggerRef,
      isPopoverOpen,
      triggerRect,
      handlePopoverVisible,
      handleTriggerRect,
      handleClosePopover,
    } = usePopover();

    useImperativeHandle(ref, () => ({
      close: handleClosePopover,
    }));

    return (
      <PopoverContext.Provider
        value={{
          triggerRef,
          isPopoverOpen,
          triggerRect,
          contentPosition: position,
          handlePopoverVisible,
          handleTriggerRect,
        }}
      >
        {children}
      </PopoverContext.Provider>
    );
  }
);

export default Root;
