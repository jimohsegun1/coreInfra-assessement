interface MonthlyIssuanceData {
  month: string;
  personalized: number;
  instant: number;
}

export const monthlyData: MonthlyIssuanceData[] = [
  { month: "May", personalized: 10, instant: 52 },
  { month: "Jun", personalized: 20, instant: 72 },
  { month: "Jul", personalized: 8, instant: 32 },
  { month: "Aug", personalized: 9, instant: 60 },
  { month: "Sep", personalized: 11, instant: 50 },
  { month: "Oct", personalized: 18, instant: 81 },
  { month: "Nov", personalized: 9, instant: 75 },
];
