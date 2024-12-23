import { useMemo } from "react";
import { UseContentPositionProps } from "../types/types";

const useContentPosition = (props: UseContentPositionProps) => {
  const { contentPosition, triggerRect, contentRect } = props;
  return useMemo(() => {
    switch (contentPosition) {
      case "bottom-left": {
        return {
          top: triggerRect.top + triggerRect.height,
          left: triggerRect.left,
        };
      }
      case "bottom-center": {
        return {
          top: triggerRect.top + triggerRect.height,
          left:
            triggerRect.left + triggerRect.width / 2 - contentRect.width / 2,
        };
      }
      case "bottom-right": {
        return {
          top: triggerRect.top + triggerRect.height,
          left: triggerRect.right,
        };
      }
      default: {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
      }
    }
  }, [triggerRect, contentRect, contentPosition]);
};

export default useContentPosition;
