import { CarouselItemListBaseCls } from "@consts/className";
import { FC, PropsWithChildren } from "react";

interface CarouselItemListProps extends PropsWithChildren {}
const CarouselItemList: FC<CarouselItemListProps> = ({ children }) => {
  return <div className={CarouselItemListBaseCls}>{children}</div>;
};

export default CarouselItemList;
