import {
  Children,
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
import AccordionButton from "./AccordionButton";

interface AccordionProps extends PropsWithChildren {}

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickButton = () => setIsOpen(!isOpen);

  const accordionContextValue = {
    isOpen,
    handleClickButton,
  };

  const _children = Children.toArray(children) as ReactElement[];
  console.log(_children);

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
Accordion.Button = AccordionButton;

export default Accordion;
