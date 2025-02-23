import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import DateDivider from "../../../assets/date_divider.svg?react";
export default function UserWelcomeBanner() {
  return (
    <div className="flex w-full flex-col justify-between gap-[13px] sm:flex-row">
      <div>
        <h1 className="font-satoshi mb-[6px] text-lg leading-6 font-bold tracking-normal text-[#121212]">
          Hi Nazeer, what would you like to do today?
        </h1>
        <p className="font-satoshi text-xs font-medium text-[#121212]">
          Last login: <span className="font-normal">26/11/2024</span>
          &nbsp;&nbsp;
          <span className="font-normal">14:39:58</span>
        </p>
      </div>

      <div className="flex h-[30px] w-[150px] items-center justify-center gap-2 rounded-sm border border-[#D0D5DD]">
        <div className="flex h-10 items-center gap-1">
          <CalendarIcon />
          <span className="date-text font-medium">Today</span>
        </div>
        <DateDivider height={10} />
        <span className="date-text font-normal">11 Nov 2024</span>
      </div>
    </div>
  );
}
