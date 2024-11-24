import { FC, PropsWithChildren, useContext, useMemo } from "react";
import { AccordionContext } from ".";
import { AccordionButtonCls } from "../../consts/className";

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
  const { handleClickButton } = useContext(AccordionContext);
  return (
    <button onClick={handleClickButton} className={accordionButtonCls}>
      {children}
    </button>
  );
};

export default AccordionButton;
