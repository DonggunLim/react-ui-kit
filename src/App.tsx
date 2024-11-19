import { Carousel, Tabs } from "./components";
import Accordion from "./components/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import CarouselIndicator from "./components/Carousel/CarouselIndicator";
import CarouselItem from "./components/Carousel/CarouselItem";
import CarouselItemList from "./components/Carousel/CarouselItemList";
import CarouselNavigator from "./components/Carousel/CarouselNavigator";
import TabMenu from "./components/Tabs/TabMenu";
import TabMenuList from "./components/Tabs/TabMenuList";
import TabPannel from "./components/Tabs/TabPannel";

function App() {
  const handleChangeTabs = () => {};
  return (
    <>
      {/* <Accordion>
        // <AccordionTitle></AccordionTitle>
        // <AccordionButton>d</AccordionButton>
        // <AccordionContent></AccordionContent>
      </Accordion> */}
      <Tabs
        onChangeTab={handleChangeTabs}
        defaultTabIndex={1}
        className="tabs-test"
      >
        <TabMenuList>
          <TabMenu>1</TabMenu>
          <TabMenu>2</TabMenu>
          <TabMenu>3</TabMenu>
        </TabMenuList>
        <TabPannel>content-1</TabPannel>
        <TabPannel>content-2</TabPannel>
        <TabPannel>content-3</TabPannel>
      </Tabs>
      <Carousel totalItemCount={3} className="carousel-test">
        <CarouselItemList>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselItemList>
        <CarouselNavigator />
        <CarouselIndicator />
      </Carousel>
    </>
  );
}

export default App;
