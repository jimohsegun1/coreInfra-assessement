interface RadioOption {
  name: string;
  label: string;
}

interface RadioGroupProps {
  title: string;
  options: RadioOption[];
  selected: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    groupName?: string
  ) => void;
  groupName: string;
}

export default function RadioGroup({
  title,
  options,
  selected,
  onChange,
  groupName,
}: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="font-satoshi mb-3 text-sm leading-5 font-medium text-[#344054]">
        {title}
      </legend>
      <div className="flex gap-5">
        {options.map((option) => (
          <label
            key={option.name}
            className={`${groupName === "currency" ? "opacity-45" : "opacity-100"} font-satoshi font-regular flex gap-[9px] text-base leading-6 text-[#121212]`}>
            <input
              type="radio"
              name={option.name}
              id={option.name}
              value={option.name}
              checked={selected === option.name}
              onChange={(e) => onChange(e, groupName)}
              className="h-6 w-6 rounded-full border border-[#000000]/56 bg-[#F6F6F6]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
