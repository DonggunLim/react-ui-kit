import { FC, PropsWithChildren, useContext } from "react";
import { CarouselContext } from ".";
import { CarouselItemBaseCls } from "../../consts/className";

interface CarouselItemProps extends PropsWithChildren {
  index?: number;
}
const CarouselItem: FC<CarouselItemProps> = ({ children, index }) => {
  const { currentIndex } = useContext(CarouselContext);
  return (
    <div className={CarouselItemBaseCls}>
      {currentIndex === index && children}
    </div>
  );
};

export default CarouselItem;
