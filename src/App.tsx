import { useState } from "react";
import { Carousel, Tabs, Pagination, Calendar, Breadcrumb } from "./components";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        totalPages={23}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>
      <br></br>
      <Breadcrumb width={200}>
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
      </Breadcrumb>
      <br></br>
      <Carousel totalItemCount={3}>
        <Carousel.ItemList>
          <Carousel.Item index={0}>Item-1</Carousel.Item>
          <Carousel.Item index={1}>Item-2</Carousel.Item>
          <Carousel.Item index={2}>Item-3</Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator></Carousel.Navigator>
        <Carousel.Indicator />
      </Carousel>
      <br></br>
      <Tabs
        onChangeTab={(tabIndex) => {
          setCurrentTabIndex(tabIndex);
        }}
        defaultTabIndex={currentTabIndex}
      >
        <Tabs.MenuList>
          <Tabs.Menu index={1}>Menu1</Tabs.Menu>
          <Tabs.Menu index={2}>Menu2</Tabs.Menu>
          <Tabs.Menu index={3}>Menu3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
        <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
        <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
      </Tabs>
      <br></br>
      <Calendar>
        <Calendar.Navigator></Calendar.Navigator>
        <Calendar.Body>
          {(dates) => dates.map((date) => <div>{date.toLocaleString()}</div>)}
        </Calendar.Body>
      </Calendar>
    </>
  );
}

export default App;
