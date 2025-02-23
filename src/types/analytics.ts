export interface CardRequest {
  branch: string;
  cardType: string;
  quantity: number;
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending";
  action: string;
}
