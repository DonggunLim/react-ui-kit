import { FC, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ContentRect, PopoverContentProps } from "../types";
import { DEFAULT_CONTENT_RECT } from "../consts";
import { usePopoverContext } from "./Root";
import useContentPosition from "../hooks/useContentPosition";
import { PopoverContentCls } from "../../../consts/className";
import { useDebounce } from "../hooks/useDebounce";

const PopoverContent: FC<PopoverContentProps> = ({ children, className }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentRect, setContentRect] =
    useState<ContentRect>(DEFAULT_CONTENT_RECT);
  const {
    triggerRef,
    triggerRect,
    isPopoverOpen,
    contentPosition,
    handlePopoverVisible,
    handleTriggerRect,
  } = usePopoverContext();

  const { top, right, bottom, left } = useContentPosition({
    contentPosition,
    triggerRect,
    contentRect,
  });

  const handleClickOuter = (e: MouseEvent) => {
    if (
      e.target instanceof Node &&
      contentRef.current &&
      !contentRef.current.contains(e.target)
    ) {
      handlePopoverVisible();
    }
  };

  const handleCalculateTriggerRect = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) handleTriggerRect(rect);
  };

  const debouncedResizeHandler = useDebounce(handleCalculateTriggerRect);

  useEffect(() => {
    const rect = contentRef.current?.getBoundingClientRect();
    if (rect) setContentRect(rect);
  }, [isPopoverOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOuter);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
      document.removeEventListener("click", handleClickOuter);
    };
  }, []);

  const ContentCls = useMemo(
    () =>
      className ? `${className} ${PopoverContentCls}` : `${PopoverContentCls}`,
    [className]
  );

  return (
    isPopoverOpen &&
    createPortal(
      <section
        className={ContentCls}
        ref={contentRef}
        style={{
          position: "absolute",
          top: `${top}px`,
          right: `${right}px`,
          bottom: `${bottom}px`,
          left: `${left}px`,
          zIndex: 100,
        }}
      >
        {children}
      </section>,
      document.body
    )
  );
};

export default PopoverContent;
