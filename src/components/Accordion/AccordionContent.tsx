import { FC, PropsWithChildren } from "react";

interface AccordionContentProps extends PropsWithChildren {}

const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccordionContent;
