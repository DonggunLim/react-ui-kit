import { FC, PropsWithChildren } from "react";
import { useCarouselContext } from ".";
import { CarouselItemBaseCls } from "@consts/className";

interface CarouselItemProps extends PropsWithChildren {
  index?: number;
}
const CarouselItem: FC<CarouselItemProps> = ({ children, index }) => {
  const { currentIndex } = useCarouselContext();
  return (
    <div className={CarouselItemBaseCls}>
      {currentIndex === index && children}
    </div>
  );
};

export default CarouselItem;
