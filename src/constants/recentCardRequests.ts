interface CardRequest {
  branch: string;
  cardType: string;
  quantity: number;
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending";
  action: string;
}
export const recentCardRequests: CardRequest[] = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Ready",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "In Progress",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "Acknowledged",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Pending",
    action: "View",
  },
];
