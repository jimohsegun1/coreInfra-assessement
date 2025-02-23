import StatusBadge from "../../../components/StatusBadge";
import MaximizeIcon from "../../../assets/icons/maximize.svg?react";
import { recentCardRequests } from "../../../constants/recentCardRequests";
import { Link } from "react-router";

export default function RecentCardRequests() {
  const tableHeaders = ["Branch", "Card Type", "Quantity", "Status", "Action"];

  return (
    <div className="h-fit w-full rounded-xl border border-[#e2e2e2] bg-white p-4 pb-[33px]">
      <div className="flex items-center justify-between">
        <h3 className="font-satoshi text-lg leading-[18px] font-medium text-[#121212]">
          Recent Card Requests
        </h3>
        <Link
          className="transition-all duration-300 hover:-translate-y-0.5"
          to="/card-request"
          aria-label="View all card requests">
          <MaximizeIcon
            width={19.6}
            height={19.6}
          />
        </Link>
      </div>

      <table className="mt-[21px] w-full border-collapse">
        <thead>
          <tr className="border border-[#e2e2e2] bg-[#f1f7ff]">
            {tableHeaders.map((header) => (
              <th
                key={header}
                className="font-satoshi h-[34px] w-[109.8px] text-center text-xs leading-[18px] font-medium text-black/[0.56]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentCardRequests.map((request, index) => {
            const border =
              index === recentCardRequests.length - 1
                ? "border-b-0"
                : "border-b";
            return (
              <tr key={index}>
                <td
                  className={`${border} h-[42px] w-[109.8px] border-[#eaecf0] text-center`}>
                  <span className="font-satoshi text-[10px] leading-5 text-[#475467]">
                    {request.branch}
                  </span>
                </td>
                <td
                  className={`${border} h-[42px] w-[109.8px] border-[#eaecf0] text-center`}>
                  <span className="font-satoshi text-[10px] leading-5 text-[#475467]">
                    {request.cardType}
                  </span>
                </td>
                <td
                  className={`${border} h-[42px] w-[109.8px] border-[#eaecf0] text-center`}>
                  <span className="font-satoshi text-[10px] leading-5 text-[#475467]">
                    {request.quantity}
                  </span>
                </td>
                <td
                  className={`${border} h-[42px] w-[109.8px] border-[#eaecf0] text-center`}>
                  <StatusBadge status={request.status} />
                </td>
                <td className="h-[42px] w-[109.8px] border-b border-[#eaecf0] text-center">
                  <button className="font-satoshi rounded text-[10px] leading-5 font-bold text-[#014daf]">
                    {request.action}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
