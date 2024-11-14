import { FC, PropsWithChildren } from "react";

interface CarouselItemListProps extends PropsWithChildren {}
const CarouselItemList: FC<CarouselItemListProps> = ({ children }) => {
  return <>{children}</>;
};

export default CarouselItemList;
