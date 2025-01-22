import { FC, PropsWithChildren, useContext, useMemo } from "react";
import { TabContext } from ".";
import { tabsMenuBaseCls } from "@consts/className";

interface TabMenuProps extends PropsWithChildren {
  index?: number;
}

const TabMenu: FC<TabMenuProps> = ({ children, index }) => {
  const { selectedIndex, handleClickMenu } = useContext(TabContext);

  const isActive = useMemo(
    () => selectedIndex === index,
    [index, selectedIndex]
  );

  return (
    <li
      className={tabsMenuBaseCls}
      data-active={isActive}
      onClick={() => index && handleClickMenu(index)}
    >
      {children}
    </li>
  );
};

export default TabMenu;
