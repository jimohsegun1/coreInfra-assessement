import { analyticsCards } from "../../../constants/analyticsData";
import AnalyticsCard from "./AnalyticsCard";
import { weeklyIncomeData } from "../../../constants/WeeklyIncomeData";
import { cardStatusData } from "../../../constants/cardStatusData";
import { lazy, Suspense } from "react";
import { monthlyData } from "../../../constants/MonthlyIssuanceData";
import DashBoardLoadingSpinner from "../../../components/DashBoardLoadingSpinner";
import RecentCardRequests from "./RecentCardRequests";
import Divider from "../../../assets/divider.svg?react";

const WeeklyIncome = lazy(() => import("./WeeklyIncome"));
const MonthlyIssuance = lazy(() => import("./MonthlyIssuance"));
const CardStatusDistribution = lazy(() => import("./CardStatusDistribution"));

export default function Analytics() {
  return (
    <section className="mt-[11px] w-full">
      <h2 className="font-satoshi mb-[10px] flex items-center gap-2 text-lg leading-[27.4px] font-bold text-black">
        Analytics
        <Divider
          aria-hidden={true}
          className="w-full"
          stroke="#D0D5DD"
        />
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsCards.map((card, index) => (
          <AnalyticsCard
            key={index}
            {...card}
          />
        ))}
      </div>
      <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-4px)]">
          <Suspense
            fallback={
              <DashBoardLoadingSpinner loaderDimensions="max-h-[318px] min-h-[290px]" />
            }>
            <MonthlyIssuance data={monthlyData} />
          </Suspense>
          <Suspense
            fallback={
              <DashBoardLoadingSpinner loaderDimensions="max-h-[290px] min-h-[290px]" />
            }>
            <WeeklyIncome data={weeklyIncomeData} />
          </Suspense>
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-4px)]">
          <RecentCardRequests />

          <Suspense
            fallback={
              <DashBoardLoadingSpinner loaderDimensions="max-h-[318px] min-h-[290px]" />
            }>
            <CardStatusDistribution
              data={cardStatusData}
              totalCards={2450}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
