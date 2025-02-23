import { useMemo } from "react";

import DownloadIcon from "../assets/icons/download.svg?react";
import LoadingIcon from "../assets/icons/loading.svg?react";
import PackageReadyIcon from "../assets/icons/package_ready.svg?react";
import PackageSentIcon from "../assets/icons/package_sent.svg?react";
import AcknowledgeIcon from "../assets/icons/acknowledged.svg?react";

type Actions = {
  handleDownload: () => void;
  handleMarkAsInProgress: () => void;
  handleMarkAsReady: () => void;
  handleSendToDispatch: () => void;
  handleMarkAsAcknowledged: () => void;
  isDownloaded: boolean;
  status: string;
  hasSentToDispatch: boolean;
};

export function useActions({
  handleDownload,
  handleMarkAsInProgress,
  handleMarkAsReady,
  handleSendToDispatch,
  handleMarkAsAcknowledged,
  isDownloaded,
  status,
  hasSentToDispatch,
}: Actions) {
  return useMemo(
    () => [
      {
        Icon: DownloadIcon,
        onClick: handleDownload,
        backgroundColor: "bg-[#344054]",
        text: "Download for Production",
        disabled: isDownloaded,
      },
      {
        Icon: LoadingIcon,
        onClick: handleMarkAsInProgress,
        backgroundColor: "bg-[#B54708]",
        text: "Mark as In Progress",
        disabled: !isDownloaded || status !== "Pending",
      },
      {
        Icon: PackageReadyIcon,
        onClick: handleMarkAsReady,
        backgroundColor: "bg-[#067647]",
        text: "Mark as Ready",
        disabled: status !== "In Progress",
      },
      {
        Icon: PackageSentIcon,
        onClick: handleSendToDispatch,
        backgroundColor: "bg-[#8020E7]",
        text: "Send to Dispatch",
        disabled: status !== "Ready" || hasSentToDispatch,
      },
      {
        Icon: AcknowledgeIcon,
        onClick: handleMarkAsAcknowledged,
        backgroundColor: "bg-[#014DAF]",
        text: "Mark as Acknowledged",
        disabled: !hasSentToDispatch || status === "Acknowledged",
      },
    ],
    [
      handleDownload,
      handleMarkAsInProgress,
      handleMarkAsReady,
      handleSendToDispatch,
      handleMarkAsAcknowledged,
      isDownloaded,
      status,
      hasSentToDispatch,
    ]
  );
}
