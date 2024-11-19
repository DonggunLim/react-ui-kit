import { FC, PropsWithChildren, useContext } from "react";
import { TabContext } from ".";

interface TabMenuProps extends PropsWithChildren {
  index?: number;
}

const TabMenu: FC<TabMenuProps> = ({ children, index }) => {
  const { handleClickMenu } = useContext(TabContext);
  return (
    <li>
      <button onClick={() => index && handleClickMenu(index)}>
        {children}
      </button>
    </li>
  );
};

export default TabMenu;
