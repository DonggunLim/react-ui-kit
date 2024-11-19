import {
  Children,
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from "react";
import TabMenuList from "./TabMenuList";
import TabPannel from "./TabPannel";
import TabMenu from "./TabMenu";

interface TabsComponundProps {
  Menu: typeof TabMenu;
  MenuList: typeof TabMenuList;
  Pannel: typeof TabPannel;
}
interface TabsProps extends PropsWithChildren {
  onChangeTab: (tabIndex: number) => void;
  defaultTabIndex: number;
}
interface TabContextProps {
  selectedIndex: number;
  handleClickMenu: (index: number) => void;
}

export const TabContext = createContext<TabContextProps>({
  selectedIndex: 0,
  handleClickMenu: () => {},
});

const Tabs: FC<TabsProps> & TabsComponundProps = ({
  children,
  onChangeTab,
  defaultTabIndex,
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

  return (
    <TabContext.Provider value={TabContextValue}>
      {tabMenuList}
      {tabPannel}
    </TabContext.Provider>
  );
};

Tabs.Menu = TabMenu;
Tabs.MenuList = TabMenuList;
Tabs.Pannel = TabPannel;

export default Tabs;
