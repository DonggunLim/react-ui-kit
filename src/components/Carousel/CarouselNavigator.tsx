import { FC, useContext } from "react";
import { CarouselContext } from ".";
import {
  CarouselNavigatorBaseCls,
  CarouselNavigatorNextButtonBaseCls,
  CarouselNavigatorPrevButtonBaseCls,
} from "@consts/className";

interface CarouselNavigatorProps {
  children?: (callback: (indicator: 1 | -1) => void) => JSX.Element;
}

const CarouselNavigator: FC<CarouselNavigatorProps> = ({ children }) => {
  const { handleClickNavigator } = useContext(CarouselContext);
  return children ? (
    children(handleClickNavigator)
  ) : (
    <div className={CarouselNavigatorBaseCls}>
      <button
        className={CarouselNavigatorPrevButtonBaseCls}
        onClick={() => handleClickNavigator(-1)}
      >
        {"<"}
      </button>
      <button
        className={CarouselNavigatorNextButtonBaseCls}
        onClick={() => handleClickNavigator(1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default CarouselNavigator;
