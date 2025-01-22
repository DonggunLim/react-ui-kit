import Popover from "@ui/Popover";
import { SelectContentProps } from "../types";

const Content = ({ children }: SelectContentProps) => {
  return <Popover.Content>{children}</Popover.Content>;
};

export default Content;
