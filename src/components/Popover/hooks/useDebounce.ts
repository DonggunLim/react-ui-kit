import { useCallback } from "react";

export const useDebounce = (
  callback: () => void,
  delay: number | undefined = 500
) => {
  let timerId;
  if (timerId) clearTimeout(timerId);
  const debouncedFunction = useCallback(() => {
    timerId = setTimeout(() => callback(), delay);
  }, [callback, delay]);

  return debouncedFunction;
};
