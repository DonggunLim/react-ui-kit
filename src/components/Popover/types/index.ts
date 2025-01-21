import { PropsWithChildren, ReactNode, RefObject } from "react";

export type PositionType = "bottom-left" | "bottom-center" | "bottom-right";
export type TriggerRect = Omit<DOMRect, "toJSON">;
export type ContentRect = Omit<DOMRect, "toJSON">;
export type ContentInnerRect = TriggerRect;

/* Popover Component Props */
export interface PopoverProps extends PropsWithChildren {
  position?: PositionType;
}

/* Popover Content Props */
export interface PopoverContentProps extends PropsWithChildren {
  className?: string;
}

/* Popover Trigger Props */
export interface PopoverTriggerProps {
  className?: string;
  children?:
    | ((
        ref: RefObject<HTMLElement>,
        cb: (e: React.MouseEvent) => void
      ) => ReactNode)
    | ReactNode;
  title?: string;
}

/* Popover Context */
export interface PopoverContextProps {
  isPopoverOpen: boolean;
  triggerRect: TriggerRect;
  contentPosition: PositionType;
  triggerRef: RefObject<HTMLElement>;
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

/* PopoverRef Props */
export interface PopoverRefProps {
  close: () => void;
}
