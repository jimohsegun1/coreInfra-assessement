import { Link } from "react-router";
import ChevronRight from "../assets/icons/chevron_right.svg?react";

export interface BreadcrumbItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex h-[38px] items-center gap-3">
      {items.map((item, index) => (
        <div
          key={item.path}
          className="flex items-center gap-3">
          {index === 0 && item.icon && (
            <>
              <span className="flex h-4 w-4 items-center transition-all duration-300 hover:-translate-y-0.5">
                {item.icon}
              </span>
              <ChevronRight className="h-4 w-4 stroke-[#D0D5DD]" />
            </>
          )}
          <Link
            to={item.path}
            className={`font-satoshi text-xs leading-5 transition-all duration-300 hover:-translate-y-0.5 ${
              index === items.length - 1
                ? "font-bold text-[#001735]"
                : "font-medium text-[#475467]"
            }`}>
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 stroke-[#D0D5DD]" />
          )}
        </div>
      ))}
    </nav>
  );
}
