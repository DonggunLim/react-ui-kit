import { tabsMenuListBaseCls } from "@consts/className";
import { FC, PropsWithChildren } from "react";

interface TabMenuListProps extends PropsWithChildren {}

const TabMenuList: FC<TabMenuListProps> = ({ children }) => {
  return <ul className={tabsMenuListBaseCls}>{children}</ul>;
};

export default TabMenuList;
