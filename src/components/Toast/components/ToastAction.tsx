import { ToastActionProps } from "../types";

const ToastAction = ({
  children = "action button",
  onClick,
}: ToastActionProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ToastAction;
