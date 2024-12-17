import { useState } from "react";
import Calendar from "./components/Calendar";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 15));
  const handleChangeDate = (date: Date) => {
    setCurrentDate(date);
    console.log(date);
  };

  return (
    <Calendar onChangeDate={handleChangeDate} date={currentDate}>
      <Calendar.Current>
        {(date) => <p>{date.toISOString()}</p>}
      </Calendar.Current>
      <Calendar.Navigator>
        {(handleClickNavigate) => (
          <>
            <button onClick={() => handleClickNavigate(-1)}>custom-prev</button>
            <button onClick={() => handleClickNavigate(1)}>custom-next</button>
          </>
        )}
      </Calendar.Navigator>
      <Calendar.Body>
        {(dates, handlClick) =>
          dates.map((date, index) => (
            <div onClick={() => handlClick(date)} key={index}>
              {date.getDate()}
            </div>
          ))
        }
      </Calendar.Body>
    </Calendar>
  );
}

export default App;
