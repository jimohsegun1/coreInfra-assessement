interface StatusBadgeProps {
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending";
}
import { statusStyles } from "../constants/statusStyles";

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <div
      className={`inline-flex items-center rounded-2xl border px-2 py-[2px] ${style.bg} ${style.border}`}>
      <span
        className={`font-satoshi text-[10px] leading-[18px] font-medium ${style.text}`}>
        {status}
      </span>
    </div>
  );
}
