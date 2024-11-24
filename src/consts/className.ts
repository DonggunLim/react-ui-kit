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
