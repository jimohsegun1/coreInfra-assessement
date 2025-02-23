import { AnalyticsCard as AnalyticsCardType } from "../../../constants/analyticsData";
import ArrowNarrowUpRight from "../../../assets/icons/arrow_narrow_up_right.svg?react";
import AlertCircle from "../../../assets/icons/alert_circle.svg?react";
import CreditCardCheck from "../../../assets/icons/credit_card_check.svg?react";
import CreditCardEdit from "../../../assets/icons/credit_card_edit.svg?react";
import BankNote from "../../../assets/icons/bank_note.svg?react";
import HourGlass from "../../../assets/icons/hourglass.svg?react";

interface AnalyticsCardProps extends AnalyticsCardType {}
const icons = {
  creditCardCheck: CreditCardCheck,
  creditCardEdit: CreditCardEdit,
  bankNote: BankNote,
  hourGlass: HourGlass,
};

export default function AnalyticsCard({
  title,
  value,
  change,
  icon,
  requiresAttention,
}: AnalyticsCardProps) {
  const IconComponent = icons[icon as keyof typeof icons];
  const iconStroke = icon === "creditCardEdit" ? "stroke-[#8020E7]" : "";

  return (
    <div className="w-full rounded-[10px] border border-[#E2E2E2] bg-white p-4 px-3 pt-[12px] pb-[17px]">
      <div className="mb-[11px] flex flex-col gap-1">
        <IconComponent className={`h-4 w-4 ${iconStroke}`} />
        <span className="font-satoshi text-sm leading-[18px] font-medium text-black">
          {title}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="font-satoshi text-2xl font-bold text-[#121212]">
          {value}
        </span>
        <div className="flex items-center gap-2">
          {requiresAttention ? (
            <>
              <AlertCircle className="h-3 w-3" />
              <span className="font-satoshi text-xs leading-[18px] font-normal text-[#E78020]">
                Requires attention
              </span>
            </>
          ) : (
            <>
              <div className="flex h-5 w-14 items-center justify-center gap-1 rounded bg-[#EFFAF6]">
                <ArrowNarrowUpRight className="h-3 w-3" />
                <span className="font-satoshi text-xs leading-[18px] font-medium text-[#29A174]">
                  {`+${change.value}%`}
                </span>
              </div>
              {change.timeframe && (
                <span className="font-satoshi text-xs leading-[18px] font-normal text-black/[0.56]">
                  {change.timeframe}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
