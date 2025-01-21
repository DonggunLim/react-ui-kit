import Popover from "../../Popover";
import { SelectContentProps } from "../types";

const Content = ({ children }: SelectContentProps) => {
  return <Popover.Content>{children}</Popover.Content>;
};

export default Content;
