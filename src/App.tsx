import { Tabs, Carousel } from "./components";

function App() {
  const handleChangeTabs = (tabIndex: number) => {
    console.log(tabIndex);
  };
  return (
    <>
      {/* <Tabs onChangeTab={handleChangeTabs} defaultTabIndex={1}>
        <Tabs.MenuList>
          <Tabs.Menu>1</Tabs.Menu>
          <Tabs.Menu>2</Tabs.Menu>
          <Tabs.Menu>3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel>content-1</Tabs.Pannel>
        <Tabs.Pannel>content-2</Tabs.Pannel>
        <Tabs.Pannel>content-3</Tabs.Pannel>
      </Tabs> */}
      <Carousel totalItemCount={3}>
        <Carousel.ItemList>
          <Carousel.Item>1</Carousel.Item>
          <Carousel.Item>2</Carousel.Item>
          <Carousel.Item>3</Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator />
        <Carousel.Indicator />
      </Carousel>
    </>
  );
}

export default App;
