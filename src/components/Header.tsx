import { Link, useLocation } from "react-router";
import SearchIcon from "../assets/icons/search.svg?react";
import BellIcon from "../assets/icons/bell.svg?react";
import AvatarIcon from "../assets/icons/avatar.svg?react";
import MenuIcon from "../assets/icons/menu.svg?react";
import ChevronLeft from "../assets/icons/chevron_left.svg?react";
import { useContext } from "react";
import { AppContext, AppContextValues } from "../contexts/AppContext";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { useNavigate } from "react-router";

interface HeaderProps {
  path?: string;
  icon?: React.ReactNode;
  name?: string;
  hasBreadcrumb: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}

export default function Header({
  path,
  icon,
  name,
  hasBreadcrumb,
  breadcrumbItems,
}: HeaderProps) {
  const { setIsNavBarOpen } = useContext(AppContext) as AppContextValues;
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === "/";
  const canShowBreadcrumb =
    hasBreadcrumb && breadcrumbItems && breadcrumbItems.length > 0;

  function openNavBar() {
    setIsNavBarOpen(true);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <header className="flex w-full flex-col border-b border-[#dededf] bg-white py-1 pr-[19px] pl-2 lg:flex-row lg:justify-between">
      {canShowBreadcrumb ? (
        <div className="flex items-center gap-3 pl-3">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 text-[#475467] transition-all duration-300 hover:-translate-y-0.5">
            <ChevronLeft className="h-5 w-5 stroke-[#475467]" />
            <span className="font-satoshi text-xs leading-[18px] font-medium">
              Back
            </span>
          </button>

          <Breadcrumb items={breadcrumbItems} />
        </div>
      ) : (
        <Link
          to={path || "."}
          className="nav-link font-medium text-[#001735]">
          {icon}
          <span>{name}</span>
        </Link>
      )}

      <div className="flex h-10 w-full items-center gap-4 pl-3 lg:w-fit lg:pl-0">
        <button
          className="mr-auto flex h-10 cursor-pointer items-center justify-center lg:hidden"
          onClick={openNavBar}
          type="button"
          aria-label="Open navigation menu">
          <MenuIcon />
        </button>

        {isDashboard && (
          <div className="mx-auto flex w-full max-w-[400px] items-center gap-2 rounded-[98px] border border-[#d0d5dd] px-[14px] py-2 shadow-[0px_15.68px_31.36px_rgba(0,0,0,0.05)] focus-within:outline lg:mx-0 lg:w-[214px]">
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
        )}

        <button
          type="button"
          className="btn-animation-default flex h-10 w-10 items-center justify-center rounded-md p-[10px]"
          aria-label="Notifications">
          <BellIcon />
        </button>

        <button
          type="button"
          className="btn-animation-default h-8 w-8"
          aria-label="User profile ">
          <AvatarIcon />
        </button>
      </div>
    </header>
  );
}
