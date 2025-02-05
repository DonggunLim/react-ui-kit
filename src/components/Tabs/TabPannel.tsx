import { FC, PropsWithChildren } from "react";
import { useTabContext } from ".";
import { tabsPannelBaseCls } from "@consts/className";

interface TabPannelProps extends PropsWithChildren {
  index?: number;
}
const TabPannel: FC<TabPannelProps> = ({ children, index }) => {
  const { selectedIndex } = useTabContext();
  return (
    <>
      {index === selectedIndex && (
        <div className={tabsPannelBaseCls}>{children}</div>
      )}
    </>
  );
};

export default TabPannel;
