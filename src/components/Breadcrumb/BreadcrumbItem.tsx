import { FC, ReactNode, useEffect, useMemo, useRef } from "react";
import { useBreadcrumbContext } from ".";
import BreadcrumbSeperator from "./internal/BreadcrumbSeperator";

interface BreadcrumbItemProps {
  children: ReactNode;
  href: string;
  index?: number;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, index, href }) => {
  const breadcrumbItemRef = useRef<HTMLSpanElement>(null);
  const {
    handleItemWidth,
    totalBreadcrumbCount,
    isBreadcrumbOverflow,
    width: propsWidth,
  } = useBreadcrumbContext();

  const isNeedSeperator = useMemo(() => {
    if (index !== undefined && !isBreadcrumbOverflow) {
      return index < totalBreadcrumbCount - 1;
    }
    return false;
  }, [index, totalBreadcrumbCount, isBreadcrumbOverflow, propsWidth]);

  useEffect(() => {
    if (!breadcrumbItemRef.current) return;
    const { width } = breadcrumbItemRef.current.getBoundingClientRect();
    handleItemWidth(width);
  }, [propsWidth]);

  return (
    <li style={{ display: "inline-block" }}>
      <a href={href}>
        <span ref={breadcrumbItemRef}>
          {children}
          {isNeedSeperator && <BreadcrumbSeperator />}
        </span>
      </a>
    </li>
  );
};

export default BreadcrumbItem;
