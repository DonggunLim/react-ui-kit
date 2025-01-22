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

### Popover

#### source

[src/components/Popover](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Popover)

#### children

- index
- PopoverContent
- PopoverTrigger

### Example

```jsx
<Popover position="bottom-center">
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

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

### Progress

#### source

[src/components/Progress](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Progress)

#### children

- index

### Example

```jsx
<Progress stop={stop} />
```
