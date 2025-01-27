import { createRoot, Root } from "react-dom/client";
import { ToastPositions, ToastProps } from "../types";
import { cloneElement, CSSProperties, ReactElement, useRef } from "react";
import ToastTitle from "../components/ToastTitle";
import ToastDescription from "../components/ToastDescription";

const mapPositionToStyle: {
  [key in ToastPositions]: Partial<
    Pick<CSSProperties, "top" | "bottom" | "right" | "left">
  >;
} = {
  "top-right": { top: 0, right: 0 },
  "top-left": { top: 0, left: 0 },
  "bottom-right": { bottom: 0, right: 0 },
  "bottom-left": { bottom: 0, left: 0 },
};

const useToast = () => {
  const timerId = useRef<number>();
  const toastRoot = useRef<Root>();
  const addToast = ({
    title,
    description,
    actionElem,
    position = "top-right",
  }: ToastProps) => {
    if (toastRoot.current) {
      toastRoot.current.unmount();
    }
    const style = mapPositionToStyle[position];
    toastRoot.current = createRoot(document.getElementById("toaster")!);
    toastRoot.current.render(
      <div className="toast-item" style={{ position: "fixed", ...style }}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        {actionElem &&
          cloneElement(actionElem as ReactElement, {
            onClick: deleteToast,
          })}
      </div>
    );
  };

  const deleteToast = () => {
    toastRoot.current?.unmount();
    clearTimeout(timerId.current);
  };

  const toast = ({ duration = 2000, ...rest }: ToastProps) => {
    if (timerId) clearTimeout(timerId.current);
    addToast(rest);
    timerId.current = window.setTimeout(() => {
      deleteToast();
    }, duration);
  };

  return { toast };
};

export default useToast;
