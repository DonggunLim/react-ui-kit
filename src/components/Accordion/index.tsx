import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
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

const AccordionContext = createContext<AccordionContextProps | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion Context should be used within AccordionContext.Provider"
    );
  }
  return context;
};

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
