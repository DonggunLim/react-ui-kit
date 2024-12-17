import { useMemo } from "react";
import { useCalendarContext } from ".";
import { CalendarCurrentCls } from "../../consts/className";
interface CalendarCurrentProps {
  children?: (date: Date) => JSX.Element;
  className?: string;
}
const CalendarCurrent = ({ children, className }: CalendarCurrentProps) => {
  const { currentDate } = useCalendarContext();

  const calendarCurrentCls = useMemo(() => {
    return className
      ? `${className} ${CalendarCurrentCls}`
      : `${CalendarCurrentCls}`;
  }, [className]);

  return children ? (
    children(currentDate)
  ) : (
    <h1 className={calendarCurrentCls}>{currentDate.toLocaleDateString()}</h1>
  );
};

export default CalendarCurrent;
