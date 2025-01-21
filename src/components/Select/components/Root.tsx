import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { RootProps, SelectContextProps, SelectItem } from "../types";
import Popover from "../../Popover";
import { PopoverRefProps } from "../../Popover/types";

const SelectContext = createContext<SelectContextProps>({
  handleClickItem: () => {},
  selectedItem: { value: "", label: "" },
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      "useSelectContext should be used within SelectContext.Provider"
    );
  }
  return context;
};

const Root = ({ children, onChangeValue, value: _value }: RootProps) => {
  const popoverRef = useRef<PopoverRefProps>(null);
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(null);
  const handleClickItem = (value: string, label: ReactNode) => {
    onChangeValue?.(value);
    setSelectedItem({ value, label });
    popoverRef.current?.close();
  };
  return (
    <SelectContext.Provider value={{ handleClickItem, selectedItem }}>
      <Popover.Root ref={popoverRef}>{children}</Popover.Root>
    </SelectContext.Provider>
  );
};

export default Root;
