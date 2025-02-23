import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { CardStatus } from "../../../constants/cardStatusData";

interface CardStatusDistributionProps {
  data: CardStatus[];
  totalCards: number;
}

const COLORS = {
  Active: "#01A4AF",
  Inactive: "#014DAF",
  Blocked: "#8020E7",
  Lost: "#FF4457",
  Expired: "#FFBA24",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="font-satoshi rounded-lg border border-[#E2E2E2] bg-white p-2 shadow-sm">
        <p className="mb-1 text-sm font-bold text-[#121212]">{data.status}</p>
        <p className="text-xs text-[#808080]">
          {data.value.toLocaleString()} Cards
        </p>
      </div>
    );
  }
  return null;
};

export default function CardStatusDistribution({
  data,
  totalCards,
}: CardStatusDistributionProps) {
  return (
    <div className="h-full w-full rounded-xl border border-[#E2E2E2] bg-white p-4 pb-[23px]">
      <h3 className="font-satoshi mb-[13px] text-lg leading-[18px] font-medium text-[#121212]">
        Card Status Distribution
      </h3>

      <div className="relative mx-auto flex h-50 w-50 items-center justify-center">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart
            width={200}
            height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={100}
              paddingAngle={1}
              cornerRadius={4}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              nameKey="status"
              isAnimationActive={true}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.status]}
                  strokeWidth={0}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ zIndex: 50, cursor: "pointer" }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute m-auto text-center">
          <p className="font-satoshi text-xs font-medium text-[#808080]">
            Total Cards
          </p>
          <p className="font-satoshi text-2xl font-medium text-[#121212]">
            {totalCards.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[22px] flex w-fit flex-wrap gap-6">
        {data.map((item) => (
          <div
            key={item.status}
            className="flex items-center gap-1">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[item.status] }}
            />
            <span className="font-satoshi text-xs font-normal text-[#808080]">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
