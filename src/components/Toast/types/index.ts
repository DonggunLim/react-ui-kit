import { PropsWithChildren, ReactNode } from "react";

interface BaseProps extends PropsWithChildren {}

/* ToastTitle component */
export interface ToastTitleProps extends BaseProps {}
/* ToastDescription component */
export interface ToastDescriptionProps extends BaseProps {}
/* ToastAction component */
export interface ToastActionProps extends BaseProps {
  onClick?: () => void;
}

export interface ToastProps {
  title: string;
  description: string;
  duration?: number;
  actionElem?: ReactNode;
  position?: ToastPositions;
}
export type ToastItem = ToastProps;
export type ToastPositions =
  | "top-right"
  | "bottom-right"
  | "bottom-left"
  | "top-left";
