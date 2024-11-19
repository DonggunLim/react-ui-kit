import { useState } from "react";

interface UseCarouselProps {
  totalItemCount: number;
}
const useCarousel = ({ totalItemCount }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleClickNavigator = (indicator: 1 | -1) => {
    const nextIndex = currentIndex + indicator;
    if (nextIndex <= 0) {
      setCurrentIndex(totalItemCount);
      return;
    }
    if (nextIndex > totalItemCount) {
      setCurrentIndex(1);
      return;
    }
    setCurrentIndex(nextIndex);
  };
  const handleClickIndicator = (index: number) => setCurrentIndex(index);
  return {
    currentIndex,
    handleClickNavigator,
    handleClickIndicator,
  };
};

export default useCarousel;
