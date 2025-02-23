import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import tickStyle from "../../../constants/tickStyle";

interface MonthlyIssuanceData {
  month: string;
  personalized: number;
  instant: number;
}

interface MonthlyIssuanceProps {
  data: MonthlyIssuanceData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="font-satoshi rounded-lg border border-[#E2E2E2] bg-white p-2 shadow-sm">
        <p className="mb-1 text-sm font-bold text-[#121212]">{data.month}</p>
        <p className="text-xs text-[#808080]">
          Personalized: {data.personalized}
        </p>
        <p className="text-xs text-[#808080]">Instant: {data.instant}</p>
      </div>
    );
  }
  return null;
};

export default function MonthlyIssuance({ data }: MonthlyIssuanceProps) {
  const dataToRender = data.map((item) => ({
    ...item,
    instant: item.instant - item.personalized,
  }));
  return (
    <div className="h-fit w-full rounded-xl border border-[#E2E2E2] bg-white pt-4 pb-[13px]">
      <h3 className="font-satoshi mb-[22px] px-4 text-lg leading-[18px] font-medium text-[#121212]">
        Monthly Issuance
      </h3>

      <div className="w-fullv h-[203px] px-4">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <BarChart
            data={dataToRender}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            barCategoryGap={"24.5%"}>
            <CartesianGrid
              stroke="#E2E2E2"
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="month"
              tick={tickStyle}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={tickStyle}
              ticks={[0, 20, 40, 60, 80, 100]}
              domain={[0, 100]}
              width={30}
              allowDecimals={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="personalized"
              stackId="a"
              fill="#014DAF"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="instant"
              stackId="a"
              fill="#CCE2FF"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mx-auto mt-[19.63px] flex w-full items-center justify-center gap-6 border-t-[.7px] border-[#E2E2E2] px-4 pt-[10px]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#014DAF]" />
          <span className="font-satoshi text-xs font-normal text-[#808080]">
            Personalized
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#CCE2FF]" />
          <span className="font-satoshi text-xs font-normal text-[#808080]">
            Instant
          </span>
        </div>
      </div>
    </div>
  );
}
