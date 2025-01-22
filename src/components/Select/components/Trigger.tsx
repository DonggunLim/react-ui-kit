import Popover from "@ui/Popover";
import { SelectTriggerProps } from "../types";
import { useSelectContext } from "./Root";

const Trigger = ({ children = "select" }: SelectTriggerProps) => {
  const { selectedItem } = useSelectContext();
  return (
    <Popover.Trigger>
      {selectedItem?.label ? selectedItem.label : children}
    </Popover.Trigger>
  );
};
export default Trigger;
