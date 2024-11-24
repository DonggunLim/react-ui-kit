import { FC, PropsWithChildren } from "react";

interface AccordionTitleProps extends PropsWithChildren {}

const AccordionTitle: FC<AccordionTitleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AccordionTitle;
