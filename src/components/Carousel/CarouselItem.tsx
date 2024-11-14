import { FC, PropsWithChildren, useContext } from "react";
import { CarouselContext } from "./Carousel";

interface CarouselItemProps extends PropsWithChildren {
  index: number;
}
const CarouselItem: FC<CarouselItemProps> = ({ children, index }) => {
  const { currentIndex } = useContext(CarouselContext);
  return <>{currentIndex === index && children}</>;
};

export default CarouselItem;
