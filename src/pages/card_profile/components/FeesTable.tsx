import { useState } from "react";
import PlusIcon from "../../../assets/icons/plus.svg?react";
import Modal from "../../../components/Modal";
import AddFeeModal from "./AddFeeModal";

interface FeesTableProps {
  fees?: Array<{
    name: string;
    value: string;
    frequency: string;
    currency: string;
    time: string;
    accountPad: string;
    account: string;
  }>;
}

export default function FeesTable({ fees = [] }: FeesTableProps) {
  const [isAddFeeModalOpen, setIsAddFeeModalOpen] = useState(false);
  const tableHeaders = [
    "Name",
    "Value",
    "Frequency",
    "Currency",
    "Time",
    "Account Pad",
    "Account",
  ];
  const openAddFeeModal = () => setIsAddFeeModalOpen(true);
  const closeAddFeeModal = () => setIsAddFeeModalOpen(false);
  return (
    <>
      <section className="mt-4 w-full rounded-[10px] border border-[#e2e2e2] bg-white p-4 pb-[81px]">
        <h2 className="font-satoshi mb-6 text-[18px] leading-[18px] font-medium text-[#121212]">
          Fees
        </h2>

        <button
          type="button"
          onClick={openAddFeeModal}
          className="btn-animation-default mb-[11px] flex cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-[#014daf] px-[14px] py-2 text-white hover:opacity-90">
          <PlusIcon
            width={20}
            height={20}
          />
          <span className="font-satoshi text-xs leading-[18px] font-medium">
            Add Fee
          </span>
        </button>

        <div className="w-full overflow-x-auto">
          <table className="w-full overflow-hidden rounded-[10px]">
            <thead>
              <tr className="bg-[#f9fafb]">
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="font-satoshi border border-[#eaecf0] px-6 py-2 text-center text-xs leading-[18px] font-medium text-[#475467]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.length === 0 && (
                <tr>
                  {Array(7)
                    .fill(null)
                    .map((_, index) => (
                      <td
                        key={index}
                        className="h-[42px] border border-[#eaecf0] bg-white px-6 py-3 text-center"
                      />
                    ))}
                </tr>
              )}
              {fees.map((fee, index) => (
                <tr key={index}>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3">
                    {fee.name}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.value}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.frequency}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.currency}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.time}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.accountPad}
                  </td>
                  <td className="border border-[#eaecf0] bg-white px-6 py-3 text-center">
                    {fee.account}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modal
        isOpen={isAddFeeModalOpen}
        onClose={closeAddFeeModal}>
        <AddFeeModal onClose={closeAddFeeModal} />
      </Modal>
    </>
  );
}
