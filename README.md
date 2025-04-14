## UI Package(@imdonggun/react-ui-kit)

### Accordion

#### source

[src/components/Accordion](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Accordion)

#### children

- index
- AccordionButton
- AccordionContent
- AccordionTitle

### Example

```jsx
<Accordion>
  <Accordion.Title>Title</Accordion.Title>
  <Accordion.Button>Accordion Button</Accordion.Button>
  <Accordion.Content>This is AccordionContent</Accordion.Content>
</Accordion>
```
![accoridon-ezgif com-optimize](https://github.com/user-attachments/assets/c9adcb04-fe35-4c73-8371-f23af5331c2a)

<br/>
<br/>

---

<br/>
<br/>

### Breadcrumb

#### source

[src/components/Breadcrumb](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Breadcrumb)

#### children

- index
- BreadcrumbItem

### Example

```jsx
<Breadcrumb width={200}>
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">A-B</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-B-C</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-B-C-D</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-B-C-D-E</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-B-C-D-E-F</Breadcrumb.Item>
</Breadcrumb>
```
![breadcrumb-ezgif com-optimize](https://github.com/user-attachments/assets/3dd37fa7-79da-4f97-81b4-62433f3efafb)

<br/>
<br/>

---

<br/>
<br/>

### Calendar

#### source

[src/components/Calendar](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Calendar)

#### children

- index
- CalendarCurrent
- CalendarBody
- CalendarNavigator

### Example

```jsx
<Calendar>
  <Calendar.Navigator></Calendar.Navigator>
  // custom CalendarBody
  <Calendar.Body>
    {(dates) => dates.map((date) => <div>{date.toLocaleString()}</div>)}
  </Calendar.Body>
</Calendar>
```
![calendar-ezgif com-optimize](https://github.com/user-attachments/assets/46979dc4-1f1a-4a3f-b90c-49f9c216c19f)

<br/>
<br/>

---

<br/>
<br/>

### Carousel

#### source

[src/components/Carousel](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Carousel)

#### children

- index
- CarouselIndicator
- CarouselNavigator
- CarouselItem
- CarouselItemList

### Example

```jsx
<Carousel totalItemCount={3}>
  <Carousel.ItemList>
    <Carousel.Item index={0}>Item-1</Carousel.Item>
    <Carousel.Item index={1}>Item-2</Carousel.Item>
    <Carousel.Item index={2}>Item-3</Carousel.Item>
  </Carousel.ItemList>
  <Carousel.Navigator></Carousel.Navigator>
  <Carousel.Indicator />
</Carousel>
```
![carousel-ezgif com-optimize](https://github.com/user-attachments/assets/5b17787d-770c-44ca-9690-f35fcdacb2aa)

<br/>
<br/>

---

<br/>
<br/>

### Pagination

#### source

[src/components/Pagination](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Pagination)

#### children

- index
- Navigator
- PageButtons

### Example

```jsx
<Pagination
  totalPages={30}
  currentPage={currentPage}
  onPageChange={handlePageChange}
>
  <Pagination.PageButtons />
  <Pagination.Navigator />
</Pagination>
```
![pagination-ezgif com-optimize](https://github.com/user-attachments/assets/b8041677-7190-45b9-adff-c8b96ebc656e)

<br/>
<br/>

---

<br/>
<br/>

### Popover

#### source

[src/components/Popover](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Popover)

#### children

- Root
- PopoverContent
- PopoverTrigger

### Example

```jsx
<Popover.Root position="bottom-center">
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover.Root>
```
![popover-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/53e96490-5db8-40f8-a87a-2af221438950)

<br/>
<br/>

---

<br/>
<br/>

### Tabs

#### source

[src/components/Tabs](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Tabs)

#### children

- index
- TabMenu
- TabMenuList
- TabPannel

### Example

```jsx
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
```
![tabs-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/953b83c3-23f7-401e-9147-ec18f40d8878)

<br/>
<br/>

---

<br/>
<br/>

### Progress

#### source

[src/components/Progress](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Progress)

#### children

- index

### Example

```jsx
<Progress stop={stop} />
```
![progress-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/aa0ae508-47ac-4c92-89d0-0ddbccea50bd)

<br/>
<br/>

---

<br/>
<br/>

### DatePicker

#### source

[src/components/DatePicker](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/DatePicker)

#### children

- index

### Example

```jsx
<DatePicker date={new Date()} onChangeDate={handleChangeDate} />
```
![datepicker-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/387ad07e-de1c-463e-ba17-49779971312b)

<br/>
<br/>

---

<br/>
<br/>

### Modal

#### source

[src/components/Modal](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Modal)

#### children

- Root
- Backdrop
- Trigger
- Close
- Content

### Example

```jsx
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
```
![modal-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/3c9bca84-5855-4484-acfa-3c86d0b4a687)

<br/>
<br/>

---

<br/>
<br/>

### Select

#### source

[src/components/Select](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Select)

#### children

- Root
- Trigger
- Content
- Item

### Example

```jsx
<Select.Root onChangeValue={handleChangeValue} value={selectedValue}>
  <Select.Trigger>Select Item</Select.Trigger>
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select.Root>
```
![select-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/ec196d23-4465-4e44-a3d2-ff350d245e75)

<br/>
<br/>

---

<br/>
<br/>

### Toast

#### source

[src/components/Toast](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Toast)

#### children

- ToastAction
- ToastContainer
- ToastDescription
- ToastTitle

#### hooks

- useToast

### Example

```jsx
const toast = useToast();

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
</button>;

<Toast.Container />;
```
![toast-ezgif com-optimize](https://github.com/user-attachments/assets/7d111213-fa3e-4f62-ac22-60233c2a4abf)
