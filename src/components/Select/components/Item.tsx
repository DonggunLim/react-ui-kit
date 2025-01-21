import { SelectItemProps } from "../types";
import { useSelectContext } from "./Root";

const Item = ({ children, value }: SelectItemProps) => {
  const { handleClickItem } = useSelectContext();
  return <div onClick={() => handleClickItem(value, children)}>{children}</div>;
};

export default Item;
