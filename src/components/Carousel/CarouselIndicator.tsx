import { useContext } from "react";
import { CarouselContext } from "./Carousel";

const CarouselIndicator = () => {
  const { totalItemCount, handleClickIndicator } = useContext(CarouselContext);
  return (
    <>
      {Array.from({ length: totalItemCount }, (_, index) => {
        return index + 1;
      }).map((key) => (
        <button
          onClick={() => handleClickIndicator(key)}
          key={key}
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
