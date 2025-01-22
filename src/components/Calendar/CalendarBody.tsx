import { useMemo } from "react";
import { useCalendarContext } from ".";
import { CalendarBodyCls } from "@consts/className";

interface CalendarBodyProps {
  children?: (dates: Date[], handClick: (date: Date) => void) => JSX.Element[];
  className?: string;
}

const CalendarBody = ({ children, className }: CalendarBodyProps) => {
  const { currentDate, handleClickDate } = useCalendarContext();
  const [firstSunDayOfCurrentMonth, lastSaturDayOfCurrentMonth] =
    useMemo(() => {
      const firstDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const lastDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const firstSunDayOfCurrentMonth = new Date(
        firstDate.getFullYear(),
        firstDate.getMonth(),
        firstDate.getDate() - firstDate.getDay()
      );
      const lastSaturDayOfCurrentMonth = new Date(
        lastDate.getFullYear(),
        lastDate.getMonth(),
        lastDate.getDate() + (6 - lastDate.getDay())
      );
      return [firstSunDayOfCurrentMonth, lastSaturDayOfCurrentMonth];
    }, [currentDate]);

  const dates = useMemo(() => {
    const dates = [];
    let date = new Date(firstSunDayOfCurrentMonth);
    while (date <= lastSaturDayOfCurrentMonth) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }, [firstSunDayOfCurrentMonth, lastSaturDayOfCurrentMonth]);

  const calendarBodyCls = useMemo(() => {
    return className ? `${className} ${CalendarBodyCls}` : `${CalendarBodyCls}`;
  }, [className]);

  return children ? (
    children(dates, handleClickDate)
  ) : (
    <>
      {dates.map((date, index) => (
        <p
          key={`calendar-item-${index}`}
          onClick={() => handleClickDate(date)}
          className={calendarBodyCls}
        >
          {date.toLocaleDateString()}
        </p>
      ))}
    </>
  );
};

export default CalendarBody;
