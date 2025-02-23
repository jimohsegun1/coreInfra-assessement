export default function ActionButton({
  Icon,
  onClick,
  backgroundColor,
  text,
  disabled,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  backgroundColor: string;
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={`font-satoshi flex w-full flex-none cursor-pointer gap-2 rounded px-3.5 py-2 text-xs leading-4.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40 md:w-[calc(50%-30px)] xl:w-fit ${backgroundColor} transition-all duration-500 hover:scale-105`}
      onClick={onClick}
      {...(disabled && { disabled })}>
      <Icon
        width={20}
        height={20}
      />
      {text}
    </button>
  );
}
