import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import CalendarCurrent from "./CalendarCurrent";
import CalendarNavigator from "./CalendarNavigator";
import CalendarBody from "./CalendarBody";
import { CalendarBaseCls } from "../../consts/className";

interface CalendarProps extends PropsWithChildren {
  date?: Date;
  onChangeDate?: (date: Date) => void;
  className?: string;
}
interface CalendarContextProps {
  currentDate: Date;
  handleClickNavigate: (indicator: 1 | -1) => void;
  handleClickDate: (date: Date) => void;
}
interface CalendarCompoundProps {
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
  Body: typeof CalendarBody;
}

const CalendarContext = createContext<CalendarContextProps>({
  currentDate: new Date(),
  handleClickNavigate: () => {},
  handleClickDate: () => {},
});

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw Error("context value(초기값) 설정이 필요합니다.");
  }
  return context;
};

const Calendar: FC<CalendarProps> & CalendarCompoundProps = ({
  children,
  date = new Date(),
  onChangeDate,
  className,
}) => {
  const [currentDate, setCurrentDate] = useState(date);
  const handleClickNavigate = (indicator: 1 | -1) => {
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + indicator,
      currentDate.getDate()
    );
    setCurrentDate(nextDate);
    onChangeDate?.(nextDate);
  };
  const handleClickDate = (date: Date) => {
    setCurrentDate(new Date(date.toLocaleDateString()));
    onChangeDate?.(date);
  };

  const calendarContextValue = {
    currentDate,
    handleClickNavigate,
    handleClickDate,
  };

  const calendarCls = useMemo(
    () =>
      className ? `${className} ${CalendarBaseCls}` : `${CalendarBaseCls}`,
    [className]
  );

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <div className={calendarCls}>{children}</div>
    </CalendarContext.Provider>
  );
};

Calendar.Current = CalendarCurrent;
Calendar.Navigator = CalendarNavigator;
Calendar.Body = CalendarBody;

export default Calendar;
