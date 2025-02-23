import DeleteIcon from "../../../assets/icons/delete.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import { CardProfileData } from "../../../types/card";
import { Link } from "react-router";

interface CardProfileTableProps {
  data: CardProfileData[];
  deleteCardProfile: (id: string) => void;
}

export default function CardProfileTable({
  data,
  deleteCardProfile,
}: CardProfileTableProps) {
  const tableHeaders = [
    "Card Name",
    "Currency",
    "Expiration",
    "Bin Prefix",
    "Date Created",
    "Action",
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="mt-2.5 w-fit overflow-hidden rounded sm:w-full">
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
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={tableHeaders.length}
                className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                No data to display.
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#eaecf0]">
                <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-start text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                  {row.cardName}
                </td>
                <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                  {row.currency}
                </td>
                <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                  {row.expiration} months
                </td>
                <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                  {row.binPrefix}
                </td>
                <td className="font-satoshi border border-[#eaecf0] px-6 py-3 text-center text-[10px] leading-[18px] font-normal whitespace-nowrap text-[#475467]">
                  {row.dateCreated}
                </td>
                <td className="flex justify-center gap-1 px-2 py-3">
                  <button
                    onClick={() => deleteCardProfile(row.id)}
                    type="button"
                    className="btn-animation-default cursor-pointer rounded p-2 hover:bg-gray-50">
                    <DeleteIcon />
                  </button>
                  <Link
                    to={`/card-profile/edit/${row.id}`}
                    className="btn-animation-default cursor-pointer rounded p-2 hover:bg-gray-50">
                    <EditIcon />
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
