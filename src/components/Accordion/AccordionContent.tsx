import { FC, PropsWithChildren, useMemo } from "react";
import { AccordionContentCls } from "@consts/className";
import { useAccordionContext } from ".";

interface AccordionContentProps extends PropsWithChildren {
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  const accordionContentCls = useMemo(
    () =>
      className
        ? `${className} ${AccordionContentCls}`
        : `${AccordionContentCls}`,
    [className]
  );
  const { isOpen } = useAccordionContext();
  return isOpen && <div className={accordionContentCls}>{children}</div>;
};

export default AccordionContent;
