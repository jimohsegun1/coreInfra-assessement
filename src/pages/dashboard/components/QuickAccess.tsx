import QuickAction from "./QuickAction";
import quickActions from "../../../constants/quickActions";

export default function QuickAccess() {
  return (
    <section className="mt-[13px] rounded-[10px] border border-[#E2E2E2] bg-white px-4 pt-4 pb-[14px]">
      <h2 className="font-satoshi mb-[13px] text-base leading-[18px] font-medium text-[#121212]">
        Your Quick Access
      </h2>
      <nav aria-label="Quick access actions">
        <ul className="flex w-full flex-col flex-wrap gap-2 sm:flex-row xl:flex-nowrap">
          {quickActions.map((action) => (
            <li
              className="w-full sm:w-[calc(50%-4px)] xl:w-full"
              key={action.action}>
              <QuickAction
                action={action.action}
                Icon={action.Icon}
                link={action.link}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
