interface TextInputProps {
  label: string;
  inputName: string;
  isRequired: boolean;
  inputStyle?: string;
  labelStyle?: string;
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  pattern?: string;
  maxLength?: number;
  inputmode?: string;
}

export default function TextInput({
  label,
  inputName,
  isRequired,
  inputStyle,
  labelStyle,
  formData,
  handleInputChange,
  placeholder,
  pattern,
  maxLength,
}: TextInputProps) {
  return (
    <label
      htmlFor={inputName}
      className={`font-satoshi flex w-full flex-col gap-1.5 text-sm leading-5 font-medium text-[#344054] ${labelStyle}`}>
      {label}
      {isRequired && "*"}
      <input
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        value={formData[inputName]}
        onChange={handleInputChange}
        className={`font-satoshi h-fit w-full rounded-lg border border-[#d0d5dd] bg-white text-base leading-6 font-normal text-[#667085] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] outline-none placeholder:text-[#667085] ${inputStyle}`}
        {...(isRequired && { required: true })}
        {...(pattern && { pattern })}
        {...(maxLength && { maxLength })}
      />
    </label>
  );
}
