import NavBarLink from "./NavBarLink";
import { navBarMenuItems } from "../constants/navBarMenuItems";
import { Link } from "react-router";
import DashboardIcon from "../assets/icons/home.svg?react";
import LogoutIcon from "../assets/icons/logout.svg?react";
import CardinfraLogo from "../assets/logos/cardinfra.svg?react";
import LapoLogo from "../assets/logos/lapo_logo.svg?react";
import { useContext } from "react";
import { AppContext, AppContextValues } from "../contexts/AppContext";

export default function NavBar() {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(
    AppContext
  ) as AppContextValues;

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };

  return (
    <div
      onClick={closeNavBar}
      className={`${isNavBarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"} fixed top-0 left-0 z-50 h-svh w-full overflow-hidden bg-black/[.05] transition-all duration-300 lg:static lg:h-full lg:w-fit`}>
      <div className="absolute top-0 h-full w-[230px] overflow-y-auto border-r border-[#dededf] bg-white lg:static">
        <nav className="mb-[165px]">
          <Link
            to="."
            aria-label="Lapo Microfinance Bank Logo"
            className="mt-[27px] mb-[31px] ml-[10px] block w-fit">
            <LapoLogo />
          </Link>

          <NavBarLink
            Icon={DashboardIcon}
            name="Dashboard"
            path="/"
            className="mb-4 ml-[11px] block"
          />

          <section>
            <h2 className="font-satoshi mb-2 ml-7 text-[9px] leading-[18px] font-medium text-[#7e8b9c]">
              MAIN MENU
            </h2>

            <ul className="ml-[11px] flex flex-col gap-1">
              {navBarMenuItems.map((item, index) => (
                <li key={`nav-${index + 1}`}>
                  <NavBarLink {...item} />
                </li>
              ))}
            </ul>
          </section>
        </nav>
        <button
          type="button"
          className="nav-link mb-11 ml-3 flex items-center gap-3 font-medium text-[#121212]">
          <LogoutIcon
            width={16}
            height={16}
            aria-hidden={true}
          />
          Logout
        </button>

        <h2 className="font-satoshi mb-1 pl-7 text-[8.5px] leading-[18px] font-medium text-[#808080]">
          POWERED BY
        </h2>
        <CardinfraLogo
          className="mb-[30px] ml-7"
          aria-label="cardinfra"
        />
      </div>
    </div>
  );
}
