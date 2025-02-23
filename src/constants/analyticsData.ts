export interface AnalyticsCard {
  title: string;
  value: string;
  change: {
    value: number;
    timeframe: string | null;
  };
  icon: string;
  requiresAttention: boolean;
}

export const analyticsCards: AnalyticsCard[] = [
  {
    title: "Total Active Cards",
    value: "26,478",
    change: {
      value: 9,
      timeframe: "this month",
    },
    icon: "creditCardCheck",
    requiresAttention: false,
  },
  {
    title: "Total Personalized Cards",
    value: "15,703",
    change: {
      value: 8.5,
      timeframe: "this month",
    },
    icon: "creditCardEdit",
    requiresAttention: false,
  },
  {
    title: "Today's Revenue",
    value: "₦9.3M",
    change: {
      value: 6,
      timeframe: "vs yesterday",
    },
    icon: "bankNote",
    requiresAttention: false,
  },
  {
    title: "Pending Requests",
    value: "38",
    change: {
      value: 38,
      timeframe: null,
    },
    icon: "hourGlass",
    requiresAttention: true,
  },
];
