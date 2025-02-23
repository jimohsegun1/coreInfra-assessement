import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import tickStyle from "../../../constants/tickStyle";

interface WeeklyIncomeData {
  day: string;
  value: number;
}

interface WeeklyIncomeProps {
  data: WeeklyIncomeData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="font-satoshi rounded-lg border border-[#E2E2E2] bg-white p-2 shadow-sm">
        <p className="mb-1 text-sm font-bold text-[#121212]">{data.day}</p>
        <p className="text-xs text-[#808080]">
          Income: {data.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function WeeklyIncome({ data }: WeeklyIncomeProps) {
  return (
    <div className="h-fit w-full rounded-xl border border-[#E2E2E2] bg-white p-4 pb-[31.63px]">
      <h3 className="font-satoshi mb-[21px] text-lg leading-[18px] font-medium text-[#121212]">
        This Week's Income
      </h3>

      <div className="h-[203.37px] w-full">
        <ResponsiveContainer
          width="100%"
          height={203.37}>
          <LineChart
            data={data}
            margin={{ top: 10 }}>
            <CartesianGrid
              stroke="#E2E2E2"
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="day"
              tick={tickStyle}
              tickLine={false}
              axisLine={false}
              padding={{ left: 39.2, right: 4 }}
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
              cursor={false}
              wrapperStyle={{ zIndex: 50 }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4DAF01"
              strokeWidth={2}
              dot={false}
              filter="drop-shadow(0px 2.07px 7.25px rgba(1, 164, 175, 0.47))"
              activeDot={{
                r: 4,
                fill: "#4DAF01",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
