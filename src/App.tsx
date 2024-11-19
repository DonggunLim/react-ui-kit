import { Tabs } from "./components";

function App() {
  const handleChangeTab = (index: number) => {
    console.log(index);
  };
  return (
    <>
      <Tabs onChangeTab={handleChangeTab} defaultTabIndex={1}>
        <Tabs.MenuList>
          <Tabs.Menu>1</Tabs.Menu>
          <Tabs.Menu>2</Tabs.Menu>
          <Tabs.Menu>3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel>content-1</Tabs.Pannel>
        <Tabs.Pannel>content-2</Tabs.Pannel>
        <Tabs.Pannel>content-3</Tabs.Pannel>
      </Tabs>
    </>
  );
}

export default App;
