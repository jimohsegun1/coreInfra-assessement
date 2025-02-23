import IconSquare from "../../../components/IconSquare";
import CheckCircleIcon from "../../../assets/icons/check_circle.svg?react";
export interface SuccessModalProps {
  action: (() => void) | null;
  message: string | null;
}

export function SuccessModal({ action, message }: SuccessModalProps) {
  return (
    <section className="shadow-success-modal absolute inset-0 m-auto h-fit w-full max-w-[400px] rounded-xl bg-white p-6">
      <IconSquare>
        <CheckCircleIcon />
      </IconSquare>

      <h2 className="font-satoshi mt-4 text-lg leading-7 font-medium text-[#101828]">
        Successful
      </h2>
      <p className="font-satoshi mt-1 text-sm leading-5 font-normal text-[#475467]">
        {message}
      </p>

      <button
        className="mt-8 flex h-9 cursor-pointer items-center rounded bg-[#014daf] px-4.5 py-2.5 text-center text-sm leading-6 font-medium text-white"
        onClick={action ?? (() => {})}>
        Continue
      </button>
    </section>
  );
}
