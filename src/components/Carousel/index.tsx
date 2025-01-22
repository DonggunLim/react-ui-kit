import {
  Children,
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import useCarousel from "./hooks/useCarousel";
import CarouselItemList from "./CarouselItemList";
import CarouselItem from "./CarouselItem";
import CarouselNavigator from "./CarouselNavigator";
import CarouselIndicator from "./CarouselIndicator";
import { CarouselBaseCls } from "@consts/className";

interface CarouselCompundProps {
  ItemList: typeof CarouselItemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}
interface CarouselProps extends PropsWithChildren {
  totalItemCount: number;
  className?: string;
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

const Carousel: FC<CarouselProps> & CarouselCompundProps = ({
  children,
  totalItemCount,
  className,
}) => {
  const { currentIndex, handleClickNavigator, handleClickIndicator } =
    useCarousel({ totalItemCount });
  const CarouselContextValue = {
    currentIndex,
    handleClickNavigator,
    handleClickIndicator,
    totalItemCount,
  };

  const _children = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const carouselItemList = useMemo(
    () =>
      (
        _children.find((child) => child.type === CarouselItemList)?.props
          .children as ReactElement[]
      ).map((element, index) =>
        cloneElement(element, { key: index, index: index + 1 })
      ),
    [_children]
  );

  const carouselNavigator = useMemo(
    () => _children.find((child) => child.type === CarouselNavigator),
    [_children]
  );
  const carouselIndicator = useMemo(
    () => _children.find((child) => child.type === CarouselIndicator),
    [_children]
  );

  const CarouselCls = useMemo(
    () =>
      className ? `${className} ${CarouselBaseCls}` : `${CarouselBaseCls}`,
    [className]
  );

  return (
    <CarouselContext.Provider value={CarouselContextValue}>
      <div className={CarouselCls}>
        {carouselItemList}
        {carouselNavigator}
        {carouselIndicator}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
