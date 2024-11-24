import { FC, PropsWithChildren, useContext } from "react";
import { AccordionContext } from ".";

interface AccordionContentProps extends PropsWithChildren {}

const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  const { isOpen } = useContext(AccordionContext);
  return isOpen && <>{children}</>;
};

export default AccordionContent;
