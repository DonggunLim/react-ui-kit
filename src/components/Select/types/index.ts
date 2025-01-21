import { PropsWithChildren, ReactNode } from "react";

/* type */
export type SelectItem = {
  value: string;
  label: ReactNode;
} | null;

/* BaseProps */
interface SelectBaseProps extends PropsWithChildren {
  className?: string;
}

/* Select context */
export interface SelectContextProps {
  handleClickItem: (value: string, label: ReactNode) => void;
  selectedItem: SelectItem;
}

/* Root component */
export interface RootProps extends SelectBaseProps {
  onChangeValue?: (selectedValue: string) => void;
  value: string;
}

/* Content component */
export interface SelectContentProps extends SelectBaseProps {}

/* Item component */
export interface SelectItemProps {
  children: string;
  value: string;
}

/* Trigger component */
export interface SelectTriggerProps extends SelectBaseProps {}
