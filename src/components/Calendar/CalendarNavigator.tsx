import { useCalendarContext } from ".";
interface CalendarNavigatorProps {
  children?: (callback: (indicator: 1 | -1) => void) => JSX.Element;
}

const CalendarNavigator = ({ children }: CalendarNavigatorProps) => {
  const { handleClickNavigate } = useCalendarContext();
  return children ? (
    children(handleClickNavigate)
  ) : (
    <div>
      <button onClick={() => handleClickNavigate(-1)}>prev</button>
      <button onClick={() => handleClickNavigate(1)}>next</button>
    </div>
  );
};

export default CalendarNavigator;
