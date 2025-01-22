import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import Navigator from "./Navigator";
import PageButtons from "./PageButtons";
import { usePaginate } from "./hooks/usePaginate";
import { PaginationBaseCls } from "@consts/className";

interface PaginationProps extends PropsWithChildren {
  totalPages: number;
  currentPage: number;
  pageSize?: number;
  indexSize?: number;
  onPageChange: (page: number) => void;
  className?: string;
}
interface PaginationCompoundProps {
  Navigator: typeof Navigator;
  PageButtons: typeof PageButtons;
}
interface PaginationContextProps {
  currentGroupPages: number[];
  currentPage: number;
  totalPages: number;
  handleClickButton: (page: number) => void;
}

const PaginationContext = createContext<PaginationContextProps>({
  currentGroupPages: [],
  currentPage: 0,
  totalPages: 0,
  handleClickButton: () => {},
});

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("check pagination context");
  }
  return context;
};

const Pagination: FC<PaginationProps> & PaginationCompoundProps = ({
  children,
  totalPages,
  currentPage,
  indexSize = 5,
  onPageChange,
  className,
}) => {
  const { currentGroupPages, handleClickButton } = usePaginate({
    currentPage,
    indexSize,
    totalPages,
    onPageChange,
  });

  const paginationContextValue = {
    currentGroupPages,
    currentPage,
    totalPages,
    handleClickButton,
  };

  const paginationCls = useMemo(
    () =>
      className ? `${className} ${PaginationBaseCls}` : `${PaginationBaseCls}`,
    [className]
  );

  return (
    <PaginationContext.Provider value={paginationContextValue}>
      <div className={paginationCls}>{children}</div>
    </PaginationContext.Provider>
  );
};

Pagination.Navigator = Navigator;
Pagination.PageButtons = PageButtons;

export default Pagination;
