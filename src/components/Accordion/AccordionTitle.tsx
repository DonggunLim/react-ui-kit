import { AccordionTitleCls } from "@consts/className";
import { FC, PropsWithChildren, useMemo } from "react";

interface AccordionTitleProps extends PropsWithChildren {
  className?: string;
}

const AccordionTitle: FC<AccordionTitleProps> = ({ children, className }) => {
  const accordionTitleCls = useMemo(
    () =>
      className ? `${className} ${AccordionTitleCls}` : `${AccordionTitleCls}`,
    [className]
  );

  return <div className={accordionTitleCls}>{children}</div>;
};

export default AccordionTitle;
