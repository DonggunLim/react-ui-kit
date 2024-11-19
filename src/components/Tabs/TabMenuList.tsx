import { FC, PropsWithChildren } from "react";
import { tabsMenuListBaseCls } from "../../consts/className";

interface TabMenuListProps extends PropsWithChildren {}

const TabMenuList: FC<TabMenuListProps> = ({ children }) => {
  return <ul className={tabsMenuListBaseCls}>{children}</ul>;
};

export default TabMenuList;
