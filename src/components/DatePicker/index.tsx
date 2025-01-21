import Calendar from "../Calendar";
import Popover from "../Popover";
import { DatePickerProps } from "./types";

const DatePicker = ({ date, onChangeDate }: DatePickerProps) => {
  return (
    <>
      <Popover>
        <Popover.Trigger>
          {/* <div>{date.toLocaleDateString()}</div> */}
          {(ref, hanldeClickButton) => (
            <a
              style={{ backgroundColor: "gray", padding: "8px" }}
              ref={ref as never}
              onClick={hanldeClickButton}
            >
              {date.toLocaleString()}
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Calendar date={date} onChangeDate={onChangeDate}>
            <Calendar.Body />
            <Calendar.Navigator />
          </Calendar>
        </Popover.Content>
      </Popover>
    </>
  );
};

export default DatePicker;
