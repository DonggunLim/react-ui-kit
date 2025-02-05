import { FC } from "react";
import {
  CarouselIndicatorBaseCls,
  CarouselIndicatorButtonsCls,
} from "@consts/className";
import { useCarouselContext } from ".";

interface CarouselIndicatorProps {
  children?: (
    indicatorItem: number[],
    callback: (index: number) => void
  ) => JSX.Element;
}
const CarouselIndicator: FC<CarouselIndicatorProps> = ({ children }) => {
  const { currentIndex, totalItemCount, handleClickIndicator } =
    useCarouselContext();
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
          data-isactive={currentIndex === key}
          onClick={() => handleClickIndicator(key)}
          key={`indicator-item-${key}`}
        ></li>
      ))}
    </ul>
  );
};

export default CarouselIndicator;
