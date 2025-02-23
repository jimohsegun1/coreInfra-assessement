import { useState } from "react";
import { useEffect } from "react";
import { type navBarMenuItem as navBarMenuItemType } from "../types/menu";
import { Link, useLocation } from "react-router";
interface navBarMenuItemProps extends navBarMenuItemType {
  className?: string;
}

export default function NavBarLink({
  Icon,
  name,
  path,
  className,
}: navBarMenuItemProps) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const isActive = path === "/" ? pathname === path : pathname.includes(path);
    setIsActive(isActive);
  }, [pathname, path]);

  const activeStyle =
    "rounded-lg border-[0.6px] border-[#E2E2E2] bg-[#f6f6f6] font-medium text-[#014daf]";
  const iconActiveStyle =
    path === "/card-profile" ? "fill-[#014daf]" : "stroke-[#014daf]";
  const iconInActiveStyle =
    path === "/card-profile" ? "fill-[#808080]" : "stroke-[#808080]";

  return (
    <Link
      to={path}
      className={`nav-link ${className} ${isActive ? activeStyle : "font-normal text-black/50"}`}>
      <Icon
        width={16}
        height={16}
        className={isActive ? iconActiveStyle : iconInActiveStyle}
        aria-hidden={true}
      />

      <span>{name}</span>
    </Link>
  );
}
