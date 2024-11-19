import { FC, useContext } from "react";
import { CarouselContext } from ".";

interface CarouselNavigatorProps {
  children?: (callback: (indicator: 1 | -1) => void) => JSX.Element;
}

const CarouselNavigator: FC<CarouselNavigatorProps> = ({ children }) => {
  const { handleClickNavigator } = useContext(CarouselContext);
  return children ? (
    children(handleClickNavigator)
  ) : (
    <>
      <button onClick={() => handleClickNavigator(-1)}>{"<"}</button>
      <button onClick={() => handleClickNavigator(1)}>{">"}</button>
    </>
  );
};

export default CarouselNavigator;
