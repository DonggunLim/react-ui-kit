import Carousel from "./components/Carousel/Carousel";
import CarouselIndicator from "./components/Carousel/CarouselIndicator";
import CarouselItem from "./components/Carousel/CarouselItem";
import CarouselItemList from "./components/Carousel/CarouselItemList";
import CarouselNavigator from "./components/Carousel/CarouselNavigator";

function App() {
  return (
    <>
      <Carousel totalItemCount={3}>
        <CarouselItemList>
          <CarouselItem index={1}>item1</CarouselItem>
          <CarouselItem index={2}>item2</CarouselItem>
          <CarouselItem index={3}>item3</CarouselItem>
        </CarouselItemList>
        <CarouselNavigator />
        <CarouselIndicator />
      </Carousel>
    </>
  );
}

export default App;
