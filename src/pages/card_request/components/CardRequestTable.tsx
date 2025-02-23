import { Link } from "react-router";
import StatusBadge from "../../../components/StatusBadge";
import { useContext } from "react";
import {
  CardRequestContext,
  CardRequestContextValues,
} from "../../../contexts/CardRequestContext";

export default function CardRequestTable() {
  const tableHeaders = [
    "Branch",
    "Initiator",
    "Quantity",
    "Batch",
    "Date Requested",
    "Status",
    "Action",
  ];
  const { cardRequests } = useContext(
    CardRequestContext
  ) as CardRequestContextValues;
  return (
    <div className="w-full overflow-x-auto">
      <table className="mt-2.5 w-fit overflow-hidden rounded-[4px] sm:w-full">
        <thead>
          <tr className="bg-[#F9FAFB]">
            {tableHeaders.map((header, index) => (
              <th
                key={header}
                className={`font-satoshi h-[34px] border border-[#eaecf0] px-6 py-2 text-xs leading-[18px] font-medium text-[#475467] ${
                  index === 0 ? "text-start" : "text-center"
                }`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {cardRequests.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[#eaecf0]">
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-start text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                {row.branch}
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                {row.initiator}
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                {row.quantity}
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                {row.batch}
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                {row.dateRequested}
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center">
                <StatusBadge status={row.status} />
              </td>
              <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center">
                <Link
                  to={`/card-request/${row.id}`}
                  className="font-satoshi inline-block text-[10px] leading-5 font-bold text-[#014daf] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#0258c8]">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
