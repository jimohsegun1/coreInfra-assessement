export default function TextBox({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="font-satoshi flex w-full flex-col gap-1.5 text-sm leading-5 font-medium text-[#344054] min-[1440px]:w-[448px]">
      {label}
      <input
        className="font-satoshi flex w-full flex-col gap-1.5 rounded-lg border border-[#D0D5DD] bg-[#F5F5F7] px-3.5 py-2.5 text-base leading-6 font-normal text-[#101828]"
        type="text"
        disabled
        defaultValue={defaultValue}
      />
    </label>
  );
}
