import ChevronUpIcon from "../../../assets/icons/chevron_up.svg?react";
import ChevronDownIcon from "../../../assets/icons/chevron_down.svg?react";

interface NumberInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  inputName: string;
  isRequired: boolean;
  inputStyle?: string;
  labelStyle?: string;
  label: string;
}

export default function NumberInput({
  handleInputChange,
  formData,
  setFormData,
  label,
  inputName,
  isRequired,
  inputStyle,
  labelStyle,
}: NumberInputProps) {
  return (
    <label
      htmlFor={inputName}
      className={`font-satoshi flex w-full flex-col gap-1.5 text-sm leading-5 font-medium text-[#344054] capitalize ${
        labelStyle
      }`}>
      {label}
      {isRequired && "*"}
      <div className="relative h-fit">
        <input
          type="number"
          id={inputName}
          name={inputName}
          value={formData[inputName]}
          onChange={handleInputChange}
          min="0"
          className={`font-satoshi w-full rounded-lg border border-[#d0d5dd] bg-white text-base leading-6 font-normal text-[#667085] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] outline-none ${
            inputStyle
          }`}
          required
        />
        <div className="absolute top-1/3 right-3.5 my-auto flex h-5 w-5 flex-col items-center justify-center">
          <button
            type="button"
            onClick={() =>
              setFormData((prev: any) => ({
                ...prev,
                [inputName]: prev[inputName] + 1,
              }))
            }
            className="-mb-[5.5px] flex cursor-pointer flex-col items-center justify-center">
            <ChevronUpIcon
              width={20}
              height={20}
              stroke="#667085"
            />
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData((prev: any) => ({
                ...prev,
                [inputName]: prev[inputName] - 1,
              }))
            }
            className="-mt-[5.5px] flex cursor-pointer flex-col items-center justify-center">
            <ChevronDownIcon
              width={20}
              height={20}
              stroke="#667085"
            />
          </button>
        </div>
      </div>
    </label>
  );
}
