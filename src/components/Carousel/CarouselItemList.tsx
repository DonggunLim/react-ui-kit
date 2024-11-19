import { FC, PropsWithChildren } from "react";
import { CarouselItemListBaseCls } from "../../consts/className";

interface CarouselItemListProps extends PropsWithChildren {}
const CarouselItemList: FC<CarouselItemListProps> = ({ children }) => {
  return <div className={CarouselItemListBaseCls}>{children}</div>;
};

export default CarouselItemList;
