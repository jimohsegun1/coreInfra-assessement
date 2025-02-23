import React from "react";
import ChevronRight from "../../../assets/icons/chevron_right.svg?react";
import { Link } from "react-router";
interface CardActionProps {
  action: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export default function QuickAction({ action, Icon, link }: CardActionProps) {
  return (
    <Link
      to={link}
      className="group flex h-[45px] w-full items-center gap-4 rounded-sm bg-[#f1f7ff] pl-4 transition-all duration-300 hover:bg-[#eaf2fe]">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0146a0] transition-all duration-300 group-hover:-translate-y-0.5">
        <Icon
          className="h-4 w-4 text-white"
          stroke="white"
        />
      </span>
      <span className="flex items-center gap-[5px]">
        <span className="font-satoshi text-[14px] leading-[18px] font-medium text-[#121212]">
          {action}
        </span>
        <ChevronRight stroke="#808080" />
      </span>
    </Link>
  );
}
