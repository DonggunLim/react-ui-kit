import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
import AccordionButton from "./AccordionButton";
import { AccordionBaseCls } from "@consts/className";

interface AccordionProps extends PropsWithChildren {
  className?: string;
}

interface AccordionCompoundProps {
  Title: typeof AccordionTitle;
  Content: typeof AccordionContent;
  Button: typeof AccordionButton;
}
interface AccordionContextProps {
  isOpen: boolean;
  handleClickButton: () => void;
}
export const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  handleClickButton: () => {},
});
const Accordion: FC<AccordionProps> & AccordionCompoundProps = ({
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickButton = () => setIsOpen(!isOpen);

  const accordionContextValue = {
    isOpen,
    handleClickButton,
  };

  const accordionCls = useMemo(
    () =>
      className ? `${className} ${AccordionBaseCls}` : `${AccordionBaseCls}`,
    [className]
  );

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <div className={accordionCls}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
Accordion.Button = AccordionButton;

export default Accordion;
