import { FC, useEffect, useMemo, useRef } from "react";
import { ProgressBarCls, ProgressBaseCls } from "../../consts/className";

interface ProgressInterface {
  stop: boolean;
  className?: string;
  progressBarClassName?: string;
}

const Progress: FC<ProgressInterface> = ({
  stop,
  className,
  progressBarClassName,
}) => {
  const requestId = useRef<number>();
  const progressBar = useRef<HTMLDivElement>(null);
  const progress = useRef(0);

  const handleTransitionEnd = () => {
    if (progressBar.current) progressBar.current.style.display = "none";
  };

  const animate = (isStop: boolean) => {
    if (!progressBar.current) return;
    if (requestId.current && (progress.current >= 99 || isStop)) {
      cancelAnimationFrame(requestId.current);

      const progressBarElement = progressBar.current;

      progressBarElement.style.width = `100%`;
      progressBarElement.style.transition = `0.3s`;
      progressBarElement.addEventListener("transitionend", handleTransitionEnd);
      return;
    }
    progress.current += 0.25;
    progressBar.current.style.width = `${progress.current}%`;

    if (stop === false)
      requestId.current = requestAnimationFrame(() => animate(isStop));
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(() => animate(stop));
    if (!progressBar.current) return;

    return () => {
      if (requestId.current) cancelAnimationFrame(requestId.current);
      progressBar.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [stop]);

  const progressBaseCls = useMemo(
    () =>
      className ? `${className} ${ProgressBaseCls}` : `${ProgressBaseCls}`,
    [className]
  );

  const progressBarCls = useMemo(
    () =>
      progressBarClassName
        ? `${progressBarClassName} ${ProgressBarCls}`
        : `${ProgressBarCls}`,
    [progressBarClassName]
  );

  return (
    <div style={{ width: "100%", height: "30px" }} className={progressBaseCls}>
      <div
        ref={progressBar}
        style={{
          backgroundColor: "#4caf50",
          height: "100%",
          transition: "0.1s",
        }}
        className={progressBarCls}
      ></div>
    </div>
  );
};

export default Progress;
