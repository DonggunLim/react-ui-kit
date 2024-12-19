import { useMemo } from "react";
import { usePaginationContext } from ".";
import {
  PaginationNavigatorCls,
  PaginationNavigatorNextButtonCls,
  PaginationNavigatorPrevButtonCls,
} from "../../consts/className";
interface NavigatorProps {
  className?: string;
}
const Navigator = ({ className }: NavigatorProps) => {
  const { currentPage, totalPages, handleClickButton } = usePaginationContext();
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const navigatorCls = useMemo(
    () =>
      className
        ? `${className} ${PaginationNavigatorCls}`
        : `${PaginationNavigatorCls}`,
    [className]
  );

  const navigatorPrevButtonCls = useMemo(
    () =>
      className
        ? `${className} ${PaginationNavigatorPrevButtonCls}`
        : `${PaginationNavigatorPrevButtonCls}`,
    [className]
  );

  const navigatorNextButtonCls = useMemo(
    () =>
      className
        ? `${className} ${PaginationNavigatorNextButtonCls}`
        : `${PaginationNavigatorNextButtonCls}`,
    [className]
  );

  return (
    <div className={navigatorCls}>
      <button
        className={navigatorPrevButtonCls}
        onClick={() =>
          handleClickButton(prevPage === 0 ? currentPage : prevPage)
        }
        disabled={currentPage === 1}
      >
        prev
      </button>
      <button
        className={navigatorNextButtonCls}
        onClick={() =>
          handleClickButton(nextPage > totalPages ? currentPage : nextPage)
        }
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};

export default Navigator;
