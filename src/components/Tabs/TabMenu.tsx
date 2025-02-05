import { FC, PropsWithChildren, useMemo } from "react";
import { useTabContext } from ".";
import { tabsMenuBaseCls } from "@consts/className";

interface TabMenuProps extends PropsWithChildren {
  index?: number;
}

const TabMenu: FC<TabMenuProps> = ({ children, index }) => {
  const { selectedIndex, handleClickMenu } = useTabContext();

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
