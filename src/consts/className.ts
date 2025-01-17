const prefixCls = "dg";

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/* Tabs Component */
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-menu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

/* Carousel Component */
export const CarouselBaseCls = getBaseCls("carousel");
export const CarouselItemListBaseCls = getBaseCls("carousel-item-list");
export const CarouselItemBaseCls = getBaseCls("carousel-item");
export const CarouselNavigatorBaseCls = getBaseCls("carousel-navigator");
export const CarouselNavigatorPrevButtonBaseCls = getBaseCls(
  "carousel-navigator-prev-button"
);
export const CarouselNavigatorNextButtonBaseCls = getBaseCls(
  "carousel-navigator-next-button"
);
export const CarouselIndicatorBaseCls = getBaseCls("carousel-indicator");
export const CarouselIndicatorButtonsCls = getBaseCls(
  "carousel-indicator-button"
);

/* Accordion Component*/
export const AccordionBaseCls = getBaseCls("accordion");
export const AccordionTitleCls = getBaseCls("accordion-title");
export const AccordionContentCls = getBaseCls("accordion-content");
export const AccordionButtonCls = getBaseCls("accordion-button");

/* Calendar Component */
export const CalendarBaseCls = getBaseCls("calendar");
export const CalendarCurrentCls = getBaseCls("calendarCurrent");
export const CalendarBodyCls = getBaseCls("calendarBody");
export const CalendarNavigatorCls = getBaseCls("calendarNavigator");

/* Pagination Component */
export const PaginationBaseCls = getBaseCls("pagination");
export const PaginationNavigatorCls = getBaseCls("pagination-navigator");
export const PaginationNavigatorPrevButtonCls = getBaseCls(
  "pagination-navigator"
);
export const PaginationNavigatorNextButtonCls = getBaseCls(
  "pagination-navigator"
);
export const PaginationPageButtonsContainerCls = getBaseCls(
  "pagination-page-buttons"
);
export const PaginationPageButtonElementCls = getBaseCls(
  "pagination-page-buttons"
);

/* Breadcrumb Component */
export const BreadcrumbBaseCls = getBaseCls("breadcrumb");
export const BreadcrumbUlContainerCls = getBaseCls("breadcrumb-ul-conatiner");
export const BreadcrumbItemCls = getBaseCls("breadcrumb-item");
export const BreadcrumbeLlipsisCls = getBaseCls("breadcrumb-ellipsis");

/* Popover Component */
export const PopoverTriggerCls = getBaseCls("popover-trigger");
export const PopoverContentCls = getBaseCls("popover-Content");

/* Progress Component */
export const ProgressBaseCls = getBaseCls("progress");
export const ProgressBarCls = getBaseCls("progress-bar");

/* Modal Component */
export const ModalBaseCls = getBaseCls("modal");
export const ModalBackdropBaseCls = getBaseCls("modal-backdrop");
export const ModalTriggerBaseCls = getBaseCls("modal-trigger");
export const ModalContentBaseCls = getBaseCls("modal-content");
export const ModalCLoseBaseCls = getBaseCls("modal-close");
