import { FC, useContext } from "react";
import { CarouselContext } from ".";
import {
  CarouselIndicatorBaseCls,
  CarouselIndicatorButtonsCls,
} from "../../consts/className";

interface CarouselIndicatorProps {
  children?: (
    indicatorItem: number[],
    callback: (index: number) => void
  ) => JSX.Element;
}
const CarouselIndicator: FC<CarouselIndicatorProps> = ({ children }) => {
  const { currentIndex, totalItemCount, handleClickIndicator } =
    useContext(CarouselContext);
  const indicatorItem = Array.from(
    { length: totalItemCount },
    (_, index) => index + 1
  );

  return children ? (
    children(indicatorItem, handleClickIndicator)
  ) : (
    <ul className={CarouselIndicatorBaseCls}>
      {Array.from({ length: totalItemCount }, (_, index) => {
        return index + 1;
      }).map((key) => (
        <li
          className={CarouselIndicatorButtonsCls}
          data-isActive={currentIndex === key}
          onClick={() => handleClickIndicator(key)}
          key={`indicator-item-${key}`}
        ></li>
      ))}
    </ul>
  );
};

export default CarouselIndicator;
