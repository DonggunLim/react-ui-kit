import { PropsWithChildren, RefObject } from "react";
import PopoverTrigger from "../PopoverTrigger";
import PopoverContent from "../PopoverContent";

export type PositionType = "bottom-left" | "bottom-center" | "bottom-right";
export type TriggerRect = Omit<DOMRect, "toJSON">;
export type ContentRect = Omit<DOMRect, "toJSON">;
export type ContentInnerRect = TriggerRect;

/* Popover Component Props */
export interface PopoverProps extends PropsWithChildren {
  position?: PositionType;
}
export interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

/* Popover Content Props */
export interface PopoverContentProps extends PropsWithChildren {
  className?: string;
}

/* Popover Trigger Props */
export interface PopoverTriggerProps extends PropsWithChildren {
  className?: string;
}

/* Popover Context */
export interface PopoverContextProps {
  isPopoverOpen: boolean;
  triggerRect: TriggerRect;
  contentPosition: PositionType;
  triggerRef: RefObject<HTMLButtonElement>;
  handlePopoverVisible: () => void;
  handleTriggerRect: (position: TriggerRect) => void;
}

/* PopoverProvider component */
export interface PopoverProviderProps extends PropsWithChildren {
  position: PositionType;
}

/* useContentPosition props */
export interface UseContentPositionProps {
  contentPosition: PositionType;
  triggerRect: TriggerRect;
  contentRect: ContentRect;
}
