import SearchIcon from "../assets/icons/search.svg?react";
import { Link } from "react-router";

interface SearchAndActionsProps {
  linkText?: string;
  linkPath?: string;
  icon?: React.ReactNode;
}

export default function SearchAndActions({
  linkText,
  linkPath,
  icon,
}: SearchAndActionsProps) {
  return (
    <div className="mt-[11px] flex flex-col justify-between gap-2 border-y-[0.5px] border-[#98A2B3] py-[10px] sm:flex-row">
      <div className="flex w-full gap-2 rounded-lg border border-[#d0d5dd] bg-white px-3.5 py-2.5 shadow-[0px_1px_2px_rgba(16,24,40,0.05)] focus-within:outline sm:w-80">
        <SearchIcon
          width={16}
          height={16}
          className="flex-none"
          aria-hidden="true"
        />
        <input
          type="text"
          className="font-satoshi w-full text-start text-xs leading-[18px] font-normal text-[#344054] outline-none"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      {linkPath && (
        <Link
          to={linkPath}
          className="btn-animation-default flex h-9 cursor-pointer items-center justify-center gap-2 rounded bg-[#014daf] px-3.5 py-2">
          {icon && icon}
          <span className="font-satoshi text-xs leading-[18px] font-medium text-white">
            {linkText}
          </span>
        </Link>
      )}
    </div>
  );
}
