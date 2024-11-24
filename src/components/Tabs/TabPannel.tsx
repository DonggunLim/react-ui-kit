import { FC, PropsWithChildren, useContext } from "react";
import { TabContext } from ".";
import { tabsPannelBaseCls } from "../../consts/className";

interface TabPannelProps extends PropsWithChildren {
  index?: number;
}
const TabPannel: FC<TabPannelProps> = ({ children, index }) => {
  const { selectedIndex } = useContext(TabContext);
  return (
    <>
      {index === selectedIndex && (
        <div className={tabsPannelBaseCls}>{children}</div>
      )}
    </>
  );
};

export default TabPannel;
