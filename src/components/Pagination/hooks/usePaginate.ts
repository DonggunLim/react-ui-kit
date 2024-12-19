import { useMemo } from "react";

interface UsePaginateProps {
  currentPage: number;
  indexSize: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const usePaginate = ({
  currentPage,
  indexSize,
  totalPages,
  onPageChange,
}: UsePaginateProps) => {
  const [groupFirstPage, groupLastPage] = useMemo(() => {
    const first = (Math.ceil(currentPage / indexSize) - 1) * indexSize + 1;
    return [first, Math.min(first + indexSize - 1, totalPages)];
  }, [currentPage, indexSize, totalPages]);

  const currentGroupPages = useMemo(
    () =>
      Array.from(
        { length: groupLastPage - groupFirstPage + 1 },
        (_, index) => groupFirstPage + index
      ),
    [groupFirstPage, groupLastPage]
  );

  const handleClickButton = (page: number) => onPageChange(page);

  return { currentGroupPages, handleClickButton };
};
