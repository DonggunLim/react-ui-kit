import { FC, useContext } from "react";
import { CarouselContext } from ".";

interface CarouselIndicatorProps {
  children?: (
    indicatorItem: number[],
    callback: (index: number) => void
  ) => JSX.Element;
}
const CarouselIndicator: FC<CarouselIndicatorProps> = ({ children }) => {
  const { totalItemCount, handleClickIndicator } = useContext(CarouselContext);
  const indicatorItem = Array.from(
    { length: totalItemCount },
    (_, index) => index + 1
  );
  return children ? (
    children(indicatorItem, handleClickIndicator)
  ) : (
    <>
      {Array.from({ length: totalItemCount }, (_, index) => {
        return index + 1;
      }).map((key) => (
        <button
          onClick={() => handleClickIndicator(key)}
          key={`indicator-item-${key}`}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        ></button>
      ))}
    </>
  );
};

export default CarouselIndicator;
