import { Children, FC, ReactElement, useMemo } from "react";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import { PopoverCompoundProps, PopoverProps } from "./types/types";
import PopoverProvider from "./context/PopoverProivder";

const Popover: FC<PopoverProps> & PopoverCompoundProps = ({
  children,
  position = "bottom-center",
}) => {
  const _children = Children.toArray(children) as ReactElement[];
  const [popoverTrigger, popoverContent] = useMemo(
    () => [
      _children.find((child) => child.type === PopoverTrigger),
      _children.find((child) => child.type === PopoverContent),
    ],
    [_children]
  );

  return (
    <PopoverProvider position={position}>
      {popoverTrigger}
      {popoverContent}
    </PopoverProvider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
