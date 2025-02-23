import { useEffect } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  canCloseOnClickOutside?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  canCloseOnClickOutside = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <FocusLock>
      <div
        className="bg-opacity-80 fixed inset-0 z-50 h-full w-full overflow-auto bg-[#101828]/70 backdrop-blur-sm"
        {...(canCloseOnClickOutside && {
          onClick: onClose,
        })}>
        <div
          className="m-auto w-fit"
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </FocusLock>,
    document.body
  );
}
