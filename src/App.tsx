import { useState } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker";

function App() {
  const [seelctedDate, setSelectedDate] = useState(new Date());
  const handleChangeDate = (date: Date) => {
    console.log(date); // console로 DatePicker의 선택된 Date 객체 출력.
    setSelectedDate(date);
  };

  return (
    <div id="app">
      <DatePicker date={seelctedDate} onChangeDate={handleChangeDate} />
    </div>
  );
}

export default App;
