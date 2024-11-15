import { FC, PropsWithChildren } from "react";

interface TabMenuListProps extends PropsWithChildren {}

const TabMenuList: FC<TabMenuListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default TabMenuList;
