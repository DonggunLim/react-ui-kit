import { FC, PropsWithChildren, useContext } from "react";
import { TabContext } from "./Tabs";

interface TabPannelProps extends PropsWithChildren {
  index?: number;
}
const TabPannel: FC<TabPannelProps> = ({ children, index }) => {
  const { selectedIndex } = useContext(TabContext);
  return <>{index === selectedIndex && <div>{children}</div>}</>;
};

export default TabPannel;
