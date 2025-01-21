import Calendar from "../Calendar";
import Popover from "../Popover";
import { DatePickerProps } from "./types";

const DatePicker = ({ date, onChangeDate }: DatePickerProps) => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
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
      </Popover.Root>
    </>
  );
};

export default DatePicker;
