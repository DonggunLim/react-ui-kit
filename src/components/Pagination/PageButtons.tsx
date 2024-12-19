import { useMemo } from "react";
import { usePaginationContext } from ".";
import {
  PaginationPageButtonElementCls,
  PaginationPageButtonsContainerCls,
} from "../../consts/className";

interface PageButtonsProps {
  className?: string;
}

const PageButtons = ({ className }: PageButtonsProps) => {
  const { currentPage, currentGroupPages, handleClickButton } =
    usePaginationContext();

  const pageButtonsConatinerCls = useMemo(
    () =>
      className
        ? `${className} ${PaginationPageButtonsContainerCls}`
        : `${PaginationPageButtonsContainerCls}`,
    [className]
  );
  const pageButtonItemCls = useMemo(
    () =>
      className
        ? `${className} ${PaginationPageButtonElementCls}`
        : `${PaginationPageButtonElementCls}`,
    [className]
  );

  return (
    <ul
      style={{ display: "flex", listStyle: "none" }}
      className={pageButtonsConatinerCls}
    >
      {currentGroupPages.map((page) => (
        <li key={`pagination-index-button-${page}`}>
          <button
            className={pageButtonItemCls}
            onClick={() => handleClickButton(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PageButtons;
