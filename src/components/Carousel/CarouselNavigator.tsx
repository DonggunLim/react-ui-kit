import { useContext } from "react";
import { CarouselContext } from "./Carousel";

const CarouselNavigator = () => {
  const { handleClickNavigator } = useContext(CarouselContext);
  return (
    <>
      <button onClick={() => handleClickNavigator(-1)}>{"<"}</button>
      <button onClick={() => handleClickNavigator(1)}>{">"}</button>
    </>
  );
};

export default CarouselNavigator;
