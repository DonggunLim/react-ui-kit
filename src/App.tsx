import { ToastAction, useToast } from "@ui/Toast";
import "./App.css";
import Accordion from "@ui/Accordion";
import Breadcrumb from "@ui/Breadcrumb";
import Calendar from "@ui/Calendar";
import Carousel from "@ui/Carousel";
import Pagination from "@ui/Pagination";
import { useState } from "react";
import Popover from "@ui/Popover";
import Tabs from "@ui/Tabs";
import Progress from "@ui/Progress";
import DatePicker from "@ui/DatePicker";
import Modal from "@ui/Modal";
import Select from "@ui/Select";

function App() {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeTab = (tabIndex: number) => {
    console.log({ tabIndex });
  };

  const handleChangeDate = (date: Date) => {
    console.log({ date });
  };

  const handleCloseModal = () => {
    console.log("fn when closed");
  };
  const handleOpenModal = () => {
    console.log("fn when open");
  };

  const handleChangeValue = (selectedValue: string) => {
    console.log(selectedValue);
  };
  return (
    <div id="app" className="flex flex-col">
      <Accordion>
        <Accordion.Title>Title</Accordion.Title>
        <Accordion.Button>Accordion Button</Accordion.Button>
        <Accordion.Content>This is AccordionContent</Accordion.Content>
      </Accordion>
      <Breadcrumb width={200}>
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">A-B</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-B-C</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-B-C-D</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-B-C-D-E</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-B-C-D-E-F</Breadcrumb.Item>
      </Breadcrumb>
      <Calendar>
        <Calendar.Navigator></Calendar.Navigator>
        // custom CalendarBody
        <Calendar.Body>
          {(dates) =>
            dates.map((date, key) => (
              <div key={`calendar-date-${key}`}>{date.toLocaleString()}</div>
            ))
          }
        </Calendar.Body>
      </Calendar>
      <Carousel totalItemCount={3}>
        <Carousel.ItemList>
          <Carousel.Item index={0}>Item-1</Carousel.Item>
          <Carousel.Item index={1}>Item-2</Carousel.Item>
          <Carousel.Item index={2}>Item-3</Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator></Carousel.Navigator>
        <Carousel.Indicator />
      </Carousel>
      <Pagination
        totalPages={30}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>
      <Popover.Root position="bottom-center">
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Place content for the popover here.</Popover.Content>
      </Popover.Root>
      <Tabs onChangeTab={handleChangeTab} defaultTabIndex={currentTabIndex}>
        <Tabs.MenuList>
          <Tabs.Menu index={1}>Menu1</Tabs.Menu>
          <Tabs.Menu index={2}>Menu2</Tabs.Menu>
          <Tabs.Menu index={3}>Menu3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
        <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
        <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
      </Tabs>
      <Progress stop={stop} />
      <DatePicker date={new Date()} onChangeDate={handleChangeDate} />
      <Modal.Root
        onCloseModal={handleCloseModal}
        open={isOpen}
        onOpenModal={handleOpenModal}
      >
        <Modal.Backdrop />
        <Modal.Trigger>
          <div>Custom-Trigger</div>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Close>
            <div> custom-modal-close</div>
          </Modal.Close>
          <div>Modal Content</div>
        </Modal.Content>
      </Modal.Root>
      <Select.Root onChangeValue={handleChangeValue} value={selectedValue}>
        <Select.Trigger>Select Item</Select.Trigger>
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
        </Select.Content>
      </Select.Root>
      <button
        onClick={() => {
          toast({
            title: "This is toast title",
            description: "this is toast description",
            duration: 3000,
            actionElem: <ToastAction>close button</ToastAction>,
          });
        }}
      >
        Click Toast
      </button>
    </div>
  );
}

export default App;
