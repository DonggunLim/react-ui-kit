import { useState } from "react";
import "./App.css";
import Select from "./components/Select";

function App() {
  const [selectedValue, setSelectedValue] = useState<string>("1");
  const handleChangeValue = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };

  return (
    <div id="app">
      <Select.Root onChangeValue={handleChangeValue} value={selectedValue}>
        <Select.Trigger>Select Item</Select.Trigger>
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export default App;
