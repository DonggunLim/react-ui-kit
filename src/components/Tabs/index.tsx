import {
  Children,
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from "react";
import TabMenuList from "./TabMenuList";
import TabPannel from "./TabPannel";
import TabMenu from "./TabMenu";
import { tabsBaseCls } from "@consts/className";

interface TabsComponundProps {
  Menu: typeof TabMenu;
  MenuList: typeof TabMenuList;
  Pannel: typeof TabPannel;
}
interface TabsProps extends PropsWithChildren {
  onChangeTab: (tabIndex: number) => void;
  defaultTabIndex: number;
  className?: string;
}
interface TabContextProps {
  selectedIndex: number;
  handleClickMenu: (index: number) => void;
}
const TabContext = createContext<TabContextProps | null>(null);
export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext should be used within TabContext.Provdier");
  }
  return context;
};

const Tabs: FC<TabsProps> & TabsComponundProps = ({
  children,
  onChangeTab,
  defaultTabIndex,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultTabIndex);
  const handleClickMenu = (index: number) => {
    setSelectedIndex(index);
    onChangeTab(index);
  };
  const TabContextValue = {
    selectedIndex,
    handleClickMenu,
  };

  const _children = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const tabMenuList = useMemo(
    () =>
      (
        _children.find((child) => child.type === TabMenuList)?.props
          .children as ReactElement[]
      ).map((element, index) =>
        cloneElement(element, { key: index, index: index + 1 })
      ),
    [_children]
  );

  const tabPannel = useMemo(
    () =>
      _children
        .filter((child) => child.type === TabPannel)
        .map((element, index) =>
          cloneElement(element, { key: index, index: index + 1 })
        ),
    [_children]
  );

  const tabsCls = useMemo(
    () => (className ? `${className} ${tabsBaseCls}` : `${tabsBaseCls}`),
    [className]
  );
  return (
    <TabContext.Provider value={TabContextValue}>
      <div className={tabsCls}>
        {tabMenuList}
        {tabPannel}
      </div>
    </TabContext.Provider>
  );
};

Tabs.Menu = TabMenu;
Tabs.MenuList = TabMenuList;
Tabs.Pannel = TabPannel;

export default Tabs;
