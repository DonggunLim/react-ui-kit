import { FC, PropsWithChildren, useContext, useMemo } from "react";
import { AccordionContext } from ".";
import { AccordionContentCls } from "../../consts/className";

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
  const { isOpen } = useContext(AccordionContext);
  return isOpen && <div className={accordionContentCls}>{children}</div>;
};

export default AccordionContent;
