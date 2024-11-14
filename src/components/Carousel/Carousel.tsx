import { createContext, FC, PropsWithChildren } from "react";
import useCarousel from "../../hooks/useCarousel";
interface CarouselProps extends PropsWithChildren {
  totalItemCount: number;
}
interface CarouselContextProps {
  currentIndex: number;
  handleClickNavigator: (type: 1 | -1) => void;
  handleClickIndicator: (index: number) => void;
  totalItemCount: number;
}
export const CarouselContext = createContext<CarouselContextProps>({
  currentIndex: 0,
  handleClickNavigator: () => {},
  handleClickIndicator: () => {},
  totalItemCount: 0,
});

const Carousel: FC<CarouselProps> = ({ children, totalItemCount }) => {
  const { currentIndex, handleClickNavigator, handleClickIndicator } =
    useCarousel({ totalItemCount });
  const CarouselContextValue = {
    currentIndex,
    handleClickNavigator,
    handleClickIndicator,
    totalItemCount,
  };

  return (
    <CarouselContext.Provider value={CarouselContextValue}>
      {children}
    </CarouselContext.Provider>
  );
};

export default Carousel;
