import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';

export declare const Accordion: FC<AccordionProps> & AccordionCompoundProps;

declare const AccordionButton: FC<AccordionButtonProps>;

declare interface AccordionButtonProps extends PropsWithChildren {
    className?: string;
}

declare interface AccordionCompoundProps {
    Title: typeof AccordionTitle;
    Content: typeof AccordionContent;
    Button: typeof AccordionButton;
}

declare const AccordionContent: FC<AccordionContentProps>;

declare interface AccordionContentProps extends PropsWithChildren {
    className?: string;
}

declare interface AccordionProps extends PropsWithChildren {
    className?: string;
}

declare const AccordionTitle: FC<AccordionTitleProps>;

declare interface AccordionTitleProps extends PropsWithChildren {
    className?: string;
}

declare interface BackdropProps extends ModalBaseProps {
}

declare interface BaseProps extends PropsWithChildren {
}

export declare const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompundProps;

declare interface BreadcrumbCompundProps {
    Item: typeof BreadcrumbItem;
}

declare const BreadcrumbItem: FC<BreadcrumbItemProps>;

declare interface BreadcrumbItemProps {
    children: ReactNode;
    href: string;
    index?: number;
}

declare interface BreadcrumbProps extends PropsWithChildren {
    className?: string;
    ellipsisClassName?: string;
    width: number;
}

export declare const Calendar: FC<CalendarProps> & CalendarCompoundProps;

declare const CalendarBody: ({ children, className }: CalendarBodyProps) => JSX_2.Element | JSX.Element[];

declare interface CalendarBodyProps {
    children?: (dates: Date[], handClick: (date: Date) => void) => JSX.Element[];
    className?: string;
}

declare interface CalendarCompoundProps {
    Current: typeof CalendarCurrent;
    Navigator: typeof CalendarNavigator;
    Body: typeof CalendarBody;
}

declare const CalendarCurrent: ({ children, className }: CalendarCurrentProps) => JSX_2.Element;

declare interface CalendarCurrentProps {
    children?: (date: Date) => JSX.Element;
    className?: string;
}

declare const CalendarNavigator: ({ children }: CalendarNavigatorProps) => JSX_2.Element;

declare interface CalendarNavigatorProps {
    children?: (callback: (indicator: 1 | -1) => void) => JSX.Element;
}

declare interface CalendarProps extends PropsWithChildren {
    date?: Date;
    onChangeDate?: (date: Date) => void;
    className?: string;
}

export declare const Carousel: FC<CarouselProps> & CarouselCompundProps;

declare interface CarouselCompundProps {
    ItemList: typeof CarouselItemList;
    Item: typeof CarouselItem;
    Navigator: typeof CarouselNavigator;
    Indicator: typeof CarouselIndicator;
}

declare const CarouselIndicator: FC<CarouselIndicatorProps>;

declare interface CarouselIndicatorProps {
    children?: (indicatorItem: number[], callback: (index: number) => void) => JSX.Element;
}

declare const CarouselItem: FC<CarouselItemProps>;

declare const CarouselItemList: FC<CarouselItemListProps>;

declare interface CarouselItemListProps extends PropsWithChildren {
}

declare interface CarouselItemProps extends PropsWithChildren {
    index?: number;
}

declare const CarouselNavigator: FC<CarouselNavigatorProps>;

declare interface CarouselNavigatorProps {
    children?: (callback: (indicator: 1 | -1) => void) => JSX.Element;
}

declare interface CarouselProps extends PropsWithChildren {
    totalItemCount: number;
    className?: string;
}

declare interface CloseProps extends ModalBaseProps {
}

declare interface ContentProps extends ModalBaseProps {
}

export declare const DatePicker: ({ date, onChangeDate }: DatePickerProps) => JSX_2.Element;

declare interface DatePickerProps {
    date: Date;
    onChangeDate: (date: Date) => void;
}

export declare const Modal: {
    Root: ({ children, onCloseModal, onOpenModal, open }: RootProps_2) => JSX_2.Element;
    Content: ({ children, className }: ContentProps) => false | ReactPortal;
    Close: ({ children, className }: CloseProps) => JSX_2.Element;
    Backdrop: ({ children, className }: BackdropProps) => false | ReactPortal;
    Trigger: ({ children, className }: TriggerProps) => JSX_2.Element;
};

declare interface ModalBaseProps extends PropsWithChildren {
    className?: string;
}

declare const Navigator_2: ({ className }: NavigatorProps) => JSX_2.Element;

declare interface NavigatorProps {
    className?: string;
}

declare const PageButtons: ({ className }: PageButtonsProps) => JSX_2.Element;

declare interface PageButtonsProps {
    className?: string;
}

export declare const Pagination: FC<PaginationProps> & PaginationCompoundProps;

declare interface PaginationCompoundProps {
    Navigator: typeof Navigator_2;
    PageButtons: typeof PageButtons;
}

declare interface PaginationProps extends PropsWithChildren {
    totalPages: number;
    currentPage: number;
    pageSize?: number;
    indexSize?: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export declare const Popover: {
    Root: ForwardRefExoticComponent<PopoverProps & RefAttributes<PopoverRefProps>>;
    Content: FC<PopoverContentProps>;
    Trigger: FC<PopoverTriggerProps>;
};

declare interface PopoverContentProps extends PropsWithChildren {
    className?: string;
}

declare interface PopoverProps extends PropsWithChildren {
    position?: PositionType;
}

declare interface PopoverRefProps {
    close: () => void;
}

declare interface PopoverTriggerProps {
    className?: string;
    children?: ((ref: RefObject<HTMLElement>, cb: (e: React.MouseEvent) => void) => ReactNode) | ReactNode;
    title?: string;
}

declare type PositionType = "bottom-left" | "bottom-center" | "bottom-right";

export declare const Progress: FC<ProgressInterface>;

declare interface ProgressInterface {
    stop: boolean;
    className?: string;
    progressBarClassName?: string;
}

declare interface RootProps extends SelectBaseProps {
    onChangeValue?: (selectedValue: string) => void;
    value: string;
}

declare interface RootProps_2 extends ModalBaseProps {
    onCloseModal?: () => void;
    onOpenModal?: () => void;
    open: boolean;
}

export declare const Select: {
    Root: ({ children, onChangeValue, value: _value }: RootProps) => JSX_2.Element;
    Trigger: ({ children }: SelectTriggerProps) => JSX_2.Element;
    Content: ({ children }: SelectContentProps) => JSX_2.Element;
    Item: ({ children, value }: SelectItemProps) => JSX_2.Element;
};

declare interface SelectBaseProps extends PropsWithChildren {
    className?: string;
}

declare interface SelectContentProps extends SelectBaseProps {
}

declare interface SelectItemProps {
    children: string;
    value: string;
}

declare interface SelectTriggerProps extends SelectBaseProps {
}

declare const TabMenu: FC<TabMenuProps>;

declare const TabMenuList: FC<TabMenuListProps>;

declare interface TabMenuListProps extends PropsWithChildren {
}

declare interface TabMenuProps extends PropsWithChildren {
    index?: number;
}

declare const TabPannel: FC<TabPannelProps>;

declare interface TabPannelProps extends PropsWithChildren {
    index?: number;
}

export declare const Tabs: FC<TabsProps> & TabsComponundProps;

declare interface TabsComponundProps {
    Menu: typeof TabMenu;
    MenuList: typeof TabMenuList;
    Pannel: typeof TabPannel;
}

declare interface TabsProps extends PropsWithChildren {
    onChangeTab: (tabIndex: number) => void;
    defaultTabIndex: number;
    className?: string;
}

export declare const ToastAction: ({ children, onClick, }: ToastActionProps) => JSX_2.Element;

declare interface ToastActionProps extends BaseProps {
    onClick?: () => void;
}

declare type ToastPositions = "top-right" | "bottom-right" | "bottom-left" | "top-left";

declare interface ToastProps {
    title: string;
    description: string;
    duration?: number;
    actionElem?: ReactNode;
    position?: ToastPositions;
}

declare interface TriggerProps extends ModalBaseProps {
}

export declare const useToast: () => {
    toast: ({ duration, ...rest }: ToastProps) => void;
};

export { }
