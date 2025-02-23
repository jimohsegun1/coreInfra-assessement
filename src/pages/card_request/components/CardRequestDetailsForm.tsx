import { useContext, useState, useCallback } from "react";
import {
  CardRequestContextValues,
  CardRequestContext,
} from "../../../contexts/CardRequestContext";
import { useParams } from "react-router";
import TextBox from "./TextBox";
import ActionButton from "./ActionButton";
import Modal from "../../../components/Modal";
import { SuccessModal } from "./Success.Modal";
import { useActions } from "../../../hooks/useActions";
import { useCardRequests } from "../../../hooks/useCardRequests";

type SuccessModalState = {
  isOpen: boolean;
  action: (() => void) | null;
  message: string | null;
};

export default function CardRequestDetailsForm() {
  const { cardRequests, updateRequest } = useContext(
    CardRequestContext
  ) as CardRequestContextValues;
  const [successModal, setSuccessModal] = useState<SuccessModalState>({
    isOpen: false,
    action: null,
    message: null,
  });

  const { id } = useParams();
  const requestId = id ? Number(id) : null;
  const cardRequest = requestId
    ? cardRequests.find((request) => request.id === requestId)
    : null;

  if (!cardRequest || !requestId) {
    return (
      <p className="font-satoshi mt-2.5 text-center text-base leading-6 font-medium text-red-600">
        No request found
      </p>
    );
  }
  const closeSuccessModal = useCallback(() => {
    setSuccessModal({ isOpen: false, action: null, message: null });
  }, []);

  const {
    status,
    statusStyle,
    isDownloaded,
    hasSentToDispatch,
    handleDownload,
    handleMarkAsInProgress,
    handleMarkAsReady,
    handleSendToDispatch,
    handleMarkAsAcknowledged,
  } = useCardRequests({
    cardRequest,
    updateRequest,
    requestId,
    setSuccessModal,
    closeSuccessModal,
  });

  const actions = useActions({
    handleDownload,
    handleMarkAsInProgress,
    handleMarkAsReady,
    handleSendToDispatch,
    handleMarkAsAcknowledged,
    isDownloaded,
    status,
    hasSentToDispatch,
  });

  return (
    <div className="mt-2.5 w-full rounded-[10px] border border-[#e2e2e2] bg-white p-4 pb-[38px]">
      <form>
        <fieldset>
          <legend className="font-satoshi mb-6 text-[18px] leading-[18px] font-medium text-[#121212]">
            Profile Details
          </legend>
          <div className="grid w-full grid-cols-1 gap-x-[60px] gap-y-5 min-[1440px]:w-fit md:grid-cols-2 xl:gap-x-[106px]">
            <TextBox
              label="Branch Name"
              defaultValue={cardRequest.branch}
            />
            <TextBox
              label="Initiator"
              defaultValue={cardRequest.initiator}
            />
            <TextBox
              label="Card Type"
              defaultValue={cardRequest.cardType}
            />
            <TextBox
              label="Card Charges"
              defaultValue={cardRequest.cardCharges}
            />
            <TextBox
              label="Quantity"
              defaultValue={cardRequest.quantity}
            />
            <TextBox
              label="Batch"
              defaultValue={cardRequest.batch}
            />

            <section className="flex flex-col gap-0.5 pt-1.5">
              <h2 className="font-satoshi text-sm leading-5 font-medium text-[#344054]">
                Date Requested
              </h2>
              <p className="font-satoshi py-2.5 text-base leading-6 font-normal text-[#101828]">
                {cardRequest.dateRequested}
              </p>
            </section>

            <section className="flex flex-col gap-0.5 pt-1.5">
              <h2 className="font-satoshi text-sm leading-5 font-medium text-[#344054]">
                Status
              </h2>
              <p className="font-satoshi py-2.5 text-base leading-5 font-medium">
                <span
                  className={`rounded-2xl border px-3 py-1 ${statusStyle.bg} ${statusStyle.border} ${statusStyle.text}`}>
                  {status}
                </span>
              </p>
            </section>
          </div>
        </fieldset>
      </form>

      <section className="mt-5">
        <h2 className="font-satoshi mb-3 text-sm leading-5 font-bold text-[#121212]">
          Actions
        </h2>
        <div className="flex w-full flex-col flex-wrap gap-x-6 gap-y-4 md:flex-row md:justify-between lg:justify-start lg:gap-x-11">
          {actions.map((action) => {
            return (
              <ActionButton
                key={action.text}
                {...action}
              />
            );
          })}
        </div>
      </section>

      <Modal
        isOpen={successModal.isOpen}
        onClose={closeSuccessModal}
        canCloseOnClickOutside={false}>
        <SuccessModal
          message={successModal.message}
          action={successModal.action}
        />
      </Modal>
    </div>
  );
}
