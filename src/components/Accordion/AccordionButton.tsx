import { FC, PropsWithChildren, useMemo } from "react";
import { AccordionButtonCls } from "@consts/className";
import { useAccordionContext } from ".";

interface AccordionButtonProps extends PropsWithChildren {
  className?: string;
}
const AccordionButton: FC<AccordionButtonProps> = ({ children, className }) => {
  const accordionButtonCls = useMemo(
    () =>
      className
        ? `${AccordionButtonCls} ${className}`
        : `${AccordionButtonCls}`,
    [className]
  );
  const { handleClickButton } = useAccordionContext();
  return (
    <button onClick={handleClickButton} className={accordionButtonCls}>
      {children}
    </button>
  );
};

export default AccordionButton;
