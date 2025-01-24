import { createRoot, Root } from "react-dom/client";
import { ToastProps } from "../types";
import { cloneElement, ReactElement, useRef } from "react";
import ToastTitle from "../components/ToastTitle";
import ToastDescription from "../components/ToastDescription";

const useToast = () => {
  const timerId = useRef<number>();
  const toastRoot = useRef<Root>();
  const addToast = ({
    title,
    description,
    actionElem,
    position,
  }: ToastProps) => {
    if (toastRoot.current) {
      toastRoot.current.unmount();
    }

    toastRoot.current = createRoot(document.getElementById("toaster")!);
    toastRoot.current.render(
      <div className="toast-item">
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
