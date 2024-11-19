import { FC, PropsWithChildren } from "react";

interface AccordionTitleProps extends PropsWithChildren {}

const AccordionTitle: FC<AccordionTitleProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccordionTitle;
