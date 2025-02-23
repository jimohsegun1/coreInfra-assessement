import { useCallback } from "react";
import { statusStyles } from "../constants/statusStyles";
import { CardRequestData } from "../constants/cardRequestData";

type useCardRequestsProps = {
  cardRequest: CardRequestData;
  updateRequest: (requestId: number, value: any, field: string) => void;
  requestId: number;
  setSuccessModal: (successModal: {
    isOpen: boolean;
    action: (() => void) | null;
    message: string | null;
  }) => void;
  closeSuccessModal: () => void;
};

export function useCardRequests({
  cardRequest,
  updateRequest,
  requestId,
  setSuccessModal,
  closeSuccessModal,
}: useCardRequestsProps) {
  const status = cardRequest.status;
  const statusStyle = statusStyles[status as keyof typeof statusStyles];
  const isDownloaded = cardRequest.downloaded;
  const hasSentToDispatch = cardRequest.sentToDispatch;

  const updateDownload = useCallback(() => {
    updateRequest(requestId, true, "downloaded");
    closeSuccessModal();
  }, [requestId, updateRequest, closeSuccessModal]);

  const handleDownload = useCallback(() => {
    setSuccessModal({
      isOpen: true,
      action: updateDownload,
      message: "Card request downloaded successfully",
    });
  }, [updateDownload]);

  const updateSentToDispatch = useCallback(() => {
    updateRequest(requestId, true, "sentToDispatch");
    closeSuccessModal();
  }, [requestId, updateRequest, closeSuccessModal]);

  const handleSendToDispatch = useCallback(() => {
    setSuccessModal({
      isOpen: true,
      action: updateSentToDispatch,
      message: "Card batch successfully sent to dispatch.",
    });
  }, [updateSentToDispatch]);

  const handleMarkAsInProgress = useCallback(() => {
    updateRequest(requestId, "In Progress", "status");
  }, [requestId, updateRequest]);

  const handleMarkAsReady = useCallback(() => {
    updateRequest(requestId, "Ready", "status");
  }, [requestId, updateRequest]);

  const handleMarkAsAcknowledged = useCallback(() => {
    updateRequest(requestId, "Acknowledged", "status");
  }, [requestId, updateRequest]);

  return {
    status,
    statusStyle,
    isDownloaded,
    hasSentToDispatch,
    handleDownload,
    handleMarkAsInProgress,
    handleMarkAsReady,
    handleSendToDispatch,
    handleMarkAsAcknowledged,
  };
}
