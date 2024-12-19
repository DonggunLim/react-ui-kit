import {
  Children,
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbSeperator from "./internal/BreadcrumbSeperator";
import {
  BreadcrumbBaseCls,
  BreadcrumbeLlipsisCls,
  BreadcrumbUlContainerCls,
} from "../../consts/className";
const DEFAULT_BREADCRUMB_WIDTH = 500;
interface BreadcrumbProps extends PropsWithChildren {
  className?: string;
  ellipsisClassName?: string;
  width: number;
}
interface BreadcrumbCompundProps {
  Item: typeof BreadcrumbItem;
}
interface BreadcrumbContextProps {
  handleItemWidth: (width: number) => void;
  totalBreadcrumbCount: number;
  isBreadcrumbOverflow: boolean;
  width?: number;
}
const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  handleItemWidth: () => {},
  totalBreadcrumbCount: 0,
  isBreadcrumbOverflow: false,
  width: DEFAULT_BREADCRUMB_WIDTH,
});

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("context 확인 필요");
  }
  return context;
};

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompundProps = ({
  children,
  className,
  ellipsisClassName,
  width = DEFAULT_BREADCRUMB_WIDTH,
}) => {
  const breadcrumbUlElementRef = useRef<HTMLUListElement>(null);
  const [breadcrumbItemsWidth, setBreadcrumbItemsWidth] = useState<number>(0);
  const [skipData, setSkipData] = useState<ReactElement[]>();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemWidth = (width: number) => {
    setBreadcrumbItemsWidth((prev) => prev + width);
  };

  const _children = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const isBreadcrumbOverflow = useMemo(() => {
    return breadcrumbItemsWidth > width;
  }, [breadcrumbItemsWidth, width]);

  const ellipsisCls = useMemo(
    () =>
      ellipsisClassName
        ? `${ellipsisClassName} ${BreadcrumbeLlipsisCls}`
        : `${BreadcrumbeLlipsisCls}`,
    [ellipsisClassName]
  );

  const processedChildren = useMemo(() => {
    if (!isBreadcrumbOverflow) return _children;
    const ellipsisItem = (
      <span onClick={() => setIsOpen(true)} className={ellipsisCls}>
        <BreadcrumbSeperator />
        {` ... `}
        <BreadcrumbSeperator />
      </span>
    );
    setSkipData(_children.slice(1, _children.length - 1));
    return [_children[0], ellipsisItem, _children[_children.length - 1]];
  }, [breadcrumbItemsWidth, _children, isBreadcrumbOverflow, width]);

  const breadcrumbContextValue = {
    handleItemWidth,
    totalBreadcrumbCount: processedChildren.length,
    isBreadcrumbOverflow,
    width,
  };

  const breadcrumbCls = useMemo(
    () =>
      className ? `${className} ${BreadcrumbBaseCls}` : `${BreadcrumbBaseCls}`,
    [className]
  );
  const breadcrumbConatinerCls = useMemo(
    () =>
      className
        ? `${className} ${BreadcrumbUlContainerCls}`
        : `${BreadcrumbUlContainerCls}`,
    [className]
  );
  return (
    <BreadcrumbContext.Provider value={breadcrumbContextValue}>
      <nav className={breadcrumbCls}>
        <ul ref={breadcrumbUlElementRef} className={breadcrumbConatinerCls}>
          {processedChildren.map((elem, index) =>
            cloneElement(elem, {
              ...elem.props,
              key: `breadcrumb-item-${index}`,
              index,
            })
          )}
        </ul>
      </nav>
      {isOpen && (
        <div>
          <button onClick={() => setIsOpen(false)}>x</button>
          <ul>
            {skipData?.map((elem, index) =>
              cloneElement(elem, {
                ...elem.props,
                key: `dropdown-item-${index}`,
              })
            )}
          </ul>
        </div>
      )}
    </BreadcrumbContext.Provider>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
