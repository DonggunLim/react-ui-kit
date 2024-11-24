import { FC, PropsWithChildren, useContext } from "react";
import { AccordionContext } from ".";

interface AccordionButtonProps extends PropsWithChildren {}
const AccordionButton: FC<AccordionButtonProps> = ({ children }) => {
  const { handleClickButton } = useContext(AccordionContext);
  return <button onClick={handleClickButton}>{children}</button>;
};

export default AccordionButton;
