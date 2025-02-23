import ChevronDownIcon from "../../../assets/icons/chevron_down.svg?react";

interface DropDownMenuProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  label: string;
  menuName: string;
  isRequired: boolean;
}

export default function DropDownMenu({
  formData,
  handleInputChange,
  options,
  label,
  menuName,
  isRequired,
}: DropDownMenuProps) {
  return (
    <label
      htmlFor={menuName}
      className="font-satoshi flex w-full flex-col gap-1.5 text-sm leading-5 font-medium text-[#344054] capitalize min-[1440px]:w-[448px]">
      {label}
      {isRequired && "*"}
      <div className="relative flex h-11 items-center rounded-lg border border-[#d0d5dd] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
        <select
          id={menuName}
          name={menuName}
          value={formData[menuName]}
          onChange={handleInputChange}
          {...(isRequired && { required: true })}
          className="font-satoshi w-full cursor-pointer appearance-none rounded-lg px-3.5 py-2.5 text-base leading-6 font-normal text-[#667085] outline-none">
          {options.map((option) => (
            <option
              key={option}
              value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3.5 h-5 w-5 text-[#667085]" />
      </div>
    </label>
  );
}
